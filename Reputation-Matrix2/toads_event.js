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
let currentSceneType = 'rogueport_trade'; // UPDATED DEFAULT
let textureLoader;

// Texture cache
const TEXTURES = {};

// --- COLORS ---
const COLORS = {
    bg:        0x020204, // Darker night sky
    highlight: 0xffd700,
    ally:      0x3fb950,
    enemy:     0xf85149,
    neutral:   0xe3b341,
    magic:     0xbd34fe,
    fire:      0xff4500,
    wood:      0x5c4033,
    stone:     0x555555,
    tiger:     0xff8800
};

// --- SCENE DATA ---
const LOCATIONS = {
    rogueport_trade: {
        title: "Rogueport: Trade Ward Alley",
        camPos: {x: 8, y: 12, z: 12},
        characters: [
            { id: 'spirit_tiger', name: "Summoned Tiger", status: "Guarding", pos: { x: 2, y: 0, z: 2 }, scale: 2.0, is3D: true },
            { id: 'dewdrop', name: "Dewdrop", status: "Casting Shield", pos: { x: -2, y: 0, z: 4 }, portrait: "toads/dewdrop.png", scale: 1.4 },
            { id: 'erick', name: "Erick (Disguised)", status: "Infiltrating", pos: { x: 0, y: 0, z: 0 }, portrait: "faction_iron_legion.png", scale: 1.5 }, // Wearing Legion armor
            { id: 'embercap', name: "Embercap", status: "Alert", pos: { x: -3, y: 0, z: 1 }, portrait: "toads/embercap.png", scale: 1.5 },
            { id: 'assassin_body', name: "Iron Fist Assassin", status: "Deceased", pos: { x: 4, y: 0.1, z: -2 }, portrait: "faction_iron_legion.png", scale: 1.4, dead: true }
        ]
    },
    rakasha_camp: {
        title: "Rakasha: Festival of the Fallen",
        camPos: {x: 0, y: 10, z: 18},
        characters: [
            { id: 'mystivil', name: "Mystivil", status: "Ritual Trance", pos: { x: -2, y: 0, z: 3 }, portrait: "toads/mystivil.png", scale: 1.5 },
            { id: 'big_r', name: "Big R", status: "Panicking", pos: { x: 2, y: 0, z: 3 }, portrait: "toads/big_r.png", scale: 1.5 },
            { id: 'thornpaw', name: "Chief Thornpaw", status: "Presiding", pos: { x: 0, y: 0, z: -4 }, portrait: "faction_rakasha.png", scale: 1.8 },
            { id: 'rakasha_guide', name: "Spirit Guide", status: "Channeling", pos: { x: -5, y: 0, z: -2 }, portrait: "faction_rakasha.png", scale: 1.6 }
        ]
    }
};

// --- INIT ---
function init() {
    if (!container) return;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(COLORS.bg);
    scene.fog = new THREE.FogExp2(COLORS.bg, 0.03); // Dense fog for Rogueport

    textureLoader = new THREE.TextureLoader();
    loadTextures();

    camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.maxDistance = 60;
    controls.target.set(0, 1, 0);

    // Initial setup
    setupCommonLighting();
    
    // Mouse interaction setup
    mouseLight = new THREE.PointLight(0xffffff, 0.8, 15);
    scene.add(mouseLight);
    mousePlane = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), new THREE.MeshBasicMaterial({ visible: false }));
    mousePlane.rotation.x = -Math.PI / 2;
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

function loadTextures() {
    const load = (path) => textureLoader.load(path, (t) => {
        t.wrapS = t.wrapT = THREE.RepeatWrapping;
        t.colorSpace = THREE.SRGBColorSpace;
    });
    TEXTURES.cobblestone = load('textures/stone_brick.jpg'); 
    TEXTURES.wood = load('textures/wood_planks.jpg');
}

function setupCommonLighting() {
    const ambient = new THREE.AmbientLight(0x1a1a2e, 0.6); // Dark blue night ambient
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xaaccff, 0.5); // Moon
    dirLight.position.set(-10, 20, -10);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.set(1024, 1024);
    scene.add(dirLight);
}

// --- SCENE BUILDER ---
function buildScene(type) {
    // Cleanup
    while(scene.children.length > 0) { 
        scene.remove(scene.children[0]); 
    }
    interactiveObjects = [];
    animatables = [];

    // Re-add essentials
    setupCommonLighting();
    scene.add(mouseLight);
    scene.add(mousePlane);

    // Camera setup
    if (LOCATIONS[type] && LOCATIONS[type].camPos) {
        const p = LOCATIONS[type].camPos;
        camera.position.set(p.x, p.y, p.z);
        controls.target.set(0, 1, 0);
    }

    // Build Environment
    if (type === 'rogueport_trade') {
        buildRogueportAlley();
    } else if (type === 'rakasha_camp') {
        buildRakashaCamp();
    }

    // Add Characters
    if (LOCATIONS[type]) {
        addCharacters(LOCATIONS[type].characters);
    }
}

// --- ENVIRONMENTS ---

function buildRogueportAlley() {
    const group = new THREE.Group();

    // 1. Wet Cobblestone Floor
    const floorGeo = new THREE.PlaneGeometry(30, 40);
    const floorMat = new THREE.MeshStandardMaterial({ 
        color: 0x222222, roughness: 0.2, metalness: 0.4 
    });
    if(TEXTURES.cobblestone) {
        floorMat.map = TEXTURES.cobblestone;
        floorMat.map.repeat.set(6, 8);
    }
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    group.add(floor);

    // 2. Alley Walls
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x332222, roughness: 0.9 });
    const leftWall = createBox(1, 8, 40, wallMat, -8, 4, 0);
    const rightWall = createBox(1, 8, 40, wallMat, 8, 4, 0);
    group.add(leftWall, rightWall);

    // 3. Violet Emblem Shop (Target)
    const shopGroup = new THREE.Group();
    shopGroup.position.set(4, 0, -10);
    
    // Shop Facade
    const facade = createBox(6, 6, 1, new THREE.MeshStandardMaterial({ color: 0x2a1a2a }), 0, 3, 0);
    shopGroup.add(facade);
    
    // Glowing Violet Sign
    const signGeo = new THREE.CylinderGeometry(0.8, 0.8, 0.2, 6);
    const signMat = new THREE.MeshStandardMaterial({ 
        color: 0x8a2be2, emissive: 0x8a2be2, emissiveIntensity: 2 
    });
    const sign = new THREE.Mesh(signGeo, signMat);
    sign.rotation.x = Math.PI / 2;
    sign.position.set(0, 4.5, 0.6);
    shopGroup.add(sign);
    
    // Violet Light spill
    const signLight = new THREE.PointLight(0x8a2be2, 3, 10);
    signLight.position.set(0, 4, 2);
    shopGroup.add(signLight);
    animatables.push({ mesh: signLight, type: 'flicker', baseInt: 3, varInt: 1 });

    // Door (Ajar)
    const door = createBox(1.5, 3, 0.2, new THREE.MeshStandardMaterial({ color: 0x000000 }), 0.5, 1.5, 0.6);
    door.rotation.y = -0.4; // Open slightly
    shopGroup.add(door);
    
    group.add(shopGroup);

    // 4. Clutter (Crates & Barrels)
    group.add(createCrate(-6, 0.5, 5));
    group.add(createCrate(-6, 1.5, 5));
    group.add(createCrate(6.5, 0.5, -2));
    
    // 5. Street Lantern (Flickering)
    const post = createBox(0.2, 4, 0.2, new THREE.MeshStandardMaterial({ color: 0x111111 }), -6, 2, 8);
    group.add(post);
    const lantern = new THREE.PointLight(0xffaa00, 1, 15);
    lantern.position.set(-6, 4.2, 8);
    lantern.castShadow = true;
    group.add(lantern);
    animatables.push({ mesh: lantern, type: 'flicker', baseInt: 1, varInt: 0.8 }); // Heavy flicker

    scene.add(group);
}

function buildRakashaCamp() {
    const group = new THREE.Group();
    
    // Dirt Floor
    const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(40, 40),
        new THREE.MeshStandardMaterial({ color: 0x3b2e22, roughness: 1.0 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    group.add(floor);

    // Giant Bonfire
    const fireGeo = new THREE.ConeGeometry(1.5, 3, 8);
    const fireMat = new THREE.MeshStandardMaterial({ color: 0xff4400, emissive: 0xff4400, emissiveIntensity: 2 });
    const fire = new THREE.Mesh(fireGeo, fireMat);
    fire.position.set(0, 1.5, 0);
    group.add(fire);
    animatables.push({ mesh: fire, type: 'flicker_scale', speed: 12 });
    
    const fireLight = new THREE.PointLight(0xff6600, 4, 30);
    fireLight.position.set(0, 4, 0);
    fireLight.castShadow = true;
    group.add(fireLight);
    animatables.push({ mesh: fireLight, type: 'flicker', baseInt: 4, varInt: 1.5 });

    // Bone Totems
    const boneMat = new THREE.MeshStandardMaterial({ color: 0xeaddcf });
    for(let i=0; i<6; i++) {
        const angle = (i/6) * Math.PI * 2;
        const x = Math.cos(angle) * 10;
        const z = Math.sin(angle) * 10;
        const totem = createBox(0.6, 5, 0.6, boneMat, x, 2.5, z);
        totem.rotation.y = Math.random();
        group.add(totem);
    }

    scene.add(group);
}


// --- CHARACTER MODELS ---

function addCharacters(chars) {
    chars.forEach((charData, index) => {
        // THE 1 3D MODEL: SPIRIT TIGER
        if (charData.id === 'spirit_tiger') {
            const tiger = createSpiritTigerModel();
            tiger.position.set(charData.pos.x, charData.pos.y, charData.pos.z);
            // Scale and rotate
            tiger.scale.set(charData.scale || 1, charData.scale || 1, charData.scale || 1);
            tiger.rotation.y = Math.PI / 4; // Angled towards enemies
            
            tiger.userData = charData;
            scene.add(tiger);
            interactiveObjects.push(tiger);
            
            // Breathing animation
            animatables.push({
                mesh: tiger,
                type: 'breathe',
                speed: 2
            });
            return;
        }

        // STANDARD SPRITES FOR EVERYONE ELSE
        const portraitKey = charData.portrait || 'icons/unknown.png';
        let map = TEXTURES[portraitKey];
        if (!map) {
            map = textureLoader.load(portraitKey);
            map.colorSpace = THREE.SRGBColorSpace;
            TEXTURES[portraitKey] = map;
        }

        const material = new THREE.SpriteMaterial({ map: map, transparent: true });
        const sprite = new THREE.Sprite(material);
        const s = charData.scale || 2;
        sprite.scale.set(s, s, 1);

        const holder = new THREE.Group();
        holder.position.set(charData.pos.x, charData.pos.y, charData.pos.z);

        // Base ring
        const color = charData.dead ? COLORS.enemy : (charData.isEnemy ? COLORS.enemy : COLORS.ally);
        const base = new THREE.Mesh(
            new THREE.CylinderGeometry(0.5*s, 0.5*s, 0.1, 16),
            new THREE.MeshStandardMaterial({ color: color })
        );
        holder.add(base);

        if (charData.dead) {
            sprite.position.set(0, 0.1, 0);
            sprite.material.rotation = -Math.PI / 2; // Lying down
        } else {
            sprite.position.set(0, s*0.5 + 0.2, 0);
            // Floating animation
            animatables.push({ mesh: sprite, type: 'bob', speed: 2, offset: index });
        }
        
        holder.add(sprite);
        holder.userData = charData;
        scene.add(holder);
        interactiveObjects.push(sprite);
    });
}

// Custom 3D Model: Spirit Tiger (Primitives)
function createSpiritTigerModel() {
    const group = new THREE.Group();
    
    const tigerMat = new THREE.MeshStandardMaterial({ 
        color: 0xff8800, 
        emissive: 0xff4400, 
        emissiveIntensity: 0.4,
        roughness: 0.5 
    });
    const stripeMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const glowMat = new THREE.MeshStandardMaterial({ color: 0x00ffff, emissive: 0x00ffff, emissiveIntensity: 2 });

    // Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1, 2.5), tigerMat);
    body.position.y = 1;
    body.castShadow = true;
    group.add(body);

    // Head
    const head = new THREE.Mesh(new THREE.BoxGeometry(1, 0.9, 1.2), tigerMat);
    head.position.set(0, 1.6, 1.6);
    group.add(head);

    // Eyes (Glowing)
    const leftEye = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.1, 0.1), glowMat);
    leftEye.position.set(-0.25, 1.7, 2.2);
    group.add(leftEye);
    
    const rightEye = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.1, 0.1), glowMat);
    rightEye.position.set(0.25, 1.7, 2.2);
    group.add(rightEye);

    // Legs
    const legGeo = new THREE.BoxGeometry(0.35, 1.2, 0.35);
    const fl = new THREE.Mesh(legGeo, tigerMat); fl.position.set(-0.4, 0.6, 1);
    const fr = new THREE.Mesh(legGeo, tigerMat); fr.position.set(0.4, 0.6, 1);
    const bl = new THREE.Mesh(legGeo, tigerMat); bl.position.set(-0.4, 0.6, -1);
    const br = new THREE.Mesh(legGeo, tigerMat); br.position.set(0.4, 0.6, -1);
    group.add(fl, fr, bl, br);

    // Tail
    const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1.5), tigerMat);
    tail.rotation.x = -Math.PI / 4;
    tail.position.set(0, 1.2, -1.8);
    group.add(tail);

    // Spirit Particles
    const particleGeo = new THREE.TetrahedronGeometry(0.1);
    for(let i=0; i<8; i++) {
        const p = new THREE.Mesh(particleGeo, glowMat);
        p.position.set(
            (Math.random()-0.5)*2,
            Math.random()*2,
            (Math.random()-0.5)*3
        );
        group.add(p);
        animatables.push({ mesh: p, type: 'float_up', speed: 0.02, limit: 3, startY: 0.5 });
    }

    return group;
}

// --- UTILS ---
function createBox(w, h, d, mat, x, y, z) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, y, z);
    m.castShadow = true;
    m.receiveShadow = true;
    return m;
}

function createCrate(x, y, z) {
    return createBox(1, 1, 1, new THREE.MeshStandardMaterial({ color: 0x8b5a2b }), x, y, z);
}

// --- ANIMATION LOOP ---
function onPointerMove(event) {
    const rect = container.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / container.clientHeight) * 2 + 1;
    
    // Move Tooltip
    if(!tooltip.classList.contains('hidden')) {
        tooltip.style.left = (event.clientX - rect.left + 15) + 'px';
        tooltip.style.top = (event.clientY - rect.top + 15) + 'px';
    }
}

function animate() {
    requestAnimationFrame(animate);
    const time = Date.now() * 0.001;

    controls.update();
    
    // Raycasting
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(interactiveObjects, true); // true for recursive
    
    if (intersects.length > 0) {
        let target = intersects[0].object;
        // Traverse up to find user data
        while(!target.userData.name && target.parent) {
            target = target.parent;
        }
        
        if (target.userData.name) {
            tooltip.classList.remove('hidden');
            tooltip.innerHTML = `<h4>${target.userData.name}</h4><p>${target.userData.status}</p>`;
            document.body.style.cursor = 'help';
        }
    } else {
        tooltip.classList.add('hidden');
        document.body.style.cursor = 'default';
    }

    // Animations
    animatables.forEach(a => {
        if (a.type === 'bob') a.mesh.position.y += Math.sin(time * a.speed + a.offset) * 0.005;
        if (a.type === 'flicker') a.mesh.intensity = a.baseInt + Math.sin(time * 10) * a.varInt;
        if (a.type === 'flicker_scale') a.mesh.scale.setScalar(1 + Math.sin(time * a.speed) * 0.05);
        if (a.type === 'breathe') a.mesh.scale.setScalar(1 + Math.sin(time * a.speed) * 0.02);
        if (a.type === 'float_up') {
            a.mesh.position.y += a.speed;
            if(a.mesh.position.y > a.limit) a.mesh.position.y = a.startY;
        }
    });

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

init();