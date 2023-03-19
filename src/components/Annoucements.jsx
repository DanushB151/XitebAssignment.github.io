import React from 'react'
import NewsData from '../assest/annoData.json'

const Annoucements = () => {
  return (
    <div className='w-full h-[50vh] bg-gray-100 p-2'>
        <h2 className='font-bold text-3xl text-gray-500 pb-10 pt-5 text-center'>Announcement</h2>
        <div className="container flex justify-around items-center gap-20">
            {NewsData.map((data)=>(
               <div className="card w-[500px] h-48 bg-white flex  rounded-lg" key={data.id}>
                <div className="image w-[350px] bg-gray-100 overflow-hidden ">
                    <img src={data.image} alt="" className='w-[360px] '/>
                </div>
                <div className="news p-2 flex flex-col justify-center items-center gap-9">
                    <h2 className='text-center text-xl text-gray-500 font-bold'>{data.header}</h2>
                    <button className='bg-red-500 font-bold text-white py-1 px-4 hover:bg-red-400'>Read more</button>
                </div>
            </div> 
            ))}
            

        </div>
    </div>
  )
}

export default Annoucements