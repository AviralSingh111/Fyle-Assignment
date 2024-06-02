import React from 'react'
import image1 from '../images/heart.png';
import image2 from '../images/clock.png';
import image3 from '../images/path.png';
import image4 from '../images/trophy.png';

const Growth = () => {
  return (
    <div className='w-full h-[550px] bg-[#FAFAFA] flex items-center justify-center flex-col'>
        <div>
        <h3 className='text-[20px] text-center font-light text-[#FF3366] mt-4'>EXPERTS GROWTH</h3>
         <h1 className='text-[38px] font-semibold text-black text-center mt-6'>OUR COMPANY GROWTH</h1>
         </div>
         <div className='mt-12 flex-wrap flex gap-4'>
          <div className='bg-white w-[270px] h-[233px] flex flex-col items-center justify-center space-y-4 hover:drop-shadow-2xl'>
          <img src={`${image1}`} alt='heartIcon' className='w-8 h-8'/>
          <h2 className='text-5xl'>199 +</h2>
          <h4 className='text-base'>Satisfied Customers</h4>
          </div>
          <div className='bg-white w-[270px] h-[233px] flex flex-col items-center justify-center space-y-4 hover:drop-shadow-2xl'>
          <img src={`${image2}`} alt='heartIcon' className='w-8 h-8'/>
          <h2 className='text-5xl'>1591 +</h2>
          <h4 className='text-base'>Days Of Operation</h4>
          </div>
          <div className='bg-white w-[270px] h-[233px] flex flex-col items-center justify-center space-y-4 hover:drop-shadow-2xl'>
          <img src={`${image3}`} alt='heartIcon' className='w-8 h-8'/>
          <h2 className='text-5xl'>283 +</h2>
          <h4 className='text-base'>Complete Project</h4>
          </div>
          <div className='bg-white w-[270px] h-[233px] flex flex-col items-center justify-center space-y-4 hover:drop-shadow-2xl'>
          <img src={`${image4}`} alt='heartIcon' className='w-8 h-8'/>
          <h2 className='text-5xl'>75 +</h2>
          <h4 className='text-base'>Win Awards</h4>
          </div>
         </div>
    </div>
  )
}

export default Growth