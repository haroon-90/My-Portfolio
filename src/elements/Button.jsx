import React from 'react'

const Button = (props) => {
return (
    <button 
        className={`
            bg-blue-700 
            hover:bg-blue-500 
            text-white 
            font-bold 
            py-2 
            px-4 
            rounded-full 
            transition-all 
            cursor-pointer 
            z-30 
            hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]
            hover:scale-105
            active:scale-95
            ${props.className}
        `}
        onClick={props.onClick}
    >
        {props.children}
    </button>
)
}

export default Button
