import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section id='home' className='h-screen text-[#CCD6F6] flex justify-center md:mt-[35px] flex-col  w-[90%] md:w-[75%]'>
            <h1 className='text-[#40ff00] italic'>Hi, my name is</h1>
            <h1 className='text-[28px] md:text-[53px] font-bold tracking-[2px] capitalize'>Ismail Hossain</h1>
            <h1 className='text-[28px] md:text-[51px] capitalize'>I will Design Your <span className='text-[#40ff00] uppercase font-semibold'>imagination</span></h1>
            <p className='text-lg mt-5 pr-0 md:pr-10'>I’m a web developer and spicialzie in WordPress with 2+ years of experience. I can learn new skills and expand my knowledge. And I love solving coding problems. I always want to take on new Challenges. I can use my knowledge as a web developer to enhance the user experience.</p>
            <div>
                <Link to="https://www.fiverr.com/" target="_blank">
                    <button className=' w-[160px] mt-5 text-lg border-2 border-[#40ff00]  py-3 px-8'>Hire Me</button>
                </Link>
            </div>
        </section>
    )
}

export default Home