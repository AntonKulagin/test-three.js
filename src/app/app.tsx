import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Grid } from "@react-three/drei";
import * as THREE from "three";
import {
  TableSquare,
  TableSquareManager,
} from "../features/three/table-square";
import { Floor } from "../features/three/floor";
import { useState } from "react";
import { useWebGl } from "../shared/lib/check-webgl";
import { useDeviceDetect } from "../shared/lib/react";

// Основной компонент сцены
const TableScene = ({
  showGrid = true,
  showAxes = false,
  environment = "city",
  enableAnimation = true,
}: {
  showGrid?: boolean;
  showAxes?: boolean;
  environment?: "city" | "sunset" | "dawn" | "night" | "warehouse" | "park";
  enableAnimation?: boolean;
}) => {
  const [topTableData, setTopTableData] = useState({ length: 4, width: 2 });
  const { isWebGLSupported, WebGlErrorMessage } = useWebGl();
  const { isMobile } = useDeviceDetect();

  if (!isWebGLSupported) return <WebGlErrorMessage />;

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <TableSquareManager
        topTableData={topTableData}
        onChange={setTopTableData}
      />
      <Canvas
        shadows
        dpr={
          isMobile
            ? Math.min(1.5, window.devicePixelRatio)
            : window.devicePixelRatio
        } // Ограничиваем DPR для мобильных
        camera={{
          position: [5, 5, 5] as [number, number, number],
          fov: isMobile ? 60 : 75, // Уменьшаем FOV для мобильных
          near: 0.1,
          far: 1000,
        }}
        gl={{
          antialias: !isMobile, // Отключаем сглаживание на мобильных
          powerPreference: "high-performance", // Приоритет производительности
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1,
        }}
        performance={{ min: 0.5 }} // Минимальная производительность 50%
      >
        {/* Освещение */}
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[10, 20, 5] as [number, number, number]}
          intensity={0.8}
          castShadow={!isMobile} // Отключаем тени на мобильных для производительности
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        {/* Сцена */}
        <Floor />

        {showGrid && (
          <Grid
            position={[0, 0.01, 0]}
            args={[20, 20]}
            cellSize={1}
            cellThickness={1}
            cellColor="#6f6f6f"
            sectionSize={5}
            sectionThickness={1.5}
            sectionColor="#9d4b4b"
            fadeDistance={25}
            fadeStrength={1}
            followCamera={false}
            infiniteGrid={true}
          />
        )}

        {/* Стол */}
        <TableSquare
          animate={enableAnimation && !isMobile} // Отключаем анимацию на мобильных
          topTableData={topTableData}
        />

        {/* Окружающая среда */}
        <Environment preset={environment} background={!isMobile} />

        {/* Управление камерой */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          minDistance={isMobile ? 5 : 3}
          maxDistance={isMobile ? 30 : 20}
          maxPolarAngle={Math.PI / 2}
          target={[0, 1, 0]}
          dampingFactor={0.1}
          touches={{
            ONE: THREE.TOUCH.ROTATE,
            TWO: THREE.TOUCH.DOLLY_PAN,
          }}
        />

        {/* Вспомогательные оси */}
        {showAxes && <axesHelper args={[5]} />}
      </Canvas>
    </div>
  );
};

export default TableScene;
