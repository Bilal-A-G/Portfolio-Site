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
            <div className="absolute pt-[430px] pl-20">
                <div className="text-green-300 text-[13px] z-1 pl-3">
                    <p>//Hello, I am </p>
                    <p className="text-white text-[35px]">Bilal Abdul Gaffoor</p>

                    <p className="text-[10px] pt-4">//I am a passionate game programmer,</p>
                    <p className="text-[10px]">//interested in systems, graphics, and gameplay.</p>
                    <p className="text-[10px]">//Currently, I am looking for co-op/internship positions</p>
                </div>
            </div>
        </div>
    )
}

export default Hero