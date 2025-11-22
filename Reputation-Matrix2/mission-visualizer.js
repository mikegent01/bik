
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// DOM Elements
const container = document.getElementById('tactical-visualizer-container');
const tooltip = document.getElementById('tactical-tooltip');
const buttons = document.querySelectorAll('.vis-btn');

// State
let scene, camera, renderer, controls, animationId;
let raycaster, pointer, mouseLight;
let interactiveObjects = [];
let currentSceneType = 'breach';
let animatables = []; 
let textureLoader;
let mousePlane; // Invisible plane for raycasting the mouse light

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
    bone: 0xeaddcf,
    wood: 0x5c4033,
    stone: 0x555555
};

// --- SCENE DATA ---
const LOCATIONS = {
    // --- DAY 20 EVENTS ---
    breach: {
        title: "Vigilance Bridge - The Betrayal",
        camPos: {x: 0, y: 12, z: 18},
        characters: [
            { id: 'ryan', name: "Ryan", status: "Fleeing", pos: { x: 6, y: 0, z: 6 }, portrait: "toads/ryan.png", scale: 1.5 },
            { id: 'aie', name: "Aie (Traitor)", status: "Opening Doors", pos: { x: -2, y: 0, z: 0 }, portrait: "toads/toad.png", scale: 1.4 },
            { id: 'legion_officer', name: "Legion Officer", status: "Breaching", pos: { x: 0, y: 0, z: -10 }, portrait: "portraits/colonel_vera_steelstorm.png", scale: 1.8, isEnemy: true },
            { id: 'legion_soldier_1', name: "Legionnaire", status: "Attacking", pos: { x: -4, y: 0, z: -8 }, portrait: "faction_iron_legion.png", scale: 1.6, isEnemy: true },
            { id: 'legion_soldier_2', name: "Legionnaire", status: "Attacking", pos: { x: 4, y: 0, z: -8 }, portrait: "faction_iron_legion.png", scale: 1.6, isEnemy: true }
        ]
    },
    facility: {
        title: "Imperial Processing Facility",
        camPos: {x: 12, y: 15, z: 12},
        characters: [
            { id: 'bones', name: "Bones (Disguised)", status: "Infiltrating", pos: { x: 2, y: 0, z: 2 }, portrait: "toads/bones.png", scale: 1.5 },
            { id: 'creek', name: "Creek", status: "Captured/Injured", pos: { x: -6, y: 0.5, z: -6 }, portrait: "faction_freelancer.png", scale: 1.4, dead: true },
            { id: 'mechanic', name: "Legion Mechanic", status: "Sabotaging Vent", pos: { x: 8, y: 0, z: -5 }, portrait: "faction_iron_legion.png", scale: 1.6, isEnemy: true },
            { id: 'prisoner_toad', name: "Toad Prisoner", status: "Processing", pos: { x: -8, y: 0, z: 5 }, portrait: "toads/toad.png", scale: 1.2 },
            { id: 'guard_1', name: "Facility Guard", status: "Patrolling", pos: { x: 0, y: 0, z: -2 }, portrait: "faction_iron_legion.png", scale: 1.6, isEnemy: true }
        ]
    },
    rakasha: {
        title: "Rakasha Bone Festival",
        camPos: {x: 0, y: 10, z: 20},
        characters: [
            { id: 'ryan_saved', name: "Ryan", status: "Recovering", pos: { x: -3, y: 0, z: 4 }, portrait: "toads/ryan.png", scale: 1.5 },
            { id: 'rakasha_healer', name: "Rakasha Healer", status: "Tending", pos: { x: -1, y: 0, z: 2 }, portrait: "portraits/chief_thornpaw.png", scale: 1.8 },
            { id: 'rakasha_warrior', name: "Rakasha Warrior", status: "Chanting", pos: { x: 5, y: 0, z: -5 }, portrait: "faction_rakasha.png", scale: 1.8 },
            { id: 'rakasha_dancer', name: "Spirit Dancer", status: "Ritual", pos: { x: -5, y: 0, z: -5 }, portrait: "faction_rakasha.png", scale: 1.8 }
        ]
    },
    harbor: {
        title: "Cheep Cheep Village Harbor",
        camPos: {x: 0, y: 25, z: 30},
        characters: [
            { id: 'embercap', name: "Embercap", status: "Boarding", pos: { x: 0, y: 4, z: 0 }, portrait: "toads/embercap.png", scale: 1.5 },
            { id: 'toadette', name: "Captain Toadette", status: "Commanding", pos: { x: -6, y: 0, z: 8 }, portrait: "toads/captain_toadette.png", scale: 1.6 },
            { id: 'loyalist_1', name: "Loyalist Soldier", status: "Ready", pos: { x: 4, y: 0, z: 8 }, portrait: "faction_peach_loyalists.png", scale: 1.3 },
            { id: 'cheep_cheep', name: "Giant Red Cheep Cheep", status: "Transport", pos: { x: 0, y: 1, z: -12 }, portrait: "faction_unaligned.png", scale: 8.0 }
        ]
    },

    // --- MANOR / PREVIOUS EVENTS ---
    kitchen: {
        title: "Manor: The Kitchen",
        camPos: {x: 8, y: 12, z: 8},
        characters: [
            { id: 'markop', name: "Markop", status: "Searching", pos: { x: 2, y: 0, z: 2 }, portrait: "portraits/markop.png", scale: 1.8 },
            { id: 'roger', name: "Roger", status: "Guarding", pos: { x: -2, y: 0, z: -2 }, portrait: "toads/roger.png", scale: 1.5 },
            { id: 'remi', name: "Remi", status: "Scavenging", pos: { x: 4, y: 0, z: -4 }, portrait: "portraits/remi.png", scale: 1.5 },
            { id: 'soldier1', name: "Cohort Soldier", status: "Patrolling", pos: { x: -5, y: 0, z: 5 }, portrait: "toads/toad.png", scale: 1.2 }
        ]
    },
    foyer: {
        title: "Manor: Grand Foyer",
        camPos: {x: 0, y: 15, z: 20},
        characters: [
            { id: 'hjumpik', name: "Hjumpik", status: "Alert", pos: { x: 0, y: 0, z: 0 }, portrait: "portraits/humpik.png", scale: 1.8 },
            { id: 'archie', name: "Archie", status: "Investigating", pos: { x: -3, y: 0, z: 2 }, portrait: "portraits/archie.png", scale: 1.5 },
            { id: 'bowser', name: "Bowser", status: "Commanding", pos: { x: 3, y: 0, z: 2 }, portrait: "portraits/bowser.png", scale: 2.5 },
            { id: 'toad_lee', name: "Toad Lee", status: "Guarding", pos: { x: -5, y: 0, z: 5 }, portrait: "toads/toad_lee.png", scale: 1.5 },
            { id: 'dan', name: "Dan", status: "Recovering", pos: { x: 5, y: 0, z: 5 }, portrait: "toads/dan.png", scale: 1.5 }
        ]
    },
    greenhouse: {
        title: "Manor: Burnt Greenhouse",
        camPos: {x: 10, y: 10, z: 10},
        characters: [
            { id: 'oracle', name: "The Oracle", status: "Watching", pos: { x: 0, y: 2, z: -5 }, portrait: "portraits/oracle.png", scale: 1.8 },
            { id: 'waluigi', name: "Waluigi", status: "Scheming", pos: { x: 5, y: 3, z: 0 }, portrait: "portraits/waluigi.png", scale: 1.7 },
            { id: 'eager', name: "Eager", status: "Injured", pos: { x: 6, y: 3, z: 1 }, portrait: "toads/eager.png", scale: 1.4 }
        ]
    },
    mirror: {
        title: "Mirror Dimension",
        camPos: {x: 0, y: 8, z: 15},
        characters: [
            { id: 'green_t', name: "Green T", status: "Trapped", pos: { x: 0, y: 0, z: 0 }, portrait: "toads/green_t.png", scale: 1.6 },
            { id: 'mirror_monster', name: "Mirror Entity", status: "Hunting", pos: { x: 0, y: 2, z: -5 }, portrait: "faction_unaligned.png", scale: 3.0 } // Procedural monster
        ]
    },
    cockpit: {
        title: "Vigilance Cockpit",
        camPos: {x: 0, y: 8, z: 12},
        characters: [
            { id: 'ryan_pilot', name: "Ryan", status: "Piloting", pos: { x: 0, y: 0, z: -3 }, portrait: "toads/ryan.png", scale: 1.5 },
            { id: 'toad_crew_1', name: "Toad Crew", status: "Working", pos: { x: -3, y: 0, z: 0 }, portrait: "toads/toad.png", scale: 1.2 },
            { id: 'toad_crew_2', name: "Toad Crew", status: "Working", pos: { x: 3, y: 0, z: 0 }, portrait: "toads/toad.png", scale: 1.2 }
        ]
    },
    interrogation: {
        title: "Interrogation Room",
        camPos: {x: 5, y: 8, z: 5},
        characters: [
            { id: 'bones_captive', name: "Bones", status: "Interrogated", pos: { x: 0, y: 0, z: 0 }, portrait: "toads/bones.png", scale: 1.5 },
            { id: 'mole', name: "The Mole", status: "Betraying", pos: { x: -2, y: 0, z: 2 }, portrait: "toads/the_mole.png", scale: 1.5 },
            { id: 'speaker_l', name: "Speaker L", status: "Observing", pos: { x: 2, y: 0, z: 3 }, portrait: "toads/toad_lee.png", scale: 1.5 } // Placeholder
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
    
    // Mouse Light Setup
    mouseLight = new THREE.PointLight(0xffffff, 1.5, 15);
    scene.add(mouseLight);
    
    // Invisible plane for mouse intersection
    mousePlane = new THREE.Mesh(
        new THREE.PlaneGeometry(100, 100),
        new THREE.MeshBasicMaterial({ visible: false })
    );
    mousePlane.rotation.x = -Math.PI / 2;
    mousePlane.position.y = 0.5; // Slightly above ground
    scene.add(mousePlane);

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
}

function setupCommonLighting() {
    const ambientLight = new THREE.AmbientLight(0x404060, 0.3); 
    scene.add(ambientLight);
}

function buildScene(type) {
    while(scene.children.length > 0){ 
        scene.remove(scene.children[0]); 
    }
    interactiveObjects = [];
    animatables = [];

    setupCommonLighting();
    scene.add(mouseLight); // Re-add mouse light
    scene.add(mousePlane); // Re-add intersection plane

    if(LOCATIONS[type] && LOCATIONS[type].camPos) {
        const p = LOCATIONS[type].camPos;
        camera.position.set(p.x, p.y, p.z);
        controls.target.set(0, 1, 0);
    }

    // Build Specific Room
    switch(type) {
        // Day 20
        case 'breach': buildVigilanceBreach(); break;
        case 'facility': buildProcessingFacility(); break;
        case 'rakasha': buildRakashaCamp(); break;
        case 'harbor': buildCheepCheepHarbor(); break;
        // Previous
        case 'kitchen': buildKitchen(); break;
        case 'foyer': buildFoyer(); break;
        case 'greenhouse': buildGreenhouse(); break;
        case 'mirror': buildMirrorDimension(); break;
        case 'cockpit': buildCockpit(); break;
        case 'interrogation': buildInterrogation(); break;
    }

    if (LOCATIONS[type]) {
        addCharacters(LOCATIONS[type].characters);
    }
}

// --- SCENE BUILDERS ---

// Helper to scatter random props
function scatterClutter(group, count, rangeX, rangeZ, yPos) {
    const geoms = [
        new THREE.BoxGeometry(0.4, 0.3, 0.4), // Crate
        new THREE.CylinderGeometry(0.1, 0.15, 0.4), // Bottle/Cup
        new THREE.DodecahedronGeometry(0.2), // Rock/Debris
        new THREE.BoxGeometry(0.5, 0.05, 0.3) // Book/Paper
    ];
    const mats = [
        new THREE.MeshStandardMaterial({color: 0x8b4513}), // Wood
        new THREE.MeshStandardMaterial({color: 0x888888}), // Metal
        new THREE.MeshStandardMaterial({color: 0xccffcc, transparent: true, opacity: 0.6}), // Glass
        new THREE.MeshStandardMaterial({color: 0xeeeeee}) // Paper
    ];

    for(let i = 0; i < count; i++) {
        const geom = geoms[Math.floor(Math.random() * geoms.length)];
        const mat = mats[Math.floor(Math.random() * mats.length)];
        const mesh = new THREE.Mesh(geom, mat);
        
        mesh.position.set(
            (Math.random() - 0.5) * rangeX,
            yPos + (Math.random() * 0.1),
            (Math.random() - 0.5) * rangeZ
        );
        mesh.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, Math.random()*Math.PI);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        group.add(mesh);
    }
}

function buildVigilanceBreach() {
    const group = new THREE.Group();
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(30, 40), new THREE.MeshStandardMaterial({color: 0x333333, roughness: 0.5}));
    floor.rotation.x = -Math.PI/2;
    group.add(floor);

    // Walls and Breach
    const wallMat = new THREE.MeshStandardMaterial({color: 0x222222});
    group.add(createBox(1, 8, 40, wallMat, -15, 4, 0));
    group.add(createBox(1, 8, 40, wallMat, 15, 4, 0));
    group.add(createBox(30, 8, 1, wallMat, 0, 4, -15)); // Back wall with hole

    // Debris from explosion
    scatterClutter(group, 50, 20, 20, 0.2);

    // Consoles
    group.add(createBox(4, 1.5, 2, new THREE.MeshStandardMaterial({color:0x111111}), -5, 0.75, 5));
    group.add(createBox(4, 1.5, 2, new THREE.MeshStandardMaterial({color:0x111111}), 5, 0.75, 5));

    const redLight = new THREE.PointLight(0xff0000, 2, 20);
    redLight.position.set(0, 6, -12);
    group.add(redLight);
    animatables.push({mesh: redLight, type: 'flicker', baseInt: 2, varInt: 1});

    scene.add(group);
}

function buildProcessingFacility() {
    const group = new THREE.Group();
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshStandardMaterial({color: 0x444444}));
    floor.rotation.x = -Math.PI/2;
    group.add(floor);

    // Cages
    for(let i=0; i<6; i++) {
        const x = (i % 2 === 0 ? -10 : 10);
        const z = -10 + (Math.floor(i/2) * 8);
        const cage = createBox(4, 4, 4, new THREE.MeshStandardMaterial({color: 0x222222, wireframe: true}), x, 2, z);
        group.add(cage);
    }

    // Lab Tables
    group.add(createBox(6, 1, 3, new THREE.MeshStandardMaterial({color:0xdddddd}), 0, 1, 0)); // Center table
    
    // Clutter: Alchemical supplies, chains
    scatterClutter(group, 40, 20, 20, 0.1);

    // Green gas
    const gasLight = new THREE.PointLight(0x00ff00, 1, 15);
    gasLight.position.set(8, 4, -5);
    group.add(gasLight);

    scene.add(group);
}

function buildRakashaCamp() {
    const group = new THREE.Group();
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(50, 50), new THREE.MeshStandardMaterial({color: 0x3b2e22}));
    floor.rotation.x = -Math.PI/2;
    group.add(floor);

    // Ribcage
    for(let i=0; i<5; i++) {
        const rib = new THREE.Mesh(new THREE.TorusGeometry(8, 0.5, 8, 16, 3), new THREE.MeshStandardMaterial({color: 0xeaddcf}));
        rib.position.set(0, -1, -10 + (i*4));
        group.add(rib);
    }

    // Bonfire
    const fireGeo = new THREE.ConeGeometry(1, 2, 8);
    const fireMat = new THREE.MeshBasicMaterial({color: 0xff4500});
    const fire = new THREE.Mesh(fireGeo, fireMat);
    fire.position.set(0, 1, 0);
    group.add(fire);
    animatables.push({mesh: fire, type: 'flicker_scale', speed: 10});

    const fireLight = new THREE.PointLight(0xffaa00, 2, 20);
    fireLight.position.set(0, 3, 0);
    group.add(fireLight);

    // Offerings (Skulls, Bowls)
    scatterClutter(group, 35, 10, 10, 0.2);

    scene.add(group);
}

function buildCheepCheepHarbor() {
    const group = new THREE.Group();
    const water = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.MeshStandardMaterial({color: 0x004488, transparent: true, opacity: 0.8}));
    water.rotation.x = -Math.PI/2;
    water.position.y = -1;
    group.add(water);

    // Dock
    const dock = createBox(10, 1, 30, new THREE.MeshStandardMaterial({color: 0x8b5a2b}), 0, 0, 0);
    group.add(dock);

    // Posts and Crates
    for(let i=0; i<8; i++) {
        group.add(createProp(new THREE.CylinderGeometry(0.2, 0.2, 3), new THREE.MeshStandardMaterial({color:0x5c4033}), -4, 1, -12 + (i*4)));
        group.add(createProp(new THREE.CylinderGeometry(0.2, 0.2, 3), new THREE.MeshStandardMaterial({color:0x5c4033}), 4, 1, -12 + (i*4)));
    }

    // Cargo
    scatterClutter(group, 40, 8, 25, 0.8);

    // Giant Fish (Procedural Cheep Cheep) is a character sprite in this mode, but let's add a shape for it to sit on if needed or just water.
    
    scene.add(group);
}

function buildKitchen() {
    const group = new THREE.Group();
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), new THREE.MeshStandardMaterial({color: 0x553311}));
    floor.rotation.x = -Math.PI/2;
    group.add(floor);

    // Tables
    group.add(createBox(8, 1.5, 3, new THREE.MeshStandardMaterial({color: 0x8b4513}), 0, 0.75, 0));
    group.add(createBox(8, 1.5, 3, new THREE.MeshStandardMaterial({color: 0x8b4513}), 0, 0.75, 6));

    // Hearth
    group.add(createBox(6, 4, 2, new THREE.MeshStandardMaterial({color: 0x333333}), 0, 2, -12));
    const fireLight = new THREE.PointLight(0xffaa00, 1, 10);
    fireLight.position.set(0, 2, -11);
    group.add(fireLight);

    // Clutter: Food, plates, pots (30+)
    scatterClutter(group, 45, 10, 12, 1.6); // On tables/floor

    scene.add(group);
}

function buildFoyer() {
    const group = new THREE.Group();
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshStandardMaterial({color: 0xeeeeee}));
    floor.rotation.x = -Math.PI/2;
    group.add(floor);

    // Staircase (Abstract)
    for(let i=0; i<10; i++) {
        group.add(createBox(10, 0.5, 2, new THREE.MeshStandardMaterial({color: 0xffffff}), 0, i*0.5, -10 - (i*2)));
    }

    // Pillars
    for(let i=0; i<4; i++) {
        group.add(createProp(new THREE.CylinderGeometry(1, 1, 10), new THREE.MeshStandardMaterial({color: 0xcccccc}), -10, 5, -5 + (i*8)));
        group.add(createProp(new THREE.CylinderGeometry(1, 1, 10), new THREE.MeshStandardMaterial({color: 0xcccccc}), 10, 5, -5 + (i*8)));
    }

    // Debris/Dust
    scatterClutter(group, 30, 30, 30, 0.2);

    scene.add(group);
}

function buildGreenhouse() {
    const group = new THREE.Group();
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), new THREE.MeshStandardMaterial({color: 0x223322}));
    floor.rotation.x = -Math.PI/2;
    group.add(floor);

    // Frame
    const frameMat = new THREE.MeshStandardMaterial({color: 0x111111, wireframe: false});
    for(let i=0; i<5; i++) {
        const arch = new THREE.Mesh(new THREE.TorusGeometry(10, 0.2, 8, 16, 3.2), frameMat);
        arch.position.set(0, 0, -10 + (i*5));
        group.add(arch);
    }

    // Broken Glass / Plants
    scatterClutter(group, 60, 20, 20, 0.1);

    // Smoldering Fire
    const smokeGeo = new THREE.DodecahedronGeometry(0.5);
    const smokeMat = new THREE.MeshBasicMaterial({color: 0x555555, transparent: true, opacity: 0.5});
    for(let i=0; i<10; i++) {
        const smoke = new THREE.Mesh(smokeGeo, smokeMat);
        smoke.position.set((Math.random()-0.5)*10, Math.random()*3, (Math.random()-0.5)*10);
        group.add(smoke);
        animatables.push({mesh: smoke, type: 'float_up', speed: 0.01, limit: 5, startY: 0});
    }

    scene.add(group);
}

function buildMirrorDimension() {
    const group = new THREE.Group();
    
    // Floating Platforms
    for(let i=0; i<10; i++) {
        const plat = createBox(4 + Math.random()*4, 0.5, 4 + Math.random()*4, new THREE.MeshStandardMaterial({color: 0xaa00aa}), (Math.random()-0.5)*20, Math.random()*10, (Math.random()-0.5)*20);
        group.add(plat);
    }

    // Giant Mirror Frame
    const frame = createBox(12, 16, 1, new THREE.MeshStandardMaterial({color: 0xffd700}), 0, 8, -10);
    group.add(frame);
    const glass = createBox(10, 14, 0.5, new THREE.MeshBasicMaterial({color: 0xccccff, transparent: true, opacity: 0.6}), 0, 8, -9.5);
    group.add(glass);

    // Floating Shards (Clutter)
    for(let i=0; i<40; i++) {
        const shard = new THREE.Mesh(new THREE.TetrahedronGeometry(0.5), new THREE.MeshBasicMaterial({color: 0xffffff}));
        shard.position.set((Math.random()-0.5)*30, Math.random()*15, (Math.random()-0.5)*30);
        group.add(shard);
        animatables.push({mesh: shard, type: 'bob', speed: 1 + Math.random(), offset: Math.random()});
    }

    scene.add(group);
}

function buildCockpit() {
    const group = new THREE.Group();
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(15, 20), new THREE.MeshStandardMaterial({color: 0x333344}));
    floor.rotation.x = -Math.PI/2;
    group.add(floor);

    // Console
    group.add(createBox(10, 1.5, 2, new THREE.MeshStandardMaterial({color: 0x222222}), 0, 1, -6));
    
    // Chairs
    group.add(createBox(1.5, 2, 1.5, new THREE.MeshStandardMaterial({color: 0x550000}), 0, 1, -2)); // Pilot
    group.add(createBox(1.5, 2, 1.5, new THREE.MeshStandardMaterial({color: 0x550000}), -4, 1, 0)); 
    group.add(createBox(1.5, 2, 1.5, new THREE.MeshStandardMaterial({color: 0x550000}), 4, 1, 0)); 

    // Windows
    const windowFrame = new THREE.Mesh(new THREE.CylinderGeometry(8, 8, 5, 8, 1, true, 0, Math.PI), new THREE.MeshBasicMaterial({color: 0x00ffff, transparent: true, opacity: 0.2, side: THREE.DoubleSide}));
    windowFrame.rotation.x = -Math.PI/2;
    windowFrame.position.z = -5;
    windowFrame.position.y = 3;
    group.add(windowFrame);

    // Loose items (coffee cups, tools)
    scatterClutter(group, 30, 10, 10, 1.0);

    scene.add(group);
}

function buildInterrogation() {
    const group = new THREE.Group();
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(15, 15), new THREE.MeshStandardMaterial({color: 0x222222}));
    floor.rotation.x = -Math.PI/2;
    group.add(floor);

    // Table and Chair
    group.add(createBox(4, 1, 2, new THREE.MeshStandardMaterial({color: 0x555555}), 0, 0.5, 0));
    group.add(createBox(1, 1.5, 1, new THREE.MeshStandardMaterial({color: 0x333333}), 0, 0.75, 2));

    // Light
    const spotlight = new THREE.SpotLight(0xffffff, 2);
    spotlight.position.set(0, 8, 0);
    spotlight.target.position.set(0, 0, 0);
    group.add(spotlight);
    group.add(spotlight.target);

    // Tools/Files on table and floor
    scatterClutter(group, 35, 12, 12, 0.1);

    scene.add(group);
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

// --- CHARACTER LOGIC ---
function addCharacters(chars) {
    chars.forEach(charData => {
        // Giant Cheep Cheep and Mirror Monster use procedural geometry if no sprite, 
        // but here we assume sprites for consistency or simple shapes if ID matches.
        if (charData.id === 'cheep_cheep') {
            const geo = new THREE.SphereGeometry(charData.scale, 16, 16);
            const mat = new THREE.MeshBasicMaterial({color: 0xff0000});
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.set(charData.pos.x, charData.pos.y, charData.pos.z);
            scene.add(mesh);
            interactiveObjects.push(mesh);
            return;
        }
        
        if (charData.id === 'mirror_monster') {
             const geo = new THREE.DodecahedronGeometry(charData.scale);
             const mat = new THREE.MeshBasicMaterial({color: 0x00ffff, wireframe: true});
             const mesh = new THREE.Mesh(geo, mat);
             mesh.position.set(charData.pos.x, charData.pos.y, charData.pos.z);
             scene.add(mesh);
             interactiveObjects.push(mesh);
             animatables.push({mesh: mesh, type: 'bob', speed: 0.5, offset: 0});
             return;
        }

        const map = textureLoader.load(charData.portrait || 'portraits/unknown.png');
        const material = new THREE.SpriteMaterial({ map: map });
        const mesh = new THREE.Sprite(material);
        
        const s = charData.scale || 2;
        mesh.scale.set(s, s, 1);
        
        if (charData.dead) {
             mesh.position.set(charData.pos.x, 0.3, charData.pos.z);
             material.rotation = Math.PI/2; 
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

    // Update Mouse Light Position using Raycaster against invisible plane
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObject(mousePlane);
    if (intersects.length > 0) {
        const point = intersects[0].point;
        // Lift light slightly above the intersection point
        mouseLight.position.set(point.x, point.y + 2, point.z);
    }
}

function animate() {
    animationId = requestAnimationFrame(animate);
    const time = Date.now() * 0.001;

    controls.update();

    // Tooltip interaction
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
        } else if (a.type === 'flicker_scale') {
             a.mesh.scale.y = 1 + Math.sin(time * a.speed) * 0.1;
             a.mesh.scale.x = 1 + Math.cos(time * a.speed) * 0.1;
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
