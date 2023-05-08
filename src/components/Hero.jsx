import React from "react";
import {motion} from "framer-motion";
import MoonCanvas from "./Moon.jsx";
import {styles} from "../styles.js";

const Hero = () => {
    return (
        <div className="pt-10">
            <div className="relative">
                <div className="flex h-screen w-screen absolute pl-[300px]">
                    <MoonCanvas/>
                </div>
            </div>
            <div className="text-green-300 text-[13px] pl-20 absolute pt-[430px]">
                <p>//Hello, I am </p>
                <p className="text-white text-[30px]">Bilal Abdul Gaffoor</p>

                <p className="text-[10px] pt-4">//I am a passionate game programmer, interested in</p>
                <p className="text-[10px]">//systems, graphics, and gameplay programming.</p>
                <p className="text-[10px]">//Currently, I am looking for co-op/internship positions</p>
            </div>
            <section className="w-full h-screen mx-auto">
            </section>
        </div>
    )
}

export default Hero