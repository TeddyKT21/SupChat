import React from 'react';
import "./Button.css";
export const Button = ({type,onClick,children,className}) =>{
    return(
        <button type={type || "button"} onClick={onClick} className={`button ${className}`}>{children}</button>
    )
}