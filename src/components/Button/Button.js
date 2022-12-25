import React from 'react';

const Button = ({number, onclick}) => {
    return (
        <button className='bg-red-400 px-[15px] py-[5px]' onClick={onclick}>{number}</button>
    );
};

export default Button;