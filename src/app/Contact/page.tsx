"use client";
import { motion } from "framer-motion";
// import  ButtonMode  from "../components/ButtonMode"
import Link from "next/link";

export default function Contact(){
    return(
        <motion.section 
        className="background"
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
        
            <div className="w-[50%] old absolute rounded-[20px] py-[5%] flex flex-wrap justify-center max-[900px]:w-[80%]">

                <h2 className="w-full text-center mt-[-5%] font-meduim text-[2.4rem]">fale <span>comigo</span></h2>
            
                <div className="w-full h-full flex space-x-10 mt-[30px] px-[3%] max-[900px]:flex-wrap max-[900px]:space-x-0 max-[900px]:space-y-10">

                    <Link href="#" className="w-[50%] hover:ld bor flex flex-wrap justify-center p-[3%] max-[900px]:w-full" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"/></svg>
                        <p className="w-full mt-[30px] text-center font-medium text-[1.8rem]">(+55) 19 99781-7785</p>
                    </Link>

                    <Link href="#" className="w-[50%] hover:ld bor flex flex-wrap justify-center p-[3%] max-[900px]:w-full" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="3.9rem" height="3.9rem" viewBox="0 0 32 32"><path fill="currentColor" d="M32 6v20c0 1.135-.865 2-2 2h-2V9.849l-12 8.62l-12-8.62V28H2c-1.135 0-2-.865-2-2V6c0-.568.214-1.068.573-1.422A1.973 1.973 0 0 1 2 4h.667L16 13.667L29.333 4H30c.568 0 1.068.214 1.427.578c.359.354.573.854.573 1.422z"/></svg>
                        <p className="w-full mt-[30px] text-center font-medium text-[1.8rem]">lucasbdoficial@g-mail.com</p>
                    </Link>
                </div>

            </div>
        </div>

            {/* <div onClick={toggleMode}><ButtonMode /></div> */}
        </motion.section>
    )
}

// function toggleMode(){
//     const html = document.documentElement
//     html.classList.toggle("light")
    
//         if(html.classList.contains("light")){}     
// }