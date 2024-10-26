import React from 'react';

const Cart = ({cart,handleDelate}) => {
    console.log(cart)
    
    return (
        <div>
            {
                cart.map((p)=>{return(
                    <div >
                        <div className='flex justify-between items-center my-2 gap-1'>
                           <img className='w-12 h-12 rounded-md' src={p.img} alt="" />
                           <h4 className='font-bold'>{p.title}</h4>
                           <button onClick={()=>handleDelate(p.id)} className='btn bg-slate-400 px-3 py-2 rounded-md'>Delete</button>
                        </div>
                    </div>
                )})
            }
        </div>
    );
};

export default Cart;