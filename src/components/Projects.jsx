import React from "react";
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {fadeIn, textVariant} from "../utils/motion.js";
import {services} from "../constants/index.js";

const ProjectCard = ({index, title, icon}) =>{
    return (
        <Tilt className = "w-[300px]">
            <motion.div
                variants = {fadeIn("right", "spring", 0.5 * index, 0.75)}
                className= "w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    options = {{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className="bg-white rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                </div>
            </motion.div>
        </Tilt>
    )
}

const Projects = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <div className="text-green-300 pt-20 justify-center flex bg-hero-pattern">
                    <div className="text-green-300 justify-center flex bg-black pt-5 select-none">
                        //-------------------------------------------------------------------------------------------------------------------//
                    </div>
                </div>
                <div className="bg-black w-screen h-screen pt-20 flex justify-center">
                    <div>
                        <p className="text-green-300 text-[13px] justify-center flex select-none">//I have worked on various</p>
                        <p className="text-white text-[35px] justify-center flex select-none">Personal Projects</p>

                        <div className="mt-20 flex w-full flex-wrap gap-10">
                            {services.map((service, index) => (
                                <ProjectCard key={service.title} index={index}{...service}/>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Projects