"use client";
import { motion } from "framer-motion";

export default function ButtonMode(){
    const html = document.documentElement
    const sun = document.querySelector('#sun')
    const img1 = document.querySelector('#image1')
    const img2 = document.querySelector('#image2')
    const tspb = document.querySelector('#tspb')
    const tspo = document.querySelector('#tspo')

        if( html.classList.contains('root')){
            html.classList.remove('root')
            html.classList.add('ligth')
            
            // sun.classList.remove('moon')
            // sun.classList.add('moon2')

            // img1.classList.add('bgi')
            // img2.classList.remove('bgi')

            // tspb.classList.add('bgi')
            // tspo.classList.remove('bgi')
            
        }else{  html.classList.remove('ligth')
                html.classList.add('root')
                
            //     sun.classList.add('moon')

            //     img1.classList.remove('bgi')
            //     img2.classList.add('bgi')

            //     tspb.classList.remove('bgi')
            //     tspo.classList.add('bgi')
             }

    return(
        <motion.input className="absolute mt-[20px] right-9 w-12 h-12 ims bg-no-repeat bg-center rounded-full cursor-pointer
                max-sm:-top-5 max-lg:right-[90px] max-[768px]:right-9 z-[999]"
                whileHover={{ scale: 1.2 }}
                id="toggleMode"
                type="chekbox" />
    )
}
