import Home from "./components/homePage/Home.jsx";
import About from "./components/aboutPage/About.jsx";
import Contact from "./components/contactPage/Contact.jsx";
import Projects from "./components/projectsPage/Projects.jsx";

const Pages = [
    {path : "/", component : <Home/>, name : "Home"},
    {path : "/about", component : <About/>, name : "About"},
    {path : "/projects", component : <Projects/>, name : "Projects"},
    {path : "/contact", component : <Contact/>, name : "Contact"}
]

export default Pages;