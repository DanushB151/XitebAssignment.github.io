import React from 'react'
import MapData from '../assest/mapData.json'

const Branches = () => {
 
  return (
    <div className='main w-full h-[90vh]'>
        <h2 className='text-center font-bold text-2xl text-gray-500 my-5'>Main Branches</h2>
        <div className=" flex justify-center items-center gap-1 px-32 ">
             <div className="map-container w-[70%] h-[430px] bg-gray-100  relative overflow-hidden">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63372.1429449185!2d79.78248723125!3d6.919396800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596bfd095fb3%3A0x9c79dd54b5f608a9!2sDFCC%20Bank%20-%20Head%20office!5e0!3m2!1sen!2slk!4v1679208933197!5m2!1sen!2slk"
               className='w-[100%] h-[430px] relative' title='map' ></iframe>
               
             </div>
             <div className="location-container w-[30%] flex flex-col border border-solid p-3 cursor-pointer">
                    {
                        MapData.map((data)=>(
                            <div className="location p-1 flex flex-col gap-4  hover:bg-gray-100">
                            
                                <div className=" flex justify-between  ">
                                    <h2 className='text-gray-500 text-sm font-bold '>{data.name}</h2>
                                    <p className='text-gray-500 text-sm font-bold '>{data.phone}</p>
                                </div>
                                <p className='text-gray-400 text-sm font-medium '>{data.address}</p>
                                <hr />
                            </div>
                        ))
                    }
             </div> 
        </div>
          
    </div>
  )
}

export default Branches