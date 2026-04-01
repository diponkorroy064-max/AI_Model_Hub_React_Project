import React from 'react';
import logo from '../../assets/logo.png'
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
    return (
        <div className='flex justify-between items-center max-w-300 m-auto px-10 py-3 bg-amber-100'>
            <div className='flex gap-2.5'>
                <div><img className='w-8 h-8' src={logo} alt="txt" /></div>
                <h1 className='text-2xl font-bold'>AI Hub</h1>
            </div>

            <div>
                <ul className='hidden md:flex gap-4 text-[20px] font-bold '>
                    <li><a className='hover:text-red-500' href="">Home</a></li>
                    <li><a className='hover:text-red-500' href="">About</a></li>
                    <li><a className='hover:text-red-500' href="">Services</a></li>
                    <li><a className='hover:text-red-500' href="">Contact</a></li>
                </ul>
            </div>

            <div className='flex justify-center items-center gap-4'>
                <button className='btn btn-ghost text-red-400 text-2xl font-extrabold'>
                    <BsCart2/>
                </button>
                <button className='btn btn-active btn-secondary rounded-full'>Get Started</button>
            </div>
        </div>
    );
};

export default Navbar;
