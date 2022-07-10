import React from "react";
import Image from './Image.png';
import Image2 from "./Image2.png"
import "./Intro.css";
import {motion} from "framer-motion";
function Intro(){
    return(
        <div>
        <motion.img src={Image} className="class3" initial={{x: -200,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:2}}/>

<motion.img src={Image2} className="class3" initial={{x: -200,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:2}}/>

        <motion.p className="class4" 
                initial={{x: -200,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:4}}
        >
        My natural curiosity towards computers is what
drove me towards my computer science degree.
An enthusiastic web developer with integrity,
strong work ethic and great leadership skills.
I am currently pursuing my B. Tech in CSE from Lovely Professional University. My natural curiosity for computers is what drove me towards my computer science degree.
During my second year, I built a front end application for Room Booking Website using HTML, CSS and Java script. I have also built real world Library Management System(LMS) using C++ and I am working on my skills for their enhancement. Currently, I am trying to clone the kangarooms website using react framework. Apart from technical knowledge, I have enhanced my communication skills as well.
        </motion.p>
        </div>
    )
}
export default Intro;