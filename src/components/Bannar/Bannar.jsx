import React from 'react';
import bannarImg from '../../assets/banner.png'
import { GoCheck } from "react-icons/go";

const Bannar = () => {
    return (
        <div className='flex justify-between items-center gap-12 max-w-300 m-auto px-10 py-10 bg-purple-300'>

            <div className='space-y-5'>
                <div className='space-y-5'>
                    <h2 className='text-[18px] font-semibold border border-red-400 bg-rose-200 rounded-full py-2.5 px-2.5 w-65 shadow text-center'>Frontier AI Models</h2>

                    <h1 className='text-3xl text-red-600 font-bold'>One Subscription.</h1>
                    <h1>All the AIs You Need</h1>
                    <p>Experience the full spectrum of frontier intelligence — all the most advanced AI models, unified under a single, powerful subscription.</p>
                </div>

                <div>
                    <button className='btn btn-secondary'>Get Unlimited Access </button>
                </div>
                <div className='flex gap-5'>
                    <p className='flex items-center gap-2'><GoCheck /> <span>50+ Frontier Models</span></p>
                    <p className='flex items-center gap-2'><GoCheck /> <span>No Usage Limits</span></p>
                    <p className='flex items-center gap-2'><GoCheck /> <span>Cancel Anytime</span></p>
                </div>
            </div>

            <div>
                <img className='w-80' src={bannarImg} alt="" />
            </div>
        </div>
    );
};

export default Bannar;

