"use client";
import { motion } from "framer-motion";

import Image from "next/image";

export default function Home() {
  return (
    <motion.main 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, y:[0]}}
    transition={{
    duration: 0.5,
    delay: 0.5,
    }} > 

      <Image src="/images/home2.png" alt="1223" width={200} height={200} 
        className="absolute top-0 right-0"/>

      <Image src="/images/home1.png" alt="1223" width={550} height={550} 
          className="absolute top-40 left-20 max-lg:left-[25%] "/>

      <div className="flex w-hll max-lg:justify-center">        
        <Image src="/images/perfil.png" alt="1223" width={470} height={470} 
          className="absolute top-28"/>
      </div>

      <div className="absolute ml-[50%] flex flex-col h-full justify-center 
      max-[900px]:ml-auto max-[900px]:w-full max-[900px]:text-center max-[900px]:top-[25px] max-[844px]:top-[515px] 
      max-[768px]:top-[175px]">

        <h2 className="font-black text-[3.5rem] leading-[40px]">Tansformando ideias <br/> em <span>REALIDADE</span> </h2>

        <p className="mt-[15px]">“ Não é a linguagem de programação que define <br/> o programador, mas sim sua lógica. ”</p>

        <p className="italic text-[1.2rem] text-right mt-[10px] max-[900px]:text-center">David Ribeiro Guilherme</p>

        <p className=" text-[1.4rem] italic opacity-[60%] text-center mt-[40px]">Designer e desenvolvedor: Lucas Bucalon</p>

      </div>

    </motion.main>
  )
}
