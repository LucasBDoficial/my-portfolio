'use client'
import { motion } from 'framer-motion'

import File from '../components/File'
import TypeIt from 'typeit-react'
import Image from 'next/image'

export default function Gallery() {
  return (
    <motion.section
      className="flex flex-wrap justify-center "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0] }}
      transition={{
        duration: 0.5,
        delay: 0.5,
      }}
    >
      <Image
        src="/images/gallery1.png"
        alt="imagem de tinta"
        width={250}
        height={0}
        className=" absolute left-0 top-0 z-0 animate-pulse opacity-5"
      />

      <Image
        src="/images/gallery2.png"
        alt="imagem de tinta"
        width={250}
        height={0}
        className=" absolute right-0 top-0 z-0 animate-pulse opacity-5"
      />

      <div className="relative mt-[100px] flex w-full flex-wrap justify-center max-[500px]:mt-[60px]">
        <TypeIt
          id="textd"
          className=" w-full px-[2%] text-center text-[3.5rem] font-black text-white 
                        max-[844px]:mr-[50px] max-[768px]:mr-[0px] max-[768px]:text-center max-[600px]:h-[80px] "
        >
          Tansformando ideias em realidade
        </TypeIt>

        <File />
      </div>
    </motion.section>
  )
}
