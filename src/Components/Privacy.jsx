import React from "react";
import Navbar from './Navbar';
import './Privacy.css';
import Footer from "./Footer";


class Privacy extends React.Component{
    render()
    {
        return(
            <div>
                <div class="heading">
                    <h1>Privacy Policy</h1>
                </div>
                <section className="privacy">
                    <div className="content">
                        <p>Welcome to Happy Shopping Hub! we are committed to safeguarding the privacy of our website visitors and customers. 
                            This Privacy Policy outlines the types of personal information we collect, how we use it, and the choices you have regarding the use of your data. 
                            By accessing or using our website, you consent to the terms of this Privacy Policy. We may update this policy from time to time, so please review 
                            it regularly for any changes. If you have any questions or concerns about our privacy practices, please contact us at www.happyshoppinghub.com
                        </p>
                        <span>Information We Collect</span>
                        <p>When you visit our website, we may collect various types of information, including personal information such as your name, address, email address, and payment details. We collect this information when you place an order, sign up for an account, or interact with our website in other ways. Additionally, we may automatically collect certain non-personal information, such as your IP address, browser type, and device information.</p>
                        <span>How We Use Your Information</span>
                        <p>We use the information we collect for various purposes, including processing and fulfilling your orders, providing customer support, improving our products and services, and sending you relevant marketing communications. We may also use cookies and similar technologies to enhance your browsing experience and gather information about how you use our website.</p>
                        <span>Information Sharing and Security</span>
                        <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary for the operation of our website and to provide you with our services. We take reasonable steps to protect the security of your information, but no data transmission over the internet is completely secure. Please be aware that you share your information with us at your own risk.</p>
                        <span>Your Choices</span>
                        <p>You have the right to access, correct, or delete your personal information. You can also opt-out of receiving marketing communications from us.</p>
                    </div>
                </section>
                <Footer />
                <section class="credit">Happy Shopping Hub   -    A Dynamic Shopping Experience</section>
            </div>
        )
    }
}
export default Privacy;