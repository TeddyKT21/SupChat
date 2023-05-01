import React from 'react';
export const Button = ({type,onClick,children}) =>{
    return(
        <button type={type || "button"} onClick={onClick}>{children}</button>
    )
}