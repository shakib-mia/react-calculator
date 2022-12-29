import React from 'react';
import "./Button.css"

const Button = ({ number, onclick, className }) => {
    return (
        <button className={`px-[15px] py-[5px] border hover:bg-[#404148] text-[#d4d4d4] ${number === "C" && "bg-[#c82121]"} ${number === "C" && "bg-[#c82121]"} ${number === '←' && "bg-yellow-600"} ${className}`} onClick={onclick}>{number}</button>
    );
};

export default Button;