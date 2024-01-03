import Pringlescombo from './images/Combo/Chips.webp';
import Detergentcombo from './images/Combo/Detergent_combo.webp';
import Facewashcombo from './images/Combo/Facewsh_combo.webp';
import Icecreamcombo from './images/Combo/Icecream.webp';
import Peascombo from './images/Combo/Peas_combo.webp';
import Tawafrypan from './images/Combo/Tawa+Frypan.webp';
import ProductFrame from './ProductFrame';

import React from 'react'

const Combo = () => {
    let combo_products = [
        {
            id:'cb1',
            name:'Pringles x3',
            category:'Combo',
            image:Pringlescombo,
            price:305,
            prod_no:69,
        },
        {
            id:'cb2',
            name:'Detergent x2',
            category:'Combo',
            image:Detergentcombo,
            price:360,
            prod_no:70,
        },
        {
            id:'cb3',
            name:'Facewash x2',
            category:'Combo',
            image:Facewashcombo,
            price:349,
            prod_no:71,
        },
        {
            id:'cb4',
            name:'Coconut Icecream x2',
            category:'Combo',
            image:Icecreamcombo,
            price:389,
            prod_no:72,
        },
        {
            id:'cb5',
            name:'Green Peas x2',
            category:'Combo',
            image:Peascombo,
            price:236,
            prod_no:73,
        },
        {
            id:'cb6',
            name:'Tawa + Fry Pan',
            category:'Combo',
            image:Tawafrypan,
            price:745,
            prod_no:74,
        },
    ]    


  return (
<>
        {
        <div className="product-page-container">
            <div className='heading'>
            <h1>Combo Hub</h1>
            </div>
            <div className="product-list">
                {combo_products.map((product) => (
                <ProductFrame key={product.id} product={product} />
                ))}
            </div>
        </div>}
    </>
  )
}

export default Combo