import React from 'react';
import { BsTelephone } from 'react-icons/bs'
import "./Contact.css"



const Contact = () => {
    return (
        <div className='text-white relative'>
            <div>
                <h1 className='line-heading text-[27px] text-white'>Contact Us</h1>
                <p className='text-lg pt-2'>Although I’m not currently l open. Whetry my best to get back to you!
                </p>
            </div>

            <div className='flex mt-10 items-center justify-center'>
                <div className='w-[40%] border '>
                    <h1 className='text-[28px]'>Contact Information</h1>
                    <p> Lorem ipsuolor laboriosam doloremque nobis. Reiciendis consectetur optio nemo officiis maiores exercitationem aut a maxime praesentium magni.</p>
                    <div className='flex items-center mt-5'>
                        <BsTelephone></BsTelephone>
                        <div className='ml-5'>
                            <p>+880 1776458113</p>
                            <p>+880 1586153445</p>
                        </div>
                    </div>
                    <div className='flex items-center mt-5'>
                        <BsTelephone></BsTelephone>
                        <p className='ml-5'>fnismail@gmail.com</p>
                    </div>
                    <div className='flex items-center mt-5'>
                        <BsTelephone></BsTelephone>
                        <p className='ml-5'>Arippur, Hazir Hat, Pabna Sadar</p>
                    </div>
                </div>
                <div className='w-[60%] border border-red-400 '>
                    <div class=" flex gap-x-10">
                        <div class="form-item">
                            <input type="text" id="username" autocomplete="off" required />
                            <label for="username">Username</label>
                        </div>

                        <div class="form-item">
                            <input type="password" id="password" autocomplete="off" required />
                            <label for="password">Password</label>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;