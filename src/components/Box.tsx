import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function BoxMesh(props: JSX.IntrinsicElements["mesh"]) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!);
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 2 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
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
      <BoxMesh position={[-1, 0, 0]} />
    </Canvas>
  );
}
