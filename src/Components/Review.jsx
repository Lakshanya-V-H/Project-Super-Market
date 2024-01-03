import React from 'react';
import icon1 from './images/Reviews/icon-1.png'
import icon2 from './images/Reviews/icon-2.png'
import icon3 from './images/Reviews/icon-3.png'
import cus1 from './images/Reviews/pic-1.png'
import cus2 from './images/Reviews/pic-2.png'
import cus3 from './images/Reviews/pic-3.png'
import cus4 from './images/Reviews/pic-4.png'
import cus5 from './images/Reviews/pic-5.png'
import cus6 from './images/Reviews/pic-6.png'
import './Review.css'

class Review extends React.Component{

    render()
    {
        return(
            <div className='ReviewPage'>
                <div class="heading">
                    <h1>client's review</h1>
                </div>
                <section class="info-container">
                    <div class="info">
                        <img src={icon1} alt="Fast Delivery" />
                        <div class="content">
                            <h3>fast delivery</h3>
                            <span>within 30 minutes</span>
                        </div>
                    </div>
                    <div class="info">
                        <img src={icon2}alt="Available anytime" />
                        <div class="content">
                            <h3>24 / 7 available</h3>
                            <span>call us anytime</span>
                        </div>
                    </div>
                    <div class="info">
                        <img src={icon3} alt="Easy Payment" />
                        <div class="content">
                            <h3>easy payments</h3>
                            <span>cash or credits</span>
                        </div>
                    </div>
                </section>
                <section class="review">
                    <div class="box">
                        <div class="user">
                            <img src={cus1} alt="John Deo" />
                            <div class="info">
                                <h3>John Deo</h3>
                                <span>happy client</span>
                            </div>
                        </div>
                        <p>I have been using Best Grocery since 2020. Products are always delivered with care. Never had a problem. They even send some free biscuits etc. sometimes. I live in UK and always received the order the next working day. The website is very easy to use and there is a variety of products. Would recommend.
                            Date of experience: January 31, 2023</p>
                    </div>
                    <div class="box">
                        <div class="user">
                            <img src={cus2} alt="Olivia" />
                            <div class="info">
                                <h3>Olivia</h3>
                                <span>happy client</span>
                            </div>
                        </div>
                        <p>excellent service. excellent cooperation. My items were wrapped so well. it was amazing. The friend who brought my products was very polite and kept me informed as I was not at home. I am very pleased. I recommend it to everyone. ♥️👍🏻
                            Date of experience: February 06, 2023</p>
                    </div>
                    <div class="box">
                        <div class="user">
                            <img src={cus3} alt="Alex" />
                            <div class="info">
                                <h3>Alex</h3>
                                <span>happy client</span>
                            </div>
                        </div>
                        <p>Faultless service! I placed an online order on 31.1.23 and it was delivered to Scotland the next morning 1.2.23. I ordered ordered frozen and fresh items and they arrived with ice packs in the box so the food was kept at the correct temperature. I also received a free gift with my order which was an unexpected surprise. I will be placing an other order shortly. 10/10
                            Date of experience: January 31, 2023</p>
                    </div>
                    <div class="box">
                        <div class="user">
                            <img src={cus4} alt="Alice" />
                            <div class="info">
                                <h3>Alice</h3>
                                <span>happy client</span>
                            </div>
                        </div>
                        <p>I was very happy that my orders were delivered perfectly. They also sent some extra food as gifts. Very polite and good manners. They covered every product that could leak or break with air sponges in a very durable way. For cold products, there was a special box with frosted bags. I can really say that they are very good at this. I also bought a few salad ingredients. Cucumbers, tomatoes and peppers etc... It was fresh.
                            Date of experience: May 13, 2022</p>
                    </div>
                    <div class="box">
                        <div class="user">
                            <img src={cus5} alt="Oliver" />
                            <div class="info">
                                <h3>Oliver</h3>
                                <span>happy client</span>
                            </div>
                        </div>
                        <p>I have been using Best Grocery since 2020. Products are always delivered with care. Never had a problem. They even send some free biscuits etc. sometimes. I live in UK and always received the order the next working day. The website is very easy to use and there is a variety of products. Would recommend.
                            Date of experience: January 31, 2023</p>
                    </div>
                    <div class="box">
                        <div class="user">
                            <img src={cus6} alt="Lily" />
                            <div class="info">
                                <h3>Lily</h3>
                                <span>happy client</span>
                            </div>
                        </div>
                        <p>The exact groceries
                            I found the groceries needed at your store. Your delivery was on time, and with updates along the journey. Thank you very much.
                            Date of experience: February 07, 2023</p>
                    </div>
                </section>
            </div>
        )
    }

}

export default Review;