import React from 'react';
import { BsTelephone } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { FaEnvelope } from 'react-icons/fa'
import "./Contact.css"



const Contact = () => {
    return (
        <section id='contact' className='text-white h-screen md:mt-5 mt-[900px]'>
            <div className='pb-5 '>
                <h1 className='line-heading text-[27px] text-white'>Contact Us</h1>
                <p className='text-lg pt-2'>Fill out the form below to contact me. And if there is an agent please call me.</p>
            </div>

            <div className='md:flex gap-16 css-glass2 relative mt-10 items-center justify-center text-lg z-50'>
                <div className='css-glass w-[100%] md:w-[40%] z-10'>
                    <div className='py-8'>
                        <h1 className='text-[28px] py-4'>Contact Information</h1>
                        <p>Here is all my information. Use the information to contact me</p>
                        <div className='flex items-center mt-5'>
                            <BsTelephone className='text-[20px]'></BsTelephone>
                            <div className='ml-5'>
                                <p>+880 1776458113</p>
                                <p>+880 1586153445</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-5'>
                            <FaEnvelope className='text-[20px]'></FaEnvelope>
                            <p className='ml-5'>fnismailhasan@gmail.com</p>
                        </div>
                        <div className='flex items-center mt-5 pb-10'>
                            <MdLocationOn className='text-[20px]'></MdLocationOn>
                            <p className='ml-5'>Arippur, Hazir Hat, Pabna Sadar</p>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] md:w-[55%]'>
                    <div className="flex gap-5">
                        <div className="form-item w-1/2 pt-3">
                            <input type="text" id="username" autoComplete="off" required />
                            <label htmlFor="username">Name</label>
                        </div>
                        <div className="form-item w-1/2 pt-3">
                            <input type="text" id="username" autoComplete="off" required />
                            <label htmlFor="username">Name</label>
                        </div>
                    </div>
                    <div className="form-item pt-3">
                        <input type="text" id="text" autoComplete="off" required />
                        <label htmlFor="text">Subject</label>
                    </div>
                    <div className="form-item pt-3">
                        <textarea type="" id="message" rows="7" cols="50" autoComplete="off" required />
                        <label htmlFor="message">Message</label>
                    </div>
                    <button className='bg-[#40ff00] px-5 py-2 mt-5'>Send Message</button>
                </div>
            </div>
        </section>
    );
};

export default Contact;