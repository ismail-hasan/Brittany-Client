import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Button from '../../Custom Hook/Button';

import { HiOutlineBars3BottomRight, HiBars3BottomLeft } from 'react-icons/hi2';

const Header = () => {
    // Function will execute on click of button
    const onButtonClick = () => {
        fetch(' Hossain Resume .pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Md Ismail Hasan Resume';
                alink.click();
            })
        })
    }
    const [open, setOpen] = useState(false)

    let links = [
        { name: "home", link: "#" },
        { name: "about", link: "#" },
        { name: "services", link: "#" },
        { name: "projects", link: "#" },
        { name: "pakage", link: "#" },
        { name: "contact", link: "#" },
    ]


    return (
        <div className='w-full fixed top-0 left-0 z-[999]'>
            <div className='md:flex md:items-center md:justify-between bg-[#0A192F] px-[30px] md:px-[50px] py-2'>
                <h1 className='text-[35px] font-bold text-white'>ISMAIL</h1>
                <div onClick={() => setOpen(!open)} className='md:hidden text-3xl absolute right-5 top-6 transition-all duration-[5s] ease-out'>
                    {
                        open ?
                            <HiOutlineBars3BottomRight className='cursor-pointer'></HiOutlineBars3BottomRight>
                            :
                            <HiBars3BottomLeft className='cursor-pointer'></HiBars3BottomLeft>

                    }
                </div>

                <ul className={`md:flex md:items-center text-[#ccd6f6]  text-[16px] capitalize md:pb-0 pb-10 absolute md:static bg-[#0A192F] w-full md:w-auto left-0 md:pl-0 pl-[25px] transition-all duration-[1s] ease-in-out ${open ? "top-16 opacity-100" : "-top-[400px] md:opacity-100 opacity-0"}`}>
                    {
                        links.map((link, idx) => {
                            return (
                                <div key={idx}>
                                    <div>
                                        <li className='ml-7 md:my-0 my-2 hover:text-[#40ff00] duration-300 ease-in-out'>
                                            <Link className='cursor-pointer' to={link.name} spy={true} smooth={true} offset={-80} duration={900} >{link.name}</Link>
                                        </li>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <span onClick={onButtonClick}>
                        <Button>Resume</Button>
                    </span>
                </ul>
            </div>
        </div>
    );
};

export default Header;