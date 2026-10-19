"use client";

import { Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function FundScene({ progress, projection }: { progress: number; projection: boolean }) {
  const clamped = Math.max(0.015, Math.min(1, progress));
  const height = 0.18 + clamped * 2.35;
  const color = projection ? "#e6a23c" : "#8d5a2b";
  return (
    <Canvas camera={{ position: [2.4, 1.8, 3.2], fov: 40 }} dpr={[1, 1.5]}>
      <color attach="background" args={["#1a100b"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 4, 2]} intensity={1.8} />
      <mesh position={[0, 1.25, 0]}>
        <cylinderGeometry args={[0.86, 0.9, 2.7, 40, 1, true]} />
        <meshStandardMaterial color="#c57a45" metalness={0.65} roughness={0.35} transparent opacity={0.28} side={2} />
      </mesh>
      <mesh position={[0, height / 2, 0]}>
        <cylinderGeometry args={[0.72, 0.74, height, 40]} />
        <meshStandardMaterial color={color} roughness={0.32} metalness={0.18} />
      </mesh>
      <mesh position={[0, 2.55, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.9, 0.025, 12, 40]} />
        <meshStandardMaterial color="#f3d7a1" />
      </mesh>
      <Html position={[1.15, 2.45, 0]} center>
        <div className="rounded-full bg-ink/80 px-2 py-1 text-[10px] text-honey">Meta 76M</div>
      </Html>
      <OrbitControls enablePan={false} minDistance={2.4} maxDistance={6} autoRotate={!projection} autoRotateSpeed={0.6} />
    </Canvas>
  );
}
