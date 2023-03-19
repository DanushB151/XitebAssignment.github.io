import React from 'react'
import { useState, useEffect } from "react";
const URL = `https://v6.exchangerate-api.com/v6/e213d192063f04522373b7f8/latest/USD`;
const Exchange = () => {
    const [apidata1, setApiData1] = useState([]);
    const [apidata2, setApiData2] = useState([]);
    const [apidata3, setApiData3] = useState([]);
    const [apidata4, setApiData4] = useState([]);
    const [apidata5, setApiData5] = useState([]);
    const [apidata6, setApiData6] = useState([]);

   
    useEffect(()=>{
        const fetchData = async ()=>{
            const result = await  fetch(URL)
            result.json().then(json =>{
                setApiData1(json.conversion_rates.LKR)
                setApiData2(json.conversion_rates.INR)
                setApiData3(json.conversion_rates.AED)
                setApiData4(json.conversion_rates.BDT)
                setApiData5(json.conversion_rates.CAD)
                setApiData6(json.conversion_rates.ERN)
            
            })
            
        }
        fetchData();
    },[]);

    

    // useEffect(() => {
    //     fetch("https://v6.exchangerate-api.com/v6/e213d192063f04522373b7f8/latest/USD")
    //      .then((response) => response.json())
    //      .then(data => setApiData(data))
    //      .catch(err => console.log(err));
    //    }, []);
  return (
    <div className='w=full h-[30vh] p-5 flex justify-center items-center flex-col cursor-pointer'>
        <h2 className='font-bold text-3xl text-gray-500 pb-10 pt-5 text-center'>Exchange Rates</h2>
            <div className='flex justify-between items-center mx-20 gap-10'>
            <i className="fa-solid fa-chevron-left text-2xl text-blue-500"></i>
                <div className='flex justify-center items-center gap-1'><p className='text-lg font-bold text-gray-500'>{apidata1}</p> <img src="https://flagsapi.com/LK/flat/64.png" alt=''></img></div>
                <div className='flex justify-center items-center gap-1'><p className='text-lg font-bold text-gray-500'>{apidata2}</p> <img src="https://flagsapi.com/IN/flat/64.png" alt=''></img></div>
                <div className='flex justify-center items-center gap-1'><p className='text-lg font-bold text-gray-500'>{apidata3}</p> <img src="https://flagsapi.com/AE/flat/64.png" alt=''></img></div>
                <div className='flex justify-center items-center gap-1'><p className='text-lg font-bold text-gray-500'>{apidata4}</p> <img src="https://flagsapi.com/BD/flat/64.png" alt=''></img></div>
                <div className='flex justify-center items-center gap-1'><p className='text-lg font-bold text-gray-500'>{apidata5}</p> <img src="https://flagsapi.com/CA/flat/64.png" alt=''></img></div>
                <div className='flex justify-center items-center gap-1'><p className='text-lg font-bold text-gray-500'>{apidata6}</p> <img src="https://flagsapi.com/ER/flat/64.png" alt=''></img></div>
               
            <i className="fa-solid fa-chevron-right text-2xl text-blue-500"></i>
            </div>
           

           
           
       
    </div>
  )
}

export default Exchange