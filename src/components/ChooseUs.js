import React, { useState } from 'react'
import icon1 from '../images/icon1.svg'
import icon2 from '../images/icon2.svg'
import icon3 from '../images/icon3.svg'
import icon4 from '../images/icon4.svg'
import image1 from '../images/hero.png'
import image2 from '../images/chooseus.png'
import image3 from '../images/carousel1.png'

const images = [image1,image2,image3];
const ChooseUs = () => {
    const [currentImage, setCurrentImage] = useState(1);
    const handleClick1 = () => {
        setCurrentImage(0);
    }
    const handleClick2 = () => {
        setCurrentImage(1);
    }
    const handleClick3 = () => {
        setCurrentImage(2);
    }
  return (
    <div className='bg-white h-auto w-full flex flex-col'>
       <div className='flex items-center justify-center py-4 px-8 flex-col'>
        <div>
         <h3 className='text-[20px] text-center font-light text-[#FF3366] mt-4'>WHY CHOOSE US</h3>
         <h1 className='text-[38px] font-semibold text-black text-center mt-6'>WHY WE ARE THE BEST</h1>
         </div>
         <div className='flex flex-wrap w-full items-center justify-center mt-12 gap-4'>
           <div className='flex flex-col space-y-4 w-[260px]'>
           <img src={`${icon1}`} alt='icon_Image' className='w-[60px] h-[60px]'/>
           <h3 className='text-lg font-medium'>Clarified Vision & Target</h3>
           <p className='text-[16px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
           </div>
           <div className='flex flex-col space-y-4 w-[260px]'>
           <img src={`${icon2}`} alt='icon_Image' className='w-[60px] h-[60px]'/>
           <h3 className='text-lg font-medium'>Clarified Vision & Target</h3>
           <p className='text-[16px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
           </div>
           <div className='flex flex-col space-y-4 w-[260px]'>
           <img src={`${icon3}`} alt='icon_Image' className='w-[60px] h-[60px]'/>
           <h3 className='text-lg font-medium'>Clarified Vision & Target</h3>
           <p className='text-[16px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
           </div>
           <div className='flex flex-col space-y-4 w-[260px]'>
           <img src={`${icon4}`} alt='icon_Image' className='w-[60px] h-[60px]'/>
           <h3 className='text-lg font-medium'>Clarified Vision & Target</h3>
           <p className='text-[16px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
           </div>
         </div>
         <div className='mt-8'> 
            <h3 className='text-[20px] text-center font-light text-[#FF3366] mt-4'>OUR PROJECT</h3>
            <h1 className='text-[38px] font-semibold text-black text-center mt-6'>WHY WE ARE THE BEST</h1>
             <div className='flex gap-6 mt-12 h-[510px]'>
                <div>
                  <img src={`${images[currentImage]}`} alt='imgae' className='w-[600px] h-[500px]'/>
                </div>
                <div className='h-[500px] rounded flex flex-col gap-[4px]'>
                    <div onClick={handleClick1}
                     className={`cursor-pointer w-[300px] h-[167px] px-6 flex justify-center items-center ${currentImage===0 ? 'bg-[#FF3147] text-white' : 'bg-[#F6F6F6] text-black' } `}>
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-base'>Genderless Kei – Japan’s Hot</h2>
                            <p className='text-sm'>Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of</p>
                        </div>
                    </div>
                    <div onClick={handleClick2}
                     className={`cursor-pointer w-[300px] h-[167px] px-6 flex justify-center items-center ${currentImage===1 ? 'bg-[#FF3147] text-white' : 'bg-[#F6F6F6] text-black' } `}>
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-base'>Better Strategy & Quality</h2>
                            <p className='text-sm'>Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of</p>
                        </div>
                    </div>
                    <div onClick={handleClick3}
                    className={`cursor-pointer w-[300px] h-[167px] px-6 flex justify-center items-center ${currentImage===2 ? 'bg-[#FF3147] text-white' : 'bg-[#F6F6F6] text-black' } `}>
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-base'>Genderless Kei – Japan’s Hot</h2>
                            <p className='text-sm'>Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of</p>
                        </div>
                    </div>

                </div>
             </div>
         </div>
        </div>
    </div>
  )
}

export default ChooseUs