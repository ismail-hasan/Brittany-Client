import React from 'react'
import "./About.css"

const About = () => {
    return (
        <div className='flex justify-between items-center h-screen'>
            <div className='w-[50%] relative'>
                <h1 className='line-heading text-[27px] text-white'>About Me</h1>
                <div className='text-[#8892b0] text-lg'>
                    <h1 className='my-5 '>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS! </h1>
                    <h1>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS! </h1>
                    <div className='flex mt-5 '>
                        <ul className='w-[200px] list'>
                            <li>JavaScript (ES6+)</li>
                            <li>Node.js</li>
                            <li>React</li>
                            <li>MongoDB</li>
                        </ul>
                        <ul className='list'>
                            <li>TypeScript</li>
                            <li>TypeScript</li>
                            <li>TypeScript</li>
                            <li>TypeScript</li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-[45%] relative about-img z-10'>
                <img className='about-img' src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>

        </div>
    )
}

export default About