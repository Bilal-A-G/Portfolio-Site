import React from "react";
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {fadeIn, textVariant} from "../utils/motion.js";
import {services} from "../constants/index.js";

const ProjectCard = ({index, title, icon}) =>{
    return (
        <div>
            {title}
        </div>
    )
}

const Projects = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <div className="text-green-300 pt-[120px] justify-center flex bg-hero-pattern">
                    <div className="text-green-300 justify-center w-3/4 h-10 flex bg-black pt-5 select-none">
                        //-------------------------------------------------------------------------------------------------------------------//
                    </div>
                </div>
                <div className="bg-black w-screen h-screen pt-20 flex items-start justify-center">
                    <div>
                        <p className="text-green-300 text-[13px] justify-center flex select-none">//I have worked on various</p>
                        <p className="text-white text-[35px] justify-center flex select-none">Personal Projects</p>

                        <div className="mt-20 flex flex-wrap gap-10 pt-20 text-white">
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