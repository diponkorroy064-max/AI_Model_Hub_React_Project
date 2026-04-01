import React, { use, useState} from 'react';
import ToolCard from '../ToolCard/ToolCard';
import Cart from '../Cart/Cart';

const Tool = ({ modelPromise, carts, setCarts }) => {
    const toolData = use(modelPromise);
    // console.log(toolData);
    // console.log(carts);

    const [activeModel, setActiveModel] = useState("model");

    return (
        <div className='max-w-300 m-auto'>
            <div className='flex justify-center gap-20 my-12'>
                <button onClick={() => setActiveModel("model")} className='btn btn-soft btn-secondary w-50 rounded-full shadow'>Models</button>
                <button onClick={()=>{setActiveModel("cart")}} className='btn w-50 rounded-full shadow'>Cart({carts.length})</button>
            </div>

            <div className='mb-10'>
                <h1 className='text-4xl font-extrabold text-center'>Choose Your AI Model</h1>
                <p className='text-gray-500 text-center'>One subscription gives you access to all frontier AI models</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    activeModel==="model" && toolData.map(tool => <ToolCard key={tool.id} tool={tool} carts={carts} setCarts={setCarts}></ToolCard>)
                }
            </div>

            <div>
                {activeModel === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}
            </div>
        </div>
    );
};

export default Tool;

