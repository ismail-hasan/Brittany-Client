import React from 'react'
import "./About.css"
import img from "../../assests/IMG_20190303_112235.jpg"

const About = () => {
    return (
        <div className='md:flex justify-between items-center h-screen'>
            <div className='w-full md:w-[50%] relative'>
                <h1 className='line-heading text-[27px] text-white'>About Me</h1>
                <div className='text-[#8892b0] text-lg'>
                    <h1 className='my-5 '>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS! </h1>
                    <h1 className='text-white'>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS! </h1>
                    <div className='flex mt-5 '>
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