import React from "react";
import {motion} from "framer-motion";
import MoonCanvas from "./Moon.jsx";

const Hero = () => {
    return (
        <div className="xs:pb-20 pb-5">
            <div className="absolute">
                <div className="relative w-screen h-screen xs:pl-[400px] pr-[200px] z-20 xs:pb-0 pb-[300px] xs:pt-10 pt-20">
                    <MoonCanvas/>
                </div>
            </div>
            <div className="xs:pt-[430px] pt-[400px] xs:pl-20 pr-10 xs:justify-start justify-end flex">
                <div className={`text-minor xs:text-[13px] text-[10px] z-1 pl-3`}>
                    <p className="xs:justify-start justify-end flex">//Hello, my name is </p>
                    <p className="text-callToAction xs:text-[35px] text-[20px] xs:justify-start justify-end flex">Bilal Abdul Gaffoor</p>

                    <p className="xs:text-[10px] text-[8px] pt-1 xs:justify-start justify-end flex">//Programmer && Game Developer</p>
                </div>
            </div>
            <div className="xs:w-1/4 w-full justify-center flex">
                <div className="pt-10 z-30">
                    <a href="#about">
                        <div className="xs:h-11 h-6 xs:w-5 w-3 rounded-xl border-solid border-2 hover:border-selected border-minor flex justify-center">
                            <motion.dev
                                animate = {{
                                    y : [0, window.innerWidth <= 700 ? 5 : 22, 0]
                                }}
                                transition = {{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: "loop"
                                }}
                                className="xs:w-2 w-1 xs:h-2 h-1 rounded-full bg-minor mt-[5px]"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero