import React from 'react';
import About from '../Components/About/About';
import Home from '../Components/Home/Home';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { MdCopyright } from 'react-icons/md';
import './Layout.css'
import Services from '../Components/Services/Services';
import Projects from '../Components/Projects/Projects';
import Pakage from '../Components/Pakage/Pakage';
import Contact from '../Components/Contact/Contact';

const Layout = () => {
    return (
        <div className='bg-[#0A192F] relative'>
            <div className='fixed bottom-[130px] left-10 flex  items-center flex-col gap-y-5'>
                <AiFillGithub className='text-[24px] icon text-white'></AiFillGithub>
                <AiFillLinkedin className='text-[24px] icon text-white'></AiFillLinkedin>
                <FaFacebook className='text-[24px] icon text-white'></FaFacebook>
                <AiFillGithub className='text-[24px] icon text-white'></AiFillGithub>
                <div className='line'>
                </div>
            </div>
            <div className='max-w-[1000px] mx-auto'>
                <Home></Home>
                <About></About>
                <Services></Services>
                <Projects></Projects>
                <Pakage></Pakage>
                <Contact></Contact>
            </div>
            <div className='flex justify-center items-center text-white text-lg pb-[30px]'>
                <MdCopyright className='text-[27px]'></MdCopyright>
                <span className='ml-3'> Designed & Built By Ismail Hasan</span>
            </div>
        </div>
    );
};

export default Layout;