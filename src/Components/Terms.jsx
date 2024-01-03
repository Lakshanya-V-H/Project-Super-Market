import React from 'react';
import Footer from './Footer';
import './Terms.css';

class Terms extends React.Component{
    render()
    {
        return(
            <div>
                    <div class="heading">
                    <h1>Terms & Conditions</h1>
                </div>
                <section className="terms">
                    <div className="content">
                        <p>Welcome to Happy Shopping Hub. By using our website, you agree to comply with and be bound by the following terms and conditions. Please review them carefully before making a purchase. These terms may be updated from time to time, so we recommend checking this page regularly for any changes. If you do not agree with these terms, please refrain from using our website.</p>
                        <span>Use of the Website</span>
                        <p>You agree to use this website for lawful purposes only and in a manner consistent with all applicable laws, regulations, and these Terms and Conditions. You must not use the website in any way that may cause damage to the website or impair its availability or accessibility.</p>
                        <span>Product Information and Pricing</span>
                        <p>We strive to provide accurate and up-to-date information about our products, including pricing. However, we do not guarantee the accuracy, completeness, or timeliness of the information on this website. Prices are subject to change without notice, and we reserve the right to modify or discontinue products or services at any time.</p>
                        <span>Order Acceptance and Payment</span>
                        <p>Your placement of an order does not constitute acceptance of that order. We reserve the right to accept or decline your order for any reason, including limitations on quantities available for purchase, inaccuracies, or errors in product or pricing information. Payment must be received by us before your order is accepted.</p>
                        <span>Shipping and Delivery</span>
                        <p>Please review our shipping and delivery policy for information on shipping methods, delivery times, and associated costs. Risk of loss and title for items purchased from us pass to you upon delivery of the items to the carrier.</p>
                        <span>Returns and Refunds</span>
                        <p>Our return and refund policy outlines the process for returning items and obtaining refunds. Please review this policy before making a purchase.</p>
                        <span>Limitation of Liability</span>
                        <p>In no event shall Happy Shopping Hub be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from (i) your access to or use of or inability to access or use the website; (ii) any unauthorized access to or use of our secure servers and/or any personal information stored therein.</p>
                        <span>Changes to Terms and Conditions</span>
                        <p>We reserve the right to revise and update these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any such changes will constitute your acceptance of the updated Terms and Conditions.</p>
                    </div>
                </section>
                <Footer />
                <section class="credit">Happy Shopping Hub   -    A Dynamic Shopping Experience</section>
            </div>
        )
    }

}

export default Terms;