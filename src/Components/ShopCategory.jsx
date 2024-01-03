import React, { useContext } from 'react'
import { ShopContext } from './Context/ShopContext'
import './ProductFrame.css';
import ProductFrame from './ProductFrame';
import Navbar2 from './Navbar2'
import Footer from './Footer';
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
        <Navbar2 />
        <div className='product-page-container'>
            <div className='heading'>
                <h1>{props.category}</h1>
            </div>
            <div className='product-list'>
            {all_product.map((item,i)=>{
                if(props.category === item.category)
                {
                    return(

                    
                            <ProductFrame key={item.id} product={item} />
                            
        
                    )        
                }
                else{
                    return null;
                }
            })}
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default ShopCategory