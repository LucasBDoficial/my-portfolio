"use client";
import { motion } from "framer-motion";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import  ButtonMode  from "../components/ButtonMode"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Feedbacks(){
    return(
        <motion.section 
        className="background flex flex-wrap justify-center relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y:[0]}}
        transition={{
        duration: 0.5,
        delay: 0.5,
        }
    }>
        <div className="ball">
            <span id="a" ></span>
            <span id="b" ></span>
            <span id="c" ></span>
            <span id="d" ></span>
        </div>

        <h2 className="absolute top-[100px] font-black w-full text-center text-[3.5rem]">Comentários</h2>

        <div className="w-[85%] absolute top-[190px] max-[600px]:w-[98%]">
        <Swiper className="w-full min-h-[27rem] rounded-[20px] old"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
             >

                <SwiperSlide className="pt-[4%] max-[600px]:pb-[9%]">

                    <div className="flex max-[600px]:flex-col">

                        <div className="flex justify-center flex-wrap w-[25%] border-r-2 max-[600px]:w-full max-[600px]:border-r-0" >

                            <div className="w-[10rem] h-[10rem] rounded-full bg-white"></div>

                            <span className="w-full font-semibold text-[1.9rem] text-center mt-[30px]">João Lucas</span>
                        </div>

                        <div className="flex items-center justify-center w-[75%] px-[70px] 
                            max-[600px]:w-full max-[600px]:text-center max-[600px]:mt-[15px] max-[600px]:px-[50px]">

                            <p className="text-[1.8rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra metus nisi, vel tempor nunc tristique sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        </div>
                    </div>
                </SwiperSlide>  

                <SwiperSlide className="pt-[4%] max-[600px]:pb-[9%]">

                    <div className="flex max-[600px]:flex-col">

                        <div className="flex justify-center flex-wrap w-[25%] border-r-2 max-[600px]:w-full max-[600px]:border-r-0" >

                            <div className="w-[10rem] h-[10rem] rounded-full bg-white"></div>

                            <span className="w-full font-semibold text-[1.9rem] text-center mt-[30px]">João Lucas</span>
                        </div>

                        <div className="flex items-center justify-center w-[75%] px-[70px] 
                            max-[600px]:w-full max-[600px]:text-center max-[600px]:mt-[15px] max-[600px]:px-[50px]">

                            <p className="text-[1.8rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra metus nisi, vel tempor nunc tristique sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        </div>
                    </div>
                </SwiperSlide>   

        </Swiper>

            <div className="w-[150px] ml-[23%] feed"></div>
        </div>

        {/* <div onClick={toggleMode}><ButtonMode /></div> */}
        </motion.section>
    )
}

// function toggleMode(){
//     const html = document.documentElement
//     html.classList.toggle("light")
    
//         if(html.classList.contains("light")){}     
// }