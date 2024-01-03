import React from 'react';
import Footer from './Footer';
import Abtimg1 from './images/img2.jpeg'
import './About.css';
class About extends React.Component{

    render()
    {
        return(
            <div className='AboutPage'>
                <div class="heading">
                    <h1>about us</h1>
                </div>
                <section class="about">
                <div class="image">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <img src={Abtimg1} alt="Happy Shopping Hub" />
                </div>
                <div class="content">
                    <span>welcome to our shop</span>
                    <h3>A supermarket for everyone</h3>
                    <p>Discover the difference of shopping with Happy Shopping Hub, where every click is a step towards a more efficient and enjoyable grocery experience. Our commitment to excellence extends beyond just the products we offer. We pride ourselves on ensuring that your online shopping journey is not only convenient but also personalized to suit your preferences. Whether you're a culinary enthusiast searching for unique ingredients or a busy professional looking for time-saving solutions, our curated selection is designed to cater to a wide array of tastes and lifestyles.</p>
                    <p>What sets us apart is not just the breadth of our product range, but the meticulous care we take in sourcing items that meet our stringent quality standards. From farm-fresh produce to trusted brands and artisanal delights, every item in our inventory is handpicked to guarantee freshness, authenticity, and value.</p>
                    <p>At Happy Shopping Hub, we understand that your time is valuable. That's why our intuitive website and mobile app are crafted to make your shopping experience seamless and efficient. With user-friendly navigation, secure transactions, and timely deliveries, we strive to exceed your expectations at every step.</p>
                    <p>Join our community of satisfied customers who have embraced the convenience of online grocery shopping with Happy Shopping Hub. We are not just a supermarket; we are a reliable partner dedicated to simplifying your life. Thank you for choosing us, and we look forward to being your preferred online supermarket for years to come.</p>
                </div>
            </section>
            <Footer />
            </div>
        )
    }

}

export default About;