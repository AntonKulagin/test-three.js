export function TableLeg({ position }: { position: [number, number, number] }) {
  return (
    <mesh castShadow position={position}>
      <boxGeometry args={[0.2, 1.5, 0.2]} />
      <meshStandardMaterial color="#8B4513" roughness={0.8} metalness={0.1} />
    </mesh>
  );
}
