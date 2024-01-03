import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


class Footer extends React.Component{
    render()
    {
        return(
            <div>
                <section class="footer">
                    <div class="box-container">
                            <div class="box">
                                <h3>extra links</h3>
                                {/*<Link to={`#`}> <i class="fas fa-arrow-right"><FontAwesomeIcon icon={faArrowRight} /></i> my order </Link>
                                <Link to={"#"}> <i class="fas fa-arrow-right"><FontAwesomeIcon icon={faArrowRight} /></i> my account </Link>*/}
                                <Link href="/FAQ"> <i class="fas fa-arrow-right"><FontAwesomeIcon icon={faArrowRight} /></i> FAQs </Link>
                                <Link href="/Privacy"> <i class="fas fa-arrow-right"><FontAwesomeIcon icon={faArrowRight} /></i> privacy policy </Link>
                                <Link href="/Terms"> <i class="fas fa-arrow-right"><FontAwesomeIcon icon={faArrowRight} /></i> terms & conditions </Link>
                            </div>
                            <div class="box">
                                <h3>follow us</h3>
                                <Link href='https://www.facebook.com/'> <i class="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebookF} /></i> facebook </Link>
                                <Link href='https://twitter.com/?lang=en'> <i class="fab fa-twitter"><FontAwesomeIcon icon={faTwitter} /> </i>twitter </Link>
                                <Link href='https://www.instagram.com/'> <i class="fab fa-instagram"><FontAwesomeIcon icon={faInstagram} /></i> instagram </Link>
                                <Link href='https://www.linkedin.com/'> <i class="fab fa-linkedin"><FontAwesomeIcon icon={faLinkedin} /></i> linkedin </Link>
                                <Link href='https://www.pinterest.com/'> <i class="fab fa-pinterest"><FontAwesomeIcon icon={faPinterest} /></i> pinterest </Link>
                            </div>
                            <div class="box">
                                <h3>newsletter</h3>
                                <p>subscribe for latest updates</p>
                                <form action="">
                                    <input type="email" placeholder="enter your email" />
                                    <button type="submit" value="subscribe" class="btn">Subscribe</button>
                                </form>
                                {/*<img src={E:\HTML\images for industrial\Grocery-images\payment.png} class="payment" alt="">*/}
                            </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Footer;