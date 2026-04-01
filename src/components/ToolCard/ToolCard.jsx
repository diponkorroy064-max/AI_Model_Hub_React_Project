import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ToolCard = ({ tool, carts, setCarts }) => {
    // console.log(tool);

    const [isSubscribe, setIsSubscribe] = useState(false);
    const handleSubscribe = () => {
        // console.log("subscribed btn clicked");
        if (isSubscribe) {
            setIsSubscribe(false);
            toast.warning("Item already in Card!");
        }
        else {
            setIsSubscribe(true);
            toast.success("Item  added to Card!");
            // console.log(newCart);
        }

        const isFound = carts.find(item => item.id == tool.id);
        if (isFound) {
            return;
        }
        const newCart = [...carts, tool];
        setCarts(newCart);
    }

    return (
        <div className='rounded-3xl shadow'>
            <div className='bg-gray-200 flex justify-center items-center rounded-t-3xl h-45'>
                <img className='w-30' src={tool.image} alt="" />
            </div>

            <div className='p-6 space-y-5'>
                <h1 className='text-2xl font-bold'>{tool.title}</h1>

                <p className='text-[14px] text-gray-400 line-clamp-2'>{tool.description}</p>

                <h4 className='text-2xl font-bold'>$ <span>{tool.price}</span>/month</h4>

                <div>
                    <button onClick={handleSubscribe} className={`btn w-full ${isSubscribe? "btn-secondary":"btn-primary"}`}>{isSubscribe? "Subscribed":"Subscribe Now"}</button>
                </div>
            </div>
        </div>
    );
};

export default ToolCard;
