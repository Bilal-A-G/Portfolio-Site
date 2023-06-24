import Hero from "./Hero.jsx";
import ImageTextRow from "../ImageTextRow.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Button from "../Button.jsx";
import Styles from "../../Styles.jsx";

const Home = () => {
    return(
      <div className="w-full h-full">
          <Hero/>
          <ImageTextRow image="bg-[url('Placeholder.png')]" title="About Me" subtitle="Here's a little bit" leftAlign={true} extras={
              <div className="text-black">
                  <p className={`mt-[10%] ${Styles.Body} pr-[50%]`}>I'm a games programmer, that's interested in gameplay, graphics and engines.</p>
                  <p className={`mt-[8%] ${Styles.Body} pr-[50%]`}>I'm proficient with the following tools:</p>
                  <div className="flex w-full pt-[2%] pb-[10%] grid place-items-center auto-cols-max grid-flow-col gap-[2%]">
                      <div className='h-[10px] w-[10px] sm:h-[15px] sm:w-[15px] md:h-[20px] md:w-[20px] lg:h-[30px] lg:w-[30px] 2xl:h-[50px] 2xl:w-[50px] bg-[url("CSharp.svg")] bg-cover bg-center'/>
                      <div className='h-[10px] w-[10px] sm:h-[15px] sm:w-[15px] md:h-[20px] md:w-[20px] lg:h-[30px] lg:w-[30px] 2xl:h-[50px] 2xl:w-[50px] bg-[url("CPlusPlus.svg")] bg-cover bg-center'/>
                      <div className='h-[10px] w-[10px] sm:h-[15px] sm:w-[15px] md:h-[20px] md:w-[20px] lg:h-[30px] lg:w-[30px] 2xl:h-[50px] 2xl:w-[50px] bg-[url("OpenGL.svg")] bg-cover bg-center'/>
                      <div className='h-[10px] w-[10px] sm:h-[15px] sm:w-[15px] md:h-[20px] md:w-[20px] lg:h-[30px] lg:w-[30px] 2xl:h-[50px] 2xl:w-[50px] bg-[url("Unity.svg")] bg-cover bg-center'/>
                      <div className='h-[10px] w-[10px] sm:h-[15px] sm:w-[15px] md:h-[20px] md:w-[20px] lg:h-[30px] lg:w-[30px] 2xl:h-[50px] 2xl:w-[50px] bg-[url("Unreal.svg")] bg-cover bg-center'/>
                  </div>
                  <Button text={"Read More"} link={"/about"} width={"px-[15%]"}/>
              </div>
          }/>
          <Projects/>
          <Contact/>
      </div>  
    );
}

export default Home;