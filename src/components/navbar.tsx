import React from 'react'
import { Abril_Fatface } from 'next/font/google'
const fatface = Abril_Fatface({weight: "400", subsets: ['latin']});

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse items-center justify-between p-4 gap-5 md:p-8 z-20'>    
        <p className={`${fatface.className} text-[#9b5000e7] text-lg md:text-2xl`} >Caffinated Heaven.</p>
        <div className='flex flex-row items-center justify-around gap-6 text-sm xs:text-xs md:text-base text-white transition-all'>
            <p className='hover:underline decoration-[#6b3700ce] cursor-pointer'>About us</p>
            <p className='hover:underline decoration-[#6b3700ce] cursor-pointer'>Our Menu</p>
            <p className='hover:underline decoration-[#6b3700ce] cursor-pointer'>Contact us </p>
        </div>
    </div>
  )
}

export default Navbar