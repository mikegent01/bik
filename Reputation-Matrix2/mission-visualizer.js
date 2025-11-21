
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
let currentSceneType = 'foyer';
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
    rust: 0x8B4513
};

// --- SCENE DATA ---
const LOCATIONS = {
    kitchen: {
        title: "Manor Kitchen - Post-Battle Search",
        camPos: {x: 15, y: 12, z: 15},
        characters: [
            // Searching for Archie
            { id: 'markop', name: "Markop", status: "Searching", pos: { x: 0, y: 0, z: 0 }, portrait: "portraits/markop.png", scale: 1.8 },
            { id: 'roger', name: "Roger", status: "Scanning", pos: { x: -5, y: 0, z: 2 }, portrait: "toads/roger.png", scale: 1.5 },
            { id: 'remi', name: "Remi (FNG)", status: "Checking Cabinets", pos: { x: 5, y: 0, z: -3 }, portrait: "portraits/remi.png", scale: 1.5 },
            // Speaker L's Squad (Generic Soldiers)
            { id: 'cohort_1', name: "Cohort Soldier", status: "Securing", pos: { x: -8, y: 0, z: -5 }, portrait: "toads/toad_lee.png", scale: 1.4 },
            { id: 'cohort_2', name: "Cohort Soldier", status: "Guarding", pos: { x: 8, y: 0, z: 5 }, portrait: "toads/toad_lee.png", scale: 1.4 },
            // Dead Monsters
            { id: 'dead_rust_1', name: "Defeated Rust Monster", status: "Deceased", pos: { x: 2, y: 0, z: 4 }, portrait: "enemy", scale: 1.2, isMonster: true, dead: true },
            { id: 'dead_rust_2', name: "Defeated Rust Monster", status: "Deceased", pos: { x: -3, y: 0, z: -2 }, portrait: "enemy", scale: 1.2, isMonster: true, dead: true },
            { id: 'dead_rust_3', name: "Defeated Rust Monster", status: "Deceased", pos: { x: 6, y: 0, z: -6 }, portrait: "enemy", scale: 1.2, isMonster: true, dead: true }
        ]
    },
    foyer: {
        title: "Raventree Manor - Grand Foyer",
        camPos: {x: 0, y: 20, z: 45},
        characters: [
            // Safe zones in center/front
            { id: 'humpik', name: "Humpik", status: "On Guard", pos: { x: -3, y: 0, z: 2 }, portrait: "portraits/humpik.png", scale: 2 },
            { id: 'archie', name: "Archie", status: "Scouting", pos: { x: 3, y: 0, z: 2 }, portrait: "portraits/archie.png", scale: 1.5 },
            { id: 'toad_lee', name: "Toad Lee", status: "Alert", pos: { x: -6, y: 0, z: 6 }, portrait: "toads/toad_lee.png", scale: 1.5 },
            { id: 'bowser', name: "Bowser", status: "Impatient", pos: { x: 0, y: 0, z: -3 }, portrait: "portraits/bowser.png", scale: 4 },
            { id: 'dan', name: "Dan", status: "Apprehensive", pos: { x: 6, y: 0, z: 6 }, portrait: "toads/dan.png", scale: 1.5 },
            { id: 'toadburt', name: "Toadburt", status: "Terrified", pos: { x: 8, y: 0, z: 8 }, portrait: "toads/toad.png", scale: 1.4 }
        ]
    },
    greenhouse: {
        title: "Burnt Greenhouse - The Aftermath",
        camPos: {x: 35, y: 25, z: 15},
        characters: [
            // Green T removed.
            { id: 'oracle', name: "The Oracle", status: "Observing", pos: { x: 5, y: 0, z: -2 }, portrait: "portraits/oracle.png", scale: 2.5, isGhost: true },
            // Upper level - Walkway
            { id: 'waluigi', name: "Waluigi", status: "Perched Above", pos: { x: -5, y: 12, z: 0 }, portrait: "portraits/waluigi.png", scale: 3 },
            { id: 'eager', name: "Eager", status: "CRITICAL (Botched Surgery)", pos: { x: -2, y: 12.2, z: 0 }, portrait: "toads/eager.png", scale: 1.5, rotation: {x: -Math.PI/2, y:0, z:0} }
        ]
    },
    mirror: {
        title: "Mirror Dimension - The Trap",
        camPos: {x: 0, y: 5, z: 20},
        characters: [
            { id: 'green_t', name: "Green T", status: "TRAPPED", pos: { x: 0, y: 0, z: 0 }, portrait: "toads/green_t.png", scale: 1.8 },
            // The Monster is procedural in buildMirrorDimension
        ]
    },
    airship: {
        title: "Vigilance - Cockpit",
        camPos: {x: 0, y: 8, z: 15},
        characters: [
            { id: 'ryan', name: "Ryan", status: "Piloting", pos: { x: 0, y: 0.5, z: -4 }, portrait: "toads/ryan.png", scale: 1.5 },
            // Toads are generated procedurally in background
        ]
    },
    interrogation: {
        title: "Aegis Command - Interrogation Room",
        camPos: {x: 8, y: 8, z: 8},
        characters: [
            { id: 'bones', name: "Bones", status: "Restrained", pos: { x: 0, y: 0.5, z: 0 }, portrait: "toads/bones.png", scale: 1.5 },
            { id: 'mole', name: "The Mole", status: "Interrogating", pos: { x: 2, y: 0, z: 2 }, portrait: "toads/the_mole.png", scale: 1.5 },
            { id: 'speaker_l', name: "Speaker L", status: "Observing", pos: { x: -3, y: 0, z: 3 }, portrait: "toads/speaker_l.png", scale: 1.5 }
        ]
    }
};

function init() {
    if (!container) return;

    // 1. Setup Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x05070a);
    scene.fog = new THREE.FogExp2(0x05070a, 0.015);

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
    TEXTURES.floor_marble = load('textures/stone_brick.jpg'); 
    TEXTURES.floor_wood = load('textures/wood_planks.jpg');
    TEXTURES.wall_stone = load('textures/stone_brick.jpg');
    TEXTURES.metal = load('textures/metal_rust.jpg');
    TEXTURES.glass = load('textures/glass_dirty.png');
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
        controls.target.set(0, 2, 0);
    }

    // Build Specific Room
    switch(type) {
        case 'foyer': buildFoyer(); break;
        case 'kitchen': buildKitchen(); break;
        case 'greenhouse': buildGreenhouse(); break;
        case 'airship': buildCockpit(); break;
        case 'mirror': buildMirrorDimension(); break;
        case 'interrogation': buildInterrogationRoom(); break;
    }

    // Add Characters
    if (LOCATIONS[type]) {
        addCharacters(LOCATIONS[type].characters);
        // Special procedural characters for Airship
        if (type === 'airship') addToadCrew();
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

// --- ROOM BUILDERS ---

function buildFoyer() {
    const group = new THREE.Group();
    
    // 1. Architecture (Ruined Grandeur)
    // Floor
    const floorGeo = new THREE.PlaneGeometry(40, 60);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x555555, map: TEXTURES.floor_marble, roughness: 0.6 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    group.add(floor);

    // Walls
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, map: TEXTURES.wall_stone });
    group.add(createBox(1, 25, 60, wallMat, -20, 12.5, 0)); 
    group.add(createBox(1, 25, 60, wallMat, 20, 12.5, 0));
    group.add(createBox(40, 25, 1, wallMat, 0, 12.5, -30)); // Back wall

    // Grand Staircase (Broken)
    for(let i=0; i<15; i++) {
        if(i === 7 || i === 12) continue; // Missing steps
        group.add(createBox(8, 0.5, 2, floorMat, 0, i*1, -28 + (i*1.5)));
    }
    // Balcony
    group.add(createBox(40, 1, 10, floorMat, 0, 15, -25));

    // 2. PROPS (35+ items)
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x3d2817, map: TEXTURES.floor_wood });
    const velvetMat = new THREE.MeshStandardMaterial({ color: 0x660000 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.8, roughness: 0.2 });

    // Pillars (some fallen)
    for(let i=0; i<6; i++) {
        const x = (i%2===0 ? -12 : 12);
        const z = -20 + (Math.floor(i/2) * 15);
        if(i === 4) {
            // Fallen pillar
            group.add(createProp(new THREE.CylinderGeometry(1, 1, 15, 8), floorMat, x, 1, z, 0, 0, Math.PI/2.2));
        } else {
            group.add(createProp(new THREE.CylinderGeometry(1, 1, 25, 8), floorMat, x, 12.5, z));
        }
    }

    // Fallen Chandelier
    const chandelierGroup = new THREE.Group();
    chandelierGroup.add(createProp(new THREE.TorusGeometry(3, 0.2, 8, 16), goldMat, 0, 0, 0, Math.PI/2, 0, 0));
    for(let k=0; k<8; k++) {
        chandelierGroup.add(createProp(new THREE.ConeGeometry(0.2, 1, 8), new THREE.MeshBasicMaterial({color:0xffffff}), Math.cos(k)*3, 0.5, Math.sin(k)*3));
    }
    chandelierGroup.position.set(5, 1, 5);
    chandelierGroup.rotation.z = 0.5;
    group.add(chandelierGroup);

    // Debris & Rubble (Scattered away from center characters)
    for(let i=0; i<15; i++) {
        const size = 0.5 + Math.random();
        const x = (Math.random() > 0.5 ? 10 : -10) + (Math.random()*8 - 4);
        const z = (Math.random()*40) - 20;
        group.add(createProp(new THREE.DodecahedronGeometry(size), floorMat, x, size/2, z, Math.random(), Math.random(), Math.random()));
    }

    // Portraits (Slashed) on Walls
    for(let i=0; i<4; i++) {
        const frame = createBox(0.2, 5, 3, goldMat, -19.4, 8, -10 + (i*10));
        group.add(frame);
    }

    // Benches/Furniture (Overturned)
    group.add(createBox(4, 0.5, 1.5, velvetMat, -15, 1, 10, 0.2, 0.5, 0));
    group.add(createBox(4, 0.5, 1.5, velvetMat, 15, 0.5, -5, 1.5, 0.2, 0.2));

    // Lighting
    const moonlight = new THREE.DirectionalLight(0x88aaff, 0.5);
    moonlight.position.set(-10, 20, 10);
    moonlight.castShadow = true;
    group.add(moonlight);

    scene.add(group);
}

function buildGreenhouse() {
    const group = new THREE.Group();

    // 1. Structure (Burnt Husk)
    const floorGeo = new THREE.PlaneGeometry(50, 50);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.9 }); // Ash floor
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    group.add(floor);

    const frameMat = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.5 }); // Charred metal
    
    // Skeletal Arches
    for(let i=0; i<6; i++) {
        const arch = createTorusArc(20, 0.5, 0x111111);
        arch.position.set(0, 0, -20 + (i*8));
        group.add(arch);
    }
    // Central Walkway (Where characters stand)
    const walkway = createBox(8, 0.5, 50, new THREE.MeshStandardMaterial({color: 0x333333}), 0, 12, 0);
    group.add(walkway);
    
    // Stairs to walkway
    const stairGroup = new THREE.Group();
    for(let i=0; i<24; i++) {
        stairGroup.add(createBox(4, 0.2, 1, frameMat, 0, i*0.5, i*1));
    }
    stairGroup.position.set(10, 0, -10); // Off to side
    group.add(stairGroup);

    // 2. PROPS (35+ items)
    const plantMat = new THREE.MeshStandardMaterial({ color: 0x2e1a0f }); // Dead brown
    const glassMat = new THREE.MeshPhysicalMaterial({ color: 0xaaddff, transparent: true, opacity: 0.3, side: THREE.DoubleSide });

    // Shattered Glass on floor (Scattered everywhere except center walkway projection)
    for(let i=0; i<20; i++) {
        const x = (Math.random() * 40) - 20;
        const z = (Math.random() * 40) - 20;
        // Avoid center strip under walkway
        if (Math.abs(x) < 5) continue; 
        
        const shard = new THREE.Mesh(new THREE.ConeGeometry(0.5, 0.1, 3), glassMat);
        shard.position.set(x, 0.1, z);
        shard.rotation.x = -Math.PI/2;
        shard.rotation.z = Math.random() * Math.PI;
        group.add(shard);
    }

    // Burnt Plants / Pots
    for(let i=0; i<15; i++) {
        const x = (Math.random() > 0.5 ? 1 : -1) * (6 + Math.random() * 10);
        const z = (Math.random() * 40) - 20;
        
        // Pot
        const pot = createProp(new THREE.CylinderGeometry(1, 0.8, 1.5, 8), new THREE.MeshStandardMaterial({color: 0x552200}), x, 0.75, z);
        if (Math.random() > 0.7) pot.rotation.z = 1.5; // Tipped over
        group.add(pot);

        // Dead Plant stalk
        group.add(createProp(new THREE.CylinderGeometry(0.1, 0.2, 3 + Math.random()*4), plantMat, x, 2.5, z, Math.random()*0.5, 0, Math.random()*0.5));
    }

    // Tools
    const metalMat = new THREE.MeshStandardMaterial({color: 0x555555});
    group.add(createProp(new THREE.BoxGeometry(0.2, 2, 0.2), metalMat, 5, 1, 5, 0, 0, 1)); // Shovel handle
    group.add(createProp(new THREE.BoxGeometry(1, 1, 1), metalMat, 6, 0.5, 6)); // Bucket

    // Ash Particles (Static for visualizer)
    const ashGeo = new THREE.BufferGeometry();
    const ashCount = 200;
    const ashPos = new Float32Array(ashCount * 3);
    for(let i=0; i<ashCount*3; i++) ashPos[i] = (Math.random() - 0.5) * 40;
    ashGeo.setAttribute('position', new THREE.BufferAttribute(ashPos, 3));
    const ashMat = new THREE.PointsMaterial({color: 0x888888, size: 0.2});
    const ashSystem = new THREE.Points(ashGeo, ashMat);
    ashSystem.position.y = 5;
    group.add(ashSystem);

    // Lighting (Orange glow from embers)
    const emberLight = new THREE.PointLight(0xff4400, 1, 30);
    emberLight.position.set(0, 2, 0);
    group.add(emberLight);
    
    const moonlight = new THREE.DirectionalLight(0x445588, 0.5);
    moonlight.position.set(10, 20, 10);
    group.add(moonlight);

    scene.add(group);
}

function buildCockpit() {
    const group = new THREE.Group();
    
    // 1. Structure (Claustrophobic High-Tech)
    const floorGeo = new THREE.CircleGeometry(12, 32);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.4, metalness: 0.6 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    group.add(floor);

    // Glass Canopy
    const glassGeo = new THREE.SphereGeometry(11.5, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.4);
    const glassMat = new THREE.MeshPhysicalMaterial({ color: 0x88ccff, metalness: 0.1, roughness: 0, transmission: 0.6, transparent: true, opacity: 0.3 });
    const canopy = new THREE.Mesh(glassGeo, glassMat);
    canopy.position.y = 1;
    canopy.scale.y = 0.8;
    group.add(canopy);

    // Metal Ribs
    const ribMat = new THREE.MeshStandardMaterial({ color: 0x554433, metalness: 0.8 });
    for(let i=0; i<4; i++) {
        const rib = createTorusArc(11.6, 0.3, 0x554433);
        rib.rotation.y = (i * Math.PI) / 4;
        rib.position.y = 1;
        rib.scale.y = 0.8;
        group.add(rib);
    }

    // 2. Cockpit Consoles & Props (35+)
    const consoleMat = new THREE.MeshStandardMaterial({ color: 0x222222 });
    const screenMat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const buttonMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });

    // Main Helm (Front) - Ryan's Position
    group.add(createBox(4, 1.5, 2, consoleMat, 0, 1, -8)); // Dashboard
    group.add(createBox(1, 1, 0.1, screenMat, 0, 1.8, -8)); // Main Screen
    group.add(createProp(new THREE.TorusGeometry(0.6, 0.1, 8, 16), new THREE.MeshStandardMaterial({color: 0x885522}), 0, 2, -7.5)); // Steering Yoke

    // Side Consoles
    for(let i=0; i<5; i++) {
        const angle = (i+1) * 0.5;
        // Left
        group.add(createBox(2, 1.2, 1.5, consoleMat, -8 * Math.cos(angle), 0.6, -8 * Math.sin(angle), 0, -angle, 0));
        // Right
        group.add(createBox(2, 1.2, 1.5, consoleMat, 8 * Math.cos(angle), 0.6, -8 * Math.sin(angle), 0, angle, 0));
    }

    // Overhead Dials/Pipes
    for(let i=0; i<10; i++) {
        const pipe = createProp(new THREE.CylinderGeometry(0.1, 0.1, 20), new THREE.MeshStandardMaterial({color: 0xaa8855}), 0, 5, -5 + i, 0, 0, Math.PI/2);
        group.add(pipe);
        
        // Hanging Gauge
        if (i % 3 === 0) {
            const gauge = createProp(new THREE.CylinderGeometry(0.5, 0.5, 0.2, 16), new THREE.MeshStandardMaterial({color: 0xffffff}), (i-5)*1.5, 4.8, -5+i, Math.PI/2, 0, 0);
            group.add(gauge);
        }
    }

    // Loose Items on Floor
    const toolMat = new THREE.MeshStandardMaterial({color: 0x555555});
    for(let i=0; i<8; i++) {
        group.add(createProp(new THREE.BoxGeometry(0.5, 0.3, 0.3), toolMat, (Math.random()-0.5)*10, 0.15, (Math.random()-0.5)*10, 0, Math.random(), 0));
    }

    // Captain's Chair
    group.add(createBox(1.5, 0.2, 1.5, new THREE.MeshStandardMaterial({color:0x550000}), 0, 1, 0)); // Seat
    group.add(createBox(1.5, 1.5, 0.2, new THREE.MeshStandardMaterial({color:0x550000}), 0, 1.5, 0.8)); // Back

    // Lighting
    const sun = new THREE.DirectionalLight(0xffffee, 1.2);
    sun.position.set(0, 10, -20);
    group.add(sun);
    const interiorLight = new THREE.PointLight(0x00aaff, 0.5, 10);
    interiorLight.position.set(0, 4, 0);
    group.add(interiorLight);

    scene.add(group);
}

function buildMirrorDimension() {
    const group = new THREE.Group();

    // 1. Environment (Surreal Void)
    // Floating Island Floor
    const islandGeo = new THREE.CylinderGeometry(15, 8, 5, 6);
    const islandMat = new THREE.MeshStandardMaterial({ color: 0x110022, flatShading: true, roughness: 0.2 });
    const island = new THREE.Mesh(islandGeo, islandMat);
    island.position.y = -2.5;
    group.add(island);

    // The Mirror Frame (Massive)
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x886600, metalness: 0.8 });
    const mirrorGeo = new THREE.PlaneGeometry(10, 16);
    const mirrorMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.8 }); // The void portal
    const mirror = new THREE.Mesh(mirrorGeo, mirrorMat);
    mirror.position.set(0, 8, -10);
    group.add(mirror);
    
    // Frame Parts
    group.add(createBox(1, 18, 1, frameMat, -5.5, 8, -10));
    group.add(createBox(1, 18, 1, frameMat, 5.5, 8, -10));
    group.add(createBox(12, 1, 1, frameMat, 0, 16.5, -10));

    // 2. PROPS (35+ Floating Shards/Tendrils)
    const shardMat = new THREE.MeshPhysicalMaterial({ color: 0xffffff, transmission: 0.5, opacity: 0.6, transparent: true, metalness: 0.1 });
    
    for(let i=0; i<30; i++) {
        const size = 0.5 + Math.random();
        const shard = new THREE.Mesh(new THREE.TetrahedronGeometry(size), shardMat);
        
        // Orbiting positions
        const angle = Math.random() * Math.PI * 2;
        const radius = 8 + Math.random() * 10;
        const y = 2 + Math.random() * 10;
        
        shard.position.set(Math.cos(angle)*radius, y, Math.sin(angle)*radius);
        
        // Animate rotation later
        animatables.push({ mesh: shard, type: 'float_rotate' });
        group.add(shard);
    }

    // 3. The Mirror Monster (Procedural Geometry)
    const monsterGeo = new THREE.IcosahedronGeometry(3, 1);
    const monsterMat = new THREE.MeshStandardMaterial({ color: 0x220044, flatShading: true, metalness: 0.9, roughness: 0.1 });
    const monster = new THREE.Mesh(monsterGeo, monsterMat);
    monster.position.set(0, 5, -5);
    animatables.push({ mesh: monster, type: 'pulse_scale' });
    group.add(monster);

    // Lighting
    const voidLight = new THREE.PointLight(0xaa00ff, 2, 30);
    voidLight.position.set(0, 10, 0);
    group.add(voidLight);
    const ambient = new THREE.AmbientLight(0x440044, 0.5);
    scene.add(ambient);

    scene.add(group);
}

function buildInterrogationRoom() {
    // Updated version of previous build
    const group = new THREE.Group();

    // Floor
    const floorGeo = new THREE.PlaneGeometry(20, 20);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x333333, map: TEXTURES.concrete });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    group.add(floor);

    // Walls (Claustrophobic)
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x555555, map: TEXTURES.metal });
    group.add(createBox(1, 10, 20, wallMat, -10, 5, 0));
    group.add(createBox(1, 10, 20, wallMat, 10, 5, 0));
    group.add(createBox(20, 10, 1, wallMat, 0, 5, -10));

    // Table & Chairs
    group.add(createBox(6, 0.2, 4, new THREE.MeshStandardMaterial({color: 0x888888}), 0, 1.5, 0));
    group.add(createBox(1, 1.5, 1, new THREE.MeshStandardMaterial({color: 0x222222}), 0, 0.75, 3)); // Chair

    // PROPS (35+)
    // Papers on table
    for(let i=0; i<10; i++) {
        group.add(createProp(new THREE.PlaneGeometry(0.3, 0.4), new THREE.MeshBasicMaterial({color: 0xffffff}), (Math.random()-0.5)*5, 1.61, (Math.random()-0.5)*3, -Math.PI/2, 0, Math.random()));
    }
    // Chains on wall
    for(let i=0; i<10; i++) {
        group.add(createProp(new THREE.CylinderGeometry(0.05, 0.05, 3), new THREE.MeshStandardMaterial({color:0x333333}), -9.8, 4, -8 + i*1.5));
    }
    // Cans/Trash on floor
    for(let i=0; i<15; i++) {
        group.add(createProp(new THREE.CylinderGeometry(0.1, 0.1, 0.3), new THREE.MeshStandardMaterial({color:0x880000}), (Math.random()-0.5)*18, 0.15, (Math.random()-0.5)*18, Math.PI/2, Math.random(), 0));
    }

    // Spot light
    const spot = new THREE.SpotLight(0xffffff, 5);
    spot.position.set(0, 9, 0);
    spot.target.position.set(0, 0, 0);
    spot.castShadow = true;
    group.add(spot);
    group.add(spot.target);

    scene.add(group);
}

function buildKitchen() {
    // Reuse previous logic but ensure no clipping
    // ... (Assuming previous logic was fine, just need to ensure character positions in LOCATIONS match safe areas)
    // Re-implementing brief version for completeness
    const group = new THREE.Group();
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(30,30), new THREE.MeshStandardMaterial({color:0xaaaaaa}));
    floor.rotation.x = -Math.PI/2;
    group.add(floor);
    
    // PROPS Loop (35+)
    for(let i=0; i<40; i++) {
        // Scatter around edges to leave center open for characters
        let x = (Math.random() > 0.5 ? 1 : -1) * (8 + Math.random() * 6);
        let z = (Math.random() * 28) - 14;
        
        const size = 0.5 + Math.random();
        group.add(createProp(new THREE.BoxGeometry(size, size, size), new THREE.MeshStandardMaterial({color: 0x8b4513}), x, size/2, z));
    }
    
    const light = new THREE.PointLight(0xffaa00, 1, 20);
    light.position.set(0, 8, 0);
    group.add(light);
    scene.add(group);
}


// --- HELPER GEOMETRY ---

function createBox(w, h, d, mat, x, y, z, rx=0, ry=0, rz=0) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    mesh.position.set(x, y, z);
    mesh.rotation.set(rx, ry, rz);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
}

function createTorusArc(radius, tube, color) {
    const geo = new THREE.TorusGeometry(radius, tube, 8, 20, Math.PI);
    const mat = new THREE.MeshStandardMaterial({ color: color });
    const mesh = new THREE.Mesh(geo, mat);
    return mesh;
}

// --- CHARACTER LOGIC ---

function addCharacters(chars) {
    chars.forEach(charData => {
        let mesh;

        if (charData.isMonster && charData.dead) {
            const geo = new THREE.DodecahedronGeometry(1.2, 0);
            const mat = new THREE.MeshStandardMaterial({ color: 0x8B4513, flatShading: true });
            mesh = new THREE.Mesh(geo, mat);
            mesh.scale.set(1, 0.3, 1); 
            mesh.rotation.set(Math.random(), Math.random(), Math.random());
        } else if (charData.isMonster) {
            // Live Rust Monster / Mirror Monster (Handled in scene build but if passed here)
        } else {
            const map = textureLoader.load(charData.portrait || 'portraits/unknown.png');
            const material = new THREE.SpriteMaterial({ map: map });
            mesh = new THREE.Sprite(material);
            if (charData.isGhost) material.opacity = 0.6;
        }

        const s = charData.scale || 2;
        mesh.scale.set(s, s, 1);
        
        if (charData.dead) {
             mesh.position.set(charData.pos.x, 0.3, charData.pos.z);
        } else {
             mesh.position.set(charData.pos.x, charData.pos.y + (s/2), charData.pos.z);
        }
        
        if (charData.rotation) {
             mesh.rotation.set(charData.rotation.x, charData.rotation.y, charData.rotation.z);
        } else if (!charData.isMonster && !charData.dead) {
            animatables.push({ mesh: mesh, type: 'bob', speed: 2, offset: Math.random() });
        }

        mesh.userData = charData;
        scene.add(mesh);
        interactiveObjects.push(mesh);
    });
}

function addToadCrew() {
    const toadMap = textureLoader.load('toads/toad.png');
    const mat = new THREE.SpriteMaterial({ map: toadMap, color: 0xaaaaaa }); 
    
    const crowdGroup = new THREE.Group();
    // Place toads in background area of cockpit (Z > 0)
    for(let i=0; i<10; i++) {
        const sprite = new THREE.Sprite(mat);
        const x = (Math.random() - 0.5) * 8;
        const z = 5 + (Math.random() * 5); 
        sprite.position.set(x, 1.5, z);
        crowdGroup.add(sprite);
        animatables.push({ mesh: sprite, type: 'bob', speed: 1 + Math.random(), offset: Math.random() * Math.PI });
    }
    scene.add(crowdGroup);
}

// --- INTERACTION & ANIMATION ---

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
        } else if (a.type === 'float_rotate') {
             a.mesh.rotation.x += 0.01;
             a.mesh.rotation.y += 0.02;
             a.mesh.position.y += Math.sin(time + a.mesh.position.x) * 0.01;
        } else if (a.type === 'pulse_scale') {
             const s = 1 + Math.sin(time * 2) * 0.1;
             a.mesh.scale.set(s, s, s);
             a.mesh.rotation.y += 0.01;
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
