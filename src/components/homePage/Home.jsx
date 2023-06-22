import Hero from "./Hero.jsx";
import ImageTextRow from "../ImageTextRow.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Button from "../Button.jsx";

const Home = () => {
    return(
      <div className="w-full h-full">
          <Hero/>
          <ImageTextRow image="bg-[url('Placeholder.png')]" title="About Me" subtitle="Here's a little bit" leftAlign={true} extras={
              <>
                  <p className="pt-[50px] text-[16px] text-black w-[300px] tracking-wide">I'm a games programmer, that's interested in gameplay, graphics and engines.</p>
                  <p className="pt-[20px] text-[14px] text-black w-[300px] tracking-wide">I'm proficient in the following tools:</p>
                  <div className="flex w-full h-full pt-2">
                      <div className='h-[60px] w-[60px] bg-[url("CSharpLogo.png")] bg-cover bg-center'/>
                      <div className='h-[48px] w-[43px] bg-[url("C++Logo.png")] bg-cover bg-center mt-[6px] ml-1'/>
                      <div className='h-[65px] w-[65px] bg-[url("OpenGLLogo.png")] bg-cover bg-center ml-2'/>
                      <div className='h-[50px] w-[50px] bg-[url("UnityLogo.png")] bg-cover bg-center ml-1 mt-[3px]'/>
                      <div className='h-[55px] w-[55px] bg-[url("UnrealLogo.png")] bg-cover bg-center ml-1 mt-[3px]'/>
                  </div>
                  <Button text={"Read More"} link={"/about"} width={"px-20"}/>
              </>
          }/>
          <Projects/>
          <Contact/>
      </div>  
    );
}

export default Home;