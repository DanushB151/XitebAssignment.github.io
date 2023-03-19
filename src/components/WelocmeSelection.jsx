import React from 'react'
import Video from '../assest/hero.jpg'

const WelocmeSelection = () => {
  return (
    <div className='w-full h-[90vh] relative mx-auto flex justify-end px-10' >
        <div className="video-container  w-[700px] h-[400px] bg-gray-200 overflow-hidden">
          <img src={Video} alt="" className='h-[400px]'/>
        </div>
        <div className="welcome-card w-[570px] h-[270px] bg-white shadow-2xl absolute rounded-lg left-20 top-16">
          <div className="p-10 ">
            <h2 className='text-gray-700 font-bold text-3xl'>Saving for your family in an ethical way</h2>
            <p className='text-gray-400 my-6'>DFCC Bank helps its customers to own their own homes, save for their families' futures and expand their businesses without compromising their faith or their values. This is Neil's story.</p>
          </div>
        </div>
    </div>
  )
}

export default WelocmeSelection