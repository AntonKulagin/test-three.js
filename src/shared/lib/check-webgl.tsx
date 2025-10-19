import { useEffect, useState } from "react";

export function useWebGl() {
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);

  useEffect(() => {
    const checkWebGL = () => {
      try {
        const canvas = document.createElement("canvas");
        const gl =
          canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (!gl) {
          setIsWebGLSupported(false);
          return false;
        }
        return true;
      } catch {
        setIsWebGLSupported(false);
        return false;
      }
    };

    checkWebGL();
  }, []);

  const WebGlErrorMessage = () => {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div>
          <h2>WebGL не поддерживается</h2>
          <p>Ваше устройство или браузер не поддерживают 3D графику.</p>
          <p>Попробуйте обновить браузер или использовать другое устройство.</p>
        </div>
      </div>
    );
  };

  return {
    isWebGLSupported,
    WebGlErrorMessage,
  };
}
