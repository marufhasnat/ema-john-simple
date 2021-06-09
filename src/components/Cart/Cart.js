import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((totalPrice,product) => totalPrice + product.price,0);
    let total = 0;
    for (let i = 0; i < cart.length; i++){
        total = total + cart[i].price;
    }

    const formattedNumber = (num) => {
        return num.toFixed(2);
    }

    let shippingCost = 0;
    if (total >= 300) {
        shippingCost = 0;
    } else if (total >= 150) {
        shippingCost = 15.00;
    } else if (total > 0) {
        shippingCost = 30.00;
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shippingCost + Number(tax)).toFixed(2);

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formattedNumber(total)}</p>
            <p><small>Shipping Cost: {shippingCost}</small></p>
            <p><small>Tax: {tax}</small></p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;