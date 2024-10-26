import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const AllProducts = ({handleCart}) => {

    const [products,setProducts]=useState([]);

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div>
            <h2>products.jsx</h2>
            {
                products.map((p)=><Product
                products={p}
                key={p.id}
                handleCart={handleCart}
                ></Product>)
            }
        </div>
    );
};

export default AllProducts;