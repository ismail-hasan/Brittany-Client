import React from 'react';

const Button = (props) => {
    return (
        <button className='border-2 border-[#40ff00] px-5 py-2 md:ml-7' >
            {props.children}
        </button>
    );
};

export default Button;