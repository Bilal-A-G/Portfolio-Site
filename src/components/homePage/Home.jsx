import Hero from "./Hero.jsx";
import ImageTextRow from "../ImageTextRow.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Button from "../Button.jsx";
import Styles from "../../Styles.jsx";
import Resources from "../../Resources.jsx";
import WorkExperience from "./WorkExperience.jsx"

const Home = () => {
    return(
      <div className="w-full h-full">
              <Hero/>
              <ImageTextRow id={"about"} image={Resources.ProfilePicture} title="About Me" subtitle="Here's a little bit" leftAlign={true} sphere={true} extras={
                  <div className="text-black">
                      <p className={`mt-[10%] ${Styles.Body} md:pr-[50%] pr-[0%] md:px-[0%] px-[15%]`}>I'm a game programmer, that's interested in gameplay, graphics and engines.</p>
                      <div className="flex w-full md:pl-[0%] pl-[25%] md:pt-[5%] pt-[10%] pb-[15%] grid place-items-center auto-cols-max grid-flow-col gap-[2%]">
                          <img src={Resources.CSharpLogo} alt={"C#"} className='h-[40px] w-[40px] md:h-[20px] md:w-[20px] lg:h-[30px] lg:w-[30px] 2xl:h-[50px] 2xl:w-[50px] object-cover object-center'/>
                          <img src={Resources.CPlusPlusLogo} alt={"C++"} className='h-[40px] w-[40px] md:h-[20px] md:w-[20px] lg:h-[30px] lg:w-[30px] 2xl:h-[50px] 2xl:w-[50px] object-cover object-center'/>
                          <img src={Resources.OpenGLLogo} alt={"Open GL"} className='h-[40px] w-[40px] md:h-[20px] md:w-[20px] lg:h-[30px] lg:w-[30px] 2xl:h-[50px] 2xl:w-[50px] object-cover object-center'/>
                          <img src={Resources.UnityLogo} alt={"Unity"} className='h-[40px] w-[40px] md:h-[20px] md:w-[20px] lg:h-[30px] lg:w-[30px] 2xl:h-[50px] 2xl:w-[50px] object-cover object-center'/>
                          <img src={Resources.UnrealLogo} alt={"Unreal"} className='h-[40px] w-[40px] md:h-[20px] md:w-[20px] lg:h-[30px] lg:w-[30px] 2xl:h-[50px] 2xl:w-[50px] object-cover object-center'/>
                      </div>
                      <Button text={"Read More"} link={"/about"} width={"md:w-[80%] w-[30%]"} className={`md:w-1/2 w-full flex md:justify-start justify-center`}/>
                  </div>
              }/>
          <WorkExperience/>
          <Projects/>
          <Contact/>
      </div>  
    );
}

export default Home;