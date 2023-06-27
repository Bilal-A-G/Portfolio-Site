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
          <ImageTextRow id={"about"} image="bg-[url('Placeholder.png')]" title="About Me" subtitle="Here's a little bit" leftAlign={true} extras={
              <div className="text-black">
                  <p className={`mt-[10%] ${Styles.Body} md:pr-[50%] pr-[0%] md:px-[0%] px-[20%]`}>I'm a games programmer, that's interested in gameplay, graphics and engines.</p>
                  <div className="flex w-full md:pl-[0%] pl-[25%] md:pt-[5%] pt-[10%] pb-[15%] grid place-items-center auto-cols-max grid-flow-col gap-[2%]">
                      <div className='h-[40px] w-[40px] sm:h-[15px] sm:w-[15px] md:h-[20px] md:w-[20px] lg:h-[30px] lg:w-[30px] 2xl:h-[50px] 2xl:w-[50px] bg-[url("CSharp.svg")] bg-cover bg-center'/>
                      <div className='h-[40px] w-[40px] sm:h-[15px] sm:w-[15px] md:h-[20px] md:w-[20px] lg:h-[30px] lg:w-[30px] 2xl:h-[50px] 2xl:w-[50px] bg-[url("CPlusPlus.svg")] bg-cover bg-center'/>
                      <div className='h-[40px] w-[40px] sm:h-[15px] sm:w-[15px] md:h-[20px] md:w-[20px] lg:h-[30px] lg:w-[30px] 2xl:h-[50px] 2xl:w-[50px] bg-[url("OpenGL.svg")] bg-cover bg-center'/>
                      <div className='h-[40px] w-[40px] sm:h-[15px] sm:w-[15px] md:h-[20px] md:w-[20px] lg:h-[30px] lg:w-[30px] 2xl:h-[50px] 2xl:w-[50px] bg-[url("Unity.svg")] bg-cover bg-center'/>
                      <div className='h-[40px] w-[40px] sm:h-[15px] sm:w-[15px] md:h-[20px] md:w-[20px] lg:h-[30px] lg:w-[30px] 2xl:h-[50px] 2xl:w-[50px] bg-[url("Unreal.svg")] bg-cover bg-center'/>
                  </div>
                  <div className="md:w-1/2 w-full flex md:justify-start justify-center">
                      <Button text={"Read More"} link={"/about"} width={"md:px-[25%] px-[10%]"}/>
                  </div>
              </div>
          }/>
          <Projects/>
          <Contact/>
      </div>  
    );
}

export default Home;