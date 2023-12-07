'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Skills from '../components/Skills'

export default function About() {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0] }}
      transition={{
        duration: 0.5,
        delay: 0.5,
      }}
    >
      <Image
        src="/images/about.png"
        alt="imagem de tinta"
        width={10000}
        height={0}
        className=" absolute bottom-0 z-0 w-full animate-pulse opacity-5 max-[500px]:bottom-[-15%] min-[500px]:h-[200px]"
      />

      <div className="absolute z-10 flex flex-wrap max-[900px]:flex-col">
        <h1
          className=" mx-auto mt-[90px] w-[100%] px-[2%] text-center text-[3.5rem] font-black 
                max-[900px]:text-left max-[425px]:mt-[60px] max-[425px]:text-center"
        >
          Designer e Desenvolvedor{' '}
          <span className="max-[425px]:block"> FRONT END</span>
        </h1>

        <div
          className="trans mx-auto mt-[15px] h-[50%] w-[40%] rounded-[25px] p-[2%] 
                    max-[900px]:w-[80%] max-[500px]:w-[95%]"
        >
          <span className="text-[2.5rem] font-semibold">Olá</span>

          <p className="ml-[20px] font-medium">
            Sou Lucas Bucalon, desenvolvedor front end, entusiasta em ux/ui
            design, e ser engenheiro de software é minha meta.
            <br />
            <br />
            Possuo formação na área de desenvolvimento, atuando desde a criação
            do conceito para protótipo, até seu desenvolvimento final com as
            melhores funcionalidades.
            <br />
            <br />
            Utilizo da minha experiência na administração em varejo, onde atuei
            elaborando ofertas junto ao marketing da empresa para o
            público-alvo, além de outros trabalhos diversos.
          </p>
        </div>

        <div className="mt-[50px] flex w-[50%] flex-col justify-center px-[2%] font-medium max-[900px]:w-full">
          <div id="select" className="flex space-x-28 max-[900px]:m-auto ">
            <h3 onClick={toggleSl} id="sl" className="select cursor-pointer">
              Skills
            </h3>
            <h3 onClick={toggleXp} id="xp" className="cursor-pointer">
              Experiência
            </h3>
            <h3 onClick={toggleCf} id="cf" className="cursor-pointer">
              Certificados
            </h3>
          </div>

          <div className="relative h-full w-full">
            <Skills />
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function toggleSl() {
  const sl = document.querySelector('#sl')
  const xp = document.querySelector('#xp')
  const cf = document.querySelector('#cf')

  const skl = document.querySelector('#skl')
  const exp = document.querySelector('#exp')
  const ctf = document.querySelector('#ctf')

  sl?.classList.add('select')
  if (sl?.classList.contains('select')) xp?.classList.remove('select')
  cf?.classList.remove('select')

  skl?.classList.remove('hidden')
  ctf?.classList.add('hidden')
  exp?.classList.add('hidden')
}

function toggleXp() {
  const sl = document.querySelector('#sl')
  const xp = document.querySelector('#xp')
  const cf = document.querySelector('#cf')

  const skl = document.querySelector('#skl')
  const exp = document.querySelector('#exp')
  const ctf = document.querySelector('#ctf')

  xp?.classList.add('select')
  if (xp?.classList.contains('select')) sl?.classList.remove('select')
  cf?.classList.remove('select')

  skl?.classList.add('hidden')
  ctf?.classList.add('hidden')
  exp?.classList.remove('hidden')
}

function toggleCf() {
  const sl = document.querySelector('#sl')
  const xp = document.querySelector('#xp')
  const cf = document.querySelector('#cf')

  const skl = document.querySelector('#skl')
  const exp = document.querySelector('#exp')
  const ctf = document.querySelector('#ctf')

  cf?.classList.add('select')
  if (cf?.classList.contains('select')) sl?.classList.remove('select')
  xp?.classList.remove('select')

  skl?.classList.add('hidden')
  ctf?.classList.remove('hidden')
  exp?.classList.add('hidden')
}
