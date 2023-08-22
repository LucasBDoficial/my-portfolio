"use client";
import { motion } from "framer-motion";
import  ButtonMode  from "../components/ButtonMode"

export default function About(){
    return(
    
    <motion.article className="flex"

        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y:[0]}}
        transition={{
        duration: 0.5,
        delay: 0.5,
        }
    }>

        <h1>about</h1>

        <div onClick={toggleMode}><ButtonMode /></div>
    </motion.article>
    )
} 

function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("light")
    
        if(html.classList.contains("light")){}     
}