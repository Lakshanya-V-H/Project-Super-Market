import React from 'react';
import './Login.css';
import { Button } from '@mui/material';

function Login()
{
    
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
                        <td><input type = "Number" class = "PhoneNumberInput" placeholder='Enter your Number'></input></td>
                        </tr>
                        <tr>
                        <td class = "Password">Password : </td>
                        <td><input type = "Password" class = "PasswordInput" placeholder='Enter your Password'></input></td>
                        </tr>
                        <div class="Remember">
                        <input type='checkbox' id="checkbox"></input>
                        <label class='Rememberme'>Remember me</label><br></br>
                        </div>
                    </table>
                        <br></br>

                        <a href='/Home'><Button type="button" class = "btn">LogIn</Button></a><br></br>
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