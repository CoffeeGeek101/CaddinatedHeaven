import React from 'react'
import { Abril_Fatface } from 'next/font/google'
import { menu, snacks } from '@/lib/menu';
const fatface = Abril_Fatface({weight: "400", subsets: ['latin']});

const Menu = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row lg: justify-around items-center h-[1000px] bg-[#6d2d00ea] bg-gradient-to-tl from-[#502000] to-[#ffdbb1dd] shadow-2xl pb-[100px]'>
        <div className='flex flex-col items-center'>
        <p className={` ${fatface.className}  text-center p-5 text-[#fff] text-3xl`}> Our Menu</p>
            <div className='flex flex-col p-5 items-center'>
                {
                    menu.map((item) => (
                        <p key={item.id} className='w-[300px] h-[50px] border-b-[1px] font-light border-white/20 flex flex-row gap-2 items-center justify-between text-[#fff] shadow-sm hover:bg-black/10 p-3 cursor-pointer active:scale-95'>
                        <span className={`${fatface.className}`}>0{item.id}. </span>
                        {item.name}
                        <span className='text-end text-xs'>{item.price}</span>
                        </p>
                    ))
                }
            </div>
            <p className={` ${fatface.className}  text-center p-5 text-[#fff] text-3xl`}>Snacks</p>
            <div className='flex flex-row justify-around gap-3'>
                {
                    snacks.map((item) => (
                        <div key={item.name} className='flex flex-col items-center text-white'>
                            <img src={item.img} className='w-[100px] xs:w-[80px] h-[100px] xs:h-[80px] object-cover cursor-pointer rounded-md hover:scale-95 shadow-xl'/>
                            <p className='font-bold text-sm xs:text-xs'>{item.name}</p>
                            <p className='text-xs font-light'>{item.price}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='hidden md:hidden lg:flex relative'>
            <p className='absolute top-[-217px] left-[-60px] text-6xl font-extrabold text-[#fff] text-end drop-shadow-lg'>Free snacks every Friday!!</p>
            <img src='images/menuhero.avif' className='w-[400px] h-[300px] object-cover absolute top-[100px] left-[-150px] rounded-md shadow-xl' />
            <img src='images/latte.jpg' className='w-[400px] h-[300px] object-cover mt-[-100px] rounded-md shadow-xl' />
        </div>
    </div>
  )
}
export default Menu