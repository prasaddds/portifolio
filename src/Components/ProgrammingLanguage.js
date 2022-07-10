import React from "react";
import {motion} from "framer-motion";
import JavascriptIcon from '@mui/icons-material/Javascript';
function ProgrammingLanguage(){
    return (
        <div>
            <motion.h1 style={{color:"blue"}}
            initial={{x: -200,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:3}}
            >Programming Languages <JavascriptIcon/> </motion.h1>
        </div>
    )
}
export default ProgrammingLanguage;