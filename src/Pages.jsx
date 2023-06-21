import Home from "./components/homePage/Home.jsx";
import About from "./components/aboutPage/About.jsx";
import Contact from "./components/contactPage/Contact.jsx";
import Projects from "./Projects.jsx";

const Pages = [
    {path : "/", component : <Home/>, name : "Home", hasChildren : false, children : []},
    {path : "/about", component : <About/>, name : "About", hasChildren : false, children : []},
    {path : "", component : <About/>, name : "Projects", hasChildren : true ,children : Projects},
    {path : "/contact", component : <Contact/>, name : "Contact", hasChildren : false, children : []}
]

export default Pages;