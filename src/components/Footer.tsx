import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Abril_Fatface } from 'next/font/google';
import React from 'react'
const fatface = Abril_Fatface({ weight: "400", subsets: ['latin'] });

const Footer = () => {
    return (
        <div className='w-full h-auto lg:h-[400px] bg-slate-800 flex flex-col lg:flex-row justify-around items-center relative'>

            <div className='flex flex-col gap-3 items-center p-10 border-b-[1px] border-orange-300 shadow-2xl'>
                <p className={`${fatface.className} text-xl text-[#bd6200]`} >Caffinated Heaven.</p>
                <p className='text-sm xs:text-xs text-[#fff] font-light'>follow us on socials, its fun there too.</p>
                <div className='flex flex-row gap-5 justify-around text-[#fff]'>
                    <Instagram className='hover:cursor-pointer active:scale-105' />
                    <Twitter className='hover:cursor-pointer active:scale-105' />
                    <Facebook className='hover:cursor-pointer active:scale-105' />
                </div>
            </div>

            <div className='flex flex-col-reverse lg:flex-row items-center p-10 gap-10 text-white pb-[100px]'>
                <div className='flex flex-row gap-10'>
                    <div className='flex flex-col gap-1'>
                        <p className='font-medium'>Find us at :</p>
                        <p className='text-xs'>123,ABC Street, New Delhi, India</p>
                        <p className='text-xs'>+91-987653210</p>
                        <p className='text-xs'>shop@canffinated.com</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='font-medium'>Links</p>
                        <p className='text-xs'>Home</p>
                        <p className='text-xs'>About us</p>
                        <p className='text-xs'>Events</p>
                        <p className='text-xs'>Blogs</p>
                        <p className='text-xs'>Newsletter</p>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <p className='font-medium text-sm lg:text-xl'>For any inquiries :</p>
                    <button className='w-[180px] h-[50px] xs:w-[80px] xs:h-[25px]  rounded-full border-[1px] border-orange-600/50 bg-orange-200 text-black text-xs md:text-lg lg:text-[18px] items-center shadow-lg'>Contact us</button>
                </div>
            </div>
        <p className='text-[8px] font-thin absolute bottom-2 text-[#ffffff9c]'>© Alrights under Caffinated Heaven | 2023</p>
        </div>
    )
}

export default Footer