import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import { useHistory } from 'react-router-dom';

const Review = () => {
    const [cart , setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState([]);
    const history = useHistory()

    const handleProceedCheckout = () => {
        history.push('/shipment')
    }

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(()=>{
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        fetch('https://arcane-crag-39571.herokuapp.com/productsByKeys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productKeys)
        })
        .then(res => res.json())
        .then(data => setCart(data))

    }, []);


    return (
        <div className="twin-container">
            <div className="product-container">
            {
                cart.map(pd => <ReviewItem 
                    key= { pd.key}
                    removeProduct = {removeProduct}
                    product={pd}></ReviewItem>)

            }

         

            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handleProceedCheckout} className="button">Proceed Checkout</button>
                </Cart>
            </div>
            
        </div>
    );
};

export default Review;