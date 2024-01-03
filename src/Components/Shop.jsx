import React from 'react'
import Deals from './Deals';
import Combo from './Combo';
import Footer from './Footer';
import B1 from './images/shopbanner2.jpg';
import B2 from './images/shopbanner11.jpeg';
import Navbar2 from './Navbar2';
import './Shop.css';
import './Style.css';
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <div className='ShopPage'>
        <Navbar2 />
        <section class="banner-container">
                    <div class="banner">
                        <img src={B1} alt="banner1"></img>
                        <div class="content">
                            <h3>Love Gardening ??</h3>
                            <Link to={`/Gardening`} >shop now</Link>
                        </div>
                    </div>

        </section>
        <Deals />
        <section class="banner-container">
                    <div class="banner">
                        <img src={B2} alt="banner2"></img>
                        <div class="content">
                            <h3>Wanna make up your kitchen ??</h3>
                            <Link to={`/Kitchenware`} >shop your kitchenware products</Link>
                        </div>
                    </div>

        </section>
        <Combo />
        <Footer />
    </div>
  )
}

export default Shop