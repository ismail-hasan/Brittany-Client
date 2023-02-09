import React from 'react';
import About from '../Components/About/About';
import Home from '../Components/Home/Home';
import { AiFillGithub } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { TbBrandFacebook } from 'react-icons/tb';
import { SlSocialLinkedin } from 'react-icons/sl';
import { MdCopyright } from 'react-icons/md';
import './Layout.css'
import Services from '../Components/Services/Services';
import Projects from '../Components/Projects/Projects';
import Pakage from '../Components/Pakage/Pakage';
import Contact from '../Components/Contact/Contact';
import { Link } from 'react-router-dom';
import Header from '../Components/Header/Header';

const Layout = () => {
    return (
        <div className='bg-[#0A192F]  relative'>
            <div className='fixed bottom-[130px] left-10 flex  items-center flex-col gap-6'>

                <Link to="https://github.com/ismail-hasan" target="_blank">
                    <FiGithub className='text-[22px] icon text-white'></FiGithub>
                </Link>
                <Link to="https://www.facebook.com/ismailhasanbd" target="_blank">
                    <TbBrandFacebook className='text-[30px] icon text-white'></TbBrandFacebook>
                </Link>
                <Link to="https://www.linkedin.com/in/ismailhasanbd/" target="_blank">
                    <SlSocialLinkedin className='text-[20px] icon text-white'></SlSocialLinkedin>
                </Link>
                <Link to="https://github.com/ismail-hasan" target="_blank">
                    <AiFillGithub className='text-[24px] icon text-white'></AiFillGithub>
                </Link>

                <div className='line'>
                </div>
            </div>
            <Header></Header>
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