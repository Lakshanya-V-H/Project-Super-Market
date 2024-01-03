import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

const Contact = () =>{
    {
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            phoneNumber: '',
            subject: '',
            message: '',
          });
        
          const [errors, setErrors] = useState({});
        
          const validateForm = () => {
            let newErrors = {};
        
            // Check for missing inputs
            Object.entries(formData).forEach(([key, value]) => {
              if (!value) {
                newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
              }
            });
        
            setErrors(newErrors);
        
            // Return true if there are no errors
            return Object.keys(newErrors).length === 0;
          };
        
          const handleSubmit = (e) => {
            e.preventDefault();
        
            if (validateForm()) {
              // Do something with the form data
              alert('Form submitted:');
            } else {
              alert('Form has errors. Please fix them.');
            }
          };
        
          const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
            // Clear the error message when the user starts typing
            setErrors({ ...errors, [name]: '' });
          };
        
        return(
            <div className="ContactPage">
                <div class="heading">
                    <h1>contact us</h1>
                </div>
                <section class="contact">
                    <div class="icons-container">
                        <div class="icons">
                            <FontAwesomeIcon icon={faPhone} className="i"></FontAwesomeIcon>
                            <h3>our number</h3>
                            <p>+123-456-7890</p>
                            <p>+111-222-3333</p>
                        </div>
                        <div class="icons">
                            <FontAwesomeIcon icon={faEnvelope} className="i"></FontAwesomeIcon>
                            <h3>our email</h3>
                            <p>happyshoppinghub@gmail.com</p>
                            <p>hshcustommersupprt@gmail.com</p>
                        </div>
                        <div class="icons">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="i"></FontAwesomeIcon>
                            <h3>our address</h3>
                            <p>coimbatore, india - 638002</p>
                        </div>
                    </div>
                    <div class="row">
                        <form onSubmit={handleSubmit}>
                            <h3>get in touch</h3>
                            <div class="inputBox">
                                <input type="text" placeholder="enter your name" class="box"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange} 
                                />
                                <p>{errors.name}</p>
                                <input type="email" placeholder="enter your email" class="box" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange} 
                            />
                            <p>{errors.email}</p>
                            </div>
                            <div class="inputBox">
                                <input type="number" placeholder="enter your number" class="box" 
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange} 
                            />
                            <p>{errors.phoneNumber}</p>
                                <input type="text" placeholder="enter your subject" class="box" 
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange} 
                            />
                            <p>{errors.subject}</p>
                            </div>
                            <textarea placeholder="your message" cols="30" rows="10"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}></textarea>
                            <p>{errors.message}</p>
                            <button type="submit" value="send message" class="btn">Send Message</button>
                        </form>
                    </div>
                </section>
            <Footer />
            </div>
        )
    }

}

export default Contact;