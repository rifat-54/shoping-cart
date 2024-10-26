import React from 'react';

const Product = ({products,handleCart}) => {
    const{id,price,img,description,title,isFeature}=products;

    
    return (
        <div className='p-4 space-y-4 border border-red-500 rounded-md mb-6 text-center w-[300px]'>
            <img className='w-[250px] mx-auto rounded-md' src={img} alt="" />
            <h2 className='text-3xl font-bold'>{title}</h2>
            <p>{description}</p>
            <p className='font-bold'>${price}</p>
            <p>{isFeature?'Feature catogari':'Not feature'}</p>
            <button onClick={()=>handleCart(products)} className='btn font-bold rounded px-4 py-3 bg-pink-500 text-white'>Add to Cart</button>
        </div>

    );
};

export default Product;