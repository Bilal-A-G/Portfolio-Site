import React from "react";
import {motion} from "framer-motion";
import MoonCanvas from "./Moon.jsx";
import {useEffect} from "react";

const Hero = () => {
    return (
        <div className="xs:pb-20 pb-5">
            <div className="absolute">
                <div className="relative w-screen h-screen xs:pl-[300px] pl-[200px] z-20 xs:pb-0 pb-[300px] xs:pt-10 pt-20">
                    <MoonCanvas/>
                </div>
            </div>
            <div className="xs:pt-[430px] pt-[400px] xs:pl-20 pl-5">
                <div className={`text-minor xs:text-[13px] text-[10px] z-1 pl-3`}>
                    <p>//Hello, my name is </p>
                    <p className="text-callToAction xs:text-[35px] text-[25px]">Bilal Abdul Gaffoor</p>

                    <p className="xs:text-[10px] text-[8px] pt-4">//I am a passionate game programmer,</p>
                    <p className="xs:text-[10px] text-[8px]">//interested in systems, graphics, and gameplay.</p>
                    <p className="xs:text-[10px] text-[8px]">//Currently, I am looking for co-op/internship positions</p>

                    <div className="xs:w-1/4 w-3/4 justify-center flex">
                        <div className="pt-10 z-30">
                            <a href="#projects">
                                <div className="h-11 w-5 rounded-xl border-solid border-2 hover:border-selected border-minor flex justify-center">
                                    <motion.dev
                                        animate = {{
                                            y : [0, 22, 0]
                                        }}
                                        transition = {{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            repeatType: "loop"
                                        }}
                                        className="w-2 h-2 rounded-full bg-minor mt-[5px]"
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