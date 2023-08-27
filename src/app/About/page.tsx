"use client";
import { motion } from "framer-motion";
// import  ButtonMode  from "../components/ButtonMode"
import Image from "next/image";
import Skills from "../components/Skills"

export default function About(){
    return(
    
    <motion.article

        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y:[0]}}
        transition={{
        duration: 0.5,
        delay: 0.5,
        }
    }>

        <Image src="/images/about.png" alt="imagem de tinta" width={10000} height={0} 
                className=" absolute bottom-0 w-full min-[500px]:h-[200px] z-0 animate-pulse "/>

        <div className="flex flex-wrap absolute z-10 max-[900px]:flex-col">

            <h1 className=" w-[100%] px-[2%] mx-auto text-center font-black text-[3.5rem] mt-[90px] max-[900px]:text-left max-[425px]:mt-[60px] max-[425px]:text-center">Designer e Desenvolvedor <span className="max-[425px]:block"> FRONT END</span></h1>

                <div className="w-[40%] h-[50%] p-[2%] mt-[15px] mx-auto rounded-[25px] trans max-[900px]:w-[80%] max-[500px]:w-[95%]">
                    <span className="font-semibold text-[2.5rem]">Olá</span>

                    <p className="ml-[20px] font-medium"> 
                        Sou Lucas Bucalon, desenvolvedor front end, entusiasta em ux/ui design, e ser engenheiro 
                        de software é minha meta.    
                        <br />
                        <br />
                        Possuo formação na área de desenvolvimento, atuando desde a criação do conceito para protótipo, até seu desenvolvimento final
                        com as melhores funcionalidades. 
                        <br />
                        <br />
                        Utilizo da minha experiência na administração em varejo, onde atuei elaborando ofertas junto ao marketing da empresa para o público-alvo, além de outros trabalhos diversos.
                    </p>

                </div>

            <div className="w-[50%] flex flex-col mt-[50px] px-[2%] justify-center font-medium max-[900px]:w-full">

                <div id="select" className="flex space-x-28 max-[900px]:m-auto ">
                    <h3 onClick={toggleSl} id="sl" className="cursor-pointer select">Skills</h3>
                    <h3 onClick={toggleXp} id="xp" className="cursor-pointer">Experiência</h3>
                    <h3 onClick={toggleCf} id="cf" className="cursor-pointer">Certificados</h3>
                </div>

                <div className="h-full w-full relative">
                    
                    <Skills />
                </div>

            </div>
        </div>

        {/* <div onClick={toggleMode}><ButtonMode /></div> */}
    </motion.article>
    )
} 

// function toggleMode(){
//     const html = document.documentElement
//     html.classList.toggle("light")
    
//         if(html.classList.contains("light")){}     
// }

function toggleSl(){
    const sl = document.querySelector('#sl')
    const xp = document.querySelector('#xp')
    const cf = document.querySelector('#cf')

    const skl = document.querySelector('#skl')
    const exp = document.querySelector('#exp')
    const ctf = document.querySelector('#ctf')
    
    sl?.classList.add('select')
        if(sl?.classList.contains('select'))      
            xp?.classList.remove('select')
            cf?.classList.remove('select')

            skl?.classList.remove('hidden')
            ctf?.classList.add('hidden')
            exp?.classList.add('hidden')
}

function toggleXp(){
    const sl = document.querySelector('#sl')
    const xp = document.querySelector('#xp')
    const cf = document.querySelector('#cf') 

    const skl = document.querySelector('#skl')
    const exp = document.querySelector('#exp')
    const ctf = document.querySelector('#ctf')

    xp?.classList.add('select')
        if(xp?.classList.contains('select'))      
            sl?.classList.remove('select')
            cf?.classList.remove('select')

            skl?.classList.add('hidden')
            ctf?.classList.add('hidden')
            exp?.classList.remove('hidden')
}

function toggleCf(){
    const sl = document.querySelector('#sl')
    const xp = document.querySelector('#xp')
    const cf = document.querySelector('#cf') 

    const skl = document.querySelector('#skl')
    const exp = document.querySelector('#exp')
    const ctf = document.querySelector('#ctf')

    cf?.classList.add('select')
        if(cf?.classList.contains('select'))      
            sl?.classList.remove('select')
            xp?.classList.remove('select')

            skl?.classList.add('hidden')
            ctf?.classList.remove('hidden')
            exp?.classList.add('hidden')
}