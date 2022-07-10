import React from "react";
import {motion} from "framer-motion";
import DashboardIcon from '@mui/icons-material/Dashboard';
function Header(){
    return (
        <div>
            
            <motion.h1 style={{color:"blue"}}
            initial={{x: -200,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:3}}
            >Portifolio Website <DashboardIcon/></motion.h1>
        </div>
    )
}
export default Header;