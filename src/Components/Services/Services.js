import React from 'react';
import "./Services.css"
import { BiWebcam } from 'react-icons/bi';

const Services = () => {
    return (
        <div className='flex w-full justify-center items-center h-screen my-20' >
            <div className='w-[30%]'>
                <h1 className='text-[38px] text-white'>Our Services</h1>
                <p className='text-white text-lg pt-3 leading-[23px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='grid grid-cols-2 gap-5 w-[70%] '>
                <div className='helo pl-8 pr-5 py-8'>
                    <BiWebcam className='text-[34px] bg-white w-24 h-24 p-3 rounded-full'></BiWebcam>
                    <h1 className='text-[28px] text-white pt-4 pb-2 capitalize'>Responsive Design</h1>
                    <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis sunt numquam culpa ullam iusto natus voluptatum reiciendis. Explicabo, maxime quo!</p>
                </div>
                <div className='helo pl-8 pr-5 py-8 -mt-16 h-[320px]'>
                    <BiWebcam className='text-[34px] bg-white w-24 h-24 p-3 rounded-full'></BiWebcam>
                    <h1 className='text-[28px] text-white pt-4 capitalize pb-2'>speed optimization</h1>
                    <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis sunt numquam culpa ullam iusto natus voluptatum reiciendis. Explicabo, maxime quo!</p>
                </div>
                <div className='helo pl-8 pr-5 py-8'>
                    <BiWebcam className='text-[34px] bg-white w-24 h-24 p-3 rounded-full'></BiWebcam>
                    <h1 className='text-[28px] text-white pt-4 capitalize'>SEO</h1>
                    <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis sunt numquam culpa ullam iusto natus voluptatum reiciendis. Explicabo, maxime quo!</p>
                </div>
                <div className='helo pl-8 pr-5 py-8 -mt-[60px] h-[320px]'>
                    <BiWebcam className='text-[34px] bg-white w-24 h-24 p-3 rounded-full'></BiWebcam>
                    <h1 className='text-[28px] text-white pt-4 capitalize'>Custom Design</h1>
                    <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis sunt numquam culpa ullam iusto natus voluptatum reiciendis. Explicabo, maxime quo!</p>
                </div>
            </div>
        </div>
    );
};

export default Services;