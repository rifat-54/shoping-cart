import React from 'react';

const Header = ({cart,balance}) => {
    return (
        <div className='flex my-6 border-b-2 pb-4 justify-between max-w-6xl mx-auto '>
            <div className='mx-5'>
                <h1 className='text-4xl font-bold'>Logo</h1>
            </div>
            <div className='mx-5 text-2xl font-semibold space-x-3 flex items-center'>
                <button>Home</button>
                <button>Product</button>
                <button>Cart {cart.length}</button>
                <p>$ {balance}</p>
            </div>
        </div>
    );
};

export default Header;