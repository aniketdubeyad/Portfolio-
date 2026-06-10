"use client";

import { Environment, Float, MeshTransmissionMaterial, Sphere, Torus } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function Core() {
  const group = useRef<THREE.Group>(null);
  const points = useMemo(() => Array.from({ length: 32 }, (_, i) => {
    const a = (i / 32) * Math.PI * 2;
    const r = 1.45 + (i % 5) * 0.08;
    return new THREE.Vector3(Math.cos(a) * r, Math.sin(i * 1.7) * 0.42, Math.sin(a) * r);
  }), []);

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    group.current.rotation.y = clock.elapsedTime * 0.18 + pointer.x * 0.18;
    group.current.rotation.x = pointer.y * 0.12;
  });

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.55}>
        <Sphere args={[1, 48, 48]}>
          <MeshTransmissionMaterial thickness={0.55} roughness={0.1} transmission={0.9} chromaticAberration={0.04} anisotropy={0.18} color="#bff7ff" />
        </Sphere>
        <Sphere args={[0.28, 32, 32]}>
          <meshStandardMaterial color="#62e6ff" emissive="#62e6ff" emissiveIntensity={1.8} />
        </Sphere>
        <Torus args={[1.34, 0.008, 10, 128]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial color="#ff7ab6" transparent opacity={0.85} />
        </Torus>
        <Torus args={[1.66, 0.006, 10, 128]} rotation={[0.4, 0.2, 0.8]}>
          <meshBasicMaterial color="#b7ff6a" transparent opacity={0.55} />
        </Torus>
        {points.map((point, index) => (
          <Sphere key={index} args={[0.026, 12, 12]} position={point}>
            <meshBasicMaterial color={index % 3 === 0 ? "#ffd166" : "#62e6ff"} />
          </Sphere>
        ))}
      </Float>
    </group>
  );
}

export default function AICore() {
  return (
    <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0, 4.7], fov: 42 }} gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.65} />
        <pointLight position={[3, 3, 4]} intensity={18} color="#62e6ff" />
        <pointLight position={[-3, -2, 2]} intensity={9} color="#ff7ab6" />
        <Core />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
