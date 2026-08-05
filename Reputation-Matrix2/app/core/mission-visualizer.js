
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// --- DOM ELEMENTS ---
const container = document.getElementById('tactical-visualizer-container');
const tooltip = document.getElementById('tactical-tooltip');
const buttons = document.querySelectorAll('.vis-btn');

// --- STATE ---
let scene, camera, renderer, controls, animationId;
let raycaster, pointer, mouseLight, mousePlane;
let interactiveObjects = [];
let animatables = [];
let currentSceneType = 'breach';
let textureLoader;

// Texture cache (environment + portraits)
const TEXTURES = {};

// --- COLORS ---
const COLORS = {
    bg:        0x05070a,
    highlight: 0xffd700,
    ally:      0x3fb950,
    enemy:     0xf85149,
    neutral:   0xe3b341,
    critical:  0xe67e22,
    anomaly:   0x8A2BE2,
    fire:      0xff4500,
    rust:      0x8B4513,
    ice:       0xaaddff,
    bone:      0xeaddcf,
    wood:      0x5c4033,
    stone:     0x555555
};

// --- SCENE DATA ---
const LOCATIONS = {
    breach: {
        title: "Vigilance Bridge - The Betrayal",
        camPos: {x: 0, y: 12, z: 18},
        characters: [
            { id: 'ryan', name: "Ryan", status: "Fleeing", pos: { x: 6, y: 0, z: 6 }, portrait: "toads/ryan.png", scale: 1.5 },
            { id: 'aie', name: "Aie (Traitor)", status: "Opening Doors", pos: { x: -2, y: 0, z: 0 }, portrait: "toads/toad.png", scale: 1.4 },
            { id: 'legion_officer', name: "Legion Officer", status: "Breaching", pos: { x: 0, y: 0, z: -10 }, portrait: "portraits/assets/portraits/leaders/colonel_vera_steelstorm.png", scale: 1.8, isEnemy: true },
            { id: 'legion_soldier_1', name: "Legionnaire", status: "Attacking", pos: { x: -4, y: 0, z: -8 }, portrait: "assets/factions/faction_iron_legion.png", scale: 1.6, isEnemy: true },
            { id: 'legion_soldier_2', name: "Legionnaire", status: "Attacking", pos: { x: 4, y: 0, z: -8 }, portrait: "assets/factions/faction_iron_legion.png", scale: 1.6, isEnemy: true }
        ]
    },
    solarium: {
        title: "The Solarium Battle",
        camPos: {x: 0, y: 14, z: 14},
        characters: [
            { id: 'hjumpik', name: "hjumpik", status: "Mirror Combat", pos: { x: -4, y: 0, z: 2 }, portrait: "portraits/assets/portraits/party/hjumpik.png", scale: 1.8 },
            { id: 'bowser', name: "Bowser", status: "Punching Mirrors", pos: { x: 4, y: 0, z: 2 }, portrait: "portraits/assets/portraits/party/bowser.png", scale: 2.5 },
            { id: 'shard_stalker', name: "Shard Stalker", status: "Teleporting", pos: { x: 0, y: 2, z: -6 }, portrait: "assets/factions/faction_unaligned.png", scale: 3.0, isEnemy: true },
            { id: 'dan', name: "Dan", status: "Shattering Glass", pos: { x: -6, y: 0, z: 5 }, portrait: "toads/dan.png", scale: 1.5 },
            { id: 'oracle', name: "The Oracle", status: "Watching", pos: { x: 6, y: 1, z: 5 }, portrait: "portraits/oracle.png", scale: 1.8 },
            { id: 'archie', name: "Archie", status: "Using Fire", pos: { x: 0, y: 0, z: 8 }, portrait: "portraits/assets/portraits/party/archie.png", scale: 1.5 }
        ]
    },
    facility: {
        title: "Imperial Processing Facility",
        camPos: {x: 12, y: 15, z: 12},
        characters: [
            { id: 'bones', name: "Bones (Disguised)", status: "Infiltrating", pos: { x: 2, y: 0, z: 2 }, portrait: "toads/bones.png", scale: 1.5 },
            { id: 'creek', name: "Creek", status: "Captured/Injured", pos: { x: -6, y: 0.5, z: -6 }, portrait: "assets/factions/faction_freelancer.png", scale: 1.4, dead: true },
            { id: 'mechanic', name: "Legion Mechanic", status: "Sabotaging Vent", pos: { x: 8, y: 0, z: -5 }, portrait: "assets/factions/faction_iron_legion.png", scale: 1.6, isEnemy: true },
            { id: 'prisoner_toad', name: "Toad Prisoner", status: "Processing", pos: { x: -8, y: 0, z: 5 }, portrait: "toads/toad.png", scale: 1.2 },
            { id: 'guard_1', name: "Facility Guard", status: "Patrolling", pos: { x: 0, y: 0, z: -2 }, portrait: "assets/factions/faction_iron_legion.png", scale: 1.6, isEnemy: true }
        ]
    },
    rakasha: {
        title: "Rakasha Bone Festival",
        camPos: {x: 0, y: 10, z: 20},
        characters: [
            { id: 'ryan_saved', name: "Ryan", status: "Recovering", pos: { x: -3, y: 0, z: 4 }, portrait: "toads/ryan.png", scale: 1.5 },
            { id: 'rakasha_healer', name: "Rakasha Healer", status: "Tending", pos: { x: -1, y: 0, z: 2 }, portrait: "portraits/chief_thornpaw.png", scale: 1.8 },
            { id: 'rakasha_warrior', name: "Rakasha Warrior", status: "Chanting", pos: { x: 5, y: 0, z: -5 }, portrait: "assets/factions/faction_rakasha.png", scale: 1.8 },
            { id: 'rakasha_dancer', name: "Spirit Dancer", status: "Ritual", pos: { x: -5, y: 0, z: -5 }, portrait: "assets/factions/faction_rakasha.png", scale: 1.8 }
        ]
    },
    harbor: {
        title: "Cheep Cheep Village Harbor",
        camPos: {x: 0, y: 25, z: 30},
        characters: [
            { id: 'embercap', name: "Embercap", status: "Boarding", pos: { x: 0, y: 2, z: 4 }, portrait: "toads/embercap.png", scale: 1.5 },
            { id: 'toadette', name: "Captain Toadette", status: "Commanding", pos: { x: -6, y: 0, z: 8 }, portrait: "toads/captain_toadette.png", scale: 1.6 },
            { id: 'loyalist_1', name: "Loyalist Soldier", status: "Ready", pos: { x: 4, y: 0, z: 8 }, portrait: "assets/factions/faction_peach_loyalists.png", scale: 1.3 },
            { id: 'cheep_cheep', name: "Giant Red Cheep Cheep", status: "Transport", pos: { x: 0, y: 1, z: -10 }, portrait: "assets/factions/faction_unaligned.png", scale: 3.2 }
        ]
    },
    kitchen: {
        title: "Manor: The Kitchen",
        camPos: {x: 8, y: 12, z: 8},
        characters: [
            { id: 'markop', name: "Markop", status: "Searching", pos: { x: 2, y: 0, z: 2 }, portrait: "portraits/assets/portraits/party/markop.png", scale: 1.8 },
            { id: 'roger', name: "Roger", status: "Guarding", pos: { x: -2, y: 0, z: -2 }, portrait: "toads/roger.png", scale: 1.5 },
            { id: 'remi', name: "Remi", status: "Scavenging", pos: { x: 4, y: 0, z: -4 }, portrait: "portraits/assets/portraits/party/remi.png", scale: 1.5 },
            { id: 'soldier1', name: "Cohort Soldier", status: "Patrolling", pos: { x: -5, y: 0, z: 5 }, portrait: "toads/toad.png", scale: 1.2 }
        ]
    },
    foyer: {
        title: "Manor: Grand Foyer",
        camPos: {x: 0, y: 15, z: 20},
        characters: [
            { id: 'hjumpik', name: "Hjumpik", status: "Alert", pos: { x: 0, y: 0, z: 0 }, portrait: "portraits/assets/portraits/party/hjumpik.png", scale: 1.8 },
            { id: 'archie', name: "Archie", status: "Investigating", pos: { x: -3, y: 0, z: 2 }, portrait: "portraits/assets/portraits/party/archie.png", scale: 1.5 },
            { id: 'bowser', name: "Bowser", status: "Commanding", pos: { x: 3, y: 0, z: 2 }, portrait: "portraits/assets/portraits/party/bowser.png", scale: 2.5 },
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
            { id: 'mirror_monster', name: "Mirror Entity", status: "Hunting", pos: { x: 0, y: 2, z: -5 }, portrait: "assets/factions/faction_unaligned.png", scale: 3.0 }
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
            { id: 'speaker_l', name: "Speaker L", status: "Observing", pos: { x: 2, y: 0, z: 3 }, portrait: "toads/toad_lee.png", scale: 1.5 }
        ]
    }
};

// --- INIT ---
function init() {
    if (!container) return;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(COLORS.bg);
    scene.fog = new THREE.FogExp2(COLORS.bg, 0.02);

    textureLoader = new THREE.TextureLoader();
    loadTextures();

    camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    if ('outputColorSpace' in renderer) {
        renderer.outputColorSpace = THREE.SRGBColorSpace;
    }
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 100;
    controls.target.set(0, 1, 0);

    setupCommonLighting();

    // Mouse-follow light
    mouseLight = new THREE.PointLight(0xffffff, 1.2, 20);
    mouseLight.position.set(0, 5, 0);
    scene.add(mouseLight);

    // Invisible plane for raycasting cursor position
    mousePlane = new THREE.Mesh(
        new THREE.PlaneGeometry(200, 200),
        new THREE.MeshBasicMaterial({ visible: false })
    );
    mousePlane.rotation.x = -Math.PI / 2;
    mousePlane.position.y = 0.2;
    scene.add(mousePlane);

    raycaster = new THREE.Raycaster();
    pointer = new THREE.Vector2();
    container.addEventListener('mousemove', onPointerMove);

    buildScene(currentSceneType);
    animate();

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

// --- TEXTURES ---
function loadTextures() {
    const load = (path) =>
        textureLoader.load(path, (t) => {
            t.wrapS = t.wrapT = THREE.RepeatWrapping;
            t.colorSpace = THREE.SRGBColorSpace;
        });

    TEXTURES.floor_metal = load('textures/metal_rust.jpg');
    TEXTURES.floor_wood  = load('textures/wood_planks.jpg');
    TEXTURES.wall_stone  = load('textures/stone_brick.jpg');
}

// --- LIGHTING ---
function setupCommonLighting() {
    const ambient = new THREE.AmbientLight(0x404060, 0.45);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(10, 20, 5);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.set(1024, 1024);
    dirLight.shadow.camera.near = 1;
    dirLight.shadow.camera.far = 80;
    dirLight.shadow.camera.left = -40;
    dirLight.shadow.camera.right = 40;
    dirLight.shadow.camera.top = 40;
    dirLight.shadow.camera.bottom = -40;
    scene.add(dirLight);
}

// --- MATERIAL HELPERS ---
function makeTiledStandardMaterial(texKey, options = {}) {
    const materialOptions = {
        color: options.color ?? 0xffffff,
        roughness: options.roughness ?? 0.8,
        metalness: options.metalness ?? 0.1
    };

    const src = texKey && TEXTURES[texKey];
    if (src) {
        const tex = src.clone();
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
        tex.repeat.set(options.repeatX ?? 4, options.repeatY ?? 4);
        if (renderer) {
            tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
        }
        materialOptions.map = tex;
    }

    return new THREE.MeshStandardMaterial(materialOptions);
}

function createTexturedFloor(width, depth, texKey, options = {}) {
    const geo = new THREE.PlaneGeometry(width, depth);
    const mat = makeTiledStandardMaterial(texKey, {
        color: options.color,
        roughness: options.roughness ?? 0.85,
        metalness: options.metalness ?? 0.05,
        repeatX: options.repeatX ?? width / 4,
        repeatY: options.repeatY ?? depth / 4
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.y = options.y ?? 0;
    mesh.receiveShadow = true;
    return mesh;
}

// --- GENERIC PROP HELPERS ---
function createProp(geo, mat, x, y, z, rx = 0, ry = 0, rz = 0, scale = 1) {
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.rotation.set(rx, ry, rz);
    mesh.scale.set(scale, scale, scale);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
}

function createBox(w, h, d, mat, x, y, z, rx = 0, ry = 0, rz = 0) {
    return createProp(new THREE.BoxGeometry(w, h, d), mat, x, y, z, rx, ry, rz);
}

function createCrate(x, y, z, scale = 1) {
    const mat = new THREE.MeshStandardMaterial({
        color: 0x8b5a2b,
        roughness: 0.85
    });
    return createProp(new THREE.BoxGeometry(1, 1, 1), mat, x, y, z, 0, 0, 0, scale);
}

function createBarrel(x, y, z, scale = 1) {
    const mat = new THREE.MeshStandardMaterial({
        color: COLORS.wood,
        roughness: 0.85
    });
    const geo = new THREE.CylinderGeometry(0.5, 0.6, 1.2, 12);
    return createProp(geo, mat, x, y, z, 0, 0, 0, scale);
}

// Pawn-style base under sprites
function createPawnBase(scale, charData) {
    const radius = 0.4 * scale;
    const height = 0.15 * scale;

    let color = COLORS.neutral;
    if (charData.isEnemy) {
        color = COLORS.enemy;
    } else if (charData.dead) {
        color = COLORS.critical;
    } else {
        color = COLORS.ally;
    }

    const mat = new THREE.MeshStandardMaterial({
        color,
        roughness: 0.6,
        metalness: 0.2
    });

    const geo = new THREE.CylinderGeometry(radius, radius * 1.1, height, 24);
    const base = new THREE.Mesh(geo, mat);
    base.castShadow = true;
    base.receiveShadow = true;
    return base;
}

// Simple 3D Cheep Cheep model
function createCheepCheepModel(charData) {
    const group = new THREE.Group();
    const s = charData.scale || 3;

    group.position.set(charData.pos.x, charData.pos.y, charData.pos.z);

    const bodyMat = new THREE.MeshStandardMaterial({
        color: 0xff3333,
        metalness: 0.2,
        roughness: 0.6
    });
    const whiteMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.1,
        roughness: 0.7
    });
    const finMat = new THREE.MeshStandardMaterial({
        color: 0xffd700,
        metalness: 0.4,
        roughness: 0.4
    });
    const eyeMat = new THREE.MeshStandardMaterial({
        color: 0x000000,
        roughness: 0.2
    });

    // Body
    const body = new THREE.Mesh(
        new THREE.SphereGeometry(s, 24, 24),
        bodyMat
    );
    body.scale.set(1.3, 1, 1);
    body.castShadow = true;
    body.receiveShadow = true;
    group.add(body);

    // Belly
    const belly = new THREE.Mesh(
        new THREE.SphereGeometry(s * 0.95, 24, 24, 0, Math.PI * 2, 0, Math.PI / 2),
        whiteMat
    );
    belly.position.y = -0.4 * s;
    belly.castShadow = true;
    group.add(belly);

    // Tail
    const tail = new THREE.Mesh(
        new THREE.ConeGeometry(s * 0.7, s * 1.5, 12),
        finMat
    );
    tail.rotation.z = Math.PI;
    tail.position.set(0, 0, -1.4 * s);
    tail.castShadow = true;
    group.add(tail);

    // Top fin
    const topFin = new THREE.Mesh(
        new THREE.ConeGeometry(s * 0.35, s * 0.9, 12),
        finMat
    );
    topFin.position.set(0, 0.9 * s, -0.2 * s);
    topFin.rotation.x = Math.PI / 2;
    group.add(topFin);

    // Side fins
    const sideFinGeo = new THREE.ConeGeometry(s * 0.25, s * 0.7, 12);
    const leftFin = new THREE.Mesh(sideFinGeo, finMat);
    leftFin.position.set(-1.0 * s, 0, 0);
    leftFin.rotation.z = Math.PI / 2;
    group.add(leftFin);

    const rightFin = leftFin.clone();
    rightFin.position.x = 1.0 * s;
    rightFin.rotation.z = -Math.PI / 2;
    group.add(rightFin);

    // Eyes
    const eyeGeo = new THREE.SphereGeometry(s * 0.18, 16, 16);
    const leftEyeWhite = new THREE.Mesh(eyeGeo, whiteMat);
    leftEyeWhite.position.set(-0.38 * s, 0.28 * s, 0.95 * s);
    group.add(leftEyeWhite);

    const rightEyeWhite = leftEyeWhite.clone();
    rightEyeWhite.position.x *= -1;
    group.add(rightEyeWhite);

    const pupilGeo = new THREE.SphereGeometry(s * 0.08, 12, 12);
    const leftPupil = new THREE.Mesh(pupilGeo, eyeMat);
    leftPupil.position.copy(leftEyeWhite.position).add(new THREE.Vector3(0, 0, 0.12 * s));
    group.add(leftPupil);

    const rightPupil = leftPupil.clone();
    rightPupil.position.x *= -1;
    group.add(rightPupil);

    return group;
}

// --- SCENE SWITCHER ---
function buildScene(type) {
    // Clear scene
    while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
    }

    interactiveObjects = [];
    animatables = [];

    // Re-add global lighting + mouse helpers
    setupCommonLighting();
    if (mouseLight) scene.add(mouseLight);
    if (mousePlane) scene.add(mousePlane);

    if (LOCATIONS[type] && LOCATIONS[type].camPos) {
        const p = LOCATIONS[type].camPos;
        camera.position.set(p.x, p.y, p.z);
        controls.target.set(0, 1, 0);
        controls.update();
    }

    switch (type) {
        case 'breach':        buildVigilanceBreach();    break;
        case 'facility':      buildProcessingFacility(); break;
        case 'rakasha':       buildRakashaCamp();        break;
        case 'harbor':        buildCheepCheepHarbor();   break;
        case 'kitchen':       buildKitchen();            break;
        case 'foyer':         buildFoyer();              break;
        case 'greenhouse':    buildGreenhouse();         break;
        case 'mirror':        buildMirrorDimension();    break;
        case 'cockpit':       buildCockpit();            break;
        case 'interrogation': buildInterrogation();      break;
        case 'solarium':      buildSolarium();           break;
    }

    if (LOCATIONS[type]) {
        addCharacters(LOCATIONS[type].characters);
    }
}

// --- SCENE BUILDERS ---

// 1. Vigilance Bridge / Breach
function buildVigilanceBreach() {
    const group = new THREE.Group();

    // Metal floor
    const floor = createTexturedFloor(30, 40, 'floor_metal', {
        color: 0x888888,
        roughness: 0.7,
        metalness: 0.6,
        repeatX: 6,
        repeatY: 10
    });
    group.add(floor);

    // Dark central walkway
    const walkwayMat = new THREE.MeshStandardMaterial({
        color: 0x101820,
        metalness: 0.8,
        roughness: 0.3
    });
    const walkway = createBox(8, 0.15, 34, walkwayMat, 0, 0.075, 0);
    group.add(walkway);

    // Rails
    const railMat = new THREE.MeshStandardMaterial({
        color: 0x111111,
        metalness: 0.6,
        roughness: 0.4
    });
    const railLeft  = createBox(0.2, 1, 32, railMat, -4.5, 0.7, 0);
    const railRight = createBox(0.2, 1, 32, railMat,  4.5, 0.7, 0);
    group.add(railLeft, railRight);

    // Side walls with ribs
    const sideWallMat = makeTiledStandardMaterial('wall_stone', {
        color: 0x555555,
        roughness: 0.7,
        metalness: 0.4,
        repeatX: 2,
        repeatY: 3
    });
    const leftWall  = createBox(1, 6, 40, sideWallMat, -15, 3, 0);
    const rightWall = createBox(1, 6, 40, sideWallMat,  15, 3, 0);
    group.add(leftWall, rightWall);

    const ribMat = new THREE.MeshStandardMaterial({
        color: 0x222222,
        metalness: 0.5,
        roughness: 0.4
    });
    for (let z = -18; z <= 18; z += 4) {
        group.add(createBox(0.4, 5, 1, ribMat, -14.5, 2.5, z));
        group.add(createBox(0.4, 5, 1, ribMat,  14.5, 2.5, z));
    }

    // Back wall split around breach
    const backWallMat = makeTiledStandardMaterial('floor_metal', {
        color: 0x777777,
        metalness: 0.6,
        roughness: 0.6,
        repeatX: 6,
        repeatY: 2
    });
    group.add(createBox(12, 6, 1, backWallMat, -9, 3, -15));
    group.add(createBox(12, 6, 1, backWallMat,  9, 3, -15));

    // Breach ring
    const breachRadius = 3.2;
    const breachRimGeo = new THREE.TorusGeometry(breachRadius, 0.3, 12, 24);
    const breachRimMat = new THREE.MeshStandardMaterial({
        color: COLORS.rust,
        metalness: 0.6,
        roughness: 0.8
    });
    const breachRim = new THREE.Mesh(breachRimGeo, breachRimMat);
    breachRim.rotation.x = Math.PI / 2;
    breachRim.position.set(0, 3, -14.5);
    breachRim.castShadow = true;
    group.add(breachRim);

    const breachHole = new THREE.Mesh(
        new THREE.CircleGeometry(breachRadius - 0.15, 32),
        new THREE.MeshBasicMaterial({ color: 0x000000 })
    );
    breachHole.rotation.x = Math.PI / 2;
    breachHole.position.set(0, 3, -14.6);
    group.add(breachHole);

    const breachGlow = new THREE.PointLight(0xff6600, 1.6, 20);
    breachGlow.position.set(0, 3, -13.5);
    group.add(breachGlow);
    animatables.push({ mesh: breachGlow, type: 'flicker', baseInt: 1.6, varInt: 0.7 });

    // Consoles
    const leftConsole  = createBridgeConsole(-5, 0.75,  5,  Math.PI / 14);
    const rightConsole = createBridgeConsole( 5, 0.75,  5, -Math.PI / 14);
    group.add(leftConsole, rightConsole);

    // Alert light
    const redLight = new THREE.PointLight(0xff0000, 2.2, 22);
    redLight.position.set(0, 6.5, -10);
    group.add(redLight);
    animatables.push({ mesh: redLight, type: 'flicker', baseInt: 2.2, varInt: 1.0 });

    // Breach debris (pre-placed)
    const debrisMat = new THREE.MeshStandardMaterial({
        color: 0x444444,
        metalness: 0.6,
        roughness: 0.8
    });

    // Broken panel near breach
    group.add(createBox(1.4, 0.25, 0.9, debrisMat, -1.5, 0.2, -11.5, 0.15, 0.4, 0.1));
    group.add(createBox(1.1, 0.2, 0.7, debrisMat, 1.2, 0.18, -11, -0.1, -0.2, 0.2));

    // Scattered consoles parts along walkway
    group.add(createBox(0.8, 0.2, 0.6, debrisMat, -2.5, 0.15, -7));
    group.add(createBox(0.6, 0.15, 0.4, debrisMat, 2.8, 0.12, -6.5));

    // Crates near walls
    group.add(createCrate(7, 0.6, -2, 1.1));
    group.add(createCrate(-7, 0.6, -3, 1.0));
    group.add(createCrate(7, 0.6, 4, 0.9));

    scene.add(group);
}

function createBridgeConsole(x, y, z, rotY = 0) {
    const consoleGroup = new THREE.Group();
    consoleGroup.position.set(x, y, z);
    consoleGroup.rotation.y = rotY;

    const baseMat = makeTiledStandardMaterial('floor_metal', {
        color: 0x222222,
        metalness: 0.7,
        roughness: 0.4,
        repeatX: 1,
        repeatY: 1
    });
    const base = createBox(4, 1, 2, baseMat, 0, 0.5, 0);
    consoleGroup.add(base);

    const panelMat = new THREE.MeshStandardMaterial({
        color: 0x111111,
        metalness: 0.8,
        roughness: 0.3
    });
    const panel = createBox(4, 0.3, 1.2, panelMat, 0, 1.2, -0.3);
    panel.rotation.x = -Math.PI / 6;
    consoleGroup.add(panel);

    const screenGeo = new THREE.PlaneGeometry(2.8, 1.2);
    const screenMat = new THREE.MeshStandardMaterial({
        color: 0x00ffff,
        emissive: 0x0088ff,
        emissiveIntensity: 1.6,
        metalness: 0.4,
        roughness: 0.25
    });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0, 1.55, -0.7);
    screen.rotation.x = -Math.PI / 6;
    consoleGroup.add(screen);

    const statusLight = new THREE.PointLight(0x00ffff, 0.7, 4);
    statusLight.position.set(0, 1.6, -0.9);
    consoleGroup.add(statusLight);

    return consoleGroup;
}

// 2. Processing Facility
function buildProcessingFacility() {
    const group = new THREE.Group();

    const floor = createTexturedFloor(40, 40, 'floor_metal', {
        color: 0x666666,
        roughness: 0.8,
        metalness: 0.5,
        repeatX: 8,
        repeatY: 8
    });
    group.add(floor);

    const wallMat = makeTiledStandardMaterial('wall_stone', {
        color: 0x555555,
        roughness: 0.9,
        metalness: 0.2,
        repeatX: 6,
        repeatY: 2
    });

    const size = 36;
    const h = 6;
    group.add(createBox(size, h, 1, wallMat, 0, h / 2, -size / 2));
    group.add(createBox(size, h, 1, wallMat, 0, h / 2,  size / 2));
    group.add(createBox(1, h, size, wallMat, -size / 2, h / 2, 0));
    group.add(createBox(1, h, size, wallMat,  size / 2, h / 2, 0));

    // Overhead beams
    const beamMat = new THREE.MeshStandardMaterial({
        color: 0x333333,
        metalness: 0.7,
        roughness: 0.4
    });
    for (let x = -14; x <= 14; x += 7) {
        group.add(createBox(1, 1, 34, beamMat, x, 5.5, 0));
    }

    // Cages
    const cagePositions = [
        [-12, -10], [12, -10],
        [-12,  -2], [12,  -2],
        [-12,   6], [12,   6]
    ];
    cagePositions.forEach(([cx, cz]) => {
        const cage = createCage(4, 4, 4, cx, 2, cz);
        group.add(cage);
    });

    // Central processing table & gurney
    const tableMat = new THREE.MeshStandardMaterial({
        color: 0xdddddd,
        roughness: 0.7,
        metalness: 0.2
    });
    const table = createBox(8, 1, 4, tableMat, 0, 0.5, 0);
    group.add(table);

    const gurney = createBox(3, 0.6, 1.6, tableMat, -5.5, 0.3, 1);
    group.add(gurney);

    // Pipes along back wall
    const pipeMat = new THREE.MeshStandardMaterial({
        color: 0x222222,
        metalness: 0.8,
        roughness: 0.3
    });
    for (let i = 0; i < 3; i++) {
        const pipe = createProp(
            new THREE.CylinderGeometry(0.3, 0.3, 20, 16),
            pipeMat,
            -8 + i * 8,
            3.5,
            -17.5,
            0,
            0,
            Math.PI / 2
        );
        group.add(pipe);
    }

    // Toxic vat
    const vatGeo = new THREE.CylinderGeometry(2.5, 2.5, 2, 24);
    const vatMat = new THREE.MeshStandardMaterial({
        color: 0x222222,
        metalness: 0.7,
        roughness: 0.4
    });
    const vat = new THREE.Mesh(vatGeo, vatMat);
    vat.position.set(8, 1, -5);
    vat.castShadow = true;
    vat.receiveShadow = true;
    group.add(vat);

    const liquidGeo = new THREE.CylinderGeometry(2.3, 2.3, 0.4, 24);
    const liquidMat = new THREE.MeshStandardMaterial({
        color: 0x00ff66,
        emissive: 0x00ff66,
        emissiveIntensity: 0.7,
        transparent: true,
        opacity: 0.8
    });
    const liquid = new THREE.Mesh(liquidGeo, liquidMat);
    liquid.position.set(8, 2.0, -5);
    group.add(liquid);

    const gasLight = new THREE.PointLight(0x00ff66, 1.4, 18);
    gasLight.position.set(8, 3.5, -5);
    group.add(gasLight);
    animatables.push({ mesh: gasLight, type: 'flicker', baseInt: 1.4, varInt: 0.5 });

    // Pre-placed crates / barrels / tools
    group.add(createCrate(-6, 0.5, -4, 1.0));
    group.add(createCrate(-5, 0.5, -6, 0.9));
    group.add(createCrate(6, 0.5, 4, 1.1));
    group.add(createBarrel(-10, 0.8, 6, 1.0));
    group.add(createBarrel(-11.5, 0.8, 5, 0.9));
    group.add(createBarrel(10, 0.8, 7, 1.0));

    // Instrument tray on table
    const trayMat = new THREE.MeshStandardMaterial({
        color: 0xcccccc,
        roughness: 0.8
    });
    const tray = createBox(1.8, 0.08, 0.9, trayMat, 1.5, 1.08, 0.5);
    group.add(tray);

    // A couple of metal tools
    const toolMat = new THREE.MeshStandardMaterial({
        color: 0x999999,
        metalness: 0.8,
        roughness: 0.3
    });
    group.add(createBox(0.8, 0.03, 0.1, toolMat, 1.4, 1.13, 0.5));
    group.add(createBox(0.6, 0.03, 0.15, toolMat, 1.7, 1.13, 0.7));

    scene.add(group);
}

function createCage(width, height, depth, x, y, z) {
    const cageGroup = new THREE.Group();
    cageGroup.position.set(x, y, z);

    const barMat = new THREE.MeshStandardMaterial({
        color: 0x333333,
        metalness: 0.8,
        roughness: 0.3
    });

    const barRadius = 0.06 * width;
    const vertGeo = new THREE.CylinderGeometry(barRadius, barRadius, height, 10);
    const horizGeoX = new THREE.CylinderGeometry(barRadius, barRadius, width, 10);
    const horizGeoZ = new THREE.CylinderGeometry(barRadius, barRadius, depth, 10);

    // Corners
    const corners = [
        [-width / 2,  height / 2, -depth / 2],
        [ width / 2,  height / 2, -depth / 2],
        [-width / 2,  height / 2,  depth / 2],
        [ width / 2,  height / 2,  depth / 2]
    ];
    corners.forEach(([cx, cy, cz]) => {
        const v = new THREE.Mesh(vertGeo, barMat);
        v.position.set(cx, cy, cz);
        v.castShadow = true;
        v.receiveShadow = true;
        cageGroup.add(v);
    });

    // Top frame
    const topX1 = new THREE.Mesh(horizGeoX, barMat);
    topX1.position.set(0, height, -depth / 2);
    topX1.rotation.z = Math.PI / 2;
    cageGroup.add(topX1);

    const topX2 = topX1.clone();
    topX2.position.z = depth / 2;
    cageGroup.add(topX2);

    const topZ1 = new THREE.Mesh(horizGeoZ, barMat);
    topZ1.position.set(-width / 2, height, 0);
    topZ1.rotation.x = Math.PI / 2;
    cageGroup.add(topZ1);

    const topZ2 = topZ1.clone();
    topZ2.position.x = width / 2;
    cageGroup.add(topZ2);

    // Vertical bars
    const barCountX = 3;
    for (let i = 0; i <= barCountX; i++) {
        const px = -width / 2 + (width * i / barCountX);
        const frontBar = new THREE.Mesh(vertGeo, barMat);
        frontBar.position.set(px, height / 2, -depth / 2);
        cageGroup.add(frontBar);

        const backBar = frontBar.clone();
        backBar.position.z = depth / 2;
        cageGroup.add(backBar);
    }

    const barCountZ = 3;
    for (let i = 1; i < barCountZ; i++) {
        const pz = -depth / 2 + (depth * i / barCountZ);
        const leftBar = new THREE.Mesh(vertGeo, barMat);
        leftBar.position.set(-width / 2, height / 2, pz);
        cageGroup.add(leftBar);

        const rightBar = leftBar.clone();
        rightBar.position.x = width / 2;
        cageGroup.add(rightBar);
    }

    return cageGroup;
}

// 3. Rakasha Bone Festival
function buildRakashaCamp() {
    const group = new THREE.Group();

    const floor = createTexturedFloor(50, 50, 'wall_stone', {
        color: 0x3b2e22,
        roughness: 0.95,
        metalness: 0.05,
        repeatX: 4,
        repeatY: 4
    });
    group.add(floor);

    // Ribcage arches
    const ribMat = new THREE.MeshStandardMaterial({
        color: COLORS.bone,
        roughness: 0.7,
        metalness: 0.2
    });
    for (let i = 0; i < 6; i++) {
        const rib = new THREE.Mesh(
            new THREE.TorusGeometry(10, 0.5, 10, 24, Math.PI),
            ribMat
        );
        rib.position.set(0, 2, -12 + i * 4);
        rib.rotation.z = Math.PI / 2;
        rib.castShadow = true;
        group.add(rib);
    }

    // Spine
    for (let z = -10; z <= 10; z += 2) {
        const vertebra = createProp(
            new THREE.SphereGeometry(0.8, 12, 12),
            ribMat,
            0,
            1.2,
            z
        );
        group.add(vertebra);
    }

    // Bonfire logs
    const logMat = new THREE.MeshStandardMaterial({
        color: COLORS.wood,
        roughness: 0.8
    });
    for (let i = 0; i < 5; i++) {
        const angle = (i / 5) * Math.PI * 2;
        const log = createProp(
            new THREE.CylinderGeometry(0.2, 0.2, 3, 8),
            logMat,
            0,
            0.2,
            0,
            Math.PI / 2,
            angle,
            0
        );
        group.add(log);
    }

    const fireGeo = new THREE.ConeGeometry(1, 2, 12);
    const fireMat = new THREE.MeshStandardMaterial({
        color: COLORS.fire,
        emissive: 0xffaa33,
        emissiveIntensity: 1.5
    });
    const fire = new THREE.Mesh(fireGeo, fireMat);
    fire.position.set(0, 1, 0);
    fire.castShadow = true;
    group.add(fire);
    animatables.push({ mesh: fire, type: 'flicker_scale', speed: 10 });

    const fireLight = new THREE.PointLight(0xffaa33, 2.2, 25);
    fireLight.position.set(0, 3, 0);
    group.add(fireLight);
    animatables.push({ mesh: fireLight, type: 'flicker', baseInt: 2.0, varInt: 0.8 });

    // Bone piles / offerings (pre-placed)
    const skullGeo = new THREE.IcosahedronGeometry(0.4, 0);
    const skullPositions = [
        { x: 2,   z: 1 },
        { x: -2,  z: -1 },
        { x: 1,   z: 3 },
        { x: -1,  z: -3 },
        { x: 3,   z: 2 },
        { x: -3,  z: -2 },
        { x: 2.5, z: -3.5 },
        { x: -2.5,z: 3.5 },
        { x: 4,   z: 0 },
        { x: -4,  z: 0 },
        { x: 1.5, z: -5 },
        { x: -1.5,z: 5 }
    ];
    skullPositions.forEach(p => {
        const skull = new THREE.Mesh(skullGeo, ribMat);
        skull.position.set(p.x, 0.3, p.z);
        skull.castShadow = true;
        group.add(skull);
    });

    // Offering bowls around the fire
    const bowlMat = new THREE.MeshStandardMaterial({
        color: 0x885533,
        roughness: 0.8
    });
    const bowlGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.3, 12, 1, true);
    const bowlPositions = [
        { x: 1.5, z: 1.2 },
        { x: -1.5, z: 1.2 },
        { x: 1.2, z: -1.6 },
        { x: -1.2, z: -1.6 }
    ];
    bowlPositions.forEach(p => {
        const bowl = new THREE.Mesh(bowlGeo, bowlMat);
        bowl.position.set(p.x, 0.3, p.z);
        bowl.rotation.x = Math.PI;
        bowl.castShadow = true;
        group.add(bowl);
    });

    // Totems
    for (let i = -2; i <= 2; i += 2) {
        const totem = createProp(
            new THREE.CylinderGeometry(0.4, 0.6, 5, 6),
            ribMat,
            -12,
            2.5,
            i * 3
        );
        group.add(totem);
    }

    scene.add(group);
}

// 4. Cheep Cheep Harbor
function buildCheepCheepHarbor() {
    const group = new THREE.Group();

    // Water
    const waterGeo = new THREE.PlaneGeometry(80, 80, 32, 32);
    const waterMat = new THREE.MeshStandardMaterial({
        color: 0x1b4f72,
        metalness: 0.4,
        roughness: 0.15,
        transparent: true,
        opacity: 0.9
    });
    const water = new THREE.Mesh(waterGeo, waterMat);
    water.rotation.x = -Math.PI / 2;
    water.position.y = -1;
    water.receiveShadow = false;
    group.add(water);

    // Main dock
    const dockMat = makeTiledStandardMaterial('floor_wood', {
        color: COLORS.wood,
        roughness: 0.85,
        metalness: 0.1,
        repeatX: 3,
        repeatY: 10
    });
    const dock = createBox(10, 1, 30, dockMat, 0, 0, 0);
    group.add(dock);

    // Dock planks
    const plankMat = new THREE.MeshStandardMaterial({
        color: 0x8b5a2b,
        roughness: 0.8
    });
    for (let z = -14; z <= 14; z += 2) {
        const plank = createBox(9.8, 0.1, 1.8, plankMat, 0, 0.55, z);
        group.add(plank);
    }

    // Mooring posts
    const postMat = new THREE.MeshStandardMaterial({
        color: COLORS.wood,
        roughness: 0.8
    });
    for (let i = 0; i < 8; i++) {
        const z = -12 + i * 4;
        group.add(createProp(
            new THREE.CylinderGeometry(0.4, 0.5, 3, 10),
            postMat,
            -4.5,
            1.5,
            z
        ));
        group.add(createProp(
            new THREE.CylinderGeometry(0.4, 0.5, 3, 10),
            postMat,
            4.5,
            1.5,
            z
        ));
    }

    // Small boat
    const hullMat = new THREE.MeshStandardMaterial({
        color: 0x4d2e1a,
        roughness: 0.8
    });
    const hull = createBox(4, 1, 10, hullMat, -8, -0.3, -6);
    hull.rotation.y = Math.PI / 12;
    group.add(hull);

    const cabin = createBox(2, 1.5, 3, hullMat, -8, 0.7, -4);
    group.add(cabin);

    // Dock cargo: crates and barrels
    group.add(createCrate(2.5, 0.6, 6, 0.9));
    group.add(createCrate(3.5, 0.6, 6.5, 0.9));
    group.add(createCrate(-2, 0.6, 8, 1.0));
    group.add(createBarrel(1.5, 0.9, 10, 0.9));
    group.add(createBarrel(-3, 0.9, 10.5, 0.9));

    // Stacked crates at dockside
    group.add(createCrate(-1.5, 0.6, -8, 0.9));
    group.add(createCrate(-1.5, 1.6, -8, 0.9));
    group.add(createCrate(1.5, 0.6, -9, 0.9));

    // Lamps on dock
    const lampMat = new THREE.MeshStandardMaterial({
        color: 0x444444,
        metalness: 0.6,
        roughness: 0.4
    });
    for (let side of [-1, 1]) {
        const pole = createProp(
            new THREE.CylinderGeometry(0.1, 0.1, 5, 8),
            lampMat,
            side * 4.5,
            2.5,
            12
        );
        group.add(pole);
        const head = createBox(0.7, 0.4, 0.7, lampMat, side * 4.5, 5, 12);
        group.add(head);

        const lampLight = new THREE.PointLight(0xfff2b0, 0.9, 12);
        lampLight.position.set(side * 4.5, 4.8, 12);
        group.add(lampLight);
        animatables.push({ mesh: lampLight, type: 'flicker', baseInt: 0.9, varInt: 0.3 });
    }

    scene.add(group);
}

// 5. Kitchen
function buildKitchen() {
    const group = new THREE.Group();

    const floor = createTexturedFloor(30, 30, 'floor_wood', {
        color: 0x6b4b2f,
        roughness: 0.9,
        metalness: 0.05,
        repeatX: 6,
        repeatY: 6
    });
    group.add(floor);

    // Stone hearth
    const hearthMat = makeTiledStandardMaterial('wall_stone', {
        color: 0x444444,
        roughness: 0.9,
        metalness: 0.1,
        repeatX: 3,
        repeatY: 2
    });
    const hearth = createBox(8, 4, 2, hearthMat, 0, 2, -12);
    group.add(hearth);

    // Hearth opening
    const opening = createBox(4, 2.5, 1.6, new THREE.MeshBasicMaterial({ color: 0x000000 }), 0, 1.2, -11.2);
    group.add(opening);

    // Fire glow
    const fireLight = new THREE.PointLight(0xffaa00, 1.4, 12);
    fireLight.position.set(0, 1.5, -11);
    group.add(fireLight);
    animatables.push({ mesh: fireLight, type: 'flicker', baseInt: 1.2, varInt: 0.5 });

    // Prep tables
    const tableMat = new THREE.MeshStandardMaterial({
        color: COLORS.wood,
        roughness: 0.85
    });
    const table1 = createBox(8, 1.2, 3, tableMat, 0, 0.6, 0);
    const table2 = createBox(8, 1.2, 3, tableMat, 0, 0.6, 6);
    group.add(table1, table2);

    // Counters along wall
    const counter1 = createBox(12, 1, 2.5, tableMat, -9, 0.5, -6);
    const counter2 = createBox(12, 1, 2.5, tableMat,  9, 0.5, -6);
    group.add(counter1, counter2);

    // Hanging rack
    const rackMat = new THREE.MeshStandardMaterial({
        color: 0x444444,
        metalness: 0.7,
        roughness: 0.4
    });
    const rack = createBox(8, 0.1, 0.3, rackMat, 0, 4, 2);
    group.add(rack);
    for (let i = -3; i <= 3; i += 2) {
        const hook = createProp(
            new THREE.CylinderGeometry(0.03, 0.03, 0.7, 6),
            rackMat,
            i,
            3.6,
            2
        );
        group.add(hook);
    }

    // Pre-placed kitchen clutter on tables/counters
    const plateMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.9
    });
    const plateGeo = new THREE.CylinderGeometry(0.6, 0.6, 0.06, 16);

    // On table1
    group.add(createProp(plateGeo, plateMat, -2.5, 1.25, 0.3));
    group.add(createProp(plateGeo, plateMat, 2.5, 1.25, 0.1));

    const potMat = new THREE.MeshStandardMaterial({
        color: 0x555555,
        metalness: 0.6,
        roughness: 0.4
    });
    const pot = createProp(
        new THREE.CylinderGeometry(0.5, 0.5, 0.7, 16),
        potMat,
        0,
        1.35,
        0.4
    );
    group.add(pot);

    // On table2
    const loafMat = new THREE.MeshStandardMaterial({
        color: 0xccaa66,
        roughness: 0.85
    });
    const loaf = createProp(
        new THREE.SphereGeometry(0.5, 16, 12),
        loafMat,
        -1.8,
        1.4,
        6.2
    );
    loaf.scale.set(1.4, 0.8, 1);
    group.add(loaf);

    const knifeMat = new THREE.MeshStandardMaterial({
        color: 0x999999,
        metalness: 0.8,
        roughness: 0.3
    });
    group.add(createBox(0.9, 0.03, 0.12, knifeMat, -1.2, 1.25, 6.1));

    // On counters
    const panMat = new THREE.MeshStandardMaterial({
        color: 0x333333,
        metalness: 0.6,
        roughness: 0.6
    });
    const pan = createProp(
        new THREE.CylinderGeometry(0.7, 0.7, 0.12, 16),
        panMat,
        -10,
        1.06,
        -5.6
    );
    group.add(pan);

    const jarMat = new THREE.MeshStandardMaterial({
        color: 0xbbbbbb,
        metalness: 0.4,
        roughness: 0.6
    });
    group.add(createProp(
        new THREE.CylinderGeometry(0.25, 0.25, 0.6, 12),
        jarMat,
        10,
        1.3,
        -5.4
    ));
    group.add(createProp(
        new THREE.CylinderGeometry(0.3, 0.3, 0.8, 12),
        jarMat,
        8.5,
        1.4,
        -5.7
    ));

    scene.add(group);
}

// 6. Foyer
function buildFoyer() {
    const group = new THREE.Group();

    const floor = createTexturedFloor(40, 40, 'floor_wood', {
        color: 0x8b6b4a,
        roughness: 0.85,
        metalness: 0.05,
        repeatX: 8,
        repeatY: 8
    });
    group.add(floor);

    // Central rug
    const rugGeo = new THREE.PlaneGeometry(18, 12);
    const rugMat = new THREE.MeshStandardMaterial({
        color: 0x882222,
        roughness: 0.7
    });
    const rug = new THREE.Mesh(rugGeo, rugMat);
    rug.rotation.x = -Math.PI / 2;
    rug.position.y = 0.02;
    rug.receiveShadow = true;
    group.add(rug);

    // Grand staircase
    const stairMat = new THREE.MeshStandardMaterial({
        color: 0xdddddd,
        roughness: 0.8
    });
    for (let i = 0; i < 10; i++) {
        const step = createBox(12, 0.4, 2.2, stairMat, 0, 0.2 + i * 0.4, -8 - i * 2.2);
        group.add(step);
    }

    // Upper landing
    const landing = createBox(20, 0.6, 5, stairMat, 0, 4.5, -32);
    group.add(landing);

    // Balcony railing
    const railMat = new THREE.MeshStandardMaterial({
        color: 0xcccccc,
        roughness: 0.7
    });
    const rail = createBox(0.3, 2, 18, railMat, 0, 5.5, -34);
    group.add(rail);

    // Columns
    const colMat = new THREE.MeshStandardMaterial({
        color: 0xcccccc,
        roughness: 0.7
    });
    for (let i = 0; i < 4; i++) {
        group.add(createProp(
            new THREE.CylinderGeometry(1, 1, 10, 16),
            colMat,
            -12,
            5,
            -6 + i * 8
        ));
        group.add(createProp(
            new THREE.CylinderGeometry(1, 1, 10, 16),
            colMat,
            12,
            5,
            -6 + i * 8
        ));
    }

    // Chandelier
    const chandMat = new THREE.MeshStandardMaterial({
        color: 0xffffdd,
        metalness: 0.6,
        roughness: 0.4
    });
    const chandBody = createProp(
        new THREE.SphereGeometry(0.8, 12, 12),
        chandMat,
        0,
        10,
        -8
    );
    group.add(chandBody);

    const chandelierLight = new THREE.PointLight(0xfff6d5, 1.6, 30);
    chandelierLight.position.set(0, 10, -8);
    group.add(chandelierLight);
    animatables.push({ mesh: chandelierLight, type: 'flicker', baseInt: 1.6, varInt: 0.4 });

    // Pre-placed debris near stairs
    const rubbleMat = new THREE.MeshStandardMaterial({
        color: 0xaaaaaa,
        roughness: 0.9
    });
    group.add(createBox(1.2, 0.4, 0.8, rubbleMat, -4, 0.2, -7));
    group.add(createBox(0.8, 0.3, 0.6, rubbleMat, -3, 0.15, -6.5));
    group.add(createBox(1.0, 0.3, 0.5, rubbleMat, 3.5, 0.15, -7.5));
    group.add(createProp(
        new THREE.CylinderGeometry(0.6, 0.6, 2.4, 10),
        rubbleMat,
        4.5,
        1.2,
        -8.5,
        0,
        0,
        Math.PI / 4
    ));

    scene.add(group);
}

// 7. Greenhouse
function buildGreenhouse() {
    const group = new THREE.Group();

    const floor = createTexturedFloor(30, 30, 'floor_wood', {
        color: 0x223322,
        roughness: 0.9,
        metalness: 0.05,
        repeatX: 4,
        repeatY: 4
    });
    group.add(floor);

    // Metal frame arches
    const frameMat = new THREE.MeshStandardMaterial({
        color: 0x222222,
        metalness: 0.7,
        roughness: 0.4,
        transparent: true,
        opacity: 0.8
    });
    for (let i = 0; i < 6; i++) {
        const arch = new THREE.Mesh(
            new THREE.TorusGeometry(10, 0.25, 8, 24, Math.PI),
            frameMat
        );
        arch.position.set(0, 0, -10 + i * 5);
        arch.rotation.z = Math.PI / 2;
        group.add(arch);
    }

    // Cross beams
    for (let z = -10; z <= 10; z += 5) {
        const beam = createBox(20, 0.3, 0.3, frameMat, 0, 5, z);
        group.add(beam);
    }

    // Planter boxes / burnt plants
    const planterMat = new THREE.MeshStandardMaterial({
        color: COLORS.wood,
        roughness: 0.9
    });
    const stemMat = new THREE.MeshStandardMaterial({
        color: 0x333333,
        roughness: 0.9
    });

    const planterCenters = [
        [-6, -6], [0, -6], [6, -6],
        [-6,  0], [0,  0], [6,  0],
        [-6,  6], [0,  6], [6,  6]
    ];

    planterCenters.forEach(([x, z]) => {
        const planter = createBox(3, 0.6, 3, planterMat, x, 0.3, z);
        group.add(planter);

        const offsets = [-0.6, 0, 0.6];
        offsets.forEach((dx, idx) => {
            const angle = -0.3 + idx * 0.3;
            const stem = createProp(
                new THREE.CylinderGeometry(0.05, 0.1, 1.5, 6),
                stemMat,
                x + dx,
                1.1,
                z,
                0,
                0,
                angle
            );
            group.add(stem);
        });
    });

    // Smoke / embers (pre-placed)
    const smokeGeo = new THREE.DodecahedronGeometry(0.5);
    const smokeMat = new THREE.MeshBasicMaterial({
        color: 0x555555,
        transparent: true,
        opacity: 0.5
    });

    const smokePositions = [
        { x: -4,  y: 1.0, z: -4 },
        { x: 0,   y: 1.2, z: -3 },
        { x: 3,   y: 1.4, z: -1 },
        { x: -2,  y: 1.1, z: 2 },
        { x: 2.5, y: 1.3, z: 3 },
        { x: 0,   y: 1.8, z: 0 }
    ];

    smokePositions.forEach((p, idx) => {
        const smoke = new THREE.Mesh(smokeGeo, smokeMat);
        smoke.position.set(p.x, p.y, p.z);
        group.add(smoke);
        animatables.push({
            mesh: smoke,
            type: 'float_up',
            speed: 0.01 + idx * 0.003,
            limit: p.y + 3 + idx * 0.2,
            startY: p.y
        });
    });

    scene.add(group);
}

// 8. Mirror Dimension
function buildMirrorDimension() {
    const group = new THREE.Group();

    // Floating platforms (pre-placed)
    const platMat = new THREE.MeshStandardMaterial({
        color: 0xaa00aa,
        metalness: 0.4,
        roughness: 0.3
    });

    const platforms = [
        { x: 0,  y: 1,  z: 0,  w: 6, d: 6 },
        { x: 0,  y: 3,  z: 6,  w: 4, d: 4 },
        { x: -5, y: 4,  z: 2,  w: 4, d: 3 },
        { x: 5,  y: 4,  z: 2,  w: 4, d: 3 },
        { x: 0,  y: 5,  z: -6, w: 5, d: 4 },
        { x: -7, y: 6,  z: -4, w: 3, d: 3 },
        { x: 7,  y: 6,  z: -4, w: 3, d: 3 }
    ];

    platforms.forEach((p, i) => {
        const plat = createBox(p.w, 0.5, p.d, platMat, p.x, p.y, p.z);
        group.add(plat);
        animatables.push({
            mesh: plat,
            type: 'bob',
            speed: 0.5 + i * 0.1,
            offset: i * 0.7,
            amp: 0.25
        });
    });

    // Giant mirror
    const frameMat = new THREE.MeshStandardMaterial({
        color: COLORS.highlight,
        metalness: 0.9,
        roughness: 0.3
    });
    const frame = createBox(12, 16, 1, frameMat, 0, 8, -10);
    group.add(frame);

    const glassMat = new THREE.MeshStandardMaterial({
        color: 0xccccff,
        transparent: true,
        opacity: 0.5,
        metalness: 0.2,
        roughness: 0.1
    });
    const glass = createBox(10, 14, 0.3, glassMat, 0, 8, -9.6);
    group.add(glass);

    // Swirling ring in front of mirror
    const ringGeo = new THREE.TorusKnotGeometry(3, 0.2, 64, 12);
    const ringMat = new THREE.MeshStandardMaterial({
        color: 0x00ffff,
        emissive: 0x00aaff,
        emissiveIntensity: 1.5,
        metalness: 0.6,
        roughness: 0.2
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.set(0, 6, -7);
    group.add(ring);
    animatables.push({ mesh: ring, type: 'spin', speed: 0.4 });

    // Shards around center (deterministic circle)
    const shardMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.6,
        roughness: 0.1
    });
    const shardCount = 16;
    for (let i = 0; i < shardCount; i++) {
        const angle = (i / shardCount) * Math.PI * 2;
        const radius = 12;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = 3 + (i % 4);

        const scale = 0.5 + 0.1 * (i % 3);
        const shard = new THREE.Mesh(
            new THREE.TetrahedronGeometry(scale),
            shardMat
        );
        shard.position.set(x, y, z);
        group.add(shard);

        animatables.push({
            mesh: shard,
            type: 'bob',
            speed: 0.8 + (i % 4) * 0.2,
            offset: angle,
            amp: 0.4
        });
    }

    scene.add(group);
}

// 9. Cockpit
function buildCockpit() {
    const group = new THREE.Group();

    const floor = createTexturedFloor(18, 22, 'floor_metal', {
        color: 0x333344,
        roughness: 0.7,
        metalness: 0.6,
        repeatX: 5,
        repeatY: 6
    });
    group.add(floor);

    // Consoles
    const mainConsole = createBridgeConsole(0, 1, -6, 0);
    group.add(mainConsole);

    const sideConsoleMat = new THREE.MeshStandardMaterial({
        color: 0x222222,
        metalness: 0.7,
        roughness: 0.3
    });
    const sideLeft  = createBox(3, 1.2, 1.5, sideConsoleMat, -4, 0.6, -2);
    const sideRight = createBox(3, 1.2, 1.5, sideConsoleMat,  4, 0.6, -2);
    group.add(sideLeft, sideRight);

    // Chairs
    const chairMat = new THREE.MeshStandardMaterial({
        color: 0x550000,
        roughness: 0.85
    });
    group.add(createBox(1.5, 2, 1.5, chairMat, 0, 1, -2));
    group.add(createBox(1.5, 2, 1.5, chairMat, -4, 1, 0));
    group.add(createBox(1.5, 2, 1.5, chairMat,  4, 1, 0));

    // Curved front window
    const windowFrame = new THREE.Mesh(
        new THREE.CylinderGeometry(8, 8, 5, 12, 1, true, 0, Math.PI),
        new THREE.MeshStandardMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0.25,
            side: THREE.DoubleSide,
            metalness: 0.2,
            roughness: 0.1
        })
    );
    windowFrame.rotation.x = -Math.PI / 2;
    windowFrame.position.z = -5;
    windowFrame.position.y = 3;
    group.add(windowFrame);

    // Ceiling ribs
    const ribMat = new THREE.MeshStandardMaterial({
        color: 0x222233,
        roughness: 0.6,
        metalness: 0.4
    });
    for (let x = -6; x <= 6; x += 3) {
        const rib = createBox(0.3, 0.3, 14, ribMat, x, 4.5, 0);
        group.add(rib);
    }

    // Small overhead lights
    for (let x of [-4, 0, 4]) {
        const light = new THREE.PointLight(0x99ccff, 0.6, 10);
        light.position.set(x, 4.2, -1);
        group.add(light);
    }

    // Cockpit clutter: mug, tablet, tool
    const mugMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.8
    });
    const mug = createProp(
        new THREE.CylinderGeometry(0.12, 0.12, 0.5, 12),
        mugMat,
        0.9,
        1.6,
        -5.4
    );
    group.add(mug);

    const tabletMat = new THREE.MeshStandardMaterial({
        color: 0x222222,
        roughness: 0.5
    });
    const tablet = createBox(0.9, 0.05, 0.6, tabletMat, -1.1, 1.55, -5.4, -0.3, 0.15, 0);
    group.add(tablet);

    const toolMat = new THREE.MeshStandardMaterial({
        color: 0xaaaaaa,
        metalness: 0.8,
        roughness: 0.3
    });
    const wrench = createBox(0.9, 0.06, 0.15, toolMat, -3.5, 1.25, -2.1);
    group.add(wrench);

    scene.add(group);
}

// 10. Interrogation
function buildInterrogation() {
    const group = new THREE.Group();

    const floor = createTexturedFloor(16, 16, 'floor_metal', {
        color: 0x222222,
        roughness: 0.9,
        metalness: 0.4,
        repeatX: 4,
        repeatY: 4
    });
    group.add(floor);

    const wallMat = makeTiledStandardMaterial('wall_stone', {
        color: 0x333333,
        roughness: 0.9,
        metalness: 0.2,
        repeatX: 4,
        repeatY: 2
    });
    const size = 16;
    const h = 6;
    group.add(createBox(size, h, 1, wallMat, 0, h / 2, -size / 2));
    group.add(createBox(size, h, 1, wallMat, 0, h / 2,  size / 2));
    group.add(createBox(1, h, size, wallMat, -size / 2, h / 2, 0));
    group.add(createBox(1, h, size, wallMat,  size / 2, h / 2, 0));

    // Table & chair
    const tableMat = new THREE.MeshStandardMaterial({
        color: 0x555555,
        roughness: 0.8
    });
    const table = createBox(4, 1, 2, tableMat, 0, 0.5, 0);
    group.add(table);

    const chairMat = new THREE.MeshStandardMaterial({
        color: 0x333333,
        roughness: 0.9
    });
    const chair = createBox(1, 1.5, 1, chairMat, 0, 0.75, 2.2);
    group.add(chair);

    // Overhead spotlight
    const spotlight = new THREE.SpotLight(0xffffff, 2.8, 25, Math.PI / 5, 0.3, 1);
    spotlight.position.set(0, 8, 0);
    spotlight.target.position.set(0, 0, 0);
    spotlight.castShadow = true;
    group.add(spotlight);
    group.add(spotlight.target);

    // Lamp shade
    const shade = createProp(
        new THREE.ConeGeometry(0.8, 1.5, 12, 1, true),
        new THREE.MeshStandardMaterial({
            color: 0xaaaaaa,
            metalness: 0.5,
            roughness: 0.6,
            side: THREE.DoubleSide
        }),
        0,
        7.5,
        0,
        Math.PI,
        0,
        0
    );
    group.add(shade);

    // One-way mirror
    const mirrorGeo = new THREE.PlaneGeometry(6, 3);
    const mirrorMat = new THREE.MeshStandardMaterial({
        color: 0x222244,
        metalness: 0.9,
        roughness: 0.05
    });
    const mirror = new THREE.Mesh(mirrorGeo, mirrorMat);
    mirror.position.set(-7.9, 3, 0);
    mirror.rotation.y = Math.PI / 2;
    group.add(mirror);

    // Door
    const doorMat = new THREE.MeshStandardMaterial({
        color: 0x111111,
        roughness: 0.7
    });
    const door = createBox(0.8, 4, 2.5, doorMat, 7.6, 2, -3);
    group.add(door);

    // Files and cup on table
    const paperMat = new THREE.MeshStandardMaterial({
        color: 0xdddddd,
        roughness: 0.9
    });
    group.add(createBox(1.1, 0.06, 0.7, paperMat, -0.8, 1.03, 0.2));
    group.add(createBox(0.9, 0.05, 0.6, paperMat, -0.6, 1.08, 0.35));

    const cupMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.9
    });
    const cup = createProp(
        new THREE.CylinderGeometry(0.2, 0.2, 0.5, 12),
        cupMat,
        0.9,
        1.25,
        -0.3
    );
    group.add(cup);

    // Handcuffs on floor
    const cuffMat = new THREE.MeshStandardMaterial({
        color: 0x999999,
        metalness: 0.9,
        roughness: 0.2
    });
    const cuff1 = createProp(
        new THREE.TorusGeometry(0.25, 0.05, 10, 16),
        cuffMat,
        0.3,
        0.1,
        1.0
    );
    const cuff2 = createProp(
        new THREE.TorusGeometry(0.25, 0.05, 10, 16),
        cuffMat,
        0.8,
        0.1,
        1.0
    );
    group.add(cuff1, cuff2);

    scene.add(group);
}

// 11. Solarium (The Mirror Battle)
function buildSolarium() {
    const group = new THREE.Group();

    // Floor with broken glass
    const floorMat = makeTiledStandardMaterial('wall_stone', {
        color: 0x666666,
        roughness: 0.8,
        metalness: 0.1,
        repeatX: 6,
        repeatY: 6
    });
    const floor = createTexturedFloor(30, 30, null, { color: 0x666666 }); // Use fallback if texture fails
    floor.material = floorMat;
    group.add(floor);

    // Walls
    const wallMat = makeTiledStandardMaterial('wall_stone', {
        color: 0x444444,
        roughness: 0.9,
        metalness: 0.2,
        repeatX: 4,
        repeatY: 2
    });
    group.add(createBox(30, 8, 1, wallMat, 0, 4, -15));
    group.add(createBox(30, 8, 1, wallMat, 0, 4, 15));
    group.add(createBox(1, 8, 30, wallMat, -15, 4, 0));
    group.add(createBox(1, 8, 30, wallMat, 15, 4, 0));

    // Large Mirror Ring
    const mirrorFrameMat = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.8, roughness: 0.3 });
    const mirrorGlassMat = new THREE.MeshStandardMaterial({ color: 0xaaddff, metalness: 0.9, roughness: 0.1, transparent: true, opacity: 0.7 });
    
    for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const x = Math.cos(angle) * 8;
        const z = Math.sin(angle) * 8;
        
        const frame = createBox(2, 4, 0.2, mirrorFrameMat, x, 2, z);
        frame.lookAt(0, 2, 0);
        group.add(frame);
        
        const glass = createBox(1.8, 3.8, 0.1, mirrorGlassMat, x, 2, z);
        glass.lookAt(0, 2, 0);
        group.add(glass);
    }

    // Shattered Mirror Shards on floor
    const shardMat = new THREE.MeshStandardMaterial({ color: 0xccffff, metalness: 0.9, roughness: 0.1 });
    for (let i = 0; i < 30; i++) {
        const x = (Math.random() - 0.5) * 20;
        const z = (Math.random() - 0.5) * 20;
        const shard = new THREE.Mesh(new THREE.TetrahedronGeometry(0.2), shardMat);
        shard.position.set(x, 0.1, z);
        shard.rotation.set(Math.random(), Math.random(), Math.random());
        group.add(shard);
    }

    // Overgrown Vines
    const vineMat = new THREE.MeshStandardMaterial({ color: 0x225522, roughness: 0.9 });
    for (let i = 0; i < 5; i++) {
        const x = (Math.random() - 0.5) * 25;
        const z = (Math.random() - 0.5) * 25;
        const vine = createProp(new THREE.TorusKnotGeometry(1, 0.2, 64, 8), vineMat, x, 4, z);
        group.add(vine);
    }
    
    scene.add(group);
}


// --- CHARACTERS ---
function addCharacters(chars) {
    chars.forEach((charData, index) => {
        // 3D Cheep Cheep
        if (charData.id === 'cheep_cheep') {
            const fish = createCheepCheepModel(charData);
            fish.userData = charData;
            scene.add(fish);
            interactiveObjects.push(fish);
            animatables.push({
                mesh: fish,
                type: 'bob',
                speed: 0.6,
                offset: index * 0.7,
                amp: 0.4
            });
            return;
        }

        // Mirror monster
        if (charData.id === 'mirror_monster' || charData.id === 'shard_stalker') {
            const geo = new THREE.DodecahedronGeometry(charData.scale);
            const mat = new THREE.MeshStandardMaterial({
                color: 0x00ffff,
                wireframe: true,
                metalness: 0.3,
                roughness: 0.2
            });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.set(charData.pos.x, charData.pos.y, charData.pos.z);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            mesh.userData = charData;
            scene.add(mesh);
            interactiveObjects.push(mesh);
            animatables.push({
                mesh: mesh,
                type: 'bob',
                speed: 0.5,
                offset: index * 0.6,
                amp: 0.5
            });
            return;
        }

        // Sprite + pawn base for all other characters
        const portraitKey = charData.portrait || 'portraits/unknown.png';
        let map = TEXTURES[portraitKey];
        if (!map) {
            map = textureLoader.load(portraitKey);
            map.colorSpace = THREE.SRGBColorSpace;
            map.transparent = true;
            TEXTURES[portraitKey] = map;
        }

        const material = new THREE.SpriteMaterial({ map, transparent: true });
        const sprite = new THREE.Sprite(material);

        const s = charData.scale || 2;
        sprite.scale.set(s, s, 1);

        const holder = new THREE.Group();
        holder.position.set(charData.pos.x, charData.pos.y, charData.pos.z);

        const base = createPawnBase(s, charData);
        base.position.y = 0.075 * s;
        holder.add(base);

        if (charData.dead) {
            sprite.position.set(0, 0.02, 0);
            material.rotation = Math.PI / 2;
        } else {
            sprite.position.set(0, 0.5 * s + 0.1, 0);
        }
        holder.add(sprite);

        holder.userData = charData;
        base.userData = charData;
        sprite.userData = charData;

        scene.add(holder);

        interactiveObjects.push(sprite, base);

        if (!charData.dead) {
            animatables.push({
                mesh: holder,
                type: 'bob',
                speed: 2,
                offset: index * 0.9,
                amp: 0.2
            });
        }
    });
}

// --- INPUT + ANIMATION ---

function onPointerMove(event) {
    const rect = container.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / container.clientHeight) * 2 + 1;

    if (!tooltip.classList.contains('hidden')) {
        tooltip.style.left = (event.clientX - rect.left + 10) + 'px';
        tooltip.style.top = (event.clientY - rect.top + 10) + 'px';
    }

    // Mouse light
    if (raycaster && mousePlane && mouseLight) {
        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObject(mousePlane);
        if (intersects.length > 0) {
            const p = intersects[0].point;
            mouseLight.position.set(p.x, p.y + 2, p.z);
        }
    }
}

function animate() {
    animationId = requestAnimationFrame(animate);
    const time = Date.now() * 0.001;

    controls.update();

    // Tooltip interaction
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(interactiveObjects, true);

    if (intersects.length > 0) {
        const obj = intersects[0].object;
        const data = obj.userData;
        if (data && data.name) {
            tooltip.classList.remove('hidden');
            tooltip.innerHTML = `
                <h4>${data.name}</h4>
                <p><strong>Status:</strong> <span style="color:#ffd700">${data.status}</span></p>
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
            if (a.baseY === undefined) a.baseY = a.mesh.position.y;
            const amp = a.amp ?? 0.15;
            const off = a.offset ?? 0;
            a.mesh.position.y = a.baseY + Math.sin(time * a.speed + off) * amp;
        } else if (a.type === 'float_up') {
            if (a.startY === undefined) a.startY = a.mesh.position.y;
            a.mesh.position.y += a.speed;
            if (a.mesh.position.y > a.limit) {
                a.mesh.position.y = a.startY;
            }
        } else if (a.type === 'flicker') {
            const base = a.baseInt ?? 1;
            const variance = a.varInt ?? 0.5;
            a.mesh.intensity = base + Math.sin(time * 10 + (a.offset || 0)) * variance;
        } else if (a.type === 'flicker_scale') {
            const sp = a.speed ?? 8;
            a.mesh.scale.y = 1 + Math.sin(time * sp) * 0.15;
            a.mesh.scale.x = 1 + Math.cos(time * sp) * 0.1;
        } else if (a.type === 'spin') {
            a.mesh.rotation.y += (a.speed ?? 0.5) * 0.01;
            a.mesh.rotation.x += (a.speed ?? 0.5) * 0.005;
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
