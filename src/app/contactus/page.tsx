"use client"
import React, { useState } from 'react'
import { Abril_Fatface } from 'next/font/google';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { toast } from 'react-hot-toast';
const fatface = Abril_Fatface({weight: "400", subsets: ['latin']});

export interface formData {
    name: string;
    email: string;
    message: string;
}


const Contactus = () => {

    const [loading, setLoading] = useState<boolean>(false);

    const schema = z.object({
        name: z.string().min(3).max(50).nonempty().regex(/^[A-Za-z]+$/),
        email: z.string().email().nonempty(),
        message: z.string().min(10).max(500).nonempty(),
    });

    const {register, handleSubmit, formState:{errors, touchedFields, isDirty} } = useForm<formData>({
        resolver : async (data) => {
            try {
                const validData = schema.parse(data);
                return{
                    values: validData,
                    errors: {}
                }
            }catch(err : any){
                return{
                    values: {},
                    errors: err.formErrors.fieldErrors
                }
            }
        }
    });

    const handleMessage = async(data: formData) => {
        setLoading(true);
        try{
            await axios.post('/api/contact', data);
            toast.success('Message sent successfully', {position:'top-center'});
        }catch(error){
            console.log(error);
            toast.error('Something went wrong', {position:'top-center'});
        }finally{
            setLoading(false);
        }
    }

  return (
    <div className='bg-[#9c51006a] w-[100vw] h-[100vh] overflow-hidden relative'>
        <img src='images/hero2.png' className='absolute top-[30%] lg:top-0 z-0'/>
        <div className='w-full h-full flex flex-col justify-center items-center gap-6'>
            <form
            onSubmit={handleSubmit(handleMessage)}
            className='z-10'>
                <p 
                style={{textShadow: '0px 4px 10px rgba(255, 255, 255, 0.751)'}}
                className={`${fatface.className} text-center p-10 text-3xl lg:text-5xl text-[#fff]`}>Contact Us</p>
                <div className='flex flex-col items-center gap-5'>
                   
                    <input
                    placeholder='Name'
                    type='text'
                    {...register('name')}
                    className='p-2 rounded-md focus:outline-none shadow-lg focus:bg-[#ffe8d0] focus:placeholder:text-[#4c2602] focus:text-[#4c2602]'
                    />
                    {errors && errors.name && <p className='text-red-500 text-xs'>{"can not use number as name"}</p>}
                    { touchedFields.name  && !isDirty && <p className='text-red-500 text-xs '>{"min 3 charater name required"}</p>}
                    
                    <input
                    placeholder='Email'
                    type='email'
                    {...register('email')}
                    className='p-2 rounded-md focus:outline-none shadow-lg focus:bg-[#ffe8d0] focus:placeholder:text-[#4c2602] focus:text-[#4c2602]'
                    />
                    {errors && errors.email && <p className='text-red-500 text-xs'>{ "enter a valid email"}</p>}
                    { touchedFields.email  && !isDirty && <p className='text-red-500 text-xs mt-[-20px]'>{"please enter an email"}</p>}

                    <textarea
                    placeholder='Message'
                    {...register('message')}
                    className='p-2  rounded-md focus:outline-none shadow-lg focus:bg-[#ffe8d0] focus:placeholder:text-[#4c2602] focus:text-[#4c2602]'
                    />
                    {errors && errors.message && <p className='text-red-500 text-xs'>{ "min 10 charater message required"}</p>}
                    { touchedFields.message  && !isDirty && <p className='text-red-500 text-xs mt-[-20px]'>{"please enter a message"}</p>}

                    <button className='items-center p-2 w-[190px] bg-black text-[#fff] rounded-md shadow-lg active:scale-95 hover:bg-[#2d1705]'>
                        { loading ? <Loader2 className='m-auto animate-spin'/> : 'Send Message' }
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contactus