import React from 'react';

const Button = (props) => {
    return (
        <button className='border border-[aqua] px-5 py-5 md:ml-7' >
            {props.children}
        </button>
    );
};

export default Button;