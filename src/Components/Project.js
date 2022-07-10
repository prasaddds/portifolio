import React from "react";
import {motion} from "framer-motion";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Navbar from "./Navbar";
import App3 from "../App3";
function Project(){
    return (
        <div>
            <Navbar/>
            <motion.h1 style={{color:"blue"}}
            initial={{x: -200,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:3}}
            >Projects <AccountTreeIcon/> </motion.h1>
            <App3/>
        </div>
    )
}
export default Project;