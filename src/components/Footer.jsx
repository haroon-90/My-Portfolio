import React from 'react'

const Footer = () => {
    return (
        <div className={`fixed bottom-0 w-full z-500 text-center border-white/10 backdrop-blur-sm border rounded-t-4xl py-0.5`}>
            <span className='text-sm text-white'>
                &copy; {new Date().getFullYear()} Muhammad Haroon Nawaz. All rights reserved.
            </span>
        </div>
    )
}

export default Footer
