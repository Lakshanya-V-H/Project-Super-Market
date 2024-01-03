import React from 'react';
import './Pancard.css';
{/*import './Sign_in.css';*/}

function PanCard()
{
    return(
        <div className='Pancard'>
            <center>
            <br></br>
            <br></br>
            <br></br>
            <h1>PAN Card Information</h1>
            <fieldset>
                <p>Note: For orders exceeding the value of ₹2,00,000</p>
                <p>PAN Card details are mandatory.</p>
            </fieldset>
            <div id='Content'>
            <table>
            <tr>
                <td>
                    PAN Number
                </td>
                <td>
                    <input type="number" placeholder='Enter your PAN Number'></input>
                </td>
            </tr>
            </table>
            <br></br>
            <label className='agree'>
                <input type='checkbox' id='checkbox'></input>
                I agree to the terms mentioned in the declaration.
                <br></br>
                <button className='btn'>View declaration</button>
                <br></br>                                                                                                                                                 
            </label>
            <a href='/Home'><button className='btn'>Confirm</button></a>
            </div>
            </center>
            <br></br>
            <br></br>
        </div>

    );

}
export default PanCard;