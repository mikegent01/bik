
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// DOM Elements
const container = document.getElementById('tactical-visualizer-container');
const tooltip = document.getElementById('tactical-tooltip');
const buttons = document.querySelectorAll('.vis-btn');

// State
let scene, camera, renderer, controls, animationId;
let raycaster, pointer;
let interactiveObjects = [];
let currentSceneType = 'breach'; // Default to new scene
let animatables = []; 
let textureLoader;

// Texture Cache
const TEXTURES = {};

// Colors
const COLORS = {
    bg: 0x05070a,
    highlight: 0xffd700,
    ally: 0x3fb950,
    enemy: 0xf85149,
    neutral: 0xe3b341,
    critical: 0xe67e22,
    anomaly: 0x8A2BE2,
    fire: 0xff4500,
    rust: 0x8B4513,
    ice: 0xaaddff,
    bone: 0xeaddcf
};

// --- SCENE DATA ---
const LOCATIONS = {
    breach: {
        title: "Vigilance Bridge - The Betrayal",
        camPos: {x: 0, y: 10, z: 15},
        characters: [
            { id: 'ryan', name: "Ryan", status: "Fleeing", pos: { x: 5, y: 0, z: 5 }, portrait: "toads/ryan.png", scale: 1.5 },
            { id: 'aie', name: "Aie", status: "Terrified", pos: { x: -2, y: 0, z: 0 }, portrait: "toads/toad.png", scale: 1.4 },
            { id: 'legion_officer', name: "Legion Officer", status: "Breaching", pos: { x: 0, y: 0, z: -10 }, portrait: "portraits/colonel_vera_steelstorm.png", scale: 1.8, isEnemy: true },
            { id: 'legion_soldier_1', name: "Legionnaire", status: "Attacking", pos: { x: -3, y: 0, z: -8 }, portrait: "faction_iron_legion.png", scale: 1.6, isEnemy: true },
            { id: 'legion_soldier_2', name: "Legionnaire", status: "Attacking", pos: { x: 3, y: 0, z: -8 }, portrait: "faction_iron_legion.png", scale: 1.6, isEnemy: true }
        ]
    },
    facility: {
        title: "Imperial Processing Facility",
        camPos: {x: 10, y: 15, z: 10},
        characters: [
            { id: 'bones', name: "Bones (Disguised)", status: "Infiltrating", pos: { x: 0, y: 0, z: 0 }, portrait: "toads/bones.png", scale: 1.5 },
            { id: 'creek', name: "Creek", status: "Captured/Injured", pos: { x: -5, y: 0.5, z: -5 }, portrait: "faction_freelancer.png", scale: 1.4, dead: true }, // Lying down
            { id: 'mechanic', name: "Legion Mechanic", status: "Sabotaging", pos: { x: 5, y: 0, z: -8 }, portrait: "faction_iron_legion.png", scale: 1.6, isEnemy: true },
            { id: 'prisoner_toad', name: "Toad Prisoner", status: "Processing", pos: { x: -8, y: 0, z: 5 }, portrait: "toads/toad.png", scale: 1.2 },
            { id: 'guard_1', name: "Facility Guard", status: "Patrolling", pos: { x: 8, y: 0, z: 5 }, portrait: "faction_iron_legion.png", scale: 1.6, isEnemy: true }
        ]
    },
    rakasha: {
        title: "Rakasha Bone Festival",
        camPos: {x: 0, y: 8, z: 20},
        characters: [
            { id: 'ryan_saved', name: "Ryan", status: "Recovering", pos: { x: -2, y: 0, z: 2 }, portrait: "toads/ryan.png", scale: 1.5 },
            { id: 'rakasha_healer', name: "Rakasha Healer", status: "Tending", pos: { x: 0, y: 0, z: 0 }, portrait: "portraits/chief_thornpaw.png", scale: 1.8 },
            { id: 'rakasha_warrior', name: "Rakasha Warrior", status: "Chanting", pos: { x: 5, y: 0, z: -5 }, portrait: "faction_rakasha.png", scale: 1.8 },
            { id: 'rakasha_dancer', name: "Spirit Dancer", status: "Ritual", pos: { x: -5, y: 0, z: -5 }, portrait: "faction_rakasha.png", scale: 1.8 }
        ]
    },
    harbor: {
        title: "Cheep Cheep Village Harbor",
        camPos: {x: 0, y: 20, z: 30},
        characters: [
            { id: 'embercap', name: "Embercap", status: "Boarding", pos: { x: 0, y: 3, z: 0 }, portrait: "toads/embercap.png", scale: 1.5 },
            { id: 'toadette', name: "Captain Toadette", status: "Commanding", pos: { x: -5, y: 0, z: 5 }, portrait: "toads/captain_toadette.png", scale: 1.6 },
            { id: 'loyalist_1', name: "Loyalist Soldier", status: "Ready", pos: { x: 2, y: 0, z: 8 }, portrait: "faction_peach_loyalists.png", scale: 1.3 },
            { id: 'cheep_cheep', name: "Giant Red Cheep Cheep", status: "Transport", pos: { x: 0, y: 1, z: -10 }, portrait: "faction_unaligned.png", scale: 6.0 } // Placeholder portrait
        ]
    }
};

function init() {
    if (!container) return;

    // 1. Setup Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x05070a);
    scene.fog = new THREE.FogExp2(0x05070a, 0.02);

    // 2. Texture Loader
    textureLoader = new THREE.TextureLoader();
    loadTextures();

    // 3. Camera
    camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    
    // 4. Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 5. Controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 100;
    
    // 6. Lights & Input
    setupCommonLighting();
    raycaster = new THREE.Raycaster();
    pointer = new THREE.Vector2();
    container.addEventListener('mousemove', onPointerMove);
    
    // 7. Initial Build
    buildScene(currentSceneType);

    // 8. Loop
    animate();

    // 9. UI Listeners
    window.addEventListener('resize', onWindowResize);
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            buttons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentSceneType = e.target.dataset.scene;
            buildScene(currentSceneType);
        });
    });
}

function loadTextures() {
    const load = (path) => textureLoader.load(path, (t) => { 
        t.wrapS = t.wrapT = THREE.RepeatWrapping; 
        t.colorSpace = THREE.SRGBColorSpace;
    });
    TEXTURES.floor_metal = load('textures/metal_rust.jpg'); 
    TEXTURES.floor_wood = load('textures/wood_planks.jpg');
    TEXTURES.wall_stone = load('textures/stone_brick.jpg');
    TEXTURES.water = load('textures/water.jpg'); // Assuming water texture exists or fallback
    TEXTURES.bone = load('textures/bone.jpg'); // Assuming bone texture or fallback
}

function setupCommonLighting() {
    const ambientLight = new THREE.AmbientLight(0x404060, 0.4); 
    scene.add(ambientLight);
}

function buildScene(type) {
    // Cleanup
    while(scene.children.length > 0){ 
        scene.remove(scene.children[0]); 
    }
    interactiveObjects = [];
    animatables = [];

    // Re-add ambient light
    setupCommonLighting();

    // Set Camera
    if(LOCATIONS[type] && LOCATIONS[type].camPos) {
        const p = LOCATIONS[type].camPos;
        camera.position.set(p.x, p.y, p.z);
        controls.target.set(0, 1, 0);
    }

    // Build Specific Room
    switch(type) {
        case 'breach': buildVigilanceBreach(); break;
        case 'facility': buildProcessingFacility(); break;
        case 'rakasha': buildRakashaCamp(); break;
        case 'harbor': buildCheepCheepHarbor(); break;
    }

    // Add Characters
    if (LOCATIONS[type]) {
        addCharacters(LOCATIONS[type].characters);
    }
}

// --- HELPER FOR PROPS ---
function createProp(geo, mat, x, y, z, rx=0, ry=0, rz=0, scale=1) {
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.rotation.set(rx, ry, rz);
    mesh.scale.set(scale, scale, scale);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
}

function createBox(w, h, d, mat, x, y, z, rx=0, ry=0, rz=0) {
    return createProp(new THREE.BoxGeometry(w, h, d), mat, x, y, z, rx, ry, rz);
}

// --- SCENE BUILDERS ---

function buildVigilanceBreach() {
    const group = new THREE.Group();
    
    // Floor (Metal Deck)
    const floorGeo = new THREE.PlaneGeometry(30, 40);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x444444, map: TEXTURES.floor_metal, roughness: 0.7 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    group.add(floor);

    // Walls (Airship Interior)
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.6 });
    group.add(createBox(1, 10, 40, wallMat, -15, 5, 0));
    group.add(createBox(1, 10, 40, wallMat, 15, 5, 0));
    
    // The Breached Door (Back Wall)
    // Broken frame
    group.add(createBox(10, 8, 1, wallMat, 0, 4, -15)); // Surround
    // The Hole
    const breachLight = new THREE.PointLight(0xff0000, 2, 20); // Red alert light
    breachLight.position.set(0, 6, -14);
    group.add(breachLight);
    
    // Debris from breach
    for(let i=0; i<15; i++) {
        const size = 0.3 + Math.random() * 0.5;
        group.add(createProp(new THREE.DodecahedronGeometry(size), wallMat, (Math.random()-0.5)*6, 0.5, -12 + Math.random()*4, Math.random(), Math.random(), Math.random()));
    }

    // Consoles (Flickering)
    const consoleMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a });
    const screenMat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    
    group.add(createBox(4, 1.5, 1.5, consoleMat, -8, 1, 5));
    group.add(createBox(4, 1.5, 1.5, consoleMat, 8, 1, 5));
    
    // Escape Hatch (Ryan's exit)
    group.add(createBox(3, 0.2, 3, new THREE.MeshStandardMaterial({color:0x222222}), 5, 0.1, 5));
    const openHatch = createBox(3, 0.2, 3, new THREE.MeshStandardMaterial({color:0x333333}), 7, 1.5, 5, 0, 0, 1); // Open flap
    group.add(openHatch);

    scene.add(group);
}

function buildProcessingFacility() {
    const group = new THREE.Group();
    
    // Cold Stone Floor
    const floorGeo = new THREE.PlaneGeometry(30, 30);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x555555, map: TEXTURES.wall_stone });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    group.add(floor);

    // Cages/Cells
    const barMat = new THREE.MeshStandardMaterial({ color: 0x222222 });
    for (let i = 0; i < 3; i++) {
        // Cell Block Left
        group.add(createBox(0.1, 4, 4, barMat, -10, 2, -10 + (i*6)));
        group.add(createBox(4, 0.1, 4, barMat, -12, 4, -10 + (i*6))); // Roof
        group.add(createBox(0.1, 4, 4, barMat, -14, 2, -10 + (i*6))); // Back
    }

    // Torture/Processing Tables
    const tableMat = new THREE.MeshStandardMaterial({ color: 0x3d2817 });
    group.add(createBox(3, 1, 5, tableMat, 5, 0.5, -5));
    
    // Alchemical Desk
    group.add(createBox(4, 1.5, 2, tableMat, 0, 1, 10));
    // Bottles
    group.add(createProp(new THREE.CylinderGeometry(0.2, 0.2, 0.5), new THREE.MeshBasicMaterial({color:0x00ff00}), 0, 2, 10));
    group.add(createProp(new THREE.CylinderGeometry(0.2, 0.2, 0.5), new THREE.MeshBasicMaterial({color:0xff0000}), 1, 2, 10));

    // Gas Vent (Bathroom Sabotage reference)
    const vent = createBox(1, 1, 0.5, new THREE.MeshStandardMaterial({color:0x555555}), 10, 5, 0);
    group.add(vent);
    // Green gas particle effect placeholder
    const gasGeo = new THREE.SphereGeometry(0.5);
    const gasMat = new THREE.MeshBasicMaterial({color: 0x00ff00, transparent: true, opacity: 0.3});
    for(let k=0; k<5; k++) {
        const puff = new THREE.Mesh(gasGeo, gasMat);
        puff.position.set(9, 4 - k*0.5, 0);
        group.add(puff);
        animatables.push({ mesh: puff, type: 'float_up', speed: 0.02, limit: 5, startY: 2 });
    }

    // Lighting (Harsh, cold)
    const overhead = new THREE.PointLight(0xccffff, 0.8, 20);
    overhead.position.set(0, 8, 0);
    group.add(overhead);

    scene.add(group);
}

function buildRakashaCamp() {
    const group = new THREE.Group();
    
    // Ground (Dirt/Grass)
    const floorGeo = new THREE.PlaneGeometry(40, 40);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x3b2e22, roughness: 1.0 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    group.add(floor);

    // Dragon Skeleton (Ribcage)
    const boneMat = new THREE.MeshStandardMaterial({ color: COLORS.bone, roughness: 0.5 });
    for(let i=0; i<6; i++) {
        // Rib Arch Left
        const ribL = createProp(new THREE.TorusGeometry(6, 0.3, 8, 16, 2), boneMat, 0, 0, -10 + (i*3), 0, 0, 0.5);
        ribL.position.y = -2; // Bury partially
        group.add(ribL);
    }
    // Skull
    const skull = createProp(new THREE.DodecahedronGeometry(2.5), boneMat, 0, 1, -15);
    group.add(skull);

    // Bonfire
    const fireWood = new THREE.Group();
    for(let i=0; i<5; i++) {
        fireWood.add(createProp(new THREE.CylinderGeometry(0.2, 0.2, 2), new THREE.MeshStandardMaterial({color:0x5c4033}), (Math.random()-0.5), 0.2, (Math.random()-0.5), Math.random(), Math.random(), Math.random()));
    }
    group.add(fireWood);
    
    // Fire Light
    const fireLight = new THREE.PointLight(0xffaa00, 2, 15);
    fireLight.position.set(0, 1, 0);
    fireLight.castShadow = true;
    animatables.push({ mesh: fireLight, type: 'flicker', baseInt: 2, varInt: 0.5 });
    group.add(fireLight);

    // Totems/Chimes
    for(let i=0; i<4; i++) {
        const pole = createProp(new THREE.CylinderGeometry(0.1, 0.1, 6), new THREE.MeshStandardMaterial({color:0x5c4033}), 8, 3, -5 + (i*4));
        group.add(pole);
        // Skull on top
        group.add(createProp(new THREE.DodecahedronGeometry(0.4), boneMat, 8, 6, -5 + (i*4)));
    }

    scene.add(group);
}

function buildCheepCheepHarbor() {
    const group = new THREE.Group();
    
    // Water
    const waterGeo = new THREE.PlaneGeometry(60, 60);
    const waterMat = new THREE.MeshStandardMaterial({ color: 0x0055aa, transparent: true, opacity: 0.8, roughness: 0.1 });
    const water = new THREE.Mesh(waterGeo, waterMat);
    water.rotation.x = -Math.PI / 2;
    water.position.y = -1;
    group.add(water);

    // Wooden Docks
    const dockMat = new THREE.MeshStandardMaterial({ color: 0x8b5a2b, map: TEXTURES.floor_wood });
    // Main Pier
    group.add(createBox(6, 1, 20, dockMat, 0, 0, 10));
    // Cross Pier
    group.add(createBox(20, 1, 6, dockMat, 0, 0, 0));

    // Posts
    for(let i=0; i<10; i++) {
        group.add(createProp(new THREE.CylinderGeometry(0.2, 0.2, 4), dockMat, -8, -1, -8 + (i*4)));
    }

    // The Giant Cheep Cheep (Procedural)
    const fishGroup = new THREE.Group();
    const fishSkinMat = new THREE.MeshStandardMaterial({ color: 0xff0000, roughness: 0.3 });
    const fishBellyMat = new THREE.MeshStandardMaterial({ color: 0xffcccc });
    
    // Body
    const body = new THREE.Mesh(new THREE.SphereGeometry(3, 16, 16), fishSkinMat);
    fishGroup.add(body);
    
    // Lips
    const lips = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.5, 16, 32), new THREE.MeshStandardMaterial({color: 0xffaaee}));
    lips.position.z = 2.5;
    fishGroup.add(lips);
    
    // Fins (Wings)
    const wingGeo = new THREE.BoxGeometry(0.2, 2, 3);
    const wingMat = new THREE.MeshStandardMaterial({color: 0xffffff}); // White fins
    const leftWing = new THREE.Mesh(wingGeo, wingMat);
    leftWing.position.set(3, 0, 0);
    leftWing.rotation.z = -0.5;
    fishGroup.add(leftWing);
    
    const rightWing = new THREE.Mesh(wingGeo, wingMat);
    rightWing.position.set(-3, 0, 0);
    rightWing.rotation.z = 0.5;
    fishGroup.add(rightWing);

    // Tail
    const tail = new THREE.Mesh(new THREE.ConeGeometry(1, 3, 8), fishSkinMat);
    tail.rotation.x = -Math.PI/2;
    tail.position.z = -3.5;
    fishGroup.add(tail);

    // Position Fish floating near dock
    fishGroup.position.set(0, 2, -10);
    animatables.push({ mesh: fishGroup, type: 'bob', speed: 1.5, offset: 0 });
    group.add(fishGroup);

    // Lighting
    const sun = new THREE.DirectionalLight(0xffffee, 1.0);
    sun.position.set(20, 30, 20);
    group.add(sun);

    scene.add(group);
}


// --- CHARACTER LOGIC ---

function addCharacters(chars) {
    chars.forEach(charData => {
        // Cheep Cheep uses a procedural model, skip sprite if id matches
        if (charData.id === 'cheep_cheep') return; 

        const map = textureLoader.load(charData.portrait || 'portraits/unknown.png');
        const material = new THREE.SpriteMaterial({ map: map });
        const mesh = new THREE.Sprite(material);
        
        const s = charData.scale || 2;
        mesh.scale.set(s, s, 1);
        
        if (charData.dead) {
             mesh.position.set(charData.pos.x, 0.3, charData.pos.z);
             material.rotation = Math.PI/2; // Lying down
        } else {
             mesh.position.set(charData.pos.x, charData.pos.y + (s/2), charData.pos.z);
        }
        
        if (!charData.dead) {
            animatables.push({ mesh: mesh, type: 'bob', speed: 2, offset: Math.random() });
        }

        mesh.userData = charData;
        scene.add(mesh);
        interactiveObjects.push(mesh);
    });
}

// --- ANIMATION LOOP ---
function onPointerMove(event) {
    const rect = container.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / container.clientHeight) * 2 + 1;

    if (!tooltip.classList.contains('hidden')) {
        tooltip.style.left = (event.clientX - rect.left + 10) + 'px';
        tooltip.style.top = (event.clientY - rect.top + 10) + 'px';
    }
}

function animate() {
    animationId = requestAnimationFrame(animate);
    const time = Date.now() * 0.001;

    controls.update();

    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(interactiveObjects);

    if (intersects.length > 0) {
        const obj = intersects[0].object;
        const data = obj.userData;
        if (data && data.name) {
            tooltip.classList.remove('hidden');
            tooltip.innerHTML = `
                <h4>${data.name}</h4>
                <p><strong>Status:</strong> <span style="color:${COLORS.highlight}">${data.status}</span></p>
            `;
            document.body.style.cursor = 'pointer';
        }
    } else {
        tooltip.classList.add('hidden');
        document.body.style.cursor = 'default';
    }

    // Animations
    animatables.forEach(a => {
        if (a.type === 'bob') {
            a.mesh.position.y += Math.sin(time * a.speed + a.offset) * 0.005;
        } else if (a.type === 'float_up') {
             a.mesh.position.y += a.speed;
             if(a.mesh.position.y > a.limit) a.mesh.position.y = a.startY;
        } else if (a.type === 'flicker') {
             a.mesh.intensity = a.baseInt + Math.sin(time * 10) * a.varInt;
        }
    });

    renderer.render(scene, camera);
}

function onWindowResize() {
    if (!camera || !renderer) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

// Start
init();
