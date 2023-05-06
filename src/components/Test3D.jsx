import {Suspense, useEffect, useState} from "react";
import {Canvas} from '@react-three/fiber';
import {Gltf, OrbitControls, Preload, useGLTF} from "@react-three/drei";
import CanvasLoader from "./Loader.jsx";

const Test3D = () => {
    const computer = useGLTF("./desktop_pc/scene.gltf");
    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor = "black"/>
            <pointLight intensity = {1}/>
            <primitive object = {computer.scene} scale = {1.7} position = {[2, -2, -3]}/>
        </mesh>
    )
}

const ComputerCanvas = () => {
    return (
        <Canvas frameloop="demand"
                shadows
                camera={{position: [20, 3, 5], fov: 50}}
                gl={{preserveDrawingBuffer: true}}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls enableZoom={false}
                               maxPolarAngle={Math.PI/2}
                               minPolarAngle={Math.PI/2}
                               enablePan={false}
                />
                <Test3D/>
            </Suspense>

            <Preload all/>
        </Canvas>
    )
}

export default ComputerCanvas