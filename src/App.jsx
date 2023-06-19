import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Pages from "./Pages.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                {Pages.map(({path, component}) => <Route path={path} element={component}/>)}
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App
