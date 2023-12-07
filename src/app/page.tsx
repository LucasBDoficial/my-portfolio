'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ParticlesGray from './components/ParticlesGray'

export default function Home() {
  return (
    <motion.main
      className="flex max-[900px]:flex-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0] }}
      transition={{
        duration: 0.5,
        delay: 0.5,
      }}
    >
      <Image
        src="/images/home2.png"
        alt="imagem de tinta"
        width={200}
        height={200}
        className="absolute right-0 top-0 z-0 opacity-40"
      />

      <div className="relative mt-[30px] flex w-[50%] flex-col  justify-center max-[900px]:w-full">
        <Image
          src="/images/home1.png"
          alt="image de tinta"
          width={550}
          height={550}
          className="absolute z-0 ml-[25%] mt-[30px] opacity-40 max-[600px]:right-[0]"
        />

        <Image
          src="/images/perfil.png"
          alt="foto de perfil"
          width={350}
          height={350}
          className="relative z-20 mx-auto mt-[30px] pr-[9px]"
          id="image1"
        />

        <div className="sun old  z-20 mx-auto mt-[-20px] ">
          <samp id="sun" className=" moon"></samp>
        </div>
      </div>

      <div
        className="z-20 mr-[5%] mt-[40px] flex w-[50%] items-center justify-center pb-[20px]
          max-[900px]:mr-[0] max-[900px]:w-full max-[900px]:items-start "
      >
        <div className="absolute text-center">
          <h2 className="text-[3.5rem] font-black leading-[40px]">
            Tansformando ideias <br /> em <span>REALIDADE</span>{' '}
          </h2>

          <p className="mt-[15px]">
            “ Não é a linguagem de programação que define <br /> o programador,
            mas sim sua lógica. ”
          </p>

          <p className="mt-[10px] text-right text-[1.2rem] italic">
            David Ribeiro Guilherme
          </p>

          <p className="max-[500px]:h-[150px]" />
        </div>
      </div>

      <ParticlesGray />
    </motion.main>
  )
}
