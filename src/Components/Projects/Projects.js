import React from 'react';

const Projects = () => {
    return (
        <div>
            <h1 className='text-[27px] text-white'>our projects</h1>
            <div className='flex items-center gap-x-10 mt-6'>
                <div className='w-[60%]'>
                    <img className='' src="https://plus.unsplash.com/premium_photo-1668473365948-8a92c2d1fa78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="" />
                </div>
                <div className='text-right w-[40%] text-white'>
                    <h1>Featured Project</h1>
                    <h1>Halcyon Theme</h1>
                    <div>
                        <p className='bg-black'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>

                    </div>
                    <div className='flex justify-between mt-5'>
                        <p className='bg-red-500 text-white px-5 py-1 rounded-[30px]'>html5</p>
                        <p className='bg-red-500 text-white px-5 py-1 rounded-[30px]'>html5</p>
                        <p className='bg-red-500 text-white px-5 py-1 rounded-[30px]'>html5</p>
                        <p className='bg-red-500 text-white px-5 py-1 rounded-[30px]'>html5</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;