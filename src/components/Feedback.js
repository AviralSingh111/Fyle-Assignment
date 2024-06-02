import React from 'react'
import qoute from '../images/quote.png';
import group from '../images/group.png';
const Feedback = () => {
  return (
    <div className='w-full bg-white mt-12'>
        <div>
        <h3 className='text-[20px] text-center font-light text-[#FF3366] mt-4'>CLIENT'S FEEDBACK</h3>
        <h1 className='text-[38px] font-semibold text-black text-center mt-6'>PEOPLE SAY'S ABOUT US!</h1>
        </div>
        <div className='mt-12 relative flex w-full ml-[350px]'>
        <img src={`${qoute}`} className='w-10 h-8 absolute items-start' alt='quote'/>
        <p className='w-[700px] text-[18px] absolute z-10'>Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
        <p className='text-[#FF3147] mt-[64px] font-bold'>JANNAT TUMPA - <span className='text-gray-300 font-light'>COO, AMERIMAR ENTERPRISES, INC.</span></p>
        </div>
        <div className='bg-[#FF3147] mt-40 w-full h-[300px] flex items-center justify-center'>
        <img src={`${group}`} alt='group' className='w-[900px]' />
        </div>
    </div>
  )
}

export default Feedback