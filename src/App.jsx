import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Tech from "./components/Tech.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white">
        <div className="bg-white bg-cover bg-no-repeat bg-center">
            <Navbar/>
            {/*<Hero/>*/}
        </div>
          {/*<About/>*/}
          {/*<Tech/>*/}
          {/*<Projects/>*/}
          {/*<div className="relative z-0">*/}
          {/*    <Contact/>*/}
          {/*</div>*/}
      </div>
    </BrowserRouter>
  )
}

export default App
