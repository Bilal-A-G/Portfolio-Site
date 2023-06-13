import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/homePage/Home.jsx";
import About from "./components/aboutPage/About.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App
