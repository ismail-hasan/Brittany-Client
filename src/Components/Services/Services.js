import React from 'react';
import "./Services.css"
import { BiDevices, BiCodeAlt } from 'react-icons/bi';
import { FcManager } from 'react-icons/fc';
import { BsSpeedometer } from 'react-icons/bs';

const Services = () => {
    return (
        <section id='services' className='md:flex w-full justify-center items-center h-screen my-20 mt-[530px] md:mt-20' >
            <div className='w-full md:w-[30%] pb-10 md:pb-0'>
                <h1 className='text-[38px] text-white'>Our Services</h1>
                <p className='text-white text-lg pt-3 leading-[23px]'>All the services we provide are mentioned here</p>
            </div>
            <div className='grid grid-col-1 md:grid-cols-2 gap-5 w-full md:w-[70%] '>
                <div className='helo pl-8 pr-5 py-8'>
                    <BiDevices className='text-[34px] bg-white w-24 h-24 p-2 rounded-full'></BiDevices>
                    <h1 className='text-[28px] text-white pt-4 pb-2 capitalize'>Responsive Design</h1>
                    <p className='text-white'>I will build a unique, professional, good-looking, and responsive website design. My design must be clean coding and user friendly</p>
                </div>
                <div className='helo pl-8 pr-5 py-8  mt-0 md:-mt-16 h-[320px]'>
                    <BsSpeedometer className='text-[34px] bg-white w-24 h-24 p-4 rounded-full'></BsSpeedometer>
                    <h1 className='text-[28px] text-white pt-4 capitalize pb-2'>speed optimization</h1>
                    <p className='text-white'>If your website is slow, there is a lower chance of it appearing high in Google search results,.that's why website speed optimization is very useful</p>
                </div>
                <div className='helo pl-8 pr-5 py-8'>
                    <FcManager className='text-[34px bg-white w-24 h-24 p-3 rounded-full'></FcManager>
                    <h1 className='text-[28px] text-white pt-4 capitalize'>client satisfaction</h1>
                    <p className='text-white'>My main goal is client satisfaction. I usually work until the client is satisfied. Good reviews from clients help me to do better work.</p>
                </div>
                <div className='helo pl-8 pr-5 py-8 mt-0 md:-mt-[66px] h-[320px]'>
                    <BiCodeAlt className='text-[34px] bg-white w-24 h-24 p-3 rounded-full'></BiCodeAlt>
                    <h1 className='text-[28px] text-white pt-4 capitalize'>Custom Design</h1>
                    <p className='text-white'>I also usually do custom designs for clients. Every client has different preferences.  If any client has any design preference then I design his website accordingly</p>
                </div>
            </div>
        </section>
    );
};

export default Services;