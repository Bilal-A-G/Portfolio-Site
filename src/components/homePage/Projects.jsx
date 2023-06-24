import Button from "../Button.jsx";
import ProjectData from "../../Projects.jsx";
import ImageWithBorder from "../ImageWithBorder.jsx";

const Projects = () => {
    return(
        <div className="w-full bg-black pb-[10%]">
            <p className="w-full justify-center pt-[120px] text-white flex text-[16px]">Here are some of my</p>
            <p className="w-full justify-center mt-[10px] text-white flex text-5xl font-semibold">Personal Projects</p>
            <div className="w-full space-x-[100px] items-center mt-[130px] grid place-items-center justify-center flex auto-cols-max grid-flow-col">
                {ProjectData.map(({name, path, bottom, image, description}) =>
                    <div>
                        <p className="text-white text-[27px] justify-center flex">{name}</p>
                        <ImageWithBorder image={image} width={"w-[280px]"} height={"h-[280px]"} innerHeight={"h-[235px]"} innerWidth={"w-[235px]"}/>
                        <p className="ml-[48px] text-white text-[16px] tracking-wide pt-8 w-[200px] pb-[20%]">
                            {description}
                        </p>
                        <Button text={"Learn More"} link={path} width={"px-[60px]"} extras={"ml-[30px]"}/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Projects;