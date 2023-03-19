import React from 'react'
import Logo from '../assest/logo.png' 
import'./Header.css';

const Header = () => {
  return <>
  <div className='h-20 max-w-full mx-auto md:flex bg-white flex justify-around items-center cursor-pointer'>
    <img src={Logo} alt="logo" className='  Logo w-full ml-16 mr-32' />
        <h1 className="lg:text-2xl text-xl font-bold text-red-500 lg:mx-6 mx-3 w-full hidden">DFCC Bank</h1>
        <ul className='flex'>
            <li className='px-8  font-medium bg-white mx-auto'>Personal</li>
            <li className='px-8  font-medium bg-white'>Careers</li>
            <li className='px-8  font-medium bg-white'>Sustainability</li>
            <li className='px-8  font-medium bg-white '>Media</li>
        </ul>

        <div className="flex justify-between items-center gap-3">
            <span className='bg bg-red-600 rounded-full h-10  w-10 font-bold text-white flex justify-center items-center'>E</span>
            <span className='bg bg-red-600 rounded-full h-10  w-10 font-bold text-white flex justify-center items-center'>සි</span>
            <span className='bg bg-red-600 rounded-full h-10  w-10 font-bold text-white flex justify-center items-center'>த</span>
        </div>
        
        
        <div className="flex bg-gray-400 h-20 mx-3 justify-end items-center  mr-0">
             <div className="flex bg-gray-400  justify-between items-center flex-col px-3">
                <i className="fa-solid fa-location-dot text-white text-2xl"></i>
                <p className='text-xs text-white '>Locate_Us</p>
            </div>
            <div className="flex bg-gray-400  justify-between items-center flex-col px-3">
                <i class="fa-solid fa-phone text-white text-2xl"></i>
                <p className='text-xs text-white '>Contact_Us</p>
            </div>
                
        
            <div className="flex bg-red-700 h-20  items-center ">
                <div className="flex justify-between items-center flex-row px-8 gap-4">
                     <i class="fa-solid fa-lock text-white text-2xl"></i>
                    <p className='text-xs text-white'>Sign_In</p>
                </div>
            </div>
        
       </div>
    
    </div>
     <div className="flex bg-gray-800 max-w-full h-20 justify-between items-center text-white font-normal">
        <ul className='flex justify-between items-center mx-auto'>
            <li className='lg:px-5 px-3'>About Us</li>
            <li className='lg:px-5 px-3'>Cards</li>
            <li className='lg:px-5 px-3'>DFCC Pinnacle</li>
            <li className='lg:px-5 px-3'>Digital Banking</li>
            <li className='lg:px-5 px-3'>Corparate</li>
            <li className='lg:px-5 px-3'>SME</li>
            <li className='lg:px-5 px-3'>International</li>
        </ul>
     </div>
  </>
    
  
}

export default Header