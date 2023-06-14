import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Pages from "./Pages.jsx";

const App = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                {Pages.map(({path, component}) => <Route path={path} element={component}/>)}
            </Routes>
        </BrowserRouter>
    );
}

export default App
