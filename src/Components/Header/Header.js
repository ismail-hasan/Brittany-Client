import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Custom Hook/Button';

const Header = () => {
    let links = [
        { name: "home", link: "#" },
        { name: "home", link: "#" },
        { name: "home", link: "#" },
        { name: "home", link: "#" }
    ]
    return (
        <div className='w-full fixed top-0 left-0 z-50'>
            <div className='md:flex md:items-center md:justify-between bg-white  px-[100px] py-3'>
                <h1 className='text-[35px] font-bold'>ISMAIL</h1>
                <ul className='md:flex text-[18px] capitalize'>
                    {
                        links.map((link, idx) => {
                            return (
                                <div key={idx}>
                                    <div>
                                        <li className='ml-5'>
                                            <Link to="/">{link.name}</Link>
                                        </li>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <Button>Resume</Button>
                </ul>
            </div>
        </div>
    );
};

export default Header;