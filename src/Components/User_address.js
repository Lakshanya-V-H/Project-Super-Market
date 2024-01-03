import './User_address.css';
function App() {
  return (
    <div className="User_Address">
      <br></br>
      <br></br>
      <br></br>
      <center>
      <h1>
        Your Address
      </h1>
        <div id='Content'>
        <form className="form">
          <table>
            <tr>
              <td>Pin Code* </td>
              <td><input type="number" placeholder='Pin Code'></input></td>
              <br></br><br></br>
              </tr>
            <tr>
              <td>House Number</td>
              <td><input type="number" placeholder='House Number'></input></td><br></br><br></br>
            </tr>
            <tr>
              <td>Floor Number</td>
              <td><input type="number" placeholder='Floor Number'></input></td><br></br><br></br>
            </tr>
            <tr>
              <td>Tower Number</td>
              <td><input type="number" placeholder='Tower Number'></input></td><br></br><br></br>
            </tr>
            <tr>
              <td>Building/Apartment Name </td>
              <td><input type="text" placeholder='Building/Apartment Name'></input></td><br></br><br></br>
            </tr>
            <tr>
              <td>Landmark/Area* </td>
              <td><input type="text" placeholder='Landmark/Area'></input></td><br></br><br></br>
            </tr>
            <tr>
              <td>City,State </td>
              <td><input type="text" placeholder='City,State'></input></td><br></br>
            </tr>
          </table>
        </form>
        </div>
      <h1>Delivery Contact Details</h1>
      <p>This mobile number will receive an OTP,required for collecting the order.</p>
      <div id='Content'>
        <form>
          <table>
            <tr>
              <td>Receivers Name*</td>
              <td><input type="text"></input></td><br></br><br></br>
            </tr>
            <tr>
              <td>Receivers Number*</td>
              <td><input type="number"></input></td><br></br><br></br>
            </tr>
          </table>
        </form>
        </div>     
      <br></br>
      <a href='/Pancard'><button className="btn">SAVE DETAILS</button></a>
      <br></br>
      </center>
      <br></br>
      <br></br>      
    </div>
  );
}

export default App;