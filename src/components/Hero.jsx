import React from "react";
import {motion} from "framer-motion";
import ComputerCanvas from "./Test3D.jsx";
import {styles} from "../styles.js";

const Hero = () => {
    return (
        <div className="pt-10">
            <div className="relative">
                <div className="absolute">
                    <div className="pt-20 flow-root pl-[400px] w-full flex">
                        <div className="float-right w-[1050px] h-[600px]">
                            <ComputerCanvas/>
                        </div>
                    </div>
                </div>
            </div>
            <section className="w-full h-screen mx-auto">
                <div className="pt-[450px] text-green-300 text-[13px] pl-5">
                    <p>//Hello, I am </p>
                    <p className="text-white text-[30px]">Bilal Abdul Gaffoor</p>

                    <p className="text-[10px] pt-4">//I am a passionate game programmer, interested in</p>
                    <p className="text-[10px]">//systems, graphics, and gameplay programming.</p>
                    <p className="text-[10px]">//Currently, I am looking for co-op/internship positions</p>
                </div>
            </section>
        </div>
    )
}

export default Hero