import React, { useState } from 'react';
import './Login.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login()
{
    const [loginData,setloginData] = useState({
        mobilenumber:'',
        password:'',
    })
    const [errors,setErrors]=useState({});
    const navigate=useNavigate();

    const handleChange = (e) =>{
        const {name,value}=e.target;
        setloginData((prevData) =>({...prevData,[name]:value}));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation
        const validationErrors = validateForm(loginData);
        if (Object.keys(validationErrors).length === 0) {
          // Submit the form (implement authentication logic here)
          console.log('Form submitted:', loginData);
          //alert("Your Account Has Been created Successfully");
            navigate('/Home');
        } else {
          setErrors(validationErrors);
        }
      };
      const validateForm = (data) => {
        let errors = {};
        
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
        return errors;
      };
    return(
    <div className='LoginEmail'>
        <center>
            <br></br>
            <br></br>
            <br></br>
            <h1 class = "h1">Welcome !!!</h1>
            <div id = "Content">
                <form class = "form">
                    <table>
                        <tr>
                        <td class = "MobileNumber">Mobile Number : </td>
                        <td><input type = "Number" class = "PhoneNumberInput" placeholder='Enter your Number'
                        id="mobilenumber"
                        name="mobilenumber"
                        value={loginData.mobilenumber}
                        onChange={handleChange}
                        /></td>
                        </tr>
                        <tr className='errormsg'>{errors.mobilenumber && <span>{errors.mobilenumber}</span>}</tr>
                        <tr>
                        <td class = "Password">Password : </td>
                        <td><input type = "Password" class = "PasswordInput" placeholder='Enter your Password'
                        id="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}   
                        /></td>
                        </tr>
                        <tr className='errormsg'>{errors.password && <span>{errors.password}</span>}</tr>
                        <div class="Remember">
                        <input type='checkbox' id="checkbox"></input>
                        <label class='Rememberme'>Remember me</label><br></br>
                        </div>
                    </table>
                        <br></br>

                        <a href='/Home'><Button type="button" class = "btn" onClick={handleSubmit}>LogIn</Button></a><br></br>
                        <hr></hr>OR
                        <br></br>
                        <a href='/LoginE'><button type="button" class = "btn">Continue with Email</button></a><br></br><br></br>
                        <Button type='button' class = "btn">Continue with Google</Button><br></br>
                        <br></br>
                        <hr></hr>
                    <table>
                        <tr>
                        <td>Forget Password?</td>
                        <td>
                            <Button type="button" class = "btn" id="forgetpassword">Click Here</Button>
                        </td>
                        </tr>
                        <tr>
                        <td class="NewUser">New User?  </td>
                        <td><a href='/Sign'><Button type = "button" class = "btn" id="newuser">SignUp</Button></a>
                        </td>
                        </tr>
                    </table>
                </form>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </center>
    </div>
    );

}

export default Login;
