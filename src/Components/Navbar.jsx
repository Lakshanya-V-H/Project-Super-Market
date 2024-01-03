import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faColumns } from '@fortawesome/free-solid-svg-icons';

class Navigation extends React.Component{
    render()
    {
        return(
            <div className='header'>
                <div className='navbar'>
                {/*<li>LV</li>*/}
                <li id='logo'><i class="fas fa-shopping-basket"><FontAwesomeIcon icon={faShoppingBasket} /></i> Happy Shopping Hub</li>
                    <li><Link to={`/Home`} style={{color:'#666'}}>Home</Link></li>
                    <li><Link to={`/Shop`} style={{color:'#666'}}>Shop</Link></li>
                    <li><Link to={`/About`} style={{color:'#666'}}>About</Link></li>
                    <li><Link to={`/Review`} style={{color:'#666'}}>Review</Link></li>
                    <li><Link to={`/Contact`} style={{color:'#666'}}>Contact</Link></li>

                </div>
                <form action="" class="search-form">
                    <input type="search" placeholder="search here..." id="search-box" />
                </form>
                <div class="icons">
                    <div id="search-btn" class="fas fa-search"></div>
                    <div id="cart-btn" class="fas fa-shopping-cart"><Link to={`/Cart`}><FontAwesomeIcon icon={faShoppingCart} /></Link></div>
                    <div id="login-btn" class="fas fa-user"><Link to={`/LoginE`}><FontAwesomeIcon icon={faUser} /></Link></div>
                    <div id="login-btn" class="fas fa-user"><Link href="/Sign"><FontAwesomeIcon icon={faColumns} /></Link></div>
                </div>
            </div>
        )
    }
    

}

export default Navigation;