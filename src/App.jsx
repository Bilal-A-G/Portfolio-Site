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
      <div>
          <div className="w-screen h-screen bg-hero-pattern">
              <Navbar/>
              <Hero/>
          </div>
      </div>
    </BrowserRouter>
  )
}

export default App
