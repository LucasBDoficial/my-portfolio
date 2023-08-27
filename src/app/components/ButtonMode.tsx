"use client";
import { motion } from "framer-motion";

export default function ButtonMode(){
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      
      // Whenever the user explicitly chooses light mode
      localStorage.theme = 'light'
      
      // Whenever the user explicitly chooses dark mode
      localStorage.theme = 'dark'
      
      // Whenever the user explicitly chooses to respect the OS preference
      localStorage.removeItem('theme')

    return(
        <motion.button className="absolute top-[25px] right-9 w-12 h-12 ims bg-no-repeat bg-center rounded-full cursor-pointer
                max-sm:-top-5 max-lg:right-[90px] max-[768px]:right-9 max-[600px]:top-[35px] z-[999]"
                whileHover={{ scale: 1.2 }}
                id="toggleMode" />
    )
}
