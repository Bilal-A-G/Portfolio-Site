import React from "react";
import {motion} from "framer-motion";
import MoonCanvas from "./Moon.jsx";
import {styles} from "../styles.js";

const Hero = () => {
    return (
        <div>
            <div className="absolute">
                <div className="relative w-screen h-screen pl-[300px] z-20 pt-10">
                    <MoonCanvas/>
                </div>
            </div>
            <div className="pt-[430px] pl-20">
                <div className="text-green-300 text-[13px] z-1 pl-3">
                    <p>//Hello, my name is </p>
                    <p className="text-white text-[35px]">Bilal Abdul Gaffoor</p>

                    <p className="text-[10px] pt-4">//I am a passionate game programmer,</p>
                    <p className="text-[10px]">//interested in systems, graphics, and gameplay.</p>
                    <p className="text-[10px]">//Currently, I am looking for co-op/internship positions</p>

                    <div className="w-1/4 justify-center flex">
                        <div className="pt-10 z-30">
                            <a href="#projects">
                                <div className="h-11 w-5 rounded-xl border-solid border-2 border-green-300 flex justify-center">
                                    <motion.dev
                                        animate = {{
                                            y : [0, 22, 0]
                                        }}
                                        transition = {{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            repeatType: "loop"
                                        }}
                                        className="w-2 h-2 rounded-full bg-green-300 mt-1"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero