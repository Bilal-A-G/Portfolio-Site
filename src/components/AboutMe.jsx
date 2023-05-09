import React from "react";
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {fadeIn, textVariant} from "../utils/motion.js";
import {services} from "../constants/index.js";

const AboutCard = ({index, title, icon}) =>{
    return (
        <Tilt className = "xs:w-[300px] w-[50px]">
            <motion.div
                variants = {fadeIn("right", "spring", 0.5 * index, 0.75)}
                className= "w-full p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    options = {{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className="bg-white rounded-[20px] py-5 px-12 xs:min-h-[280px] min-h-[120px] flex justify-evenly items-center flex-col"
                >
                </div>
            </motion.div>
        </Tilt>
    )
}

const AboutMe = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <div className="text-minor justify-center flex bg-background pt-5 select-none xs:text-[15px] text-[12px]">
                    {window.innerWidth <= 700 ? "//-----------------------------------------------------//" : 
                        "//-------------------------------------------------------------------------------------------------------------------//"}
                </div>
                <div className="bg-background w-screen h-screen pt-20 flex justify-center">
                    <div>
                        <p className="text-minor xs:text-[13px] text-[11px] justify-center flex select-none">//Here's some info</p>
                        <p className="text-callToAction xs:text-[35px] text-[20px] justify-center flex select-none">About Me</p>

                        <div className="xs:mt-20 mt-10 flex xs:w-full w-[400px] flex-wrap xs:gap-10 gap-20">
                            {services.map((service, index) => (
                                <AboutCard key={service.title} index={index}{...service}/>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default AboutMe