import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function SphereMesh(props: JSX.IntrinsicElements["mesh"]) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh {...props} ref={ref} scale={1}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color={"tomato"} />
    </mesh>
  );
}

export default function Box() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      {/* This light globally illuminates all objects in the scene equally.*/}
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      {/* This light gets emitted from a single point in one direction, 
along a cone that increases in size the further from the light it gets.
 */}
      <pointLight position={[-10, -10, -10]} />
      <SphereMesh position={[-1, 0, 0]} />
    </Canvas>
  );
}
