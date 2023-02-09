import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='h-screen text-[#CCD6F6] flex justify-center flex-col w-[75%]'>
            <h1 className=''>Hi, my name is</h1>
            <h1 className='text-[53px] font-bold tracking-[2px] capitalize'>Ismail Hossain</h1>
            <h1 className='text-[53px] capitalize'>I will Design Your imagination</h1>
            <p className='text-lg mt-5'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
            <Link to="https://www.fiverr.com/" target="_blank">
                <button className=' w-[160px] mt-5 text-lg border-2 border-[aqua]  py-3 px-8'>Hire Me</button>
            </Link>
        </div>
    )
}

export default Home