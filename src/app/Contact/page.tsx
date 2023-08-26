"use client";
import { motion } from "framer-motion";
import  ButtonMode  from "../components/ButtonMode"

export default function Contact(){
    return(
        <motion.section className="background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y:[0]}}
        transition={{
        duration: 0.5,
        delay: 0.5,
        }
    }>
            <div className="ball">
                <span id="a" ></span>
                <span id="b" ></span>
                <span id="c" ></span>
                <span id="d" ></span>
            </div>

            <div className="boom">
                <span id="e" ></span>
                <span id="f" ></span>
                <span id="g" ></span>
                <span id="h" ></span>
                <span id="i" ></span>
                <span id="j" ></span>
                <span id="k" ></span>
                <span id="l" ></span>
            </div>
                
            

        <div className="w-full h-full flex justify-center items-center">
        
            <div className="w-[50%] h-[50%] old absolute rounded-[20px] p-[1%] flex flex-wrap justify-center">

                <h2 className="w-full text-center font-meduim text-[2.4rem]">fale <span>comigo</span></h2>
            
            <div className="w-full h-full flex space-x-10 mt-[30px]">
                <div className="w-[50%] h-[60%] bor">

                </div>

                <div className="w-[50%] h-[60%] bor">

                </div>
            </div>

            </div>
        </div>

            <div onClick={toggleMode}><ButtonMode /></div>
        </motion.section>
    )
}

function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("light")
    
        if(html.classList.contains("light")){}     
}