import Button from "../Button.jsx";
import ProjectData from "../../Projects.jsx";
import ImageWithBorder from "../ImageWithBorder.jsx";
import Styles from "../../Styles.jsx";

const Projects = () => {
    return(
        <div className="w-full bg-black md:pb-[6%] pb-[25%] text-white">
            <p className={`w-full justify-center pt-[8%] flex ${Styles.Body}`}>Here are some of my</p>
            <p className={`w-full justify-center mt-[1%] flex ${Styles.SectionSubHeader}`}>Personal Projects</p>
            <div className="w-full md:gap-[8%] gap-[2%] items-center mt-[4%] grid place-items-center justify-center flex md:auto-cols-max md:grid-flow-col">
                {ProjectData.map(({name, path, bottom, image, description}) =>
                    <div className="text-white w-[300px]">
                        <p className={`text-white ${Styles.SubSectionHeader} mb-[10%] justify-center flex`}>{name}</p>
                        <div className="w-full flex justify-center">
                            <ImageWithBorder image={image} style={Styles.SmallImage}/>
                        </div>
                        <p className={`flex justify-center text-center px-[10%] ${Styles.Body} pt-[10%] pb-[20%]`}>
                            {description}
                        </p>
                        <div className="w-full flex justify-center">
                            <Button text={"Learn More"} link={path} width={"md:w-[70%] w-[40%]"}/>
                        </div>
                        <div className={`w-full md:hidden ${bottom ? "hidden" : "flex"} justify-center pt-[20%]`}>
                            <div className="bg-white h-[1px] w-full absolute"/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Projects;