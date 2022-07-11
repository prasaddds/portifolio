import {Route,Routes} from "react-router-dom";
import Home from "./Home";
import Project from "./Project";
function DuplicateApp() {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='Project' element={<Project/>} />
            <Route path='portifolio' element={<Home/>} />
            </Routes> 
        </>
    )
}
export default DuplicateApp;