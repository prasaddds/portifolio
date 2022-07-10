import React from "react";
import {motion} from "framer-motion";
import ComputerIcon from '@mui/icons-material/Computer';
function TechStack(){
    return (
        <div>
            <motion.h1 style={{color:"blue"}}
            initial={{x: -200,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:3}}
            >Development Skills <ComputerIcon/> </motion.h1>
        </div>
    )
}
export default TechStack;