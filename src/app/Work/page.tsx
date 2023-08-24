"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import  ButtonMode  from "../components/ButtonMode";
import Image from "next/image";

export default function Work(){

    return(
        <motion.section className="flex flex-wrap justify-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y:[0]}}
        transition={{
        duration: 0.5,
        delay: 0.5,
        }
    }>
            <Image src="/images/work1.png" alt="imagem de tinta" width={350} height={0} 
                    className=" absolute top-0 z-0 animate-pulse "/>

            <Image src="/images/work2.png" alt="imagem de tinta" width={250} height={0} 
                    className=" absolute bottom-0 left-0 z-0 animate-pulse "/>

            <Image src="/images/work3.png" alt="imagem de tinta" width={200} height={0} 
                className=" absolute bottom-0 right-0 z-0 animate-pulse "/>

            <div className="flex flex-wrap justify-center relative w-full">
                <h2 className="px-[2%] font-black text-[3.5rem] mt-[100px]" >Meu trabalho é solucionar <span> PROBLEMAS </span></h2>
                





                <div className="mx-auto flex justify-center mt-[50px]">

                    <motion.div className="max-w-[100%] cursor-grab" whileTap={{ cursor: "grabbing"}}>

                        <motion.div className="flex"
                        drag="x"
                        >                               
                            <div id="box" className="flex w-full snap-start">
                                <div id="box" className="min-w-[200px] min-h-[200px] bg-amber-500 mx-[20px]"></div>
                                <div id="box" className="min-w-[200px] min-h-[200px] bg-amber-500 mx-[20px]"></div>
                                <div id="box" className="min-w-[200px] min-h-[200px] bg-amber-500 mx-[20px]"></div>
                            </div>

                            {/* <div className="flex w-full">
                                <div id="box" className="min-w-[200px] min-h-[200px] bg-amber-500 mx-[20px]"></div>
                                <div id="box" className="min-w-[200px] min-h-[200px] bg-amber-500 mx-[20px]"></div>
                                <div id="box" className="min-w-[200px] min-h-[200px] bg-amber-500 mx-[20px]"></div>
                            </div>
                              
                            <div className="flex w-full">
                                <div id="box" className="min-w-[200px] min-h-[200px] bg-amber-500 mx-[20px]"></div>
                                <div id="box" className="min-w-[200px] min-h-[200px] bg-amber-500 mx-[20px]"></div>
                                <div id="box" className="min-w-[200px] min-h-[200px] bg-amber-500 mx-[20px]"></div>
                            </div> */}

                        </motion.div>
                    </motion.div>
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