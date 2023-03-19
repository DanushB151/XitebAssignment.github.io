import React from 'react'
import './Hero.css';
// import Image from '../assest/hero.jpg';

const Hero = () => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-between items-center mx-auto gap-2 hero'>
        <div className="hero-left w-1/2 h-[60vh] ">
            <h1 className='text-gray-300 text-3xl font-[500] font-[Roboto] ' >I Want to</h1>
            <h1 className='text-gray-400 text-4xl font-[700] font-[Roboto] my-2' >Know About</h1>
            <div className='w-[330px] h-9 rounded-md flex bg-white cont'>
                <input type="text" className='w-[300px] h-8 rounded-md outline-none p-4' />
            <button><i class="fa-solid fa-bars text-gray-600 "></i></button>
            </div>
        </div>
        


        <div className="hero-right w-1/2 h-[60vh] flex flex-row relative">
            <div className="w-[350px] h-[310px] bg-white absolute top-9 p-5 font-[Roboto] text-gray-500 flex flex-col gap-2">
               <p className='text-sm font-medium'>PERSONAL BANKING</p>
               <h2 className='text-2xl font-bold '>Lock in your CD rate - up to 4.70% Annual Percentage Yield.</h2>
               <p className='text-sm font-medium'>Earn a guaranteed return. Rates are dependent on location and term.</p>
               <button className='bg-red-500 text-white font-medium py-2 px-7 rounded-md'>See rates</button>
               <button className='border-red-500 text-red-500 font-medium py-2 px-7 rounded-md bg-transparent border'>Get started</button>
            </div>
            

            <div className="flex flex-col gap-5 my-7 items-end justify-center absolute right-0" >
                <div className="hero-icon hover:text-white flex justify-center p-1 items-center text-5xl"><i class="fa-brands fa-facebook"></i></div>
                <div className="hero-icon hover:text-white flex justify-center p-1 pl-2 items-center text-5xl"><i class="fa-brands fa-youtube"></i></div>
                <div className="hero-icon hover:text-white flex justify-center p-1 pl-2 items-center text-5xl"><i class="fa-brands fa-whatsapp"></i></div>
                <div className="hero-icon hover:text-white flex justify-center p-1 items-center text-5xl"><i class="fa-brands fa-telegram"></i></div>
        
            </div>
           </div>
        
    </div>
  )
}

export default Hero