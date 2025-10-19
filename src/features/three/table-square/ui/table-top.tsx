import { RoundedBox } from "@react-three/drei";
import type { TopTableData } from "../domain";

export function TableTop({ value }: { value: TopTableData }) {
  return (
    <RoundedBox
      args={[value.length, 0.2, value.width]}
      radius={0.04}
      castShadow
      receiveShadow
      position={[0, 1.6, 0]}
    >
      <meshStandardMaterial color="#8B4513" roughness={0.8} metalness={0.1} />
    </RoundedBox>
  );
}
