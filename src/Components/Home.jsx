import React from 'react';
import { Link } from 'react-router-dom';
import Homeimg1 from './images/home-img-1.png';
import B1 from './images/pexels-photo-4202926.webp';
import B2 from './images/kitchenware-banner.jpeg';
import B3 from './images/toys-banner.webp';
import Footer from './Footer';

class Home extends React.Component{
    
    render()
    {
        return(
            <div>
                <section class="home">
                    <div class="slides-container">
                        <div class="slide active">
                            <div class="content">
                                <span>fresh and organic veggies</span>
                                <h3>upto 40% off</h3>
                                <Link to={`/Shop`} class="btn">shop now</Link>
                            </div>
                            <div class="image">
                                <img src={Homeimg1} alt="Banner"></img>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="banner-container">
                    <div class="banner">
                        <img src={B1} alt="banner1"></img>
                        <div class="content">
                            <span>Personal Care Products</span>
                            <h3>upto 30% off</h3>
                            <Link to={`/Shop`} class="btn">shop now</Link>
                        </div>
                    </div>
                    <div class="banner">
                        <img src={B2} alt="kitchen-ware-banner"></img>
                        <div class="content">
                            <span>Kitchen Wares</span>
                            <h3>upto 40% off</h3>
                            <Link to={`/Shop`} class="btn">shop now</Link>
                        </div>
                    </div>
                    <div class="banner">
                        <img src={B3} alt="toys-banner"></img>
                        <div class="content">
                            <span>Toys</span>
                            <h3>upto 20% off</h3>
                            <Link to={`/Shop`} class="btn">shop now</Link>
                        </div>
                    </div>
                </section>
                <Footer />
                <section class="credit">Happy Shopping Hub   -    A Dynamic Shopping Experience</section>
            </div>
        )
    }

}

export default Home;