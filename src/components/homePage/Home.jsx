import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";

const Home = () => {
    return(
      <div className="w-full h-full">
          <Hero/>
          <About/>
          <Projects/>
      </div>  
    );
}

export default Home;