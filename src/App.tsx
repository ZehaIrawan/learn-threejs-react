import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Box from "./components/Box";
import Sphere from "./components/Sphere";
import OfficialSphere from "./components/OfficialSphere";

export default function App() {
  const [selectedShape, setSelectedShape] = useState("box");

  const handleSelectShape = (shape: string) => {
    setSelectedShape(shape);
  };

  return (
    <>
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          width: "fit-content",
        }}
      >
        <h2>Select shape</h2>
        <button
          style={
            selectedShape === "sphere"
              ? { fontWeight: "bold" }
              : { fontWeight: "normal" }
          }
          onClick={() => handleSelectShape("sphere")}
        >
          Sphere
        </button>
        <button
          style={
            selectedShape === "officialSphere"
              ? { fontWeight: "bold" }
              : { fontWeight: "normal" }
          }
          onClick={() => handleSelectShape("officialSphere")}
        >
          Official Sphere
        </button>
        <button
          style={
            selectedShape === "box"
              ? { fontWeight: "bold" }
              : { fontWeight: "normal" }
          }
          onClick={() => handleSelectShape("box")}
        >
          Box
        </button>
      </div>
      {selectedShape === "box" && <Box />}
      {selectedShape === "sphere" && <Sphere />}
      {selectedShape === "officialSphere" && <OfficialSphere />}
    </>
  );
}
