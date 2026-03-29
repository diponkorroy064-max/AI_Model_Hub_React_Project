import React from 'react';
import bannarImg from '../../assets/banner.png'

const Bannar = () => {
    return (
        <div className='flex justify-between items-center max-w-300 m-auto px-10 bg-purple-300'>
            <div>
                <h2 className='text-[18px] font-semibold border border-red-400 bg-amber-100 rounded-full py-2.5 px-2.5 w-75 shadow'>Frontier AI Models</h2>

                <h1 className='text-3xl text-red-600 font-bold'>One Subscription.</h1>
                <h1>All the AIs You Need</h1>
                <p>Experience the full spectrum of frontier intelligence — all the most advanced AI models, unified under a single, powerful subscription.</p>
                <div>
                    <button>Get Unlimited Access </button>
                </div>
                <div>
                    <span>50+ Frontier Models</span>
                    <span>No Usage Limits</span>
                    <span>Cancel Anytime</span>
                </div>
            </div>

            <div>
                <img className='w-120' src={bannarImg} alt="" />
            </div>
        </div>
    );
};

export default Bannar;