
import { playSound } from '../../../common.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let selectedIndex = 0;
let cellCount = 0;
let radius = 0;
let theta = 0;
const ring = document.getElementById('world-ring');
const items = document.querySelectorAll('.ring-item');
const label = document.getElementById('active-region-name');

// 3D View Variables
let scene, camera, renderer, torus, stars, controls, animationId;
const threeModal = document.getElementById('three-d-modal');
const threeContainer = document.getElementById('three-d-container');

function initMapSelection() {
    if (!ring || items.length === 0) return;

    cellCount = items.length;
    theta = 360 / cellCount;
    
    // Width of item is defined in CSS (420px) + some gap (e.g., 20px)
    const itemWidth = 420;
    const gap = 20;
    
    // Radius calculation: circumference = cellCount * (width + gap)
    // r = C / 2pi
    radius = Math.round( ( (itemWidth + gap) * cellCount ) / (2 * Math.PI) );

    // Apply transforms to items
    items.forEach((item, index) => {
        const angle = theta * index;
        // Arrange items in a circle.
        // Rotate first, then push out by radius.
        item.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
        
        // Add click listener for navigation or rotation
        item.addEventListener('click', (e) => {
            // Calculate the shortest path to rotate to this item
            // Current rotation of ring is (selectedIndex * -theta)
            
            // Normalize indices to 0..cellCount
            const currentNorm = ((selectedIndex % cellCount) + cellCount) % cellCount;
            const targetNorm = index;
            
            let diff = targetNorm - currentNorm;
            // Shortest path logic
            if (diff > cellCount / 2) diff -= cellCount;
            if (diff < -cellCount / 2) diff += cellCount;
            
            if (diff === 0) {
                // Clicked the front-facing item: Navigate
                if (item.dataset.href) {
                    playSound('confirm.mp3');
                    window.location.href = item.dataset.href;
                }
            } else {
                // Clicked a side item: Rotate to it
                playSound('click.mp3');
                selectedIndex += diff;
                rotateTo(selectedIndex);
            }
        });
    });

    // Initial Position
    rotateTo(selectedIndex);

    // Setup Controls
    const btnLeft = document.getElementById('rotate-left');
    const btnRight = document.getElementById('rotate-right');
    const btn3D = document.getElementById('view-3d-btn');
    const btnClose3D = document.getElementById('close-three-d');


    if (btnLeft) {
        btnLeft.addEventListener('click', () => {
            selectedIndex--;
            rotateTo(selectedIndex);
            playSound('click.mp3');
        });
    }

    if (btnRight) {
        btnRight.addEventListener('click', () => {
            selectedIndex++;
            rotateTo(selectedIndex);
            playSound('click.mp3');
        });
    }
    
    if (btn3D) {
        btn3D.addEventListener('click', () => {
            playSound('click.mp3');
            open3DView();
        });
    }
    
    if (btnClose3D) {
        btnClose3D.addEventListener('click', () => {
            close3DView();
        });
    }

    // Keyboard Nav
    document.addEventListener('keydown', (e) => {
        if (threeModal.style.display === 'flex') return; // Disable ring nav if 3D is open
        
        if (e.key === 'ArrowLeft') {
            selectedIndex--;
            rotateTo(selectedIndex);
            playSound('click.mp3');
        } else if (e.key === 'ArrowRight') {
            selectedIndex++;
            rotateTo(selectedIndex);
            playSound('click.mp3');
        } else if (e.key === 'Enter') {
             // Navigate to current
             const actualIndex = ((selectedIndex % cellCount) + cellCount) % cellCount;
             const activeItem = items[actualIndex];
             if (activeItem && activeItem.dataset.href) {
                 playSound('confirm.mp3');
                 window.location.href = activeItem.dataset.href;
             }
        }
    });
}

function rotateTo(index) {
    const angle = index * -theta;
    ring.style.transform = `translateZ(-${radius}px) rotateY(${angle}deg)`;
    
    // Update active label and visual classes
    let actualIndex = ((index % cellCount) + cellCount) % cellCount;
    
    items.forEach((item, i) => {
        if (i === actualIndex) {
            item.classList.add('active');
            item.style.opacity = '1';
            item.style.pointerEvents = 'auto';
            const name = item.querySelector('h3')?.textContent || "Unknown";
            if(label) label.textContent = name;
        } else {
            item.classList.remove('active');
            item.style.opacity = '0.5';
        }
    });
}

// --- 3D THREE.JS LOGIC ---

function createCompositeMapTexture() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Configuration for map images
    // pos: 'front' (Main/Outer), 'side' (Almost Edge/Rim), 'hole' (The Edge/Inner), 'hide' (Don't show)
    const rawMapImages = [
        { src: 'assets/illustrations/edge.jpg', pos: 'side' },           // 1. Almost at the Edge
        { src: 'topia.jpg', pos: 'front' },          // 2. Animatopia
        { src: 'connectopia.png', pos: 'front' },    // 3. Connectopia
        { src: 'assets/illustrations/earth_land.png', pos: 'front' },    // 4. Earth Land
        { src: 'qaevyh08hsx51.webp', pos: 'front' }, // 5. Doughnut Hole
        { src: 'wa.jpg', pos: 'front' },             // 6. Warhammer
        { src: 'mushroom_kingdom.jpg', pos: 'hide' }, // 7. MK (HIDDEN)
        { src: 'fullmap.png', pos: 'front' },        // 8. Midlands
        { src: 'intermap.jpg', pos: 'front' },       // 9. Internet
        { src: 'archive.png', pos: 'front' },        // 10. Kivotos
        { src: 'pokemon.png', pos: 'hide' },        // 11. Pokemon (HIDDEN)
        { src: 'mide.webp', pos: 'hide' },          // 12. Middle Earth (HIDDEN)
        { src: 'faerun.png', pos: 'front' },    // 13. Faerun
        { src: 'leclaire_isle.png', pos: 'front' },    // 14. Leclaire
        { src: 'teyvat.png', pos: 'front' },    // 15. Teyvat
        { src: 'equestria.png', pos: 'front' },    // 16. Equestria
        { src: 'edge.avif', pos: 'hole' },           // 17. The Edge
        { src: 'grand_country.png', pos: 'front' }     // 18. Grand Country
    ];

    // Filter out hidden maps
    const mapImages = rawMapImages.filter(m => m.pos !== 'hide');

    // Use a large texture for quality
    const texWidth = 4096;
    const texHeight = 2048;

    canvas.width = texWidth;
    canvas.height = texHeight;
    
    // 1. Fill with "Ocean" background
    // Use deep blues and teals for a rich ocean feel
    const grad = ctx.createLinearGradient(0, 0, 0, texHeight);
    grad.addColorStop(0, '#001133');   // Deep Blue (Hole)
    grad.addColorStop(0.25, '#002244'); // Dark Blue (Side)
    grad.addColorStop(0.5, '#004466'); // Teal/Lighter Blue (Outer Face)
    grad.addColorStop(0.75, '#002244'); // Dark Blue
    grad.addColorStop(1, '#001133');   // Deep Blue
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, texWidth, texHeight);

    // Add some "waves" or glints
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    for (let i = 0; i < 1000; i++) {
        const x = Math.random() * texWidth;
        const y = Math.random() * texHeight;
        const w = Math.random() * 10 + 5;
        const h = Math.random() * 2;
        ctx.fillRect(x, y, w, h);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.minFilter = THREE.LinearFilter;
    
    let loaded = 0;
    const numImages = mapImages.length;
    // Calculate the slice of longitude each image gets
    const slotWidth = texWidth / numImages;

    mapImages.forEach((item, i) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = () => {
            // Position Logic based on item.pos
            // texHeight = 2048.
            // 0 = Hole Seam (Inner)
            // 0.5 = Front Face (Outer)
            // 0.75 = Side/Rim (Almost Edge)
            
            let yBaseRatio = 0.5;
            if (item.pos === 'side') yBaseRatio = 0.75;
            if (item.pos === 'hole') yBaseRatio = 0.0;

            const baseScale = 0.45; 
            const randomScale = 0.8 + Math.random() * 0.5; // 0.8x to 1.3x
            
            const targetH = texHeight * baseScale * randomScale;
            const imgAspect = img.width / img.height;
            const targetW = targetH * imgAspect;

            // Position Calculation
            // X: Center of its slot + random jitter
            const xJitter = (Math.random() - 0.5) * slotWidth * 0.6;
            let x = (i * slotWidth) + (slotWidth / 2) - (targetW / 2) + xJitter;

            // Y: Based on position category + slight jitter
            const yJitter = (Math.random() - 0.5) * (texHeight * 0.1);
            let y = (texHeight * yBaseRatio) - (targetH / 2) + yJitter;

            // Handle wrapping for Y if it goes off canvas (mostly for 'hole' position items)
            if (y < 0) y += texHeight;

            // Draw "Coastline" Shadow/Glow
            ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
            ctx.shadowBlur = 25;
            ctx.shadowOffsetX = 8;
            ctx.shadowOffsetY = 8;

            ctx.drawImage(img, x, y, targetW, targetH);

            // Handle Horizontal Wrapping (if image crosses left/right edge)
            if (x < 0) {
                ctx.drawImage(img, x + texWidth, y, targetW, targetH);
            }
            if (x + targetW > texWidth) {
                ctx.drawImage(img, x - texWidth, y, targetW, targetH);
            }
            
            // Handle Vertical Wrapping (mostly for 'hole' items that might sit on the seam)
            if (y < 0) {
                 ctx.drawImage(img, x, y + texHeight, targetW, targetH);
            }
            if (y + targetH > texHeight) {
                 ctx.drawImage(img, x, y - texHeight, targetW, targetH);
            }


            ctx.shadowBlur = 0; // Reset shadow

            loaded++;
            texture.needsUpdate = true;
        };
        img.onerror = () => {
            console.warn(`Failed to load map texture: ${item.src}`);
        };
        img.src = item.src;
    });

    // texture.offset.x = 0.5; // Optional alignment adjustment

    return texture;
}

function initThreeJS() {
    if (scene) return; // Already initialized

    scene = new THREE.Scene();
    // Atmospheric fog
    scene.fog = new THREE.FogExp2(0x000000, 0.015);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 25;
    camera.position.y = 15;
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    threeContainer.appendChild(renderer.domElement);

    // Controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.8; 
    controls.minDistance = 12;
    controls.maxDistance = 70;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const sunLight = new THREE.PointLight(0xfffacd, 1.5); // Warm sun
    sunLight.position.set(50, 50, 50);
    scene.add(sunLight);
    
    const rimLight = new THREE.PointLight(0x4444ff, 1.0); // Cool rim
    rimLight.position.set(-50, -20, -20);
    scene.add(rimLight);

    // Doughnut World (Torus)
    // R=10 (Major), r=4 (Minor)
    // Increased segments for smoothness
    const geometry = new THREE.TorusGeometry(10, 4, 64, 256);
    const mapTexture = createCompositeMapTexture();
    
    // Ensure texture wraps correctly
    mapTexture.wrapS = THREE.RepeatWrapping;
    mapTexture.wrapT = THREE.RepeatWrapping;
    
    const material = new THREE.MeshStandardMaterial({ 
        map: mapTexture,
        roughness: 0.3,
        metalness: 0.1,
        emissive: 0x001133, // Slight glow from the ocean itself
        emissiveIntensity: 0.2
    });
    
    torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    // Starfield Background
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 4000;
    const posArray = new Float32Array(starsCount * 3);

    for(let i = 0; i < starsCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 500;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const starsMaterial = new THREE.PointsMaterial({
        size: 0.15,
        color: 0xffffff,
        transparent: true,
        opacity: 0.8
    });

    stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Handle resize
    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

function animate() {
    if (threeModal.style.display === 'none') return;
    animationId = requestAnimationFrame(animate);
    
    if(controls) controls.update();
    if(renderer && scene && camera) renderer.render(scene, camera);
}

function open3DView() {
    threeModal.style.display = 'flex';
    initThreeJS();
    animate();
}

function close3DView() {
    threeModal.style.display = 'none';
    if (animationId) cancelAnimationFrame(animationId);
}


// Run initialization
if (document.getElementById('world-ring')) {
    setTimeout(initMapSelection, 100);
}
