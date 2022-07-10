import React from "react";
import "./style1.css"
import {motion} from "framer-motion";
function Card2(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <a target="_blank" href="c1.jpg">
        <motion.img src={props.imgURL} alt="kangarooms-Agartala" className="card-img-top" 

initial={{x: -200,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:2}}

        />
      </a>
      <div className="card-body">

        <motion.h5 className="card-title" 
                initial={{x: -200,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:3}}
        >{props.name}</motion.h5>
        <motion.p className="card-text"
                initial={{x: -200,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:4}}
        >
        {props.info}
        </motion.p>

      </div>
    </div>
  )
}
export default Card2;