import React from 'react';
import { RxCross1 } from "react-icons/rx";
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {
    const handlePayment = () => {
        setCarts([]);
        toast("Payment Successful...!");
    }
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
    // console.log(totalPrice);
    const handleDelete = (obj) => {
        const filterArr = carts.filter(item => item.id !== obj.id);
        // console.log(filterArr);
        setCarts(filterArr);
    }

    return (
        <div className='space-y-5 mb-5'>
            <div>
                <h1 className='text-3xl font-bold'>Your Card</h1>
            </div>
            <div className='space-y-6'>
                {
                    carts.length === 0 ? (<p className='text-center text-2xl'>Cart is Empty</p>) : (
                        carts.map(obj =>
                            <div className='flex justify-around items-center border-2 border-gray-400 bg-gray-200 rounded-2xl shadow p-6' key={obj.id}>
                                <div>
                                    <img className='w-30' src={obj.image} alt="" />
                                </div>
                                <div>
                                    <h1>{obj.title}</h1>
                                    <p>{obj.description}</p>
                                </div>
                                <div>
                                    <h1>${obj.price}</h1>
                                    <h1>per month</h1>
                                </div>
                                <div>
                                    <button onClick={()=>handleDelete(obj)} className='text-2xl btn btn-ghost'><RxCross1 /></button>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
            <div className='flex justify-between px-10 py-8 bg-black text-white rounded-2xl'>
                <span className='text-3xl font-bold'>Total</span>
                <span className='text-3xl font-bold'>$<span>{totalPrice}</span></span>
            </div>
            <div onClick={handlePayment} className='text-white text-2xl text-center px-10 py-8 font-bold rounded-2xl bg-red-400 btn w-full'>
                <span>Proceed to Checkout</span>
            </div>
        </div>
    );
};

export default Cart;