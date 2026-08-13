// visuals.js - Handles creation and cleanup of evidence visualizations (SVG, CSS, Three.js)
// THIS FILE IS CURRENTLY UNUSED as modal visuals were removed.
// Keeping the code here in case visuals are re-introduced later.

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EvidenceConfig } from './config.js'; // Config still needed if visuals return

// --- State for Three.js ---
let scene, camera, renderer, controls;
let currentAnimationId = null; // Store requestAnimationFrame ID

// --- Main Visual Creation Function ---

/**
 * Creates the appropriate visual for the given evidence ID in the provided container.
 * @param {string} evidenceId - The ID of the evidence.
 * @param {HTMLElement} container - The DOM element to render the visual into.
 */
export function createEvidenceVisual(evidenceId, container) {
    console.warn("createEvidenceVisual called, but modal visuals are currently disabled.");
    // Clear container immediately if called accidentally
    if (container) container.innerHTML = '<p style="text-align: center; padding: 20px;">[Visualizations currently disabled]</p>';
    return;

    /* --- Code below is inactive but kept for potential future use ---
    if (!container) return;

    const config = EvidenceConfig[evidenceId] || {};

    const visualType = config.visualType || getVisualTypeFromId(evidenceId);

    try {
        switch (visualType) {
            case 'svg':
                if (config.svgContent) {
                    createSimpleSVG(container, config.svgContent);
                } else {
                    createSvgVisualFallback(evidenceId, container, config);
                }
                break;
            case 'css':
                createCssVisual(evidenceId, container, config);
                break;
            case 'threejs':
                 if (evidenceId === 'item-blimp') {
                     setupThreeScene(config, container);
                    createDamagedBlimpVisual(config);
                 } else {
                     container.innerHTML = '<p style="text-align: center; padding: 20px;">No specific 3D visual available.</p>';
                 }
                break;
             case 'text':
             default:
                container.innerHTML = '<p style="text-align: center; font-style: italic; padding: 20px;">[Visual examination not applicable.]</p>';
        }
    } catch (error) {
        console.error(`Error creating visual for ${evidenceId}:`, error);
        container.innerHTML = '<p style="text-align: center; color: var(--danger-color); padding: 20px;">Error loading visualization.</p>';
    }
    */
}

/**
 * Cleans up any active visualizations, especially Three.js resources and animations.
 */
export function clearModalVisual() {
    console.warn("clearModalVisual called, but modal visuals are currently disabled.");
    return;

    /* --- Code below is inactive but kept for potential future use ---
    // Stop requestAnimationFrame loop
    if (currentAnimationId) {
        cancelAnimationFrame(currentAnimationId);
        currentAnimationId = null;
    }

    // Stop Three.js animation loop if running
    if (renderer) {
        renderer.setAnimationLoop(null);
    }

    // Clean up Three.js scene resources
    if (scene) {
        scene.traverse(object => {
            // ... (geometry/material disposal logic) ...
        });
        scene = null;
    }

    // Dispose of renderer and remove its canvas
    if (renderer) {
        renderer.dispose();
        if (renderer.domElement && renderer.domElement.parentElement) {
            renderer.domElement.remove();
        }
        renderer = null;
    }

    // Dispose of controls
    if (controls) {
        controls.dispose();
        controls = null;
    }

    camera = null;

    // Remove resize listener if attached
    window.removeEventListener('resize', container._resizeHandler); // Assumes handler was stored on container
    */
}


// --- Helper Functions (Inactive) ---

function getVisualTypeFromId(evidenceId) {
    // Fallback logic ONLY if config doesn't specify type
    if (evidenceId.includes('blimp')) return 'threejs'; 
    if (evidenceId.includes('residue') || evidenceId.includes('fall')) return 'css';
    if (evidenceId.includes('testimony') || evidenceId.includes('emblem') || evidenceId.includes('pouch') || evidenceId.includes('staff') || evidenceId.includes('log') || evidenceId.includes('communique') || evidenceId.includes('wards') || evidenceId.includes('notes') || evidenceId.includes('robes') || evidenceId.includes('kit') || evidenceId.includes('ledger') || evidenceId.includes('poster')) return 'svg';
    return 'text'; 
}

function createSimpleSVG(container, innerSVGContent, width = 150, height = 150) {
    container.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${width}" height="${height}" style="display: block; margin: auto;">${innerSVGContent}</svg>`;
}

// --- Specific Visual Creators (Inactive) ---

function createSvgVisualFallback(evidenceId, container, config) {
    switch (evidenceId) {
        case 'item-testimony':
            createTestimonySVG(container); 
            break;
        case 'item-emblem':
            createMeltedEmblemSVG(container); 
            break;
        default:
            container.innerHTML = ''; 
    }
}

function createCssVisual(evidenceId, container, config) {
    switch (evidenceId) {
        case 'item-residue':
            container.innerHTML = `<div class="fire-residue-viz"></div>`;
            createFireParticleAnimation(container.querySelector('.fire-residue-viz'), config);
            break;
        case 'item-fall':
            container.innerHTML = `<div class="fall-injury-viz"></div>`;
            break;
        default:
            container.innerHTML = '<p style="text-align: center; padding: 20px;">No specific CSS visual available.</p>';
    }
}

function createTestimonySVG(container) {
    container.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <defs>
            <filter id="whisperEffect" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur"/>
            <feOffset in="blur" dx="1" dy="1" result="offsetBlur"/>
            <feMerge>
                <feMergeNode in="offsetBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
            </filter>
        </defs>
        <g filter="url(#whisperEffect)" opacity="0.7">
            <path d="M30 70 C 40 85, 60 85, 70 70 S 60 55, 50 55 S 40 55, 30 70 Z" fill="#aaa" stroke="#555" stroke-width="1"/>
            <circle cx="40" cy="60" r="3" fill="#333"/>
            <circle cx="60" cy="60" r="3" fill="#333"/>
                <text x="50%" y="35" text-anchor="middle" font-size="10" fill="#333" font-style="italic">"...panicked before..."</text>
            <text x="50%" y="48" text-anchor="middle" font-size="9" fill="#555" font-style="italic">"...Guild guy looked expectant..."</text>
            <text x="50%" y="90" text-anchor="middle" font-size="9" fill="#555" font-style="italic">"...another magic sound..."</text>
        </g>
    </svg>`;
}

function createFireParticleAnimation(container, config) {
    if (!container) return;
    const particleCount = config?.particleCount || 45; 

     container.style.position = 'relative';
     container.style.width = '150px';
     container.style.height = '150px';
     container.style.overflow = 'hidden';
     container.style.margin = 'auto';

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        if (!document.styleSheets[0] || !Array.from(document.styleSheets[0].cssRules).some(rule => rule.selectorText === '.particle')) {
             console.warn("'.particle' CSS class not found. Applying basic styles.");
             particle.style.position = 'absolute';
             particle.style.bottom = '0';
             particle.style.backgroundColor = 'orange';
             particle.style.borderRadius = '50%';
             particle.style.opacity = '0';
        } else {
             particle.classList.add('particle'); 
        }
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 2.5}s`; 
        const size = Math.random() * 4 + 2; 
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        container.appendChild(particle);
    }
}

function createMeltedEmblemSVG(container) {
     container.innerHTML = `
        <svg width="120" height="120" style="overflow: visible; display: block; margin: auto;">
            <defs>
                <filter id="melt-effect">
                    <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" seed="10" result="turbulence"/>
                    <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="10" xChannelSelector="R" yChannelSelector="G"/>
                        <feGaussianBlur stdDeviation="1.5"/>
                        <feComponentTransfer result="transfer">
                        <feFuncA type="discrete" tableValues="0 1 1"/>
                    </feComponentTransfer>
                        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.3"/>
                </filter>
            </defs>
            <g class="melted-emblem-viz">
                <path d="M60 15 L25 30 v35 c0 18 15 30 35 35 c20 -5 35 -17 35 -35 V30 L60 15zm0 35 c-10 0-18-8-18-18s8-18 18-18 18 8 18 18 -8 18-18 18z" fill="#b0b0b0" stroke="#666" stroke-width="1.5"/>
                 <path d="M55 50 h10 l-3 8 h-4 z M52 42 h16 v5 h-16 z" fill="#444" />
                 <text x="50" y="95" font-family="serif" font-size="6" fill="#444" text-anchor="middle">Iron Fists</text> 
            </g>
        </svg>`;
         const gElement = container.querySelector('.melted-emblem-viz');
         if (gElement) {
             gElement.style.filter = 'url(#melt-effect)';
         }
}


// --- Three.js Setup and Object Creation (Inactive) ---

function setupThreeScene(config = {}, container) {
     if (!container) return;

     const computedStyle = getComputedStyle(container);
     let width = parseInt(computedStyle.width, 10);
     let height = container.clientHeight || parseInt(computedStyle.height, 10) || parseInt(computedStyle.minHeight, 10);

     if (config.height) {
         height = config.height;
     }

     width = Math.max(width, 150);
     height = Math.max(height, 150);

     scene = new THREE.Scene();
     scene.background = new THREE.Color(config.backgroundColor || '#e8e2d5');

     camera = new THREE.PerspectiveCamera(config.fov || 75, width / height, 0.1, 1000);
     camera.position.z = config.cameraZ || 5;
     camera.position.y = config.cameraY || 1;

     renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
     renderer.setSize(width, height);
     renderer.setPixelRatio(window.devicePixelRatio);
     container.appendChild(renderer.domElement);

     const ambientLight = new THREE.AmbientLight(config.ambientLightColor || 0xffffff, config.ambientLightIntensity || 0.6);
     scene.add(ambientLight);
     const directionalLight = new THREE.DirectionalLight(config.dirLightColor || 0xffffff, config.dirLightIntensity || 0.8);
     directionalLight.position.set(5, 10, 7.5);
     scene.add(directionalLight);

     controls = new OrbitControls(camera, renderer.domElement);
     controls.enableDamping = true;
     controls.dampingFactor = 0.05;
     controls.target.set(0, config.targetY || 0, 0);
     controls.update();

     const animate = () => {
        currentAnimationId = requestAnimationFrame(animate);

        if (!renderer || !scene || !camera || !controls) {
            if (currentAnimationId) cancelAnimationFrame(currentAnimationId);
            currentAnimationId = null;
            return;
        }
         controls.update();
         renderer.render(scene, camera);
     };

     animate();

     const onResize = () => {
         if (!renderer || !camera || !container) return;
         const newWidth = container.clientWidth;
         let newHeight = container.clientHeight;
         if (!newHeight) { 
              newHeight = Math.max(config.height || 150, newWidth * 0.6); 
         }

         if (newWidth > 0 && newHeight > 0) {
             camera.aspect = newWidth / newHeight;
             camera.updateProjectionMatrix();
             renderer.setSize(newWidth, newHeight);
         }
     };
     container._resizeHandler = onResize; 
     window.addEventListener('resize', onResize);
     onResize(); 
}

function createDamagedBlimpVisual(config) {
    if (!scene) return;
     const bodyRadius = 2.5;
    const bodyHeightScale = 1.3;
    const bodyGeometry = new THREE.SphereGeometry(bodyRadius, 48, 24);
    bodyGeometry.scale(1, bodyHeightScale, 1);
    const bodyMaterial = new THREE.MeshStandardMaterial({
        color: config.blimpColor || 0xad9f8a,
        roughness: 0.8,
        metalness: 0.1,
        map: createFabricTexture(config.blimpColor),
    });
    const blimpBody = new THREE.Mesh(bodyGeometry, bodyMaterial);
    blimpBody.rotation.z = Math.PI / 20;
     const gondolaLength = 1.8;
     const gondolaRadius = 0.3;
     const gondolaGeometry = new THREE.CapsuleGeometry(gondolaRadius, gondolaLength, 8, 16);
    const gondolaMaterial = new THREE.MeshStandardMaterial({
        color: config.gondolaColor || 0x6b5b4a,
        roughness: 0.5,
        metalness: 0.3,
    });
    const gondola = new THREE.Mesh(gondolaGeometry, gondolaMaterial);
    gondola.rotation.x = Math.PI / 2;
    gondola.position.y = -bodyRadius * bodyHeightScale - gondolaRadius - 0.1;
    gondola.position.z = 0.2;
    gondola.rotation.z = blimpBody.rotation.z;
    const damageGeometry = new THREE.SphereGeometry(0.01, 3, 2);
    const damageMesh = new THREE.Mesh(damageGeometry, new THREE.MeshBasicMaterial({transparent: true, opacity: 0}));
    damageMesh.position.set(1.0, 0.7, 1.0);
    scene.add(damageMesh);
     const tearPlaneGeo = new THREE.PlaneGeometry(1.2, 1.8);
     const tearTexture = createTearTexture(config.damageColor || 0x1a1a1a);
     const tearMaterial = new THREE.MeshStandardMaterial({
        map: tearTexture,
        transparent: true,
        alphaTest: 0.1,
        roughness: 0.8,
        metalness: 0.0,
        side: THREE.DoubleSide,
        polygonOffset: true,
        polygonOffsetFactor: -0.1
     });
     const tearPlane = new THREE.Mesh(tearPlaneGeo, tearMaterial);
     tearPlane.position.set(1.0, 0.7, 1.0);
     tearPlane.lookAt(blimpBody.position);
     tearPlane.rotation.z += Math.PI / 20;
     tearPlane.position.addScaledVector(new THREE.Vector3(1.0, 0.7, 1.0).normalize(), 0.02);
    const blimpGroup = new THREE.Group();
    blimpGroup.add(blimpBody);
    blimpGroup.add(gondola);
    blimpGroup.add(tearPlane);
    scene.add(blimpGroup);
    if (controls) controls.target.set(0, 0, 0);
    if (camera) camera.position.set(0, 1, config.cameraZ || 8);
}

function createFabricTexture(baseColor = 0xad9f8a) {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = `#${new THREE.Color(baseColor).getHexString()}`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(0,0,0,0.08)';
    for (let i = 0; i < canvas.width; i += 4) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
        ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke();
    }
     ctx.strokeStyle = 'rgba(255,255,255,0.05)';
     for (let i = 2; i < canvas.width; i += 4) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke();
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
    texture.needsUpdate = true;
    return texture;
}

function createTearTexture(scorchColor = 0x1a1a1a) {
     const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    const color = `#${new THREE.Color(scorchColor).getHexString()}`;
     const grad = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 10, canvas.width/2, canvas.height/2, 60);
     grad.addColorStop(0, color);
     grad.addColorStop(0.7, `rgba(${new THREE.Color(scorchColor).r * 255}, ${new THREE.Color(scorchColor).g * 255}, ${new THREE.Color(scorchColor).b * 255}, 0.8)`);
     grad.addColorStop(1, `rgba(${new THREE.Color(scorchColor).r * 255}, ${new THREE.Color(scorchColor).g * 255}, ${new THREE.Color(scorchColor).b * 255}, 0)`);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(30, 20);
    ctx.bezierCurveTo(10, 40, 40, 70, 50, 110);
    ctx.lineTo(80, 115);
     ctx.bezierCurveTo(90, 80, 120, 60, 95, 25);
    ctx.closePath();
    ctx.fill();
     ctx.fillStyle = `rgba(0,0,0,0.5)`;
     for(let i=0; i< 5; i++){
         ctx.beginPath();
         ctx.arc(canvas.width/2 + (Math.random()-0.5)*40, canvas.height/2 + (Math.random()-0.5)*60, Math.random()*5+2, 0, Math.PI*2);
         ctx.fill();
     }
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
}