import React from 'react'
import slides from '../assest/sliderData.json';
import SliderDev from './SliderDev';

const Slider = () => {
  return (
    <div className="Slider bg-white h-[40vh] w-full p-10 my-10 mx-auto ">
        <SliderDev slides = {slides} />
    </div>
    
    
  )
}

export default Slider