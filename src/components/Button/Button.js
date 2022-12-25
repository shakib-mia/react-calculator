import React from 'react';
import "./Button.css"

const Button = ({number, onclick, bgColor}) => {
    return (
        <button className={`px-[15px] py-[5px] rounded-[5px] bg-[${bgColor}] text-[#d4d4d4]`} onClick={onclick}>{number}</button>
    );
};

export default Button;