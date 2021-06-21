import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Products.css';
import { Link } from 'react-router-dom';

const Products = (props) => {
    const { name, img, seller, price, stock, key } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="product image" />
            </div>
            <div className="product-details">
                <h4 className="products-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order Soon</small></p>
                { props.showAddToCart && <button
                    className="cart-btn" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart
                </button>}
            </div>
        </div>
    );
};

export default Products;