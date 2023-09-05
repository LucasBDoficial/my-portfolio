"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ParticlesBlue from "./components/ParticlesBlue";
import ParticlesOrange from "./components/ParticlesOrange";
// import ButtonMode from "./components/ButtonMode";

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
        className="absolute top-0 right-0 z-0"/>

      <div className="w-[50%] relative flex flex-col justify-center mt-[30px] max-[900px]:w-full">     

          <Image src="/images/home1.png" alt="image de tinta" width={550} height={550} 
            className="absolute z-0 ml-[25%] mt-[30px] max-[600px]:right-[0]"/>
    
          <Image src="/images/perfil.png" alt="foto de perfil" width={470} height={470} 
            className="relative m-auto z-20 hidden dark:flex" id="image1"/>

          <Image src="/images/perfil2.png" alt="foto de perfil" width={470} height={470} 
            className="relative m-auto dark:hidden z-20" id="image2"/>
            
          <div className="sun old m-auto mt-[-20px] z-20 ">
            <samp id="sun" className=" moon2 dark:moon"></samp>
          </div>

      </div> 

      <div className="w-[50%] flex justify-center items-center mr-[5%] mt-[40px] z-20 pb-[20px]
          max-[900px]:w-full max-[900px]:items-start max-[900px]:mr-[0] ">

        <div className="absolute text-center">
          <h2 className="font-black text-[3.5rem] leading-[40px]">Tansformando ideias <br/> em <span>REALIDADE</span> </h2>

          <p className="mt-[15px]">“ Não é a linguagem de programação que define <br /> o programador, mas sim sua lógica. ”</p>

          <p className="italic text-[1.2rem] text-right mt-[10px]">David Ribeiro Guilherme</p>

          <p className=" text-[1.4rem] italic opacity-[60%] text-center mt-[40px]">Tema claro ou escuro de acordo com o padão do navegador</p>
        </div>
      </div>

      <ParticlesBlue /> 
      <ParticlesOrange />

      {/* <div onClick={toggleMode}><ButtonMode /></div> */}
  
    </motion.main>
  )
}

  // const html = document.documentElement
  // html.classList.toggle("light")

  // const sun = document.querySelector('#sun')
  // const img1 = document.querySelector('#image1')
  // const img2 = document.querySelector('#image2')
  // const tspb = document.querySelector('#tspb')
  // const tspo = document.querySelector('#tspo')

  //      if(html.classList.contains("light")){
       
  //         sun?.classList.remove('moon')
  //         sun?.classList.add('moon2')

  //         img1?.classList.add('hidden')
  //         img2?.classList.remove('hidden')

  //         tspb?.classList.remove('hidden')
  //         tspo?.classList.add('hidden')
          
  //     }else{            
              
  //         sun?.classList.add('moon')

  //         img1?.classList.remove('hidden')
  //         img2?.classList.add('hidden')

  //         tspb?.classList.add('hidden')
  //         tspo?.classList.remove('hidden')
  //     }