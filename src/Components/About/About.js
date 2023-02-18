import React from 'react'
import "./About.css"
import img from "../../assests/IMG_20190303_112235.jpg"

const About = () => {
    return (
        <div className='md:flex justify-between items-center h-screen'>
            <div className='w-full md:w-[50%] relative'>
                <h1 className='line-heading text-[27px] text-white'>About Me</h1>
                <div className='text-[#8892b0] text-lg'>
                    {/* <h1 className='my-3 '> I am working as a web developer since 2019. I have lots of experience in web development. I love and enjoy web base design.</h1> */}
                    <h1 className='my-3 '>
                        Hello! I am Ismail Hossain. I am a professional web developer and WordPress Expart.
                        I will build a modern, responsive, and elegant website for you.
                        I am an experienced web developer and WordPress expert with a strong background in creating beautiful, quality full websites.
                    </h1>
                    <h1>Our website designs are clean and modern, with a responsive design so that they look great on every device.
                        We also use the latest technologies to make sure your site loads fast. Please come on chat so we can discuss more your work.
                        Thank You
                    </h1>

                    <div className='flex mt-3 '>
                        <ul className='w-[200px] list'>
                            <li>JavaScript (ES6+)</li>
                            <li>Node.js</li>
                            <li>React</li>
                            <li>MongoDB</li>
                        </ul>
                        <ul className='list'>
                            <li>Firebase</li>
                            <li>WordPress</li>
                            <li>TypeScript</li>
                            <li>TailWind CSS</li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-[45%] relative about-img z-10 mt-10 md:mt-0'>
                <img className='about-img' src={img} alt="" />
            </div>

        </div>
    )
}

export default About