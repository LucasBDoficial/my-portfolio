"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ParticlesGray from "./components/ParticlesGray";

export default function Home() {
   
  return (

    <motion.main
      className="flex max-[900px]:flex-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y:[0]}}
      transition={{
      duration: 0.5,
      delay: 0.5,
      }
    }> 

      <Image src="/images/home2.png" alt="imagem de tinta" width={200} height={200} 
        className="absolute top-0 right-0 z-0 opacity-40"/>

      <div className="w-[50%] relative flex flex-col justify-center  mt-[30px] max-[900px]:w-full">     

          <Image src="/images/home1.png" alt="image de tinta" width={550} height={550} 
            className="absolute z-0 ml-[25%] mt-[30px] max-[600px]:right-[0] opacity-40"/>
    
          <Image src="/images/perfil.png" alt="foto de perfil" width={350} height={350} 
            className="relative mx-auto pr-[9px] z-20 mt-[30px]" id="image1"/>
            
          <div className="sun old  mx-auto mt-[-20px] z-20 ">
            <samp id="sun" className=" moon"></samp>
          </div>

      </div> 

      <div className="w-[50%] flex justify-center items-center mr-[5%] mt-[40px] z-20 pb-[20px]
          max-[900px]:w-full max-[900px]:items-start max-[900px]:mr-[0] ">

        <div className="absolute text-center">
          <h2 className="font-black text-[3.5rem] leading-[40px]">Tansformando ideias <br/> em <span>REALIDADE</span> </h2>

          <p className="mt-[15px]">“ Não é a linguagem de programação que define <br /> o programador, mas sim sua lógica. ”</p>

          <p className="italic text-[1.2rem] text-right mt-[10px]">David Ribeiro Guilherme</p>

          <p className="max-[500px]:h-[150px]"/>

          </div>
      </div>

      <ParticlesGray />
  
    </motion.main>
  )
}