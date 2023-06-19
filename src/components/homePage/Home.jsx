import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "../Footer.jsx";

const Home = () => {
    return(
      <div className="w-full h-full">
          <Hero/>
          <About/>
          <Projects/>
          <Contact/>
          <Footer/>
      </div>  
    );
}

export default Home;