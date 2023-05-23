"use client"
import { services } from '@/lib/menu';
import { Abril_Fatface } from 'next/font/google';
import React, { useState } from 'react'
const fatface = Abril_Fatface({ weight: "400", subsets: ['latin'] });
const Aboutus = () => {

    const [showmore, setShowmore] = useState(false);

    const handleShowmore = () => {
        setShowmore(!showmore);
    }

    return (
        <div className='w-full h-auto flex flex-col p-5 pb-[40px] bg-[#ffba6b7d] shadow-xl'>

            <div className='w-full h-auto'>
                <img
                    style={{ boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)' }}
                    src='images/coffeecafe.avif' className='w-[300px] h-[200px] md:w-[800px] md:h-[400px] object-cover  mt-[-140px] m-auto rounded-xl shadow-lg' />
            </div>

            <div className='flex flex-col'>

                <div className='flex flex-col p-10 items-center gap-3'>
                    <p className={`${fatface.className}  text-3xl font-bold lg:text-5xl`}>About us</p>
                    <p className={`text-xs lg:text-base text-gray-500 text-center w-[400px] h-[100px] xs:w-[300px] md:w-[600px] lg:w-[800px] whitespace-normal ${showmore ? 'overflow-auto h-auto' : 'overflow-hidden'} transition-all`}>
                        Welcome to our coffee cafe, where passion and craftsmanship come together to create an exceptional coffee experience. At our cafe, we believe that every cup of coffee tells a story, and we strive to make each sip a moment to remember. We are dedicated to sourcing the finest beans from around the world, carefully selecting and roasting them to perfection. Our skilled baristas artfully prepare each cup, ensuring the flavors and aromas are fully awakened. Step into our cozy and inviting space, where the rich aroma of freshly brewed coffee fills the air, and the warm ambiance invites you to stay awhile. Whether you are seeking a peaceful moment of solitude or engaging in lively conversations with friends, our cafe is the perfect setting to relax, rejuvenate, and indulge in the simple pleasure of coffee. Join us on this delightful journey as we celebrate the love for coffee and the joy it brings to our lives.</p>
                    <button
                        onClick={handleShowmore}
                        className='w-[80px] h-[30px] xs:w-[80px] xs:h-[25px]  rounded-full border-[1px] border-blue-600/50 bg-blue-200 text-gray-600 text-[10px] items-center'>{showmore ? 'show less' : 'show more'}</button>
                </div>

                <div className='flex flex-col lg:flex-row lg:justify-center items-center w-full gap-3 h-auto'>
                    {
                        services.map((service) => (
                            <div key={service.name} className='flex flex-row w-[400px] xs:w-[300px] gap-4 hover:cursor-pointer hover:bg-orange-400/10 rounded-md p-3'>
                                <img src={service.img} className='w-[100px] xs:w-[80px] h-[100px] xs:h-[80px] object-cover rounded-lg shadow-md'/>
                                <div className='flex flex-col'>
                                    <p className='text-base xs:text-sm font-medium'>{service.name}</p>
                                    <p className='text-gray-500 text-sm xs:text-xs'>{service.phone}</p>
                                    <p className='text-xs'>{service.des}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
    )
}

export default Aboutus