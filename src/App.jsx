import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Project from "./components/projectsPage/Project.jsx";
import Footer from "./components/Footer.jsx";

import Pages from "./Pages.jsx";
import ProjectData from "./Projects.jsx"

const App = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                {Pages.map(({path, component}) => <Route path={path} element={component}/>)}
                {ProjectData.map(({name, path}) => <Route path={path} element={<Project name={name}/>}/>)}
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App
