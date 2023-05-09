import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Tech from "./components/Tech.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
  return (
    <BrowserRouter>
        <div className="relative bg-background h-screen w-screen overflow-x-hidden">
            <Navbar/>
            <Hero/>
            <AboutMe/>
        </div>
        <div className="relative z-0">
        </div>
    </BrowserRouter>
  )
}

export default App
