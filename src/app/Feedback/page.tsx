'use client'
import { motion } from 'framer-motion'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function Feedbacks() {
  return (
    <motion.section
      className="background relative flex flex-wrap justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0] }}
      transition={{
        duration: 0.5,
        delay: 0.5,
      }}
    >
      <div className="ball">
        <span id="a"></span>
        <span id="b"></span>
        <span id="c"></span>
        <span id="d"></span>
      </div>

      <h2 className="absolute top-[100px] w-full text-center text-[3.5rem] font-black">
        Comentários
      </h2>

      <div className="absolute top-[190px] w-[85%] max-[600px]:w-[98%]">
        <Swiper
          className="old min-h-[27rem] w-full rounded-[20px]"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className="pt-[4%] max-[600px]:pb-[9%]">
            <div className="flex max-[600px]:flex-col">
              <div className="flex w-[25%] flex-wrap justify-center border-r-2 max-[600px]:w-full max-[600px]:border-r-0">
                <div className="h-[10rem] w-[10rem] rounded-full bg-white"></div>

                <span className="mt-[30px] w-full text-center text-[1.9rem] font-semibold">
                  João Lucas
                </span>
              </div>

              <div
                className="flex w-[75%] items-center justify-center px-[70px] 
                            max-[600px]:mt-[15px] max-[600px]:w-full max-[600px]:px-[50px] max-[600px]:text-center"
              >
                <p className="text-[1.8rem]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  viverra metus nisi, vel tempor nunc tristique sed.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pt-[4%] max-[600px]:pb-[9%]">
            <div className="flex max-[600px]:flex-col">
              <div className="flex w-[25%] flex-wrap justify-center border-r-2 max-[600px]:w-full max-[600px]:border-r-0">
                <div className="h-[10rem] w-[10rem] rounded-full bg-white"></div>

                <span className="mt-[30px] w-full text-center text-[1.9rem] font-semibold">
                  João Lucas
                </span>
              </div>

              <div
                className="flex w-[75%] items-center justify-center px-[70px] 
                            max-[600px]:mt-[15px] max-[600px]:w-full max-[600px]:px-[50px] max-[600px]:text-center"
              >
                <p className="text-[1.8rem]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  viverra metus nisi, vel tempor nunc tristique sed.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="feed ml-[23%] w-[150px]"></div>
      </div>
    </motion.section>
  )
}
