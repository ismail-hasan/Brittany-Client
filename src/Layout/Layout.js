import React from 'react';
import About from '../Components/About/About';
import Home from '../Components/Home/Home';
import { AiFillGithub } from 'react-icons/ai';
import './Layout.css'

const Layout = () => {
    return (
        <div className='bg-[#0A192F] relative'>
            <div className='fixed bottom-[130px] left-10 flex  items-center flex-col'>
                <AiFillGithub className='text-4xl text-white'></AiFillGithub>
                <AiFillGithub className='text-4xl text-white'></AiFillGithub>
                <AiFillGithub className='text-4xl text-white'></AiFillGithub>
                <AiFillGithub className='text-4xl text-white'></AiFillGithub>
                <div className='line'>

                </div>
            </div>
            <div className='max-w-[1000px] mx-auto'>
                <Home></Home>
                <About></About>
            </div>
        </div>
    );
};

export default Layout;