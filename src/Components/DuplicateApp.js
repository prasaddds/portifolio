import {Route,Routes} from "react-router-dom";
import Home from "./Home";
import Project from "./Project";
function DuplicateApp() {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='Project' element={<Project/>} />
            </Routes> 
        </>
    )
}
export default DuplicateApp;