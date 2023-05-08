import {Suspense, useEffect, useState} from "react";
import {Canvas} from '@react-three/fiber';
import {Gltf, OrbitControls, Preload, useGLTF} from "@react-three/drei";
import CanvasLoader from "./Loader.jsx";

const Moon = () => {
    const computer = useGLTF("./Moon.glb");
    return (
        <mesh>
            <hemisphereLight intensity={1} groundColor = "black"/>
            <primitive object = {computer.scene} scale = {window.innerWidth/19500} position = {[0, 0, 0]}/>
        </mesh>
    )
}

const MoonCanvas = () => {
    return (
        <Canvas frameloop="demand"
                shadows
                camera={{position: [20, 2, 5], fov: 50}}
                gl={{preserveDrawingBuffer: true}}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls enableZoom={false}
                               maxPolarAngle={Math.PI/2}
                               minPolarAngle={Math.PI/2}
                               enablePan={false}
                               target={[0, 0, window.innerWidth/281]}
                               autoRotate
                               autoRotateSpeed={0.05}
                />
                <Moon/>
            </Suspense>

            <Preload all/>
        </Canvas>
    )
}

export default MoonCanvas