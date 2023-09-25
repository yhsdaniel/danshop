import React from 'react';
import logo from '../img/logo.png'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='w-full h-20 mt-8 flex justify-center items-center text-sm relative bottom-0 bg-gray-700'>
            <div className='w-4/12 flex justify-center items-center'>
                {/* <img src={logo} alt="Sample Logo" className='w-20 mix-blend-multiply' /> */}
                <h1 className="text-white text-lg">Dans Express</h1>
            </div>
            <div className='w-4/12 flex justify-center items-center'>
                <FaFacebookF className='text-4xl mx-4 p-2 text-white border border-white rounded-full cursor-pointer hover:text-blue-600 hover:border-blue-600 duration-150 ease-in-out'/>
                <FaInstagram className='text-4xl mx-4 p-2 text-white border border-white rounded-full cursor-pointer hover:text-pink-500 hover:border-pink-500 duration-150 ease-in-out'/>
                <FaTwitter className='text-4xl mx-4 p-2 text-white border border-white rounded-full cursor-pointer hover:text-blue-400 hover:border-blue-400 duration-150 ease-in-out'/>
            </div>
            <div className='w-4/12 flex justify-center items-center text-white'>
                @ Copyright by 2023 <span className='font-bold'>&nbsp;Daniel Kristiawan.&nbsp;</span>All right reserved
            </div>
        </footer>
    )
}

export default Footer