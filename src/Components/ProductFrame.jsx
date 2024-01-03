import React, { useContext } from 'react';
import { ShopContext } from './Context/ShopContext';
import './ProductFrame.css';

const Product = ({ product }) => {
  const { id, name,category,image,price,prod_no } = product;
  const {addToCart} = useContext(ShopContext);
  return (
    <div key={id} className="product-container">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h3>{name}</h3>
        <p>Rs. {price.toFixed(2)}</p>
        <button className='btn' onClick={()=>addToCart(prod_no)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
