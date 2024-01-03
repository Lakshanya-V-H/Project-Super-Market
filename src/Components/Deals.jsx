import Babylotion from './images/Deals/Babylotion.jpg';
import Almond from './images/Deals/biscotti-almond.webp';
import Deodrant from './images/Deals/Deodrant.webp';
import Icetea from './images/Deals/Ice-tea.webp';
import Premiumtea from './images/Deals/Premium_tea.webp';
import Nutridrink from './images/Deals/Nutri_drink.webp';
import ProductFrame from './ProductFrame';

const Deals = () =>{
let deal_products=[
    {
        id:"dl1",
        name:'Baby Lotion',
        category:'Deals',
        image:Babylotion,
        price:300,
        prod_no:63,
    },
    {
        id:"dl2",
        name:'Biscotti Almond',
        category:'Deals',
        image:Almond,
        price:159,
        prod_no:64,
    },
    {
        id:"dl3",
        name:'Deodrant',
        category:'Deals',
        image:Deodrant,
        price:190,
        prod_no:65,
    },
    {
        id:"dl4",
        name:'Ice Tea',
        category:'Deals',
        image:Icetea,
        price:99,
        prod_no:66,
    },
    {
        id:"dl5",
        name:'Nutri Drink',
        category:'Deals',
        image:Nutridrink,
        price:510,
        prod_no:67,
    },
    {
        id:"dl6",
        name:'Premium Tea',
        category:'Deals',
        image:Premiumtea,
        price:259,
        prod_no:68,
    },

]

return(
    <>
        {
        <div className="product-page-container">
            <div className='heading'>
            <h1>Deals of the Week</h1>
            </div>
            <div className="product-list">
                {deal_products.map((product) => (
                <ProductFrame key={product.id} product={product} />
                ))}
            </div>
        </div>}
    </>

);
}

export default Deals;