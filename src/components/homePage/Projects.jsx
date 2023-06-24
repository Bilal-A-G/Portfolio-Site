import Button from "../Button.jsx";
import ProjectData from "../../Projects.jsx";
import ImageWithBorder from "../ImageWithBorder.jsx";
import Styles from "../../Styles.jsx";

const Projects = () => {
    return(
        <div className="w-full bg-black pb-[6%] text-white">
            <p className={`w-full justify-center pt-[8%] flex ${Styles.Body}`}>Here are some of my</p>
            <p className={`w-full justify-center mt-[1%] flex ${Styles.SectionSubHeader}`}>Personal Projects</p>
            <div className="w-full gap-[8%] items-center mt-[4%] grid place-items-center justify-center flex auto-cols-max grid-flow-col">
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
                            <Button text={"Learn More"} link={path} width={"px-[20%]"}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Projects;