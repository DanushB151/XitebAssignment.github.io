import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';



const SliderDev = ({slides}) => {
  return (
    
    <Swiper 
    

   // install Swiper modules
   modules={[Navigation,A11y]}
   spaceBetween={40}
   slidesPerView={6} 
   navigation
   pagination={{ clickable: true }}
   scrollbar={{ draggable: true }}
   onSwiper={(swiper) => console.log(swiper)}
   onSlideChange={() => console.log('slide change')}
  >

   
    {slides.map((slide)=>(
         <SwiperSlide key={slide.id}>
            <div className=' flex justify-center items-center flex-col gap-3 hover:bg-slate-400 p-3 cursor-pointer rounded-md'>
                <img src={slide.image} alt={slide.id} className="w-[50px]"/> 
                <p className='text-gray-500 font-medium  hover:text-white'>{slide.desc}</p>
            </div>
             
         </SwiperSlide>
         
    ))}
   
    
    
  </Swiper>
  )
}

export default SliderDev