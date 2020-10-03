import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const [product, setProduct] = useState({});

useEffect(() => {
    fetch('https://arcane-crag-39571.herokuapp.com/product/'+ productKey)
    .then(res => res.json())
    .then(data => setProduct(data))

}, [productKey])

   //const product = fakeData.find(pd => pd.key === productKey);
   console.log(product);
    return (
        <div>
            <h1>{productKey} Your Product Details</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;