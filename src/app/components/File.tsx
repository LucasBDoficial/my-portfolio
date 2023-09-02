import { Mousewheel, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function File(){

    
    return(
        <div className="w-[90%] h-[300px] top-[60px] relative
            max-[1024px]:w-[85%] max-[600px]:h-[550px]">
                
      <Swiper
        modules={[Mousewheel, Pagination]}
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>

            <div className='flex justify-center space-x-[50px] max-[600px]:flex-col max-[600px]:space-x-0 max-[600px]:space-y-[30px]'>

                <a href="https://lucasbdoficial.github.io/p_singlepage/" 
                    className="old border-[1px]  border-blue dark:border-orange group w-[45%] h-[30rem] rounded-[20px] relative overflow-hidden max-[1024px]:w-[40%] max-[600px]:w-[90%]">

                                <Image src="/images/singlepage.jpg" alt="imagem de tinta" width={2000} height={2000} 
                                        className=" w-full h-full absolute"/> 
                                        
                    <div className='hover:bg-gray-900/60 w-full h-full absolute flex justify-center items-center'>

                        <p className='group-hover:flex text-white absolute hidden items-center text-[2rem] font-medium' >VISITAR PROJETO
                    
                        <svg xmlns="http://www.w3.org/2000/svg" width="2.4rem" height="2.4rem" viewBox="0 0 1024 1024"><path fill="currentColor" d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"/></svg>

                        </p>
                    </div>
                </a>

                <a href="https://lucasbdoficial.github.io/p_linkpage/" 
                    className="old border-[1px] border-blue dark:border-orange group w-[45%] h-[30rem] rounded-[20px] relative overflow-hidden max-[1024px]:w-[40%] max-[600px]:w-[90%]">

                                <Image src="/images/linkpage.jpg" alt="imagem de tinta" width={2000} height={2000} 
                                        className=" w-full h-full absolute"/> 
                                        
                    <div className='hover:bg-gray-900/60 w-full h-full absolute flex justify-center items-center'>

                        <p className='group-hover:flex text-white absolute hidden items-center text-[2rem] font-medium' >VISITAR PROJETO
                    
                        <svg xmlns="http://www.w3.org/2000/svg" width="2.4rem" height="2.4rem" viewBox="0 0 1024 1024"><path fill="currentColor" d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"/></svg>

                        </p>
                    </div>
                </a>
            </div>

        </SwiperSlide>  
      </Swiper>
    </div>
    )
}