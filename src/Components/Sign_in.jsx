import React, { useState } from 'react';
import './Style.css';
import { useNavigate } from 'react-router-dom';

function Sign(){
    const [formData,setFormData] = useState({
        username:'',
        email:'',
        mobilenumber:'',
        password:'',
        confirmPassword:'',
    })

    const [errors,setErrors] =useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
          // Submit the form (implement authentication logic here)
          console.log('Form submitted:', formData);
          //alert("Your Account Has Been created Successfully");
            navigate('/Home');
        } else {
          setErrors(validationErrors);
        }
      };

      const validateForm = (data) => {
        let errors = {};
        if (!data.username.trim()) {
          errors.username = 'Username is required';
        }
        if (!data.email.trim()) {
          errors.email = 'Email is required';
        } else if (!isValidEmail(data.email)) {
          errors.email = 'Invalid email format';
        }
        if(!data.mobilenumber.trim())
        {
          errors.mobilenumber='Mobile Number is required';
        }
        else if(data.mobilenumber.length < 10)
        {
          errors.mobilenumber='Please enter a valid mobile number';
        }
        if (!data.password.trim()) {
          errors.password = 'Password is required';
        } else if (data.password.length < 6) {
          errors.password = 'Password must be at least 6 characters long';
        }
        if (data.password !== data.confirmPassword) {
          errors.confirmPassword = 'Passwords do not match';
        }
        return errors;
      };
    
      const isValidEmail = (email) => {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

    return(
        <div className='Sign_in'>
            <center>
                <br></br>
                <br></br>
                <br></br>
                <h2 id='sign_in_welcome'>Welcome</h2>
                <h4 id="request">Please Sign up to Continue</h4>
                <div class="Content">
                    <form id="Sign_in_form" onSubmit={handleSubmit}>
                        <table>
                        <tr>
                            <td>
                                User Name
                            </td>
                            <td>
                                <input type="text" placeholder='Enter your Name'
                                    id='username'
                                    name='username'
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className='errormsg'>{errors.username && <span>{errors.username}</span>}</tr>
                        <tr>
                            <td>
                                E-mail
                            </td>
                            <td>
                            <input type="email" placeholder='Enter your E-mail'
                               id="email"
                               name="email"
                               value={formData.email}
                               onChange={handleChange}  
                            />
                            </td>
                        </tr>
                        <tr className='errormsg'>{errors.email && <span>{errors.email}</span>}</tr>
                        <tr>
                            <td>
                                Mobile Number
                            </td>
                            <td>
                                <input type="number" placeholder='Enter your mobile number'
                                  id="mobilenumber"
                                  name="mobilenumber"
                                  value={formData.mobilenumber}
                                  onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className='errormsg'>{errors.mobilenumber && <span>{errors.mobilenumber}</span>}</tr>
                        <tr>
                            <td>
                                Password
                            </td>
                            <td>
                                <input type="password" placeholder='Create a strong password'
                                id="password"
                                name="password"
                                value={formData.password}
                               onChange={handleChange}                                       
                                />
                            </td>
                        </tr>
                        <tr className='errormsg'>{errors.password && <span>{errors.password}</span>}</tr>
                        <tr>
                            <td>
                                Confirm Password
                            </td>
                            <td>
                                <input type="password" placeholder='Re-Enter your password'
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange} 
                                ></input>

                            </td>
                        </tr>
                        <tr className='errormsg'>{errors.confirmPassword && <span>{errors.confirmPassword}</span>}</tr>
                        </table>
                        <hr></hr>
                        <p>OR</p>
                        <button className='btn'>Sign up with Google</button>
                        <br></br><br></br><hr></hr><br></br>
                        <button className='btn' type='submit'>SIGN-UP</button>
                        <br></br><br></br>
                        <p id='already_a_user'>Alredy a user?</p>
                        <button className='btn'><a href='/LoginE'>Login in</a></button>
                        <br></br>
                        <br></br>
                    </form>
                </div>
                <br></br>
                <br></br>
            </center>
        </div>

    );
}

export default Sign;