"use client";
import { motion } from "framer-motion";

import Link from "next/link";

function toggleMode() {
    const html = document.documentElement
    const sun = document.querySelector('#sun')
    const img1 = document.querySelector('#image1')
    const img2 = document.querySelector('#image2')

        if( html.classList.contains('root')){
            html.classList.remove('root')
            html.classList.add('ligth')
            
            sun.classList.remove('moon')
            sun.classList.add('moon2')

            img1.classList.add('bgi')
            img2.classList.remove('bgi')
            
        }else{  html.classList.remove('ligth')
                html.classList.add('root')
                
                sun.classList.add('moon')

                img1.classList.remove('bgi')
                img2.classList.add('bgi')

            }
};

export function Header(){
    return(

        <motion.div className="relative z-[100]
        max-sm:-mt-4 max-sm:space-y-5 max-sm:flex max-sm:flex-col max-sm:place-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 25 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }} >

            <Link href="#">
                <h1 className="text-4xl absolute left-52 font-semibold 
                max-sm:static" >
                Lucas Bucalon</h1></Link>

            <div className="flex absolute right-72 space-x-10 
                max-sm:static">

                <Link href="#">
                    <svg className="hover:ld"
                    xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.75 14.25s-.5-2 .5-3c0 0-2 0-3.5-1.5s-1-4.5 0-5.5c-.5-1.5.5-2.5.5-2.5s1.5 0 2.5 1c1-.5 3.5-.5 4.5 0c1-1 2.5-1 2.5-1s1 1 .5 2.5c1 1 1.5 4 0 5.5s-3.5 1.5-3.5 1.5c1 1 .5 3 .5 3m-5-.5c-1.5.5-3-.5-3.5-1"/></svg></Link>   

                <Link href="#">
                    <svg className="hover:ld"
                    xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 32 32"><path fill="currentColor" d="M32 6v20c0 1.135-.865 2-2 2h-2V9.849l-12 8.62l-12-8.62V28H2c-1.135 0-2-.865-2-2V6c0-.568.214-1.068.573-1.422A1.973 1.973 0 0 1 2 4h.667L16 13.667L29.333 4H30c.568 0 1.068.214 1.427.578c.359.354.573.854.573 1.422z"/></svg></Link>   

                <Link href="#">
                    <svg className="hover:ld"
                    xmlns="http://www.w3.org/2000/svg" width="2.1rem" height="2.1rem" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 9.55c.917-.937 2.111-1.55 3.5-1.55a5.5 5.5 0 0 1 5.5 5.5V21h-2v-7.5a3.5 3.5 0 1 0-7 0V21h-2V8.5h2v1.05Zm-7-3.05a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Zm-1 2h2V21h-2V8.5Z"/></svg></Link>   

                <Link href="#">
                    <svg className="hover:ld"
                    xmlns="http://www.w3.org/2000/svg" width="2.1rem" height="2.1rem" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"/></svg></Link> 

                <Link href="#">
                    <svg className="hover:ld"
                    xmlns="http://www.w3.org/2000/svg" width="2.1rem" height="2.1rem" viewBox="0 0 256 256"><path fill="currentColor" d="M136.37 187.53a12 12 0 0 1 0 17l-5.94 5.94a60 60 0 0 1-84.88-84.88l24.12-24.11A60 60 0 0 1 152 99a12 12 0 1 1-16 18a36 36 0 0 0-49.37 1.47l-24.1 24.08a36 36 0 0 0 50.92 50.92l5.94-5.94a12 12 0 0 1 16.98 0Zm74.08-142a60.09 60.09 0 0 0-84.88 0l-5.94 5.94a12 12 0 0 0 17 17l5.94-5.94a36 36 0 0 1 50.92 50.92l-24.11 24.12A36 36 0 0 1 120 139a12 12 0 1 0-16 18a60 60 0 0 0 82.3-2.43l24.12-24.11a60.09 60.09 0 0 0 .03-84.91Z"/></svg></Link>           

            </div>

            <motion.button className="absolute -mt-2 right-9 w-12 h-12 ims bg-no-repeat bg-center rounded-full cursor-pointer
                max-sm:-top-5 max-lg:right-[90px] max-[768px]:right-9"
                onClick={toggleMode}
                whileHover={{ scale: 1.2 }} />
        </motion.div>
    )
}