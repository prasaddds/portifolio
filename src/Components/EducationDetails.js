import React from "react";
import Image3 from "./Image3.png"
import "./Intro.css";
import {motion} from "framer-motion";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
function EducationDetails(){
    return(
        <div>
        <motion.h1 style={{color:"blue"}}
        initial={{x: -200,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:3}}>Education Details <SchoolOutlinedIcon/></motion.h1>
        
        <motion.img src={Image3} className="class3" initial={{x: -200,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:2}}/>
            <motion.p 
            initial={{x: -200,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:4}}
        >
            Currently, I am pursuing Bachelors Of Technlogy in the feild of Computer Science And Engineering from Lovely 
            Professional University with an aggregate CGPA of 7.5.
            I completed my 10+2 in Sasi New Gen Junior College with 92% which is located in Velivennu, West Godavari District.
            I completed my matriculation in Sree Vignan School with 97%.
            </motion.p>
        </div>
    )
}
export default EducationDetails;