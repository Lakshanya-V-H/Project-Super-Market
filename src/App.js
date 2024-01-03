import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Review from './Components/Review';
import Contact from './Components/Contact';
import Privacy from './Components/Privacy';
import Terms from './Components/Terms';
import FAQ from './Components/FAQ'
import Main from './Components/Dashboard/Main';
import Sign from './Components/Sign_in';
import Shop from './Components/Shop';
import Address from './Components/User_address';
import Cart from './Components/Cart';
import Login from './Components/Login_email';
import LoginM from './Components/Login_Mobile';
import Pancard from './Components/Pan_card';
import ShopCategory from './Components/ShopCategory';

function App() {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route exact path='/Home' element={<Home />} />
          <Route exact path='/Shop' element={<Shop />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Review' element={<Review />} />
          <Route exact path='/Contact' element={<Contact />} />
          <Route exact path='/Sign' element={<Sign />} />
          <Route excact path='/Privacy' element={<Privacy />} />
          <Route excact path='/Address' element={<Address />} />
          <Route excact path='/Terms' element={<Terms />} />
          <Route excact path='/FAQ' element={<FAQ />} />
          <Route excact path='/LoginE' element={<Login />} />
          <Route excact path='/Pancard' element={<Pancard />} />
          <Route excact path='/LoginM' element={<LoginM />} />
          <Route excact path='/Cart' element={<Cart />} />
          <Route exact path='/Kitchenware' element={<ShopCategory category="Kitchenware"/>}/>
          <Route exact path='/Groceries' element={<ShopCategory category='Fruits & Veggies'/>}/>
          <Route exact path='/Personalcare' element={<ShopCategory category="Personalcare"/>}/>
          <Route exact path='/Electronics' element={<ShopCategory category="Electronics"/>}/>
          <Route exact path='/Cleaning' element={<ShopCategory category="Cleaning"/>}/>
          <Route exact path='/Gardening' element={<ShopCategory category="Gardening"/>}/>
          <Route exact path='/Toys' element={<ShopCategory category="Toys"/>}/>
        </Routes>
      </div>
  );
}

export default App;
