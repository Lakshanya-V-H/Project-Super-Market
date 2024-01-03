// Cart.js
import React from 'react';

const Cart = ({ cart, incrementItem, decrementItem }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <table>
        {cart.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td> - 
            <td>Rs.{item.price}</td> - 
            <td>Quantity: {item.quantity}</td> 
            <td>Subtotal : {item.quantity * item.price}</td>
            <td><button onClick={() => incrementItem(item)}>+</button>
            <button onClick={() => decrementItem(item)}>-</button></td>
          </tr>
        ))}
      </table>
      <p>Total: Rs.{cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
    </div>
  );
};

export default Cart;
