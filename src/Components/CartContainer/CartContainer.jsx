import React from 'react';
import Cart from '../Cart/Cart';
import About from '../About/About';
import './cartContainer.css'

const CartContainer = ({handleActive,isActive,cart,handleDelate}) => {
    return (
        <div>
            <h2 className='text-3xl font-bold mb-5'>cart container</h2>
            <div className='space-x-3 mb-6 space-x-3'>
                <button className={isActive.cart?'btnt bg-purple-500':'btnt'} onClick={()=>handleActive('cart')}>Cart</button>
                <button className={isActive.cart?'btnt':'btnt bg-purple-500'} onClick={()=>handleActive('about')}>About</button>
            </div>
            <div>
                {
                    isActive.cart?<Cart handleDelate={handleDelate} cart={cart}></Cart>:<About></About>
                }
            </div>
        </div>
    );
};

export default CartContainer;