import React, { Suspense, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";

function Scene({ selectedTexture }) {
  // All textures are CC0 textures from: https://cc0textures.com/
  const name = (type: string) => `./${selectedTexture}_${type}.jpg`;

  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    [
      name("Color"),
      name("Displacement"),
      name("NormalDX"),
      name("Roughness"),
      //   name("AmbientOcclusion"),
    ]
  );

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <mesh>
        {/* Width and height segments for displacementMap */}
        <sphereBufferGeometry args={[1, 100, 100]} />
        <meshStandardMaterial
          displacementScale={0.2}
          map={colorMap}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          aoMap={aoMap}
        />
      </mesh>
    </>
  );
}

export default function OfficialSphere() {
  const [selectedTexture, setSelectedTexture] = useState("WoodFloor051_1K");

  const handleSelectTexture = (texture: string) => {
    setSelectedTexture(texture);
  };
  return (
    <div style={{ display: "flex" }}>
      <Canvas style={{ height: "100vh" }}>
        <Suspense fallback={null}>
          <Scene selectedTexture={selectedTexture} />
          <OrbitControls autoRotate />
        </Suspense>
      </Canvas>
      <div>
        <img
          src="./WoodFloor051_PREVIEW.jpg"
          width={200}
          height={200}
          alt=""
          onClick={() => handleSelectTexture("WoodFloor051_1K")}
        />
        <img
          src="./Marble016_PREVIEW.jpg"
          width={200}
          height={200}
          alt=""
          onClick={() => handleSelectTexture("Marble016_1K")}
        />
      </div>
    </div>
  );
}
