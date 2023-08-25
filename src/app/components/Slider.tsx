import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider(){

    
    return(
         <Swiper 
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
            
            }} >

                <SwiperSlide className="p-[50px] mx-auto">
                    <div className="w-full min-h-[25rem] rounded-[20px] old p-[5%] ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="4.8rem" height="4.8rem" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M21 6H9a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V21M24 34v8"/><path d="m32 6l-4 4l4 4m6-8l4 4l-4 4M14 42h20"/></g></svg>
                        <p className='font-meduin text-[2rem] mt-[20px]'>Conhecimentos de <span>api’s e pluguins,</span> para aumentar as soluções de problemas, e ampliar os objetivos</p>
                    </div>
                </SwiperSlide> 

                <SwiperSlide className="p-[50px] mx-auto">
                    <div className="w-full min-h-[25rem] rounded-[20px] old p-[5%]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="4.8rem" height="4.8rem" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m17.674 11.408l-1.905 5.715a.6.6 0 0 1-.398.386L3.693 20.98a.6.6 0 0 1-.74-.765L6.745 8.841a.6.6 0 0 1 .34-.365l5.387-2.218a.6.6 0 0 1 .653.13l4.404 4.405a.6.6 0 0 1 .145.615ZM3.296 20.602l6.364-6.364"/><path d="m17.792 11.056l2.828-2.829a2 2 0 0 0 0-2.828L18.5 3.277a2 2 0 0 0-2.829 0l-2.828 2.829m-1.062 6.01a1.5 1.5 0 1 0-2.121 2.122a1.5 1.5 0 0 0 2.121-2.122Z"/></g></svg>
                        <p className='font-meduin text-[2rem] mt-[20px]'>Cursado em <span>ux e ui,</span> para melhorar a experiência dos projetos.</p>
                    </div>
                </SwiperSlide>    

                <SwiperSlide className="p-[50px] mx-auto">
                    <div className="w-full min-h-[25rem] rounded-[20px] old p-[5%]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="4.8rem" height="4.8rem" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M25 6H9a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-7M24 34v8m-10 0h20m3-24V6m-5 5l5-5l5 5"/></svg>
                        <p className='font-meduin text-[2rem] mt-[20px]'>Documentos bem otimizados, com praticas de <span>seo e smo,</span> para melhor performance</p>
                    </div>
                </SwiperSlide>  

                <SwiperSlide className="p-[50px] mx-auto">
                    <div className="w-full min-h-[25rem] rounded-[20px] old p-[5%]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="4.8rem" height="4.8rem" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="4"><path stroke-linejoin="round" d="M24 41c9.941 0 18-8.322 18-14c0-5.678-8.059-14-18-14S6 21.328 6 27c0 5.672 8.059 14 18 14Z" clip-rule="evenodd"/><path stroke-linejoin="round" d="M24 33a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"/><path stroke-linecap="round" d="m13.264 11.266l2.594 3.62m19.767-3.176l-2.595 3.62M24.009 7v6"/></g></svg>
                        <p className='font-meduin text-[2rem] mt-[20px]'>Códigos organizados com <span>semântica,</span> e boas praticas de <span>metodologias,</span> para melhor visualização do código</p>
                    </div>
                </SwiperSlide>   

                <SwiperSlide className="p-[50px] mx-auto">
                    <div className="w-full min-h-[25rem] rounded-[20px] old p-[5%]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="4.8rem" height="4.8rem" viewBox="0 0 24 24"><path fill="currentColor" d="M4 6v10h5v-4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4h2V6H4M0 20v-2h4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h4v2h-6a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2H0m11.5 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m4 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5M13 20v1h1v-1h-1m-2-8v7h5v-7h-5Z"/></svg>
                        <p className='font-meduin text-[2rem] mt-[20px]'>Aplicações totalmente <span>responsivas,</span> para mobile, desktop, tablet, e notbook.</p>
                    </div>
                </SwiperSlide> 

                <SwiperSlide className="p-[50px] mx-auto">
                    <div className="w-full min-h-[25rem] rounded-[20px] old p-[5%]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="4.8rem" height="4.8rem" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M25 6H9a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-8M24 34v8m6-30h12m-6-6v12M14 42h20"/></svg>
                        <p className='font-meduin text-[2rem] mt-[20px]'><span>Desenvolvimento</span> de app’s, paginas  para web, e-mail marketing, aplicações entre outros...</p>
                    </div>
                </SwiperSlide> 
        </Swiper>
    )
}