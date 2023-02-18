import React from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Projects = () => {
    return (
        <section id='projects' className='relative mt-[890px] md:mt-0'>
            <h1 className='line-heading text-[27px] mt-20 text-white'>Our Projects</h1>
            <p className='text-white text-lg'>Some of the projects I have done recently are mentioned here</p>
            <div className='flex items-center gap-x-[45px] mt-20'>
                <div className='w-[60%]'>
                    <img className='' src="https://plus.unsplash.com/premium_photo-1668473365948-8a92c2d1fa78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="" />
                </div>
                <div className='text-right w-[40%] text-white '>
                    <h1 className='text-lg'>E-Commerce Project</h1>
                    <h1 className='text-3xl pb-5 font-bold'>Bright Commerce</h1>
                    <div>
                        <p className='bg-[#112240] -ml-32 p-5'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control,  dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm. Atom Package Manager, and npm.</p>
                    </div>
                    <div className='flex justify-between mt-5'>
                        <p className='bg-red-500 text-white px-5 py-1 rounded-[30px]'>React</p>
                        <p className='bg-red-500 text-white px-5 py-1 rounded-[30px]'>Node</p>
                        <p className='bg-red-500 text-white px-5 py-1 rounded-[30px]'>TailWind</p>
                        <p className='bg-red-500 text-white px-5 py-1 rounded-[30px]'>MongoDB</p>
                    </div>
                    <div className='flex mt-4'>
                        <Link to="https://github.com/ismail-hasan/NewBright-Client" target='_blank'>
                            <AiOutlineGithub className='text-[28px] mr-4'></AiOutlineGithub>
                        </Link>
                        <Link to="https://bright-commerce-d9f4f.web.app/" target='_blank'>
                            <BsBoxArrowUpRight className='text-[24px] mr-4'></BsBoxArrowUpRight>
                        </Link>
                    </div>
                </div>
            </div>

            {/* ///// */}
            <div className='flex items-center gap-x-[45px] mt-20'>
                <div className='w-[40%] text-white z-10'>
                    <h1 className='text-lg'>Featured Project</h1>
                    <h1 className='text-3xl pb-5 font-bold'>ISK Photographer</h1>
                    <div>
                        <p className='bg-[#112240] z-10 -mr-32 p-5'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control,  dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm. Atom Package Manager, and npm.</p>
                    </div>
                    <div className='flex justify-between mt-5'>
                        <p className='bg-red-500 text-white px-5 py-1 rounded-[30px]'>React</p>
                        <p className='bg-red-500 text-white px-5 py-1 rounded-[30px]'>Express</p>
                        <p className='bg-red-500 text-white px-5 py-1 rounded-[30px]'>Node</p>
                        <p className='bg-red-500 text-white px-5 py-1 rounded-[30px]'>TailWind</p>
                    </div>
                    <div className='flex mt-4'>
                        <Link to="https://github.com/ismail-hasan/isk-photographer-client" target='_blank'>
                            <AiOutlineGithub className='text-[28px] mr-4'></AiOutlineGithub>
                        </Link>
                        <Link to="https://review-assignment.web.app/" target='_blank'>
                            <BsBoxArrowUpRight className='text-[24px] mr-4'></BsBoxArrowUpRight>
                        </Link>
                    </div>
                </div>
                <div className='w-[60%]'>
                    <img className='-z-10' src="https://plus.unsplash.com/premium_photo-1668473365948-8a92c2d1fa78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="" />
                </div>
            </div>
            {/* ///////// */}
            <div className='flex items-center gap-x-[45px] mt-20'>
                <div className='w-[60%]'>
                    <img className='' src="https://plus.unsplash.com/premium_photo-1668473365948-8a92c2d1fa78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="" />
                </div>
                <div className='text-right w-[40%] text-white '>
                    <h1 className='text-lg'>Featured Project</h1>
                    <h1 className='text-3xl pb-5 font-bold'>Halcyon Theme</h1>
                    <div>
                        <p className='bg-[#112240] -ml-32 p-5'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control,  dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm. Atom Package Manager, and npm.</p>
                    </div>
                    <div className='flex justify-between mt-5'>
                        <p className='bg-red-500 text-white px-5 py-1 rounded-[30px]'>html5</p>
                        <p className='bg-red-500 text-white px-5 py-1 rounded-[30px]'>html5</p>
                        <p className='bg-red-500 text-white px-5 py-1 rounded-[30px]'>html5</p>
                        <p className='bg-red-500 text-white px-5 py-1 rounded-[30px]'>html5</p>
                    </div>
                    <div className='flex mt-4'>
                        <Link to="https://github.com/ismail-hasan/E-Commerce-Development" target='_blank'>
                            <AiOutlineGithub className='text-[28px] mr-4'></AiOutlineGithub>
                        </Link>
                        <Link to="https://assignment-12-dd734.web.app/" target='_blank'>
                            <BsBoxArrowUpRight className='text-[24px] mr-4'></BsBoxArrowUpRight>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;