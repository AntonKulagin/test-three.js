import type * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function TableLayout({
  legs,
  tableTop,
  animated,
}: {
  legs: React.ReactNode;
  tableTop: React.ReactNode;
  animated: boolean;
}) {
  const tableRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (tableRef.current && animated) {
      // Легкое плавающее движение
      tableRef.current.position.y =
        1.6 + Math.sin(state.clock.elapsedTime) * 0.02;
    }
  });

  return (
    <group ref={tableRef}>
      {legs}
      {tableTop}
    </group>
  );
}
