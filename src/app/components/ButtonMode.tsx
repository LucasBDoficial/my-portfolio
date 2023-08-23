"use client";
import { motion } from "framer-motion";

export default function ButtonMode(){
    const html = document.documentElement

        if( html.classList.contains('root')){
            html.classList.remove('root')
            html.classList.add('ligth')
            
        }else{  html.classList.remove('ligth')
                html.classList.add('root')
            
             }

    return(
        <motion.button className="absolute top-[25px] right-9 w-12 h-12 ims bg-no-repeat bg-center rounded-full cursor-pointer
                max-sm:-top-5 max-lg:right-[90px] max-[768px]:right-9 max-[600px]:top-[35px] z-[999]"
                whileHover={{ scale: 1.2 }}
                id="toggleMode" />
    )
}
