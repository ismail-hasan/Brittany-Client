import React from 'react';

const Services = () => {
    return (
        <div className='flex w-full justify-center items-center h-screen'>
            <div className='w-[30%]'>
                <h1 className='text-[27px] text-white'>About Me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='grid grid-cols-2 gap-5 w-[70%] '>
                <div className='bg-black h-[200px]'>
                    <h1 className='text-[22px] text-white'>hello dear</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis sunt numquam culpa ullam iusto natus voluptatum reiciendis. Explicabo, maxime quo!</p>
                </div>
                <div className='bg-black -mt-16 h-[200px]'>
                    <h1 className='text-[22px] text-white'>hello dear</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis sunt numquam culpa ullam iusto natus voluptatum reiciendis. Explicabo, maxime quo!</p>
                </div>
                <div className='bg-black h-[200px]'>
                    <h1 className='text-[22px] text-white '>hello dear</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis sunt numquam culpa ullam iusto natus voluptatum reiciendis. Explicabo, maxime quo!</p>
                </div>
                <div className='bg-black h-[200px] -mt-16'>
                    <h1 className='text-[22px] text-white '>hello dear</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis sunt numquam culpa ullam iusto natus voluptatum reiciendis. Explicabo, maxime quo!</p>
                </div>
            </div>
        </div>
    );
};

export default Services;