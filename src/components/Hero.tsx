import React from 'react'
import Navbar from './navbar'
import { Abril_Fatface, Poppins } from 'next/font/google';
const fatface = Abril_Fatface({weight: "400", subsets: ['latin']});
const poppins = Poppins({weight: "400", subsets: ['latin']});

const Hero = () => {
  return (
    <div className='w-full h-[795px] relative bg-zinc-500 overflow-hidden shadow-lg' >
      <img src='images/herocoffee.avif' className='w-full h-full object-cover absolute top-0 left-0 mix-blend-overlay'/>
      <img src='images/hero2.png' className='absolute top-[250px] md:top-[150px] lg:top-0' />
      <div className='w-full h-[795px] flex flex-col'>
          <Navbar/>
          <div className='flex flex-col items-center gap-2 lg:gap-4 mt-[80px]'>
            <p 
            style={{textShadow: '0px 4px 10px rgba(255, 255, 255, 0.751)'}}
            className={`${fatface.className} text-4xl md:text-[46px] lg:text-[66px] text-[#ffffff] z-10`} >Fuel Your Passion</p>
            <p className={`${poppins.className} font-medium text-base lg:text-lg tracking-[2px]`} > one cup at a time.</p>
          </div>
          <div className='flex flex-col items-center gap-2 lg:items-end lg:justify-end lg:px-20 mt-[350px]'>
            <p className={`${fatface.className} text-3xl lg:text-5xl text-[#fff]`}>We are Open:</p>
            <p className='font-semibold text-[#663300a5] lg:text-2xl'>10AM - 10PM</p>
            <p className='text-xs'>123, ABC Street | Delhi, India</p>
          </div>
      </div>
    </div>
  )
}

export default Hero