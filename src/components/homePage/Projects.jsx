import Button from "../Button.jsx";
import ProjectData from "../../Projects.jsx";

const Projects = () => {
    return(
        <div className="h-[910px] w-full bg-black">
            <p className="w-full justify-center pt-[120px] text-white flex text-[16px]">Here are some of my</p>
            <p className="w-full justify-center mt-[10px] text-white flex text-5xl font-semibold">Personal Projects</p>
            <div className="w-full space-x-[100px] items-center flex mt-[130px] h-[450px]">
                {ProjectData.map(({name, path, bottom}) =>
                    <div className="ml-[250px]">
                        <p className="ml-[80px] text-white pb-[20px] text-[27px]">{name}</p>
                        <div className="border-2 rounded-full h-[280px] w-[280px] justify-center flex">
                            <div className="bg-[url('Placeholder.png')] bg-cover w-[235px] h-[235px] rounded-full mt-[20px]"/>
                        </div>
                        <p className="ml-[48px] text-white text-[16px] tracking-wide pt-8 w-[200px] h-[80px] pb-[130px]">
                            Lorem ipsum dolor sit amet consecutor idk words words words
                        </p>
                        <Button text={"Learn More"} link={path} width={"px-[60px]"} extras={"ml-[30px]"}/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Projects;