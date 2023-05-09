import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Tech from "./components/Tech.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-background h-screen w-screen">
          <div className="bg-cover bg-center bg-no-repeat bg-hero-background">
              <Navbar/>
              Hero Section
          </div>
          About me
          Projects
          <div className="relative z-0">
              Contact
          </div>
      </div>
    </BrowserRouter>
  )
}

export default App
