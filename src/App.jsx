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
      <div className="relative z-0">
          <div className="bg-cover bg-no-repeat bg-center bg-black">
              <Navbar/>
              <Hero/>
          </div>
      </div>
    </BrowserRouter>
  )
}

export default App
