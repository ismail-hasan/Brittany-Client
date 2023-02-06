import React from 'react';
import { BsTelephone } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { FaEnvelope } from 'react-icons/fa'
import "./Contact.css"



const Contact = () => {
    return (
        <div className='text-white relative h-screen'>
            <div className='pb-10 '>
                <h1 className='line-heading text-[27px] text-white'>Contact Us</h1>
                <p className='text-lg pt-2'>Although I’m not currently l open. Whetry my best to get back to you!
                </p>
            </div>

            <div className='flex gap-16 mt-10 items-center justify-center text-lg '>
                <div className='css-glass w-[40%]'>
                    <h1 className='text-[28px] py-4'>Contact Information</h1>
                    <p> Lorem ipsuolor laboriosam exercitationem aut a maxime praesentium magni.</p>
                    <div className='flex items-center mt-5'>
                        <BsTelephone></BsTelephone>
                        <div className='ml-5'>
                            <p>+880 1776458113</p>
                            <p>+880 1586153445</p>
                        </div>
                    </div>
                    <div className='flex items-center mt-5'>
                        <FaEnvelope></FaEnvelope>
                        <p className='ml-5'>fnismail@gmail.com</p>
                    </div>
                    <div className='flex items-center mt-5 pb-10'>
                        <MdLocationOn></MdLocationOn>
                        <p className='ml-5'>Arippur, Hazir Hat, Pabna Sadar</p>
                    </div>
                </div>
                <div className='w-[55%]'>
                    <div class="flex gap-5">
                        <div class="form-item w-1/2 pt-3">
                            <input type="text" id="username" autocomplete="off" required />
                            <label for="username">Name</label>
                        </div>
                        <div class="form-item w-1/2 pt-3">
                            <input type="text" id="username" autocomplete="off" required />
                            <label for="username">Name</label>
                        </div>
                    </div>
                    <div class="form-item pt-3">
                        <input type="text" id="text" autocomplete="off" required />
                        <label for="text">Subject</label>
                    </div>
                    <div class="form-item pt-3">
                        <textarea type="" id="message" rows="7" cols="50" autocomplete="off" required />
                        <label for="message">Message</label>
                    </div>
                    <button className='bg-indigo-500 px-5 py-2 mt-5'>Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;