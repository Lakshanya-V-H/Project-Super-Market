import React, { useContext } from 'react'
import { ShopContext } from './Context/ShopContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import Footer from './Footer';
import './CartItem.css';

const CartItem = () => {

    const {all_product,cartItems,addToCart,removeFromCart,removeFromCartCompletely,getTotalCartAmount} = useContext(ShopContext)
  return (
    <div>
    <div className='cartitems'>
        <h1>Shopping Cart</h1>
        <div className='cartitems-format-main'>
            <p className='headings'>Product</p>
            <p className='headings'>Title</p>
            <p className='headings'>Price</p>
            <p className='headings'>Quantity / kgs</p>
            <p className='headings'>Total</p>
            <p className='headings'>Remove</p>
        </div>
        <hr className='hr'/>
        {all_product.map((e)=>{
            if(cartItems[e.prod_no] > 0)
            {
                return(
                    <div>
                        <div className='cartitems-format cartitems-format-main'>
                            <img src={e.image} alt="cartproducticon" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>{e.price}</p>
                            <span>
                                <button onClick={()=>removeFromCart(e.prod_no)} className='decrementbutton'>-</button>
                                <button className='cartitems-quantity'>{cartItems[e.prod_no]}</button>
                                <button onClick={()=>addToCart(e.prod_no)} className='incrementbutton'>+</button>
                            </span>
                            <p>{cartItems[e.prod_no]*e.price}</p>
                            <FontAwesomeIcon icon={faTrashCan} onClick={()=>removeFromCartCompletely(e.prod_no)}  className='trashcan'/>
                        </div>
                    </div>
                )
            }
            return null;
        })}
        <hr className='hr'/>
        <div className='cartitems-down'>
            <div className='cartitems-total'>
                <h2><center>cart totals</center></h2>
                <div className='cartitems-total-item'>
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className='cartitems-total-item'>
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className='cartitems-total-item'>
                    <p>Total</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
            </div>
        </div>
            <button className='btn'>PROCEED TO CHECKOUT</button>
        <div className='cartitems-promocode'>
            <p>if you have promo code, enter it here</p>
            <div className='cartitems-promobox'>
                <input type='text' placeholder='promo code'/>
                <button type='submit' className='btn'>Submit</button>
            </div>
        </div>
    </div>
        <Footer />
    </div>
  )
}

export default CartItem