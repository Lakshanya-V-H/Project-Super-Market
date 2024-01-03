import React from 'react';
import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
function Login()
{
    /*const [loginData,setloginData] = useState({
        email:'',
        password:'',
    })
    const [errors,setErrors]=useState({});
    const navigate=useNavigate();

    const handleChange = (e) =>{
        const {name,value}=e.target;
        setloginData((prevData) =>({...prevData,[name]:value}));
    }*/
    return(
    <div className='LoginEmail'>
        <center>
            <br></br>
            <br></br>
            <br></br>
            <h1 class = "h1">Welcome !!!</h1>
            <div id = 'Content'>
                <form class = "form">
                    <table>
                        <tr>
                        <td class = "Email">Email : </td>
                        <td><input type = "email" class = "emailInput" placeholder='Enter your e-mail'></input></td>
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

                        <a href='/Home'><button type="button" class = "btn">LogIn</button><br></br></a>
                        <hr></hr>OR
                        <br></br>
                        <a href='/LoginM'><button type="button" class = "btn">Continue with Mobile Number</button></a><br></br><br></br>
                        <button type='button' class = "btn">Continue with Google</button><br></br>
                        <br></br>
                        <hr></hr>
                    <table>
                        <tr>
                        <td>Forget Password?</td>
                        <td>
                            <button type="button" class = "btn" id="forgetpassword">Click Here</button>
                        </td>
                        </tr>
                        <tr>
                        <td class="NewUser">New User?  </td>
                        <td><a href='/Sign'><button type = "button" class = "btn" id="newuser">SignUp</button></a>
                        </td>
                        </tr>
                    </table>
                </form>
            </div>
            <br></br>
            <br></br>
        </center>
    </div>
    );

}

export default Login;