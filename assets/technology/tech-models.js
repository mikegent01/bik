/* Discovered Technology — procedural 3D recipes.
 *
 * Every entry in Reputation-Matrix2/data/technology.json names a `model.recipe`.
 * A recipe is a list of primitive parts (box / cylinder / sphere / cone / torus)
 * with a position, a rotation and a palette key, so a new piece of technology
 * can be filed without touching a modelling tool: pick the nearest recipe, give
 * it a palette, and the viewer builds it in the browser from Three.js primitives.
 *
 * The file is a classic script (no modules) so it can be read by both the
 * site (index.html) and the node checks (tools/check-technology.py parses the
 * recipe names out of it). It only touches THREE when `build()` is called.
 *
 * Part shape:
 *   { s:'box'|'cyl'|'sph'|'cone'|'torus', d:[...dims], p:[x,y,z], r:[rx,ry,rz],
 *     c:'paletteKey'|'#hex', e:true (emissive), spin:'x'|'y'|'z' (animated) }
 *   dims — box:[w,h,d]  cyl:[rTop,rBottom,h,segments?]  sph:[r]  cone:[r,h]
 *          torus:[r,tube]
 */
(function(){
  'use strict';

  const T = {}; // recipe name -> function(palette) -> parts[]

  /* small helpers so recipes stay readable */
  const box  = (w,h,d,p,c,extra)=>Object.assign({s:'box', d:[w,h,d], p, c}, extra||{});
  const cyl  = (rt,rb,h,p,c,extra)=>Object.assign({s:'cyl', d:[rt,rb,h,24], p, c}, extra||{});
  const sph  = (r,p,c,extra)=>Object.assign({s:'sph', d:[r], p, c}, extra||{});
  const cone = (r,h,p,c,extra)=>Object.assign({s:'cone', d:[r,h], p, c}, extra||{});
  const tor  = (r,t,p,c,extra)=>Object.assign({s:'torus', d:[r,t], p, c}, extra||{});
  const X = Math.PI/2;

  T.helicopter = (P)=>[
    box(1.6,0.7,0.8,[0,0.6,0],'body'),
    box(0.9,0.5,0.6,[1.05,0.55,0],'glass'),
    box(1.5,0.22,0.22,[-1.4,0.75,0],'body'),
    box(0.1,0.5,0.3,[-2.1,1.0,0],'trim'),
    cyl(0.08,0.08,0.3,[0,1.1,0],'rotor'),
    box(3.6,0.04,0.16,[0,1.28,0],'rotor',{spin:'y'}),
    box(0.16,0.04,3.6,[0,1.3,0],'rotor',{spin:'y'}),
    box(0.04,0.5,0.06,[-2.1,1.0,0.18],'rotor',{spin:'x'}),
    box(0.4,0.3,0.03,[0.2,0.5,0.42],'trim'),           /* side door */
    cyl(0.03,0.03,1.6,[0,0.05,0.35],'rotor',{r:[0,0,X]}),
    cyl(0.03,0.03,1.6,[0,0.05,-0.35],'rotor',{r:[0,0,X]}),
    box(0.04,0.3,0.04,[0.4,0.2,0.35],'rotor'), box(0.04,0.3,0.04,[-0.4,0.2,0.35],'rotor'),
    box(0.04,0.3,0.04,[0.4,0.2,-0.35],'rotor'), box(0.04,0.3,0.04,[-0.4,0.2,-0.35],'rotor'),
    sph(0.12,[0.6,0.2,0],'trim',{e:true})               /* searchlight */
  ];
  T.helicopter_ghost = (P)=>T.helicopter(P).map(p=>Object.assign({}, p, {ghost:true}));

  T.claw_arm = (P)=>[
    box(0.5,0.3,0.5,[0,1.5,0],'stripe'),               /* housing */
    box(0.52,0.1,0.52,[0,1.35,0],'body'),
    cyl(0.1,0.1,1.0,[0,0.85,0],'steel'),                /* arm */
    cyl(0.16,0.16,0.14,[0,0.35,0],'body'),              /* wrist */
    box(0.12,0.7,0.08,[0.28,-0.05,0],'steel',{r:[0,0,-0.35]}),
    box(0.12,0.7,0.08,[-0.28,-0.05,0],'steel',{r:[0,0,0.35]}),
    box(0.08,0.7,0.12,[0,-0.05,0.28],'steel',{r:[0.35,0,0]}),
    box(0.08,0.7,0.12,[0,-0.05,-0.28],'steel',{r:[-0.35,0,0]}),
    cone(0.07,0.25,[0.44,-0.45,0],'stripe',{r:[0,0,Math.PI]}),
    cone(0.07,0.25,[-0.44,-0.45,0],'stripe',{r:[0,0,Math.PI]}),
    cone(0.07,0.25,[0,-0.45,0.44],'stripe',{r:[0,0,Math.PI]}),
    cone(0.07,0.25,[0,-0.45,-0.44],'stripe',{r:[0,0,Math.PI]}),
    box(0.22,0.22,0.02,[0,1.5,0.26],'mark',{e:true}),   /* the W plate */
    box(0.06,0.4,0.05,[0.2,0.9,0.2],'steel',{r:[0,0,0.2]}), /* small pincer */
    box(0.06,0.4,0.05,[0.3,0.9,0.2],'steel',{r:[0,0,-0.2]})
  ];

  T.radio = (P)=>[
    box(0.9,0.55,0.35,[0,0.3,0],'body'),
    box(0.4,0.3,0.03,[-0.2,0.32,0.19],'grille'),
    cyl(0.08,0.08,0.05,[0.25,0.38,0.19],'dial',{r:[X,0,0]}),
    cyl(0.05,0.05,0.05,[0.25,0.16,0.19],'dial',{r:[X,0,0]}),
    cyl(0.015,0.015,1.1,[0.38,1.1,0],'antenna'),
    box(0.3,0.06,0.1,[0,0.6,0],'grille'),
    box(0.25,0.08,0.04,[-0.3,0.08,0.19],'antenna')      /* speaker lip / handset clip */
  ];

  T.pistol = (P)=>[
    box(0.9,0.18,0.14,[0.1,0.5,0],'metal'),             /* slide */
    cyl(0.04,0.04,0.5,[0.6,0.5,0],'metal',{r:[0,0,X]}),  /* barrel */
    box(0.3,0.55,0.12,[-0.25,0.15,0],'grip',{r:[0,0,0.25]}),
    box(0.25,0.1,0.1,[0.05,0.3,0],'metal'),
    box(0.04,0.14,0.04,[0.1,0.22,0],'metal',{r:[0,0,0.3]}), /* trigger */
    tor(0.09,0.015,[0.1,0.24,0],'metal'),
    box(0.05,0.05,0.14,[-0.42,0.6,0],'accent')          /* hammer — the part that clicked */
  ];

  T.telephone = (P)=>[
    box(0.8,0.35,0.6,[0,0.17,0],'body'),
    cyl(0.22,0.22,0.06,[0.05,0.38,0.05],'brass',{r:[X,0,0]}),
    tor(0.14,0.03,[0.05,0.42,0.05],'body',{r:[X,0,0]}),
    box(0.75,0.08,0.14,[0,0.5,-0.2],'brass',{r:[0,0,0.05]}), /* handset */
    cyl(0.1,0.08,0.1,[-0.36,0.52,-0.2],'brass',{r:[0,0,X]}),
    cyl(0.1,0.08,0.1,[0.36,0.52,-0.2],'brass',{r:[0,0,X]}),
    box(0.1,0.1,0.1,[-0.3,0.4,-0.2],'brass'), box(0.1,0.1,0.1,[0.3,0.4,-0.2],'brass'),
    tor(0.05,0.012,[0.45,0.1,0.25],'cord'), tor(0.05,0.012,[0.55,0.1,0.3],'cord')
  ];

  T.drone = (P)=>[
    sph(0.35,[0,0.6,0],'body'),
    cyl(0.4,0.4,0.1,[0,0.55,0],'metal'),
    sph(0.12,[0,0.6,0.3],'eye',{e:true}),
    box(0.9,0.03,0.08,[0,0.75,0],'metal',{spin:'y'}),
    box(0.08,0.03,0.9,[0,0.76,0],'metal',{spin:'y'}),
    cyl(0.03,0.03,0.25,[0,0.85,0],'metal'),
    cyl(0.02,0.02,0.3,[0.2,0.3,0],'metal'), cyl(0.02,0.02,0.3,[-0.2,0.3,0],'metal')
  ];

  T.musket = (P)=>[
    cyl(0.03,0.03,2.0,[0.3,0.4,0],'metal',{r:[0,0,X]}),
    box(1.1,0.1,0.07,[-0.2,0.33,0],'wood'),
    box(0.5,0.22,0.08,[-0.95,0.26,0],'wood',{r:[0,0,0.15]}),
    box(0.1,0.1,0.06,[-0.1,0.46,0],'brass'),            /* lock */
    box(0.03,0.1,0.03,[-0.05,0.25,0],'metal'),           /* trigger */
    cyl(0.012,0.012,1.6,[0.4,0.31,0],'metal',{r:[0,0,X]}), /* ramrod */
    cyl(0.03,0.03,0.08,[1.3,0.4,0],'brass',{r:[0,0,X]})
  ];

  T.grenade = (P)=>[
    sph(0.4,[0,0.45,0],'body'),
    cyl(0.12,0.12,0.2,[0,0.9,0],'band'),
    tor(0.18,0.02,[0.2,1.0,0],'pin',{r:[0,0,0.3]}),
    box(0.35,0.08,0.02,[0,0.45,0.4],'band'),             /* the W band */
    box(0.08,0.35,0.02,[-0.12,0.45,0.4],'band'), box(0.08,0.35,0.02,[0.12,0.45,0.4],'band')
  ];

  T.telescope = (P)=>[
    cyl(0.14,0.18,1.6,[0,1.0,0],'tube',{r:[0.9,0,0]}),
    cyl(0.1,0.14,0.3,[0,1.6,-0.5],'brass',{r:[0.9,0,0]}),
    cyl(0.19,0.19,0.05,[0,0.95,0.02],'brass',{r:[0.9,0,0]}),
    sph(0.11,[0,1.78,-0.6],'lens',{e:true}),
    cyl(0.04,0.04,1.0,[0,0.4,0],'brass'),
    cyl(0.03,0.03,0.9,[0.3,0.15,0],'brass',{r:[0,0,0.6]}),
    cyl(0.03,0.03,0.9,[-0.3,0.15,0],'brass',{r:[0,0,-0.6]}),
    cyl(0.03,0.03,0.9,[0,0.15,0.3],'brass',{r:[-0.6,0,0]}),
    tor(0.3,0.03,[0,0.9,0],'brass',{r:[X,0,0]})
  ];

  T.cannon = (P)=>[
    cyl(0.25,0.3,1.4,[0,0.6,0],'barrel',{r:[0,0,X]}),
    tor(0.32,0.04,[0.4,0.6,0],'band',{r:[0,X,0]}),
    tor(0.32,0.04,[-0.4,0.6,0],'band',{r:[0,X,0]}),
    cyl(0.1,0.1,0.5,[0.75,0.6,0],'shell',{r:[0,0,X]}),   /* the Bill, nose out */
    sph(0.1,[1.02,0.6,0],'shell'),
    box(0.06,0.16,0.05,[0.78,0.78,0],'accent'),
    box(0.8,0.1,0.5,[0,0.25,0],'band'),
    cyl(0.18,0.18,0.08,[-0.2,0.18,0.28],'barrel',{r:[X,0,0]}),
    cyl(0.18,0.18,0.08,[-0.2,0.18,-0.28],'barrel',{r:[X,0,0]}),
    box(0.3,0.1,0.1,[-0.7,0.4,0],'band')
  ];

  T.portal_device = (P)=>[
    box(0.9,0.2,0.6,[0,0.1,0],'frame'),
    tor(0.55,0.05,[0,0.95,0],'ring',{spin:'z'}),
    tor(0.4,0.03,[0,0.95,0],'brass',{spin:'z'}),
    sph(0.18,[0,0.95,0],'core',{e:true}),
    cyl(0.06,0.06,0.5,[0,0.4,0],'frame'),
    box(0.1,0.3,0.1,[0.4,0.3,0],'brass'), box(0.1,0.3,0.1,[-0.4,0.3,0],'brass'),
    cyl(0.03,0.03,0.4,[0.3,0.2,0.2],'brass',{r:[0.4,0,0.4]})
  ];

  T.vacuum = (P)=>[
    cyl(0.3,0.3,0.7,[0,0.45,0],'tank'),
    sph(0.3,[0,0.8,0],'body'),
    box(0.3,0.25,0.25,[0,0.3,0.35],'body'),
    cyl(0.04,0.04,0.9,[0.35,0.6,0.3],'hose',{r:[0.6,0,0.9]}),
    cone(0.1,0.3,[0.7,0.85,0.55],'nozzle',{r:[0,0,-1.2]}),
    box(0.1,0.08,0.4,[0,0.95,-0.05],'nozzle')
  ];

  T.syringe = (P)=>[
    cyl(0.12,0.12,1.2,[0,0.7,0],'barrel'),
    cyl(0.1,0.1,0.7,[0,0.55,0],'fluid',{e:true}),
    cyl(0.25,0.25,0.04,[0,1.3,0],'barrel'),
    cyl(0.07,0.07,0.6,[0,1.5,0],'plunger'),
    cyl(0.16,0.16,0.04,[0,1.8,0],'plunger'),
    cyl(0.04,0.04,0.1,[0,0.05,0],'metal'),
    cyl(0.012,0.0,0.45,[0,-0.2,0],'metal')
  ];

  T.remote = (P)=>[
    box(0.5,0.12,0.9,[0,0.1,0],'body'),
    cyl(0.06,0.06,0.04,[-0.12,0.18,-0.25],'button',{r:[X,0,0],e:true}),
    cyl(0.06,0.06,0.04,[0.12,0.18,-0.25],'button2',{r:[X,0,0]}),
    box(0.1,0.04,0.1,[-0.12,0.17,0.0],'button2'), box(0.1,0.04,0.1,[0.12,0.17,0.0],'button2'),
    box(0.1,0.04,0.1,[-0.12,0.17,0.2],'button2'), box(0.1,0.04,0.1,[0.12,0.17,0.2],'button2'),
    cyl(0.02,0.02,0.9,[0.1,0.05,0.85],'wire',{r:[X,0,0.2]}),
    cyl(0.02,0.02,0.7,[-0.1,0.05,0.75],'wire',{r:[X,0,-0.3]}),
    cyl(0.02,0.02,0.5,[0.0,0.05,0.65],'wire',{r:[X,0,0]})
  ];

  T.coffee_machine = (P)=>[
    box(0.7,1.0,0.6,[0,0.5,0],'body'),
    box(0.6,0.35,0.5,[0,0.3,0.08],'panel'),
    cyl(0.14,0.14,0.3,[0,0.15,0.1],'pot'),
    cyl(0.07,0.07,0.04,[0.2,0.85,0.31],'button',{r:[X,0,0],e:true}),
    box(0.28,0.08,0.02,[0.2,0.95,0.31],'panel'),         /* the EMERGENCY EXIT label */
    cyl(0.03,0.03,0.2,[0,0.42,0.12],'panel'),
    sph(0.05,[0,1.05,0],'pot',{e:true})                  /* steam */
  ];

  T.airship = (P)=>[
    sph(0.6,[0,1.0,0],'envelope',{scale:[2.2,1,1]}),
    box(1.2,0.3,0.4,[0,0.3,0],'gondola'),
    box(0.3,0.2,0.3,[0.55,0.35,0],'brass'),
    box(0.04,0.4,0.3,[-1.2,1.1,0],'fin'), box(0.3,0.04,0.4,[-1.2,1.0,0],'fin'),
    cyl(0.03,0.03,0.6,[0.3,0.65,0],'brass'), cyl(0.03,0.03,0.6,[-0.3,0.65,0],'brass'),
    cyl(0.05,0.05,0.2,[-0.7,0.3,0],'brass',{r:[0,0,X]}),
    box(0.5,0.04,0.06,[-0.85,0.3,0],'fin',{spin:'x'})
  ];

  T.train = (P)=>[
    box(2.4,0.6,0.7,[0,0.6,0],'body'),
    box(0.6,0.5,0.6,[1.4,0.55,0],'glass'),
    cone(0.3,0.5,[1.95,0.5,0],'body',{r:[0,0,-X]}),
    box(2.4,0.08,0.72,[0,0.95,0],'stripe'),
    box(0.3,0.2,0.02,[-0.6,0.65,0.36],'glass'), box(0.3,0.2,0.02,[0,0.65,0.36],'glass'), box(0.3,0.2,0.02,[0.6,0.65,0.36],'glass'),
    box(2.6,0.12,0.5,[0,0.25,0],'rail'),
    box(3.4,0.06,0.9,[0,0.1,0],'rail'),
    box(0.3,0.08,0.3,[-1.0,0.17,0],'stripe',{e:true})   /* lift coil glow */
  ];

  T.golem = (P)=>[
    box(0.9,1.0,0.6,[0,1.2,0],'body'),
    box(0.5,0.4,0.5,[0,1.95,0],'body'),
    sph(0.08,[-0.12,2.0,0.26],'eye',{e:true}), sph(0.08,[0.12,2.0,0.26],'eye',{e:true}),
    cyl(0.12,0.12,0.9,[0.65,1.1,0],'joint'), cyl(0.12,0.12,0.9,[-0.65,1.1,0],'joint'),
    cyl(0.16,0.16,0.7,[0.28,0.35,0],'joint'), cyl(0.16,0.16,0.7,[-0.28,0.35,0],'joint'),
    cyl(0.25,0.25,0.3,[0.65,0.55,0],'brush',{spin:'y'}),   /* cleaning brush */
    box(0.2,0.2,0.2,[-0.65,0.55,0],'joint'),
    box(0.3,0.1,0.1,[0,1.5,0.32],'joint')                 /* the hydraulic valve */
  ];

  T.clown_car = (P)=>[
    cyl(0.6,0.45,0.7,[0,0.5,0],'body'),
    cyl(0.62,0.62,0.06,[0,0.85,0],'rim'),
    cyl(0.4,0.4,0.03,[0,0.55,0.55],'face',{r:[X,0,0]}),
    sph(0.07,[-0.14,0.65,0.58],'mouth'), sph(0.07,[0.14,0.65,0.58],'mouth'),
    tor(0.14,0.03,[0,0.45,0.58],'mouth',{r:[0,0,0]}),
    cyl(0.1,0.1,0.3,[0,0.15,0],'rim'),
    box(0.7,0.03,0.1,[0,0.05,0],'rim',{spin:'y'}), box(0.1,0.03,0.7,[0,0.06,0],'rim',{spin:'y'})
  ];

  T.warp_pipe = (P)=>[
    cyl(0.5,0.5,1.0,[0,0.5,0],'pipe'),
    cyl(0.6,0.6,0.3,[0,1.1,0],'rim'),
    cyl(0.42,0.42,0.02,[0,1.25,0],'tile'),
    tor(0.25,0.04,[0,1.27,0],'tile2',{r:[X,0,0],e:true}),
    tor(0.12,0.03,[0,1.27,0],'tile',{r:[X,0,0]}),
    box(0.9,0.05,0.4,[0.4,0.6,0.3],'pipe',{r:[0,0.8,0.1]}) /* a vine */
  ];

  T.printing_press = (P)=>[
    box(1.2,0.1,0.8,[0,0.1,0],'frame'),
    box(0.1,1.2,0.1,[-0.5,0.7,-0.3],'frame'), box(0.1,1.2,0.1,[0.5,0.7,-0.3],'frame'),
    box(0.1,1.2,0.1,[-0.5,0.7,0.3],'frame'), box(0.1,1.2,0.1,[0.5,0.7,0.3],'frame'),
    box(1.1,0.1,0.7,[0,1.3,0],'frame'),
    box(0.7,0.12,0.5,[0,0.8,0],'iron'),                  /* platen */
    cyl(0.05,0.05,0.5,[0,1.05,0],'iron'),
    cyl(0.04,0.04,0.9,[0.5,1.0,0],'iron',{r:[0,0,0.9]}),  /* lever */
    box(0.6,0.02,0.4,[0,0.17,0],'paper'),
    box(0.5,0.02,0.3,[0,0.19,0],'ink')
  ];

  T.magitek_core = (P)=>[
    box(0.8,0.3,0.8,[0,0.15,0],'metal'),
    cyl(0.25,0.35,0.5,[0,0.55,0],'shell'),
    sph(0.28,[0,1.05,0],'core',{e:true}),
    tor(0.45,0.03,[0,1.05,0],'glow',{spin:'y',e:true}),
    tor(0.45,0.03,[0,1.05,0],'glow',{r:[X,0,0],spin:'x',e:true}),
    cyl(0.04,0.04,0.9,[0.3,0.6,0.3],'metal'), cyl(0.04,0.04,0.9,[-0.3,0.6,-0.3],'metal'),
    cone(0.12,0.3,[0,1.5,0],'shell')
  ];

  T.reactor = (P)=>[
    cyl(0.6,0.7,0.3,[0,0.15,0],'frame'),
    cyl(0.08,0.08,1.6,[0.45,1.0,0],'frame'), cyl(0.08,0.08,1.6,[-0.45,1.0,0],'frame'),
    cyl(0.08,0.08,1.6,[0,1.0,0.45],'frame'), cyl(0.08,0.08,1.6,[0,1.0,-0.45],'frame'),
    cyl(0.6,0.6,0.15,[0,1.85,0],'frame'),
    sph(0.3,[0,1.0,0],'core',{e:true}),
    tor(0.42,0.04,[0,1.0,0],'coil',{spin:'z'}),
    tor(0.42,0.04,[0,1.0,0],'coil',{r:[0,X,0],spin:'x'}),
    sph(0.06,[0.6,1.0,0],'glow',{e:true}), sph(0.06,[-0.6,1.0,0],'glow',{e:true})
  ];

  T.survey_machine = (P)=>[
    box(0.8,0.6,0.5,[0,0.9,0],'body'),
    box(0.5,0.3,0.02,[0,0.95,0.26],'screen',{e:true}),
    cyl(0.04,0.04,0.7,[0.3,0.35,0.2],'leg',{r:[0.3,0,-0.3]}),
    cyl(0.04,0.04,0.7,[-0.3,0.35,0.2],'leg',{r:[0.3,0,0.3]}),
    cyl(0.04,0.04,0.7,[0,0.35,-0.25],'leg',{r:[-0.4,0,0]}),
    cyl(0.03,0.03,0.6,[0,1.5,0],'leg'),
    sph(0.05,[0,1.8,0],'light',{e:true}),
    box(0.15,0.04,0.1,[-0.25,1.22,0],'screen')             /* the data chip slot */
  ];

  /* ---------- builder ---------- */
  function build(THREE, name, palette){
    const recipe = T[name] || T.radio;
    const P = Object.assign({}, palette||{});
    const col = (c)=> (c && c[0]==='#') ? c : (P[c] || '#8d8d99');
    const group = new THREE.Group();
    const spinners = [];
    const ghost = false;
    recipe(P).forEach(part=>{
      let geo;
      const d = part.d;
      if(part.s==='box') geo = new THREE.BoxGeometry(d[0], d[1], d[2]);
      else if(part.s==='cyl') geo = new THREE.CylinderGeometry(d[0], d[1], d[2], d[3]||24);
      else if(part.s==='sph') geo = new THREE.SphereGeometry(d[0], 24, 16);
      else if(part.s==='cone') geo = new THREE.ConeGeometry(d[0], d[1], 20);
      else if(part.s==='torus') geo = new THREE.TorusGeometry(d[0], d[1], 12, 40);
      else return;
      const matOpts = { color: col(part.c), roughness: 0.55, metalness: 0.25 };
      if(part.e){ matOpts.emissive = col(part.c); matOpts.emissiveIntensity = 0.6; }
      if(part.ghost){ matOpts.transparent = true; matOpts.opacity = 0.35; matOpts.wireframe = true; }
      const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial(matOpts));
      mesh.position.set(part.p[0], part.p[1], part.p[2]);
      if(part.r) mesh.rotation.set(part.r[0], part.r[1], part.r[2]);
      if(part.scale) mesh.scale.set(part.scale[0], part.scale[1], part.scale[2]);
      if(part.spin){ spinners.push({mesh, axis: part.spin}); }
      group.add(mesh);
    });
    /* centre the model on its bounding box so every recipe frames the same way */
    const bbox = new THREE.Box3().setFromObject(group);
    const centre = bbox.getCenter(new THREE.Vector3());
    const size = bbox.getSize(new THREE.Vector3());
    group.children.forEach(m=>m.position.sub(centre));
    const radius = Math.max(size.x, size.y, size.z) / 2 || 1;
    return {
      group, radius,
      animate(dt){ spinners.forEach(s=>{ s.mesh.rotation[s.axis] += dt * 6; }); }
    };
  }

  window.TECH_MODELS = { recipes: T, names: Object.keys(T), build };
})();
