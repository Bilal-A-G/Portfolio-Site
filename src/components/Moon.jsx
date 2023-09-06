import {Suspense, useEffect, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";

const Moon = () => {
    const moon = useGLTF("./models/Moon.gltf");
    
    return(
        <mesh>
            <hemisphereLight intensity={4} groundColor={"black"}/>
            <pointLight intensity={0.5}/>
            <primitive object={moon.scene}/>
        </mesh>
    )    
}

const ThreeJSCanvas = () =>{
    return(
        <div className="z-20 w-full h-full flex border-[3px] border-off-white rounded-full">
            <Canvas
                frameloop={"demand"}
                shadows={true}
                camera={{position: [400, 0, 0], fov: 33}}
                gl={{preserveDrawingBuffer: true}}>

                <Suspense>
                    <OrbitControls
                        enableZoom={false}
                        maxPolarAngle={Math.PI/2}
                        minPolarAngle={Math.PI/2}
                        autoRotate={true}
                        autoRotateSpeed={0.1}
                        target={[0, 0, 70]}
                    />
                    <Moon/>
                </Suspense>
                <Preload all/>
            </Canvas>
        </div>
    )
}

export default ThreeJSCanvas;