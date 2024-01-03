import React from 'react';
import Footer from './Footer';
import './FAQ.css';

class FAQ extends React.Component{
    render()
    {
        return(
            <div>
                <div class="heading">
                    <h1>FAQs</h1>
                </div>
                <section class='FAQ'>
                    <div className='content'>
                        <h3>Top Queries</h3>
                        <span>How will I detect fraudulent emails/calls seeking sensitive personal and confidential information?</span>
                        <p>If you receive an e-mail, a call from a person/association claiming to be from Happy Shopping Hub seeking sensitive confidential information like debit/credit card PIN, net-banking or mobile banking password, we request you to never provide such confidential and personal data. We at Happy Shopping Hub or our affiliate logistics partner never ask for such confidential and personal data. If you have already revealed such information, report it immediately to an appropriate law enforcement agency.</p>
                        <span>How do I cancel the order, I have placed?</span>
                        <p>Order can be canceled till the same is out for delivery. Note: This may not be applicable for certain logistics partner. You would see an option to cancel within 'My Orders' section under the main menu of your App/Website/M-site then select the item or order you want to cancel. In case you are unable to cancel the order from'My Orders' section, you can refuse it at the time of delivery and refund will be processed into the source account, if order amount was paid online.</p>
                        <span>How do I create a Return Request?</span>
                        <p>You can create a Return in three simple steps
                                <br></br>1.Tap on MyOrders
                                <br></br>2.Choose the item to be Returned
                                <br></br>3.Enter details requested and create a return request</p>
                        <span>I have created a Return request. When will the product be picked up?</span>
                        <p>Number of days to pickup a product may vary as per the Logistics team that will be assigned to pickup your product. The product will be picked anywhere between 4 - 7 days.</p>
                        <span>I just cancelled my order. When will I receive my refund?</span>
                        <p>If you had selected Cash on Delivery, there is no amount to be refunded because you haven't paid for your order. For payments made via Credit Card, Debit Card, Net Banking, or Wallet you will receive refund into the source account within 7-10 days from the time of order cancellation. If payment was made by redeeming PhonePe wallet balance then, then refund will be instant post order cancellation, which can be later transferred into your bank account, by contacting PhonePe customer support team.</p>
                        <h3>Returns and Refunds</h3>
                        <span>What is No Questions Asked Returns?</span>
                        <p>Once you create a return via App / Desktop as per the returns policy, Happy Shopping Hub will ensure a quick, easy and seamless returns experience for you. Our delivery agents may perform a simple quality check at your doorstep and upon acceptance of the return, your refund will be initiated immediately.</p>
                        <span>Why has my return been put on hold despite No Questions Asked Returns Policy?</span>
                        <p>At the time of creating a return, customers are requested to confirm (via a check box click) that the product being returned is unused with original tags intact. At the time of pickup, if the above conditions are not found to be met, your return may be put on hold pending further clarification with our Contact Center.</p>
                        <span>What is Instant Refunds?</span>
                        <p>Upon successful pickup of the return product at your doorstep, Happy Shopping Hub will instantly initiate the refund to your source account or chosen method of refund. Instant Refunds is not available in a few select pin codes and for all self ship returns.</p>
                        <span>How do I return multiple products from a single order?</span>
                        <p>If you are returning multiple products from a single order then, you will receive a separate Return ID via e-mail for each item. If you are self-shipping the products, you can ship all the products in a single shipment. Please mention the Return IDs for all the products on a single sheet of paper and place it inside the packet.If mode of return is Pickup, our courier person will pickup the products from the pickup address.</p>
                        <h3>Shipping , Order Tracking  and Delivery</h3>
                        <span>How do I check the status of my order?</span>
                        <p>Please tap on “My Orders” section under main menu of App/Website/M-site to check your order status.</p>
                        <span>Does Happy Shopping Hub deliver products outside India?</span>
                        <p>No. At this point, Happy Shopping Hub delivers products only within India.</p>
                        <span>How can I get my order delivered faster?</span>
                        <p>Sorry, currently we do not have any service available to expedite the order delivery. In future, if we are offering such service and your area pincode is serviceable, you will receive a communication from our end.</p>
                    </div>
                </section>
                <Footer />
                <section class="credit">Happy Shopping Hub   -    A Dynamic Shopping Experience</section>
            </div>
        )
    }

}

export default FAQ;