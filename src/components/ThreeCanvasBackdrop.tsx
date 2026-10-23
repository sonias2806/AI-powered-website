import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeCanvasBackdrop: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Particle Constellation Geometry
    const particleCount = 280;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const goldColor = new THREE.Color('#F59E0B');
    const roseColor = new THREE.Color('#F43F5E');
    const magentaColor = new THREE.Color('#D946EF');
    const violetColor = new THREE.Color('#8B5CF6');
    const emeraldColor = new THREE.Color('#10B981');

    for (let i = 0; i < particleCount; i++) {
      // Cylindrical / spherical spread across scene
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 160;
      positions[i3 + 1] = (Math.random() - 0.5) * 120;
      positions[i3 + 2] = (Math.random() - 0.5) * 100;

      // Color interpolation across vibrant palette
      const r = Math.random();
      const col = r < 0.25 ? goldColor : r < 0.5 ? roseColor : r < 0.7 ? magentaColor : r < 0.85 ? violetColor : emeraldColor;
      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;

      scales[i] = Math.random() * 2 + 1;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom circular particle texture using canvas
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.3, 'rgba(244,63,94,0.9)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 4.2,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.NormalBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Subtle 3D Geometric Floating Icosahedron Wireframe Core (Solar Gold)
    const icoGeo = new THREE.IcosahedronGeometry(22, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0xF59E0B,
      wireframe: true,
      transparent: true,
      opacity: 0.22
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    icoMesh.position.set(30, 5, -20);
    scene.add(icoMesh);

    // Subtle second icosahedron (Hot Rose)
    const icoGeo2 = new THREE.IcosahedronGeometry(14, 1);
    const icoMat2 = new THREE.MeshBasicMaterial({
      color: 0xF43F5E,
      wireframe: true,
      transparent: true,
      opacity: 0.18
    });
    const icoMesh2 = new THREE.Mesh(icoGeo2, icoMat2);
    icoMesh2.position.set(-35, -15, -30);
    scene.add(icoMesh2);

    // Mouse movement interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.02;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.02;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Window Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Slow organic rotation
      particles.rotation.y = elapsedTime * 0.04 + targetX * 0.1;
      particles.rotation.x = elapsedTime * 0.02 + targetY * 0.1;

      icoMesh.rotation.x = elapsedTime * 0.08;
      icoMesh.rotation.y = elapsedTime * 0.12;

      icoMesh2.rotation.x = -elapsedTime * 0.09;
      icoMesh2.rotation.z = elapsedTime * 0.07;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      geometry.dispose();
      material.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      icoGeo2.dispose();
      icoMat2.dispose();
      texture.dispose();
      renderer.dispose();

      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-60"
      aria-hidden="true"
    />
  );
};
