/* Discovered Technology — a small self-contained 3D renderer.
 *
 * No library, no CDN, no module loader: this file is a classic script that
 * builds meshes from the primitive-part recipes in tech-models.js and draws
 * them two ways with the same maths —
 *
 *   • WebGL 1 in the browser (antialiased, per-pixel lighting), and
 *   • a software rasteriser that writes RGBA pixels, used as the in-browser
 *     fallback when WebGL is unavailable AND by node (tools/render-tech-models.mjs,
 *     tools/tests/test-tech-gl.mjs) to render every recipe to a PNG so the
 *     models can actually be looked at and checked without a browser.
 *
 * The file never touches `document` at load time, so node can `new Function`
 * it against a stub window.
 *
 * Part shape (what a recipe returns, after tech-models.js' helpers):
 *   { s:'box'|'cyl'|'sph'|'torus'|'lathe'|'prism',
 *     d:[dims], p:[x,y,z], r:[rx,ry,rz], sc:number|[sx,sy,sz],
 *     c:'#hex' (resolved from the palette by tech-models.js),
 *     e:0..1 emissive, metal:0..1, a:alpha,
 *     spin:'x'|'y'|'z' | {axis, speed},  // animated rotation about the part's own axis
 *     bob:{amp,speed},                     // gentle vertical hover
 *     m:[16 numbers],                      // explicit column-major matrix instead of p/r (tubes, struts)
 *     nb:true,                             // leave out of the bounds (light beams)
 *     parts:[...] }                         // a group: p/r/sc/spin apply to the children
 *   dims — box:[w,h,d]  cyl:[rTop,rBottom,h,segments?]  sph:[r,ws?,hs?]
 *          torus:[R,tube,radialSeg?,tubularSeg?]  lathe:[[[x,y],...],segments?]
 *          prism:[[[x,y],...] (convex, CCW), depth]
 */
(function(){
  'use strict';
  const root = (typeof window !== 'undefined') ? window : globalThis;

  /* ================= vectors & matrices (column-major, like WebGL) ================= */
  const v3 = {
    sub:(a,b)=>[a[0]-b[0],a[1]-b[1],a[2]-b[2]],
    add:(a,b)=>[a[0]+b[0],a[1]+b[1],a[2]+b[2]],
    scale:(a,s)=>[a[0]*s,a[1]*s,a[2]*s],
    dot:(a,b)=>a[0]*b[0]+a[1]*b[1]+a[2]*b[2],
    cross:(a,b)=>[a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], a[0]*b[1]-a[1]*b[0]],
    len:(a)=>Math.hypot(a[0],a[1],a[2]),
    norm:(a)=>{ const l=Math.hypot(a[0],a[1],a[2])||1; return [a[0]/l,a[1]/l,a[2]/l]; },
  };
  const m4 = {
    ident:()=>[1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1],
    mul:(a,b)=>{
      const o=new Array(16);
      for(let c=0;c<4;c++) for(let r=0;r<4;r++) o[c*4+r]=a[r]*b[c*4]+a[4+r]*b[c*4+1]+a[8+r]*b[c*4+2]+a[12+r]*b[c*4+3];
      return o;
    },
    translate:(t)=>[1,0,0,0, 0,1,0,0, 0,0,1,0, t[0],t[1],t[2],1],
    scale:(s)=>[s[0],0,0,0, 0,s[1],0,0, 0,0,s[2],0, 0,0,0,1],
    rotX:(a)=>{ const c=Math.cos(a),s=Math.sin(a); return [1,0,0,0, 0,c,s,0, 0,-s,c,0, 0,0,0,1]; },
    rotY:(a)=>{ const c=Math.cos(a),s=Math.sin(a); return [c,0,-s,0, 0,1,0,0, s,0,c,0, 0,0,0,1]; },
    rotZ:(a)=>{ const c=Math.cos(a),s=Math.sin(a); return [c,s,0,0, -s,c,0,0, 0,0,1,0, 0,0,0,1]; },
    perspective:(fovy,aspect,near,far)=>{ const f=1/Math.tan(fovy/2), nf=1/(near-far); return [f/aspect,0,0,0, 0,f,0,0, 0,0,(far+near)*nf,-1, 0,0,2*far*near*nf,0]; },
    lookAt:(eye,target,up)=>{
      const z=v3.norm(v3.sub(eye,target)); const x=v3.norm(v3.cross(up,z)); const y=v3.cross(z,x);
      return [x[0],y[0],z[0],0, x[1],y[1],z[1],0, x[2],y[2],z[2],0, -v3.dot(x,eye),-v3.dot(y,eye),-v3.dot(z,eye),1];
    },
    point:(m,p)=>[m[0]*p[0]+m[4]*p[1]+m[8]*p[2]+m[12], m[1]*p[0]+m[5]*p[1]+m[9]*p[2]+m[13], m[2]*p[0]+m[6]*p[1]+m[10]*p[2]+m[14]],
    clip:(m,p)=>[m[0]*p[0]+m[4]*p[1]+m[8]*p[2]+m[12], m[1]*p[0]+m[5]*p[1]+m[9]*p[2]+m[13], m[2]*p[0]+m[6]*p[1]+m[10]*p[2]+m[14], m[3]*p[0]+m[7]*p[1]+m[11]*p[2]+m[15]],
    /* inverse-transpose of the upper 3x3, as a column-major 3x3 — normals under non-uniform scale */
    normal3:(m)=>{
      const M00=m[0],M10=m[1],M20=m[2], M01=m[4],M11=m[5],M21=m[6], M02=m[8],M12=m[9],M22=m[10];
      const C00= M11*M22-M12*M21, C01=-(M10*M22-M12*M20), C02= M10*M21-M11*M20;
      const C10=-(M01*M22-M02*M21), C11= M00*M22-M02*M20, C12=-(M00*M21-M01*M20);
      const C20= M01*M12-M02*M11, C21=-(M00*M12-M02*M10), C22= M00*M11-M01*M10;
      let det = M00*C00 + M01*C01 + M02*C02; if(Math.abs(det)<1e-12) det = 1e-12;
      const k = 1/det;
      return [C00*k,C10*k,C20*k, C01*k,C11*k,C21*k, C02*k,C12*k,C22*k];
    },
    normal:(n3,n)=>v3.norm([n3[0]*n[0]+n3[3]*n[1]+n3[6]*n[2], n3[1]*n[0]+n3[4]*n[1]+n3[7]*n[2], n3[2]*n[0]+n3[5]*n[1]+n3[8]*n[2]]),
    trs:(p,r,s)=>{
      let m = m4.translate(p||[0,0,0]);
      if(r){ if(r[0]) m = m4.mul(m, m4.rotX(r[0])); if(r[1]) m = m4.mul(m, m4.rotY(r[1])); if(r[2]) m = m4.mul(m, m4.rotZ(r[2])); }
      if(s!=null){ const sv = (typeof s==='number') ? [s,s,s] : s; m = m4.mul(m, m4.scale(sv)); }
      return m;
    }
  };

  /* ================= geometry (counter-clockwise front faces, outward normals) ================= */
  function pack(pos, nrm, idx){
    return { pos:new Float32Array(pos), nrm:new Float32Array(nrm), idx:(pos.length/3 > 65535) ? new Uint32Array(idx) : new Uint16Array(idx), count: idx.length };
  }
  function geoBox(w,h,d){
    const hx=w/2, hy=h/2, hz=d/2, pos=[], nrm=[], idx=[];
    const faces = [ // normal, u, v  with u×v = normal
      [[1,0,0],[0,0,-1],[0,1,0]], [[-1,0,0],[0,0,1],[0,1,0]],
      [[0,1,0],[1,0,0],[0,0,-1]], [[0,-1,0],[1,0,0],[0,0,1]],
      [[0,0,1],[1,0,0],[0,1,0]],  [[0,0,-1],[-1,0,0],[0,1,0]] ];
    const half=[hx,hy,hz];
    faces.forEach(([n,u,v])=>{
      const base = pos.length/3;
      const c = [n[0]*hx, n[1]*hy, n[2]*hz];
      const ue = [u[0]*half[0], u[1]*half[1], u[2]*half[2]], ve=[v[0]*half[0], v[1]*half[1], v[2]*half[2]];
      [[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([a,b])=>{ pos.push(c[0]+a*ue[0]+b*ve[0], c[1]+a*ue[1]+b*ve[1], c[2]+a*ue[2]+b*ve[2]); nrm.push(n[0],n[1],n[2]); });
      idx.push(base,base+1,base+2, base,base+2,base+3);
    });
    return pack(pos,nrm,idx);
  }
  function geoCylinder(rt, rb, h, radial, caps){
    radial = Math.max(3, radial|0 || 24); if(caps===undefined) caps = true;
    const pos=[], nrm=[], idx=[]; const hh=h/2, slope=(rb-rt)/(h||1e-6);
    for(let i=0;i<=radial;i++){
      const t=i/radial*Math.PI*2, s=Math.sin(t), c=Math.cos(t);
      const n = v3.norm([s, slope, c]);
      pos.push(rb*s, -hh, rb*c); nrm.push(n[0],n[1],n[2]);
      pos.push(rt*s,  hh, rt*c); nrm.push(n[0],n[1],n[2]);
    }
    for(let i=0;i<radial;i++){ const a=i*2, b=a+2, c=a+3, d=a+1; idx.push(a,b,c, a,c,d); }
    if(caps){
      if(rt>0){ const cen=pos.length/3; pos.push(0,hh,0); nrm.push(0,1,0);
        for(let i=0;i<=radial;i++){ const t=i/radial*Math.PI*2; pos.push(rt*Math.sin(t),hh,rt*Math.cos(t)); nrm.push(0,1,0); }
        for(let i=0;i<radial;i++) idx.push(cen, cen+1+i, cen+2+i); }
      if(rb>0){ const cen=pos.length/3; pos.push(0,-hh,0); nrm.push(0,-1,0);
        for(let i=0;i<=radial;i++){ const t=i/radial*Math.PI*2; pos.push(rb*Math.sin(t),-hh,rb*Math.cos(t)); nrm.push(0,-1,0); }
        for(let i=0;i<radial;i++) idx.push(cen, cen+2+i, cen+1+i); }
    }
    return pack(pos,nrm,idx);
  }
  function geoSphere(r, ws, hs){
    ws = Math.max(3, ws|0 || 20); hs = Math.max(2, hs|0 || 12);
    const pos=[], nrm=[], idx=[]; const grid=[];
    for(let iy=0; iy<=hs; iy++){ const row=[]; const v=iy/hs;
      for(let ix=0; ix<=ws; ix++){ const u=ix/ws;
        const x=-r*Math.cos(u*Math.PI*2)*Math.sin(v*Math.PI), y=r*Math.cos(v*Math.PI), z=r*Math.sin(u*Math.PI*2)*Math.sin(v*Math.PI);
        row.push(pos.length/3); pos.push(x,y,z); const n=v3.norm([x,y,z]); nrm.push(n[0],n[1],n[2]); }
      grid.push(row); }
    for(let iy=0; iy<hs; iy++) for(let ix=0; ix<ws; ix++){
      const a=grid[iy][ix+1], b=grid[iy][ix], c=grid[iy+1][ix], d=grid[iy+1][ix+1];
      if(iy!==0) idx.push(a,b,d); if(iy!==hs-1) idx.push(b,c,d); }
    return pack(pos,nrm,idx);
  }
  function geoTorus(R, tube, radial, tubular){
    radial = Math.max(3, radial|0 || 12); tubular = Math.max(3, tubular|0 || 32);
    const pos=[], nrm=[], idx=[];
    for(let j=0;j<=tubular;j++) for(let i=0;i<=radial;i++){
      const u=j/tubular*Math.PI*2, v=i/radial*Math.PI*2;
      const x=(R+tube*Math.cos(v))*Math.cos(u), y=(R+tube*Math.cos(v))*Math.sin(u), z=tube*Math.sin(v);
      pos.push(x,y,z); const n=v3.norm([x-R*Math.cos(u), y-R*Math.sin(u), z]); nrm.push(n[0],n[1],n[2]); }
    for(let j=1;j<=tubular;j++) for(let i=1;i<=radial;i++){
      const a=(radial+1)*j+i-1, b=(radial+1)*(j-1)+i-1, c=(radial+1)*(j-1)+i, d=(radial+1)*j+i;
      idx.push(a,d,b, b,d,c); }
    return pack(pos,nrm,idx);
  }
  function smoothNormals(pos, idx){
    const n = new Float32Array(pos.length);
    for(let i=0;i<idx.length;i+=3){
      const a=idx[i]*3,b=idx[i+1]*3,c=idx[i+2]*3;
      const e1=[pos[b]-pos[a],pos[b+1]-pos[a+1],pos[b+2]-pos[a+2]], e2=[pos[c]-pos[a],pos[c+1]-pos[a+1],pos[c+2]-pos[a+2]];
      const f=v3.cross(e1,e2);
      for(const k of [a,b,c]){ n[k]+=f[0]; n[k+1]+=f[1]; n[k+2]+=f[2]; }
    }
    for(let i=0;i<n.length;i+=3){ const l=Math.hypot(n[i],n[i+1],n[i+2])||1; n[i]/=l; n[i+1]/=l; n[i+2]/=l; }
    return n;
  }
  /* surface of revolution around Y: points [[x,y],...] listed bottom to top */
  function geoLathe(points, segments){
    segments = Math.max(3, segments|0 || 24);
    const L = points.length, pos=[], idx=[];
    for(let i=0;i<=segments;i++){ const phi=i/segments*Math.PI*2, s=Math.sin(phi), c=Math.cos(phi);
      for(let j=0;j<L;j++) pos.push(points[j][0]*s, points[j][1], points[j][0]*c); }
    for(let i=0;i<segments;i++) for(let j=0;j<L-1;j++){
      const base=j+i*L, a=base, b=base+L, c=base+L+1, d=base+1;
      idx.push(a,b,d, c,d,b); }
    let n = smoothNormals(pos, idx);
    /* a profile listed top to bottom comes out inside-out: measure the normals
       against the radial direction and flip the winding if they point inward */
    let outward = 0;
    for(let i=0;i<pos.length;i+=3) outward += n[i]*pos[i] + n[i+2]*pos[i+2];
    if(outward < 0){ for(let i=0;i<idx.length;i+=3){ const t=idx[i+1]; idx[i+1]=idx[i+2]; idx[i+2]=t; } n = smoothNormals(pos, idx); }
    /* stitch the seam normals so the shading does not show a line */
    for(let j=0;j<L;j++){ const a=j*3, b=(segments*L+j)*3; const m=v3.norm([n[a]+n[b],n[a+1]+n[b+1],n[a+2]+n[b+2]]); n[a]=n[b]=m[0]; n[a+1]=n[b+1]=m[1]; n[a+2]=n[b+2]=m[2]; }
    return pack(pos, Array.from(n), idx);
  }
  /* convex polygon in the XY plane, extruded along Z; either winding is
     accepted (the shoelace sign decides, clockwise outlines are reversed) */
  function geoPrism(points, depth){
    let area = 0;
    for(let i=0;i<points.length;i++){ const p=points[i], q=points[(i+1)%points.length]; area += p[0]*q[1]-q[0]*p[1]; }
    if(area < 0) points = points.slice().reverse();
    const hz=depth/2, pos=[], nrm=[], idx=[], L=points.length;
    let base=pos.length/3;
    for(const [x,y] of points){ pos.push(x,y,hz); nrm.push(0,0,1); }
    for(let i=1;i<L-1;i++) idx.push(base, base+i, base+i+1);
    base=pos.length/3;
    for(const [x,y] of points){ pos.push(x,y,-hz); nrm.push(0,0,-1); }
    for(let i=1;i<L-1;i++) idx.push(base, base+i+1, base+i);
    for(let i=0;i<L;i++){
      const p=points[i], q=points[(i+1)%L]; const e=[q[0]-p[0], q[1]-p[1]]; const n=v3.norm([e[1],-e[0],0]);
      base=pos.length/3;
      pos.push(p[0],p[1],-hz, q[0],q[1],-hz, q[0],q[1],hz, p[0],p[1],hz);
      for(let k=0;k<4;k++) nrm.push(n[0],n[1],n[2]);
      idx.push(base,base+1,base+2, base,base+2,base+3);
    }
    return pack(pos,nrm,idx);
  }
  function makeGeometry(part){
    const d = part.d || [];
    switch(part.s){
      case 'box':   return geoBox(d[0]||1, d[1]||1, d[2]||1);
      case 'cyl':   return geoCylinder(d[0]||0, d[1]||0, d[2]||1, d[3]||24, part.caps!==false);
      case 'cone':  return geoCylinder(0, d[0]||1, d[1]||1, d[2]||24, true);
      case 'sph':   return geoSphere(d[0]||1, d[1]||20, d[2]||12);
      case 'torus': return geoTorus(d[0]||1, d[1]||0.2, d[2]||12, d[3]||32);
      case 'lathe': return geoLathe(d[0]||[[0,0],[1,1]], d[1]||24);
      case 'prism': return geoPrism(d[0]||[[-1,-1],[1,-1],[0,1]], d[1]||1);
      default: return geoBox(0.5,0.5,0.5);
    }
  }

  /* ================= materials & model compilation ================= */
  function hexToRgb(c){
    if(Array.isArray(c)) return c;
    let s = String(c||'#888888').trim(); if(s[0]==='#') s=s.slice(1);
    if(s.length===3) s = s.split('').map(ch=>ch+ch).join('');
    const n = parseInt(s,16); if(isNaN(n)) return [0.55,0.55,0.6];
    return [((n>>16)&255)/255, ((n>>8)&255)/255, (n&255)/255];
  }
  function spinOf(spin){
    if(!spin) return null;
    if(typeof spin==='string') return { axis:spin, speed:6 };
    return { axis:spin.axis||'y', speed:(spin.speed==null?6:spin.speed), phase:spin.phase||0 };
  }
  function buildNode(part){
    const node = { pre: part.m ? part.m.slice() : m4.trs(part.p, part.r, null), post: (part.sc!=null) ? m4.scale(typeof part.sc==='number'?[part.sc,part.sc,part.sc]:part.sc) : null,
                   spin: spinOf(part.spin), bob: part.bob||null, children:[], leaf:null, world:null };
    if(part.parts){ node.children = part.parts.map(buildNode); }
    else {
      node.leaf = { geo: makeGeometry(part), color: hexToRgb(part.c), emissive: part.e===true?1:(+part.e||0),
                    metal: (part.metal==null) ? 0.3 : +part.metal, alpha: (part.a==null) ? 1 : +part.a, shadow: !!part.shadow, nb: !!part.nb };
      if(part.ghost){ node.leaf.alpha = 0.34; node.leaf.emissive = Math.max(node.leaf.emissive, 0.2); }
    }
    return node;
  }
  function spinMatrix(spin, t){
    if(!spin) return null;
    const a = (spin.phase||0) + t*spin.speed;
    return spin.axis==='x' ? m4.rotX(a) : spin.axis==='z' ? m4.rotZ(a) : m4.rotY(a);
  }
  function updateWorld(node, parent, t){
    let m = parent ? m4.mul(parent, node.pre) : node.pre;
    if(node.bob){ m = m4.mul(m, m4.translate([0, Math.sin(t*(node.bob.speed||2))*(node.bob.amp||0.05), 0])); }
    const sm = spinMatrix(node.spin, t); if(sm) m = m4.mul(m, sm);
    if(node.post) m = m4.mul(m, node.post);
    node.world = m;
    for(const c of node.children) updateWorld(c, m, t);
  }
  function leavesOf(node, out){ out = out||[]; if(node.leaf) out.push(node); for(const c of node.children) leavesOf(c, out); return out; }

  /* parts[] (from a recipe) -> model { rootNode, leaves, center, radius, bounds } */
  function compile(parts, opts){
    opts = opts || {};
    const rootNode = buildNode({ p:[0,0,0], parts: parts });
    updateWorld(rootNode, null, 0);
    const leaves = leavesOf(rootNode);
    const min=[Infinity,Infinity,Infinity], max=[-Infinity,-Infinity,-Infinity];
    for(const n of leaves){ if(n.leaf.nb) continue; const P=n.leaf.geo.pos; for(let i=0;i<P.length;i+=3){ const w=m4.point(n.world,[P[i],P[i+1],P[i+2]]); for(let k=0;k<3;k++){ if(w[k]<min[k]) min[k]=w[k]; if(w[k]>max[k]) max[k]=w[k]; } } }
    const center = [(min[0]+max[0])/2, (min[1]+max[1])/2, (min[2]+max[2])/2];
    let r2 = 0.04;
    for(const n of leaves){ if(n.leaf.nb) continue; const P=n.leaf.geo.pos; for(let i=0;i<P.length;i+=3){ const w=m4.point(n.world,[P[i],P[i+1],P[i+2]]); const d=(w[0]-center[0])**2+(w[1]-center[1])**2+(w[2]-center[2])**2; if(d>r2) r2=d; } }
    const radius = Math.sqrt(r2);
    const model = { root: rootNode, leaves, center, radius, bounds:{min,max}, time:0, view: opts.view || null };
    if(opts.shadow!==false){
      /* a soft disc under the thing so it has a floor to stand on */
      const rx = Math.max(0.3,(max[0]-min[0])*0.55), rz = Math.max(0.3,(max[2]-min[2])*0.55);
      const sh = buildNode({ s:'cyl', d:[1,1,0.01,40], p:[center[0], min[1]-0.015, center[2]], sc:[rx,1,rz], c:'#06030e', a:0.42, metal:0, shadow:true });
      rootNode.children.push(sh); updateWorld(rootNode, null, 0);
      model.leaves = leavesOf(rootNode);
    }
    return model;
  }

  /* ================= camera & lighting (shared by both renderers) ================= */
  function camera(model, view){
    const yaw = view.yaw||0, pitch = view.pitch||0, aspect = view.aspect||1;
    const fov = view.fov || 0.6;
    const hfov = 2*Math.atan(Math.tan(fov/2)*aspect);
    const fit = model.radius/Math.sin(Math.min(fov,hfov)/2)*1.02;
    const dist = (view.dist||1)*fit;
    const cp=Math.cos(pitch);
    const eye = [model.center[0]+dist*cp*Math.sin(yaw), model.center[1]+dist*Math.sin(pitch), model.center[2]+dist*cp*Math.cos(yaw)];
    const V = m4.lookAt(eye, model.center, [0,1,0]);
    const P = m4.perspective(fov, aspect, Math.max(0.01, dist-model.radius*2.5), dist+model.radius*2.5);
    /* lights ride with the camera: key from the upper left front, fill from the lower right */
    const right=[V[0],V[4],V[8]], up=[V[1],V[5],V[9]], back=[V[2],V[6],V[10]];
    const key = v3.norm(v3.add(v3.add(v3.scale(right,-0.55), v3.scale(up,0.75)), v3.scale(back,0.6)));
    const fill = v3.norm(v3.add(v3.add(v3.scale(right,0.7), v3.scale(up,-0.2)), v3.scale(back,0.4)));
    return { eye, V, P, VP: m4.mul(P,V), key, fill, dist };
  }
  const clamp01 = x => x<0?0:x>1?1:x;
  function shade(n, p, cam, mat, out){
    const hemi = 0.5+0.5*n[1];
    const ar = 0.14+0.22*hemi, ag = 0.12+0.22*hemi, ab = 0.20+0.22*hemi;
    const kd = Math.max(0, v3.dot(n, cam.key))*0.82, fd = Math.max(0, v3.dot(n, cam.fill))*0.28;
    const v = v3.norm(v3.sub(cam.eye, p)); const h = v3.norm(v3.add(cam.key, v));
    const spec = Math.pow(Math.max(0, v3.dot(n,h)), 12+52*mat.metal) * (0.10+0.5*mat.metal);
    const rim = Math.pow(1-Math.max(0, v3.dot(n,v)), 3)*0.22;
    const c = mat.color;
    let r = c[0]*(ar+kd+fd)+spec+rim*0.7, g = c[1]*(ag+kd+fd)+spec+rim*0.5, b = c[2]*(ab+kd+fd)+spec+rim*1.0;
    if(mat.emissive>0){ const e=mat.emissive; r = r*(1-e)+(c[0]*1.15+0.1)*e; g = g*(1-e)+(c[1]*1.15+0.1)*e; b = b*(1-e)+(c[2]*1.15+0.1)*e; }
    out[0]=clamp01(r); out[1]=clamp01(g); out[2]=clamp01(b); return out;
  }

  /* ================= software rasteriser ================= */
  /* opts: width,height, yaw,pitch,dist, time, ss (supersample), cull, bg:[r,g,b,a] 0..255, target:Uint8ClampedArray */
  function renderSoft(model, opts){
    opts = opts || {};
    const ss = Math.max(1, opts.ss|0 || 1);
    const W0 = Math.max(2, opts.width|0 || 320), H0 = Math.max(2, opts.height|0 || 240);
    const W = W0*ss, H = H0*ss;
    const t = opts.time||0;
    updateWorld(model.root, null, t);
    const cam = camera(model, { yaw:opts.yaw, pitch:opts.pitch, dist:opts.dist, aspect:W0/H0, fov:opts.fov });
    const color = new Float32Array(W*H*3), alpha = new Float32Array(W*H), depth = new Float32Array(W*H).fill(Infinity);
    const bg = opts.bg || [0,0,0,0];
    for(let i=0;i<W*H;i++){ color[i*3]=bg[0]/255; color[i*3+1]=bg[1]/255; color[i*3+2]=bg[2]/255; alpha[i]=(bg[3]==null?0:bg[3])/255; }
    const tmp=[0,0,0];
    const passes = [[],[]];
    for(const n of model.leaves) passes[n.leaf.alpha<1 ? 1 : 0].push(n);
    /* transparent leaves back to front */
    passes[1].sort((a,b)=>{ const da=v3.len(v3.sub(m4.point(a.world,[0,0,0]),cam.eye)), db=v3.len(v3.sub(m4.point(b.world,[0,0,0]),cam.eye)); return db-da; });
    let drawn = 0;
    for(let pass=0; pass<2; pass++){
      for(const node of passes[pass]){
        const leaf = node.leaf, geo = leaf.geo, M = node.world, MVP = m4.mul(cam.VP, M), N3 = m4.normal3(M);
        const nv = geo.pos.length/3;
        const sx = new Float32Array(nv), sy = new Float32Array(nv), sz = new Float32Array(nv), sw = new Float32Array(nv), col = new Float32Array(nv*3);
        for(let i=0;i<nv;i++){
          const p=[geo.pos[i*3],geo.pos[i*3+1],geo.pos[i*3+2]];
          const c = m4.clip(MVP, p); sw[i]=c[3];
          if(c[3]>1e-6){ sx[i]=(c[0]/c[3]*0.5+0.5)*W; sy[i]=(0.5-c[1]/c[3]*0.5)*H; sz[i]=c[2]/c[3]; }
          const wp = m4.point(M,p), wn = m4.normal(N3,[geo.nrm[i*3],geo.nrm[i*3+1],geo.nrm[i*3+2]]);
          shade(wn, wp, cam, leaf, tmp); col[i*3]=tmp[0]; col[i*3+1]=tmp[1]; col[i*3+2]=tmp[2];
        }
        const a = leaf.alpha, writeZ = pass===0;
        for(let i=0;i<geo.idx.length;i+=3){
          const i0=geo.idx[i], i1=geo.idx[i+1], i2=geo.idx[i+2];
          if(sw[i0]<=1e-6||sw[i1]<=1e-6||sw[i2]<=1e-6) continue;
          const x0=sx[i0],y0=sy[i0],x1=sx[i1],y1=sy[i1],x2=sx[i2],y2=sy[i2];
          const area = (x1-x0)*(y2-y0)-(x2-x0)*(y1-y0);   // screen y is down: front faces come out negative
          if(area===0) continue;
          if(opts.cull && area>0) continue;
          const minx=Math.max(0,Math.floor(Math.min(x0,x1,x2))), maxx=Math.min(W-1,Math.ceil(Math.max(x0,x1,x2)));
          const miny=Math.max(0,Math.floor(Math.min(y0,y1,y2))), maxy=Math.min(H-1,Math.ceil(Math.max(y0,y1,y2)));
          if(minx>maxx||miny>maxy) continue;
          const inv=1/area; drawn++;
          for(let y=miny;y<=maxy;y++){
            const py=y+0.5;
            for(let x=minx;x<=maxx;x++){
              const px=x+0.5;
              let w0=((x1-px)*(y2-py)-(x2-px)*(y1-py))*inv, w1=((x2-px)*(y0-py)-(x0-px)*(y2-py))*inv, w2=1-w0-w1;
              if(w0<0||w1<0||w2<0) continue;
              const z=w0*sz[i0]+w1*sz[i1]+w2*sz[i2]; const k=y*W+x;
              if(z>=depth[k]) continue;
              if(writeZ) depth[k]=z;
              const r=w0*col[i0*3]+w1*col[i1*3]+w2*col[i2*3], g=w0*col[i0*3+1]+w1*col[i1*3+1]+w2*col[i2*3+1], b=w0*col[i0*3+2]+w1*col[i1*3+2]+w2*col[i2*3+2];
              if(a>=1){ color[k*3]=r; color[k*3+1]=g; color[k*3+2]=b; alpha[k]=1; }
              else { const ia=1-a; color[k*3]=r*a+color[k*3]*ia; color[k*3+1]=g*a+color[k*3+1]*ia; color[k*3+2]=b*a+color[k*3+2]*ia; alpha[k]=a+alpha[k]*ia; }
            }
          }
        }
      }
    }
    /* resolve (and box-downsample when supersampled) into straight-alpha RGBA bytes */
    const out = opts.target || new Uint8ClampedArray(W0*H0*4);
    const n2 = ss*ss;
    for(let y=0;y<H0;y++) for(let x=0;x<W0;x++){
      let r=0,g=0,b=0,A=0;
      for(let dy=0;dy<ss;dy++) for(let dx=0;dx<ss;dx++){ const k=(y*ss+dy)*W+(x*ss+dx); const al=alpha[k]; r+=color[k*3]*al; g+=color[k*3+1]*al; b+=color[k*3+2]*al; A+=al; }
      const o=(y*W0+x)*4;
      if(A>0){ out[o]=r/A*255; out[o+1]=g/A*255; out[o+2]=b/A*255; out[o+3]=A/n2*255; } else { out[o]=out[o+1]=out[o+2]=0; out[o+3]=0; }
    }
    return { width:W0, height:H0, data:out, triangles:drawn, camera:cam };
  }

  /* ================= WebGL renderer ================= */
  const VS = [
    'attribute vec3 aPos; attribute vec3 aNrm;',
    'uniform mat4 uMVP; uniform mat4 uM; uniform mat3 uN;',
    'varying vec3 vN; varying vec3 vP;',
    'void main(){ vec4 wp = uM*vec4(aPos,1.0); vP = wp.xyz; vN = normalize(uN*aNrm); gl_Position = uMVP*vec4(aPos,1.0); }'
  ].join('\n');
  const FS = [
    'precision mediump float;',
    'uniform vec3 uColor; uniform float uEmissive; uniform float uMetal; uniform float uAlpha;',
    'uniform vec3 uEye; uniform vec3 uKey; uniform vec3 uFill;',
    'varying vec3 vN; varying vec3 vP;',
    'void main(){',
    '  vec3 n = normalize(vN); if(!gl_FrontFacing) n = -n;',
    '  float hemi = 0.5+0.5*n.y;',
    '  vec3 amb = vec3(0.14,0.12,0.20) + vec3(0.22)*hemi;',
    '  float kd = max(dot(n,uKey),0.0)*0.82; float fd = max(dot(n,uFill),0.0)*0.28;',
    '  vec3 v = normalize(uEye-vP); vec3 h = normalize(uKey+v);',
    '  float spec = pow(max(dot(n,h),0.0), 12.0+52.0*uMetal)*(0.10+0.5*uMetal);',
    '  float rim = pow(1.0-max(dot(n,v),0.0), 3.0)*0.22;',
    '  vec3 c = uColor*(amb+kd+fd) + spec + rim*vec3(0.7,0.5,1.0);',
    '  c = mix(c, uColor*1.15+0.1, uEmissive);',
    '  gl_FragColor = vec4(clamp(c,0.0,1.0)*uAlpha, uAlpha);',
    '}'
  ].join('\n');

  function GLRenderer(gl){
    this.gl = gl;
    const sh = (type, src)=>{ const s=gl.createShader(type); gl.shaderSource(s,src); gl.compileShader(s); if(!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error('shader: '+gl.getShaderInfoLog(s)); return s; };
    const prog = gl.createProgram(); gl.attachShader(prog, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(prog);
    if(!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error('program: '+gl.getProgramInfoLog(prog));
    this.prog = prog;
    this.loc = { aPos: gl.getAttribLocation(prog,'aPos'), aNrm: gl.getAttribLocation(prog,'aNrm') };
    for(const u of ['uMVP','uM','uN','uColor','uEmissive','uMetal','uAlpha','uEye','uKey','uFill']) this.loc[u] = gl.getUniformLocation(prog,u);
    this.buffers = new Map();
    this.uint32 = !!gl.getExtension('OES_element_index_uint');
  }
  GLRenderer.prototype.upload = function(geo){
    const gl=this.gl; let b=this.buffers.get(geo); if(b) return b;
    b = { vbo: gl.createBuffer(), nbo: gl.createBuffer(), ibo: gl.createBuffer(), count: geo.count, type: (geo.idx instanceof Uint32Array) ? gl.UNSIGNED_INT : gl.UNSIGNED_SHORT };
    gl.bindBuffer(gl.ARRAY_BUFFER, b.vbo); gl.bufferData(gl.ARRAY_BUFFER, geo.pos, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, b.nbo); gl.bufferData(gl.ARRAY_BUFFER, geo.nrm, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, b.ibo); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, geo.idx, gl.STATIC_DRAW);
    this.buffers.set(geo, b); return b;
  };
  GLRenderer.prototype.render = function(model, view, width, height){
    const gl=this.gl, L=this.loc;
    updateWorld(model.root, null, view.time||0);
    const cam = camera(model, { yaw:view.yaw, pitch:view.pitch, dist:view.dist, aspect:width/height, fov:view.fov });
    gl.viewport(0,0,width,height);
    gl.clearColor(0,0,0,0); gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST); gl.depthFunc(gl.LEQUAL); gl.disable(gl.CULL_FACE);
    gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);   /* premultiplied output */
    gl.useProgram(this.prog);
    gl.uniform3fv(L.uEye, cam.eye); gl.uniform3fv(L.uKey, cam.key); gl.uniform3fv(L.uFill, cam.fill);
    gl.enableVertexAttribArray(L.aPos); gl.enableVertexAttribArray(L.aNrm);
    const passes=[[],[]]; for(const n of model.leaves) passes[n.leaf.alpha<1?1:0].push(n);
    passes[1].sort((a,b)=>{ const da=v3.len(v3.sub(m4.point(a.world,[0,0,0]),cam.eye)), db=v3.len(v3.sub(m4.point(b.world,[0,0,0]),cam.eye)); return db-da; });
    for(let pass=0; pass<2; pass++){
      gl.depthMask(pass===0);
      for(const node of passes[pass]){
        const leaf=node.leaf, b=this.upload(leaf.geo);
        gl.uniformMatrix4fv(L.uMVP, false, new Float32Array(m4.mul(cam.VP, node.world)));
        gl.uniformMatrix4fv(L.uM, false, new Float32Array(node.world));
        gl.uniformMatrix3fv(L.uN, false, new Float32Array(m4.normal3(node.world)));
        gl.uniform3fv(L.uColor, leaf.color); gl.uniform1f(L.uEmissive, leaf.emissive); gl.uniform1f(L.uMetal, leaf.metal); gl.uniform1f(L.uAlpha, leaf.alpha);
        gl.bindBuffer(gl.ARRAY_BUFFER, b.vbo); gl.vertexAttribPointer(L.aPos, 3, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, b.nbo); gl.vertexAttribPointer(L.aNrm, 3, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, b.ibo);
        gl.drawElements(gl.TRIANGLES, b.count, b.type, 0);
      }
    }
    gl.depthMask(true);
  };
  GLRenderer.prototype.dispose = function(){
    const gl=this.gl; try{ for(const b of this.buffers.values()){ gl.deleteBuffer(b.vbo); gl.deleteBuffer(b.nbo); gl.deleteBuffer(b.ibo); } gl.deleteProgram(this.prog); }catch(e){}
    this.buffers.clear();
    try{ const ext = gl.getExtension('WEBGL_lose_context'); if(ext) ext.loseContext(); }catch(e){}
  };

  /* ================= the viewer (browser) ================= */
  /* mount(host, model, {autoRotate, yaw, pitch, dist, onMode}) -> { destroy(), mode:'webgl'|'soft', setView() } */
  function mount(host, model, opts){
    opts = opts || {};
    const doc = host.ownerDocument, win = doc.defaultView || root;
    const newCanvas = ()=>{ const c = doc.createElement('canvas'); c.className = 'tech-gl-canvas'; c.setAttribute('aria-label', opts.label || '3D model'); c.setAttribute('role','img'); return c; };
    let canvas = newCanvas();
    host.innerHTML = ''; host.appendChild(canvas);
    const pv = model.view || {};
    const view = { yaw: opts.yaw==null?(pv.yaw==null?0.65:pv.yaw):opts.yaw, pitch: opts.pitch==null?(pv.pitch==null?0.3:pv.pitch):opts.pitch, dist: opts.dist||pv.dist||1, time:0 };
    const home = { yaw:view.yaw, pitch:view.pitch, dist:view.dist };
    const st = { alive:true, mode:'none', raf:0, dragging:false, idle:0, vx:0, pointers:new Map(), pinch:0, last:0, lastDraw:-1e9, gl:null, soft:null, w:0, h:0, dpr:1 };
    const attrs = { antialias:true, alpha:true, premultipliedAlpha:true, preserveDrawingBuffer:false, powerPreference:'low-power' };
    let gl = null;
    try{ gl = canvas.getContext('webgl', attrs) || canvas.getContext('experimental-webgl', attrs); }catch(e){ gl = null; }
    if(gl){
      try{ st.gl = new GLRenderer(gl); st.mode = 'webgl'; }
      catch(e){
        /* a driver that refuses the shaders: this canvas is now a WebGL canvas, so give the 2D path a fresh one */
        st.gl = null; gl = null;
        try{ const ext = canvas.getContext('webgl').getExtension('WEBGL_lose_context'); if(ext) ext.loseContext(); }catch(e2){}
        const fresh = newCanvas(); host.replaceChild(fresh, canvas); canvas = fresh;
      }
    }
    if(!gl){
      let ctx = null; try{ ctx = canvas.getContext('2d'); }catch(e){}
      if(!ctx) return null;                 /* nothing can draw here (no canvas at all) */
      st.soft = { ctx, img:null }; st.mode = 'soft';
    }
    const size = ()=>{
      const cw = Math.max(80, host.clientWidth||320), ch = Math.max(80, host.clientHeight||240);
      if(st.mode==='webgl'){ st.dpr = Math.min(2, win.devicePixelRatio||1); st.w = Math.round(cw*st.dpr); st.h = Math.round(ch*st.dpr); }
      else { const k = Math.min(1, 300/cw); st.w = Math.max(80, Math.round(cw*k)); st.h = Math.max(60, Math.round(ch*k)); st.dpr = 1; }
      if(canvas.width!==st.w||canvas.height!==st.h){ canvas.width = st.w; canvas.height = st.h; if(st.soft) st.soft.img = null; }
      canvas.style.width = cw+'px'; canvas.style.height = ch+'px';
    };
    const draw = ()=>{
      if(st.mode==='webgl'){ st.gl.render(model, view, st.w, st.h); }
      else {
        const s = st.soft; if(!s.img || s.img.width!==st.w || s.img.height!==st.h) s.img = s.ctx.createImageData(st.w, st.h);
        renderSoft(model, { width:st.w, height:st.h, yaw:view.yaw, pitch:view.pitch, dist:view.dist, time:view.time, target:s.img.data });
        s.ctx.putImageData(s.img, 0, 0);
      }
    };
    /* interaction: drag to turn, pinch or ctrl+wheel to zoom, double-click to reset */
    const onDown = (ev)=>{ st.pointers.set(ev.pointerId, {x:ev.clientX, y:ev.clientY}); if(st.pointers.size===1){ st.dragging = true; st.idle = 0; st.vx = 0; try{ canvas.setPointerCapture(ev.pointerId); }catch(e){} } if(st.pointers.size===2){ const p=[...st.pointers.values()]; st.pinch = Math.hypot(p[0].x-p[1].x, p[0].y-p[1].y); } if(ev.pointerType!=='touch') ev.preventDefault(); };
    const onMove = (ev)=>{
      const pt = st.pointers.get(ev.pointerId); if(!pt) return;
      const dx = ev.clientX-pt.x, dy = ev.clientY-pt.y; pt.x = ev.clientX; pt.y = ev.clientY;
      if(st.pointers.size===2){ const p=[...st.pointers.values()]; const d=Math.hypot(p[0].x-p[1].x, p[0].y-p[1].y); if(st.pinch){ view.dist = Math.min(2.4, Math.max(0.45, view.dist*st.pinch/d)); } st.pinch = d; return; }
      if(!st.dragging) return;
      view.yaw += dx*0.011; view.pitch = Math.max(-1.3, Math.min(1.3, view.pitch + dy*0.009)); st.vx = dx*0.011;
    };
    const onUp = (ev)=>{ st.pointers.delete(ev.pointerId); if(st.pointers.size<2) st.pinch = 0; if(st.pointers.size===0) st.dragging = false; };
    const onWheel = (ev)=>{ if(!(ev.ctrlKey||ev.metaKey)) return; ev.preventDefault(); view.dist = Math.min(2.4, Math.max(0.45, view.dist*(ev.deltaY>0?1.08:0.925))); st.idle = 0; };
    const onDbl = ()=>{ view.yaw = home.yaw; view.pitch = home.pitch; view.dist = home.dist; st.vx = 0; };
    canvas.addEventListener('pointerdown', onDown); canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerup', onUp); canvas.addEventListener('pointercancel', onUp); canvas.addEventListener('lostpointercapture', onUp);
    canvas.addEventListener('wheel', onWheel, { passive:false }); canvas.addEventListener('dblclick', onDbl);
    canvas.addEventListener('webglcontextlost', (ev)=>{ ev.preventDefault(); }, false);
    canvas.addEventListener('webglcontextrestored', ()=>{ try{ st.gl = new GLRenderer(canvas.getContext('webgl', attrs)); }catch(e){} }, false);
    let ro = null;
    if(typeof win.ResizeObserver==='function'){ ro = new win.ResizeObserver(()=>{ if(st.alive) size(); }); ro.observe(host); }
    const now = ()=> (win.performance && win.performance.now) ? win.performance.now() : Date.now();
    st.last = now();
    const frame = ()=>{
      if(!st.alive) return;
      if(!host.isConnected){ api.destroy(); return; }
      const tnow = now(); const dt = Math.min(0.05, (tnow-st.last)/1000); st.last = tnow;
      view.time += dt;
      if(!st.dragging){ st.idle += dt; if(opts.autoRotate!==false && st.idle>0.5) view.yaw += dt*(opts.speed||0.45); else { view.yaw += st.vx; st.vx *= 0.88; } }
      /* the software path is capped near 24 fps so a slow machine keeps its cursor */
      const gap = (st.mode==='soft') ? 40 : 0;
      if(!(doc.hidden) && (tnow-st.lastDraw)>=gap){ draw(); st.lastDraw = tnow; }
      st.raf = win.requestAnimationFrame(frame);
    };
    size(); draw();
    st.raf = win.requestAnimationFrame(frame);
    const api = {
      get mode(){ return st.mode; }, canvas, view,
      setView(v){ Object.assign(view, v||{}); st.idle = 0; },
      destroy(){
        if(!st.alive) return; st.alive = false;
        try{ win.cancelAnimationFrame(st.raf); }catch(e){}
        try{ if(ro) ro.disconnect(); }catch(e){}
        try{ if(st.gl) st.gl.dispose(); }catch(e){}
        st.pointers.clear();
      }
    };
    if(typeof opts.onMode==='function') opts.onMode(st.mode);
    return api;
  }

  root.TECH_GL = { v3, m4, geometry:{ box:geoBox, cylinder:geoCylinder, sphere:geoSphere, torus:geoTorus, lathe:geoLathe, prism:geoPrism, make:makeGeometry }, hexToRgb, compile, updateWorld, camera, shade, renderSoft, GLRenderer, mount, VS, FS };
})();
