﻿import Button from "../Button.jsx";
import ProjectData from "../../Projects.jsx";
import ImageWithBorder from "../ImageWithBorder.jsx";
import Styles from "../../Styles.jsx";
import FadeIn from "../FadeIn.jsx";
import Resources from "../../Resources.jsx";

const Projects = () => {
    return(
        <div className="w-full bg-black md:pb-[12%] sm:pb-[25%] pb-[40%] text-white">
            <FadeIn>
                <p className={`w-full justify-center pt-[8%] flex ${Styles.Body}`}>Here are some of my</p>
            </FadeIn>
            <FadeIn>
                <p className={`w-full justify-center mt-[1%] flex ${Styles.SectionSubHeader}`}>Personal Projects</p>
            </FadeIn>
            <div className="w-full lg:gap-[6%] lg:px-[6%] md:gap-y-[6%] sm:gap-y-[2%] gap-y-[2%] items-center mt-[4%] grid place-items-center justify-center flex md:grid-cols-2 lg:grid-cols-3 auto-rows-max md:grid-flow-cols">
                {ProjectData.map(({name, path, bottom, image, description}) =>
                    <FadeIn>
                        <div className="text-white w-[300px]">
                            <p className={`text-white ${Styles.SubSectionHeader} mb-[10%] justify-center flex`}>{name}</p>
                            <div className="w-full flex justify-center">
                                <ImageWithBorder image={image} style={Styles.SmallImage} sphere={true}/>
                            </div>
                            <p className={`flex justify-center text-center px-[10%] ${Styles.Body} pt-[10%] pb-[20%]`}>
                                {description}
                            </p>
                            <Button text={"Learn More"} link={path} width={"md:w-[70%] w-[40%]"} className={`w-full flex justify-center`}/>
                            <div className={`w-full md:hidden ${bottom ? "hidden" : "flex"} justify-center pt-[20%]`}>
                                <div className="bg-white h-[1px] w-full absolute"/>
                            </div>
                        </div>
                    </FadeIn>
                )}
            </div>
        </div>
    );
}

export default Projects;