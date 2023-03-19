import React from 'react'
import service from '../assest/serviceData.json';

const Services = () => {
  return (
    <div className='main w-full h-[100vh] grid grid-cols-3 gap-2 mx-auto'>
        
            {service.map((data)=>(
                    <div className='flex justify-center items-center flex-col gap-4 cursor-pointer hover:scale-[1.01] transition-duration: 750ms'>
                        <div className="box w-80 h-36 bg-slate-400 overflow-hidden">
                            <img src={data.image} alt="" className='w-80'/>
                        </div>
                        <h2 key={data.id} className="font-medium text-lg text-gray-600">{data.cont}</h2>
                        <button className='bg-red-500 text-white px-5 py-2 text-sm hover:bg-red-400'>{data.desc}</button>  
                    </div>
            ))}
       
        
    </div>
  )
}

export default Services