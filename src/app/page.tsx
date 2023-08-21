"use client";
import { motion } from "framer-motion";

import Image from "next/image";

export default function Home() {
  return (
    <motion.main className="flex pt-[30px] 
                max-[900px]:flex-wrap max-[900px]:h-0 max-[900px]:justify-items-start"

      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y:[0]}}
      transition={{
      duration: 0.5,
      delay: 0.5,
      }
    }> 

      <Image src="/images/home2.png" alt="1223" width={200} height={200} 
        className="absolute top-0 right-0"/>

      <div className="w-[50%] relative flex flex-col justify-center max-[900px]:w-full">     

          <Image src="/images/home1.png" alt="1223" width={550} height={550} 
            className="absolute z-0 ml-[25%] mt-[30px]"/>
    
          <Image src="/images/perfil.png" alt="1223" width={470} height={470} 
            className="relative m-auto" id="image1"/>

          <Image src="/images/perfil2.png" alt="1223" width={470} height={470} 
            className="relative m-auto bgi" id="image2"/>
            
          <div className="sun old m-auto mt-[-20px]">
            <samp id="sun" className="moon"></samp>
          </div>

      </div>

      <div className="w-[50%] flex justify-center items-center mr-[5%] mt-[40px]
          max-[900px]:w-full max-[900px]:items-start max-[900px]:mr-[0] ">

        <div className="absolute text-center">
          <h2 className="font-black text-[3.5rem] leading-[40px]">Tansformando ideias <br/> em <span>REALIDADE</span> </h2>

          <p className="mt-[15px]">“ Não é a linguagem de programação que define <br /> o programador, mas sim sua lógica. ”</p>

          <p className="italic text-[1.2rem] text-right mt-[10px]">David Ribeiro Guilherme</p>

          <p className=" text-[1.4rem] italic opacity-[60%] text-center mt-[40px]">Designer e desenvolvedor: Lucas Bucalon</p>
        </div>
      </div>

    </motion.main>
  )
}