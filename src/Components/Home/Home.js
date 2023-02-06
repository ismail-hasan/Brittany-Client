import React from 'react'

const Home = () => {
    return (
        <div className='h-screen text-[#CCD6F6] flex justify-center flex-col w-[60%]'>
            <h1 className=''>Hi, my name is</h1>
            <h1 className='text-[53px]'>Brittany Chiang.</h1>
            <h1 className='text-[53px]'>I build things for the web.</h1>
            <p className='text-lg mt-5'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
            <button className='outline-orange-500 w-[160px] mt-5 text-lg border border-red-500 py-3 px-8'>Hire Me</button>
        </div>
    )
}

export default Home