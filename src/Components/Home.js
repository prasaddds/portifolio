import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Intro from "./Intro";
import App from "../App";
import EducationDetails from "./EducationDetails";
import TechStack from "./TechStack";
import App2 from "../App2";
import ProgrammingLanguage from "./ProgrammingLanguage";
import App3 from "../App3";
import Project from "./Project";
function Home(){
    return(
        <>
        <Navbar/>,
        <Header/>,
        <Intro/>,
        
        <EducationDetails/>,
        <TechStack/>,
        <App/> 
        <br/>
        <ProgrammingLanguage/>,
        <App2/>
        </>
    )
}
export default  Home;