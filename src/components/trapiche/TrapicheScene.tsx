"use client";

import { Instance, Instances, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useMemo, useRef } from "react";
import type { Mesh, Points } from "three";
import * as THREE from "three";

export type TrapicheLive = {
  punteoC: number;
  brix: number;
  rpm: number;
  alert: boolean;
  reducedMotion: boolean;
};

function Roller({
  position,
  speed,
  color,
  reducedMotion,
}: {
  position: [number, number, number];
  speed: number;
  color: string;
  reducedMotion: boolean;
}) {
  const mesh = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (reducedMotion || !mesh.current) return;
    mesh.current.rotation.y += delta * speed;
  });
  return (
    <group position={position} rotation={[Math.PI / 2, 0, 0]}>
      <mesh ref={mesh} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.78, 24]} />
        <meshStandardMaterial color={color} metalness={0.72} roughness={0.32} />
      </mesh>
    </group>
  );
}

function Rollers({ rpm, reducedMotion }: { rpm: number; reducedMotion: boolean }) {
  const speed = Math.max(0.6, rpm / 36);
  return (
    <group position={[-1.55, 0.95, 0]}>
      <Roller position={[-0.24, 0, 0]} speed={speed} color="#8d5a34" reducedMotion={reducedMotion} />
      <Roller position={[0, 0, 0]} speed={-speed * 1.05} color="#d08a52" reducedMotion={reducedMotion} />
      <Roller position={[0.24, 0, 0]} speed={speed} color="#8d5a34" reducedMotion={reducedMotion} />
    </group>
  );
}

function Steam({ alert, reducedMotion }: { alert: boolean; reducedMotion: boolean }) {
  const points = useRef<Points>(null);
  const geometry = useMemo(() => {
    const data = new Float32Array(140 * 3);
    for (let index = 0; index < 140; index += 1) {
      data[index * 3] = (Math.random() - 0.5) * 0.72;
      data[index * 3 + 1] = Math.random() * 1.8;
      data[index * 3 + 2] = (Math.random() - 0.5) * 0.72;
    }
    const next = new THREE.BufferGeometry();
    next.setAttribute("position", new THREE.BufferAttribute(data, 3));
    return next;
  }, []);

  useFrame((_, delta) => {
    if (reducedMotion) return;
    const attribute = geometry.getAttribute("position") as THREE.BufferAttribute;
    for (let index = 0; index < attribute.count; index += 1) {
      let y = attribute.getY(index) + delta * (alert ? 0.85 : 0.45);
      if (y > 2) y = 0;
      attribute.setY(index, y);
    }
    attribute.needsUpdate = true;
    if (points.current) points.current.geometry = geometry;
  });

  return (
    <points ref={points} geometry={geometry} position={[1.55, 1.35, 0]}>
      <pointsMaterial color="#f7f1e7" size={0.045} transparent opacity={0.42} depthWrite={false} />
    </points>
  );
}

function Fire({ alert, reducedMotion }: { alert: boolean; reducedMotion: boolean }) {
  const mesh = useRef<Mesh>(null);
  useFrame(({ clock }) => {
    if (reducedMotion || !mesh.current) return;
    const pulse = 1 + Math.sin(clock.elapsedTime * 7) * 0.08;
    mesh.current.scale.set(pulse, 1 + Math.sin(clock.elapsedTime * 5) * 0.12, pulse);
  });
  return (
    <mesh ref={mesh} position={[0.55, 0.48, 0.2]}>
      <coneGeometry args={[0.13, 0.38, 8]} />
      <meshStandardMaterial color={alert ? "#ff5a2a" : "#ffb15a"} emissive={alert ? "#ff3b1f" : "#ff8a2a"} emissiveIntensity={2.1} />
    </mesh>
  );
}

function CaneField() {
  const stalks = useMemo(
    () =>
      Array.from({ length: 32 }, (_, index) => ({
        position: [-2.6 + (index % 8) * 0.28, 0.72, -2.15 - Math.floor(index / 8) * 0.26] as [number, number, number],
        scale: 0.8 + (index % 4) * 0.08,
      })),
    [],
  );
  return (
    <Instances limit={32}>
      <cylinderGeometry args={[0.018, 0.026, 1.45, 5]} />
      <meshStandardMaterial color="#7d9a55" roughness={0.74} />
      {stalks.map((stalk, index) => (
        <Instance key={index} position={stalk.position} scale={stalk.scale} />
      ))}
    </Instances>
  );
}

function Mill({ live }: { live: TrapicheLive }) {
  const syrup = live.alert ? "#7a2e12" : "#c46a1d";
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0.4, 0, 0]}>
        <circleGeometry args={[5.4, 48]} />
        <meshStandardMaterial color="#3a2618" roughness={1} />
      </mesh>
      <CaneField />
      <mesh position={[-1.55, 0.42, 0]} castShadow>
        <boxGeometry args={[1.35, 0.28, 0.95]} />
        <meshStandardMaterial color="#6a4630" roughness={0.8} />
      </mesh>
      <Rollers rpm={live.rpm} reducedMotion={live.reducedMotion} />
      <mesh position={[-2.35, 1.05, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 1.1, 8]} />
        <meshStandardMaterial color="#6e8f4e" />
      </mesh>
      <mesh position={[0.55, 0.36, 0]} castShadow>
        <boxGeometry args={[1.25, 0.72, 0.92]} />
        <meshStandardMaterial color="#7a4632" roughness={0.88} />
      </mesh>
      <mesh position={[0.55, 1.15, 0]}>
        <cylinderGeometry args={[0.12, 0.16, 0.7, 12]} />
        <meshStandardMaterial color="#5c4034" />
      </mesh>
      <Fire alert={live.alert} reducedMotion={live.reducedMotion} />
      <mesh position={[1.55, 0.78, 0]} scale={[1, 0.42, 1]} castShadow>
        <sphereGeometry args={[0.5, 28, 18]} />
        <meshStandardMaterial color="#b87333" metalness={0.78} roughness={0.28} />
      </mesh>
      <mesh position={[1.55, 0.9, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.36, 24]} />
        <meshStandardMaterial color={syrup} emissive={syrup} emissiveIntensity={0.28} />
      </mesh>
      <Steam alert={live.alert} reducedMotion={live.reducedMotion} />
      {Array.from({ length: 5 }, (_, index) => (
        <mesh key={index} position={[3.05, 0.42, -0.45 + index * 0.22]} castShadow>
          <boxGeometry args={[0.28, 0.12, 0.18]} />
          <meshStandardMaterial color={index % 2 ? "#c9843a" : "#a86428"} roughness={0.55} />
        </mesh>
      ))}
      <pointLight position={[0.7, 0.8, 0.4]} color={live.alert ? "#ff5a2a" : "#ff9a45"} intensity={live.alert ? 7 : 4} distance={5} />
    </group>
  );
}

export default function TrapicheScene({ live }: { live: TrapicheLive }) {
  return (
    <Canvas camera={{ position: [5.2, 3.05, 5.6], fov: 36 }} dpr={[1, 1.6]} shadows>
      <color attach="background" args={["#1a100b"]} />
      <fog attach="fog" args={["#1a100b", 8, 17]} />
      <ambientLight intensity={0.38} color="#f0e2cf" />
      <directionalLight position={[4, 6, 3]} intensity={2.1} color="#fff4e4" castShadow />
      <hemisphereLight args={["#d5e2bc", "#3a2416", 0.45]} />
      <Mill live={live} />
      <OrbitControls
        makeDefault
        target={[0.6, 0.8, 0]}
        enablePan={false}
        minDistance={3.4}
        maxDistance={10}
        maxPolarAngle={Math.PI / 2.05}
        autoRotate={!live.reducedMotion}
        autoRotateSpeed={0.35}
      />
      <EffectComposer>
        <Bloom intensity={0.25} luminanceThreshold={0.9} mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
}
