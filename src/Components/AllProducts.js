import Plates from './images/Kitchenware/Ceramic_plates.webp';
import Bottle from './images/Kitchenware/bottle.webp';
import Containers from './images/Kitchenware/Container.webp';
import Cooker from './images/Kitchenware/Cooker.webp';
import Lunch_box from './images/Kitchenware/Lunch_boxes.webp';
import Spoon from './images/Kitchenware/Spoons_Fork.webp';
import Knife from './images/Kitchenware/Steel_Knife_Set.webp';
import Tawa from './images/Kitchenware/Tawa.webp';
import Jug from './images/Kitchenware/Water_Jug.webp';
import Banana from './images/Veggies/product-1.jpg'
import Pumpkin from './images/Veggies/product-2.jpg'
import Amla from './images/Veggies/Amla.webp'
import FreshCoriander from './images/Veggies/Fresh_Coriander.webp'
import SCorn from './images/Veggies/Sweet_corn.webp'
import Pomogranate from './images/Veggies/product-6.jpg'
import Beetroot from './images/Veggies/product-7.jpg'
import Dragonfruit from './images/Veggies/Dragon_fruit.webp'
import Carrot from './images/Veggies/carrot.webp';
import Mask from './images/PersonalCare/Disposable_masks.webp';
import Facewash from './images/PersonalCare/Face_wash.jpg';
import Facialtissue from './images/PersonalCare/Facial_Tissue.webp';
import Handsanitizer from './images/PersonalCare/Hand_sanitizer.webp';
import Hydratinggel from './images/PersonalCare/Hydrating_Gel.jpg';
import Serum from './images/PersonalCare/Serum.jpg';
import Shampoo from './images/PersonalCare/Shampoo.webp';
import Soap from './images/PersonalCare/Soap.png';
import Toothpaste from './images/PersonalCare/Toothpaste.jpg';
import Airpurifier from './images/Electronics/air_purifier.webp';
import Speaker from './images/Electronics/bluetooth_speaker.webp';
import Neckband from './images/Electronics/Neckband.webp';
import Powerbank from './images/Electronics/Power_bank.webp';
import Remote from './images/Electronics/Remote.webp';
import Tv from './images/Electronics/tv.webp';
import Vaccumcleaner from './images/Electronics/Vaccum_cleaner.webp';
import Washingmachine from './images/Electronics/Washing_machine.webp';
import Waterheater from './images/Electronics/Water_heater.webp';
import Antiseptic from './images/Cleaning/Antiseptic_disinfectant_liquid.webp';
import Bfreshner from './images/Cleaning/Bathroom_freshner.webp';
import Dishwashbar from './images/Cleaning/Dishwashbar.webp';
import Floormop from './images/Cleaning/Floormop.webp';
import Garbagebag from './images/Cleaning/Garbage_bag.webp';
import Kitchencleaner from './images/Cleaning/Kitchencleaner.webp';
import LDetergent from './images/Cleaning/Liquid_detergent.webp';
import LStiffener from './images/Cleaning/Liquid_stiffener.webp';
import RFreshner from './images/Cleaning/Room_freshner.webp';
import DTrowel from './images/Gardening/Digging_Trowel.webp';
import Tray from './images/Gardening/Dripping_tray.webp';
import Gcan from './images/Gardening/Garden_watering_can.webp';
import Ghook from './images/Gardening/Hanging_hook.webp';
import Gpot from './images/Gardening/Hangingpot.webp';
import Plantstand from './images/Gardening/Metal_plant_stand.webp';
import Neemoil from './images/Gardening/Neem_oil.webp';
import Gspary from './images/Gardening/Pest_repellent_spray.webp';
import Psoil from './images/Gardening/Potting_soil.webp';
import Bswingcar from './images/toys/baby_swingcar.jpg';
import Dcactus from './images/toys/Dancing_cactus.webp';
import GRider from './images/toys/Giraffe_Rider.webp';
import Mpiano from './images/toys/Mini_piano.webp';
import Rattletoy from './images/toys/Rattle_toy.jpg';
import Shapesorter from './images/toys/Shape_Sorter.webp';
import Unicorn from './images/toys/toy3.webp';
import Wordbuilder from './images/toys/Word_builder.jpg';
import Buildingblocks from './images/toys/buiding_blocks.webp';
import Babylotion from './images/Deals/Babylotion.jpg';
import Almond from './images/Deals/biscotti-almond.webp';
import Deodrant from './images/Deals/Deodrant.webp';
import Icetea from './images/Deals/Ice-tea.webp';
import Premiumtea from './images/Deals/Premium_tea.webp';
import Nutridrink from './images/Deals/Nutri_drink.webp';
import Pringlescombo from './images/Combo/Chips.webp';
import Detergentcombo from './images/Combo/Detergent_combo.webp';
import Facewashcombo from './images/Combo/Facewsh_combo.webp';
import Icecreamcombo from './images/Combo/Icecream.webp';
import Peascombo from './images/Combo/Peas_combo.webp';
import Tawafrypan from './images/Combo/Tawa+Frypan.webp';


import './ProductFrame.css';

const all_product = [
    {
        id:"kw1",
        name:"Ceramic Plates",
        category : 'Kitchenware',
        image : Plates,
        price : 699,
        prod_no:0,
    },
    {
        id:"kw2",
        name:"Bottle",
        category : 'Kitchenware',
        image : Bottle,
        price : 425,
        prod_no:1,
    },
    {
        id:"kw3",
        name:"Air Tight Containers",
        category : 'Kitchenware',
        image : Containers,
        price : 350,
        prod_no:2,
    },
    {
        id:"kw4",
        name:"Pressure Cooker",
        category : 'Kitchenware',
        image : Cooker,
        price : 1500,
        prod_no:3,
    },
    {
        id:"kw5",
        name:"Lunch Boxes",
        category : 'Kitchenware',
        image : Lunch_box,
        price : 599,
        prod_no:4,
    },
    {
        id:"kw6",
        name:"Spoons and Fork Set",
        category : 'Kitchenware',
        image : Spoon,
        price : 199,
        prod_no:5,
    },
    {
        id:"kw7",
        name:"Knife",
        category : 'Kitchenware',
        image : Knife,
        price : 399,
        prod_no:6,
    },
    {
        id:"kw8",
        name:"Tawa / Pan",
        category : 'Kitchenware',
        image : Tawa,
        price : 429,
        prod_no:7,
    },
    {
        id:"kw9",
        name:"Water Jug",
        category : 'Kitchenware',
        image : Jug,
        price : 599,
        prod_no:8,
    },
    {
        id:"g1",
        name:"Banana",
        category:'Fruits & Veggies',
        image:Banana,
        price:75,
        prod_no:9,
    },
    {
        id:"g2",
        name:"Pumpkin",
        category:'Fruits & Veggies',
        image:Pumpkin,
        price:39,
        prod_no:10,
    },
    {
        id:"g3",
        name:"Amla",
        category:'Fruits & Veggies',
        image:Amla,
        price:145,
        prod_no:11,
    },
    {
        id:"g4",
        name:"Fresh Coriander",
        category:'Fruits & Veggies',
        image:FreshCoriander,
        price:94,
        prod_no:12,
    },
    {
        id:"g5",
        name:"Sweet Corn",
        category:'Fruits & Veggies',
        image:SCorn,
        price:120,
        prod_no:13,
    },
    {
        id:"g6",
        name:"Pomogranate",
        category:'Fruits & Veggies',
        image:Pomogranate,
        price:247,
        prod_no:14,
    },
    {
        id:"g7",
        name:"Beetroot",
        category:'Fruits & Veggies',
        image:Beetroot,
        price:110,
        prod_no:15,
    },
    {
        id:"g8",
        name:"Dragon Fruit",
        category:'Fruits & Veggies',
        image:Dragonfruit,
        price:499,
        prod_no:16,
    },
    {
        id:"g9",
        name:"Carrot",
        category:'Fruits & Veggies',
        image:Carrot,
        price:115,
        prod_no:17,
    },
    {
        id:"pc1",
        name:"Disposable Mask",
        category:'Personalcare',
        image:Mask,
        price:1.5,
        prod_no:18,
    },
    {
        id:"pc2",
        name:"Face Wash",
        category:'Personalcare',
        image:Facewash,
        price:300,
        prod_no:19,
    },
    {
        id:"pc3",
        name:"Facial Tissue",
        category:'Personalcare',
        image:Facialtissue,
        price:149,
        prod_no:20,
    },
    {
        id:"pc4",
        name:"Hand Sanitizer",
        category:'Personalcare',
        image:Handsanitizer,
        price:90,
        prod_no:21,
    },
    {
        id:"pc5",
        name:"Hydrating Gel",
        category:'Personalcare',
        image:Hydratinggel,
        price:285,
        prod_no:22,
    },
    {
        id:"pc6",
        name:"Serum",
        category:'Personalcare',
        image:Serum,
        price:350,
        prod_no:23,
    },
    {
        id:"pc7",
        name:"Shampoo",
        category:'Personalcare',
        image:Shampoo,
        price:467,
        prod_no:24,
    },
    {
        id:"pc8",
        name:"Soap",
        category:'Personalcare',
        image:Soap,
        price:60,
        prod_no:25,
    },
    {
        id:"pc9",
        name:"Toothpaste",
        category:'Personalcare',
        image:Toothpaste,
        price:50,
        prod_no:26,
    },
    {
        id:"e1",
        name:"Air Purifier",
        category:'Electronics',
        image:Airpurifier,
        price:6619,
        prod_no:27,
    },
    {
        id:"e2",
        name:"Bluetooth Speaker",
        category:'Electronics',
        image:Speaker,
        price:1899,
        prod_no:28,
    },
    {
        id:"e3",
        name:"Neckband",
        category:'Electronics',
        image:Neckband,
        price:1249,
        prod_no:29,
    },
    {
        id:"e4",
        name:"Power Bank",
        category:'Electronics',
        image:Powerbank,
        price:699,
        prod_no:30,
    },
    {
        id:"e5",
        name:"Remote",
        category:'Electronics',
        image:Remote,
        price:299,
        prod_no:31,
    },
    {
        id:"e6",
        name:"LED Television",
        category:'Electronics',
        image:Tv,
        price:25999,
        prod_no:32,
    },
    {
        id:"e7",
        name:"Vaccum Cleaner",
        category:'Electronics',
        image:Vaccumcleaner,
        price:3289,
        prod_no:33,
    },
    {
        id:"e8",
        name:"Washing Macine",
        category:'Electronics',
        image:Washingmachine,
        price:25900,
        prod_no:34,
    },
    {
        id:"e9",
        name:"Water Heater",
        category:'Electronics',
        image:Waterheater,
        price:3799,
        prod_no:35,
    },
    {
        id:"cl1",
        name:'Antiseptic disinfectant liquid',
        category:'Cleaning',
        image:Antiseptic,
        price:349,
        prod_no:36,
    },
    {
        id:"cl2",
        name:'Bathroom Freshner',
        category:'Cleaning',
        image:Bfreshner,
        price:159,
        prod_no:37,
    },
    {
        id:"cl3",
        name:'Dishwash Bar',
        category:'Cleaning',
        image:Dishwashbar,
        price:32,
        prod_no:38,
    },
    {
        id:"cl4",
        name:'Floor-Mop',
        category:'Cleaning',
        image:Floormop,
        price:169,
        prod_no:39,
    },
    {
        id:"cl5",
        name:'Garbage Bags',
        category:'Cleaning',
        image:Garbagebag,
        price:269,
        prod_no:40,
    },
    {
        id:"cl6",
        name:'Kitchen cleaner',
        category:'Cleaning',
        image:Kitchencleaner,
        price:269,
        prod_no:41,
    },
    {
        id:"cl7",
        name:'Detergent',
        category:'Cleaning',
        image:LDetergent,
        price:1259,
        prod_no:42,
    },
    {
        id:"cl8",
        name:'Liquid Stiffener',
        category:'Cleaning',
        image:LStiffener,
        price:78,
        prod_no:43,
    },
    {
        id:"cl9",
        name:'Room Freshner',
        category:'Cleaning',
        image:RFreshner,
        price:115,
        prod_no:44,
    },
    {
        id:"gd1",
        name:'Digging Trowel',
        category:'Gardening',
        image:DTrowel,
        price:90,
        prod_no:45,
    },
    {
        id:"gd2",
        name:'Dripping Tray',
        category:'Gardening',
        image:Tray,
        price:65,
        prod_no:46,
    },
    {
        id:"gd3",
        name:'Garden Watering Can',
        category:'Gardening',
        image:Gcan,
        price:205,
        prod_no:47,
    },
    {
        id:"gd4",
        name:'Hanging Hook',
        category:'Gardening',
        image:Ghook,
        price:64,
        prod_no:48,
    },
    {
        id:"gd5",
        name:'Hanging Pot',
        category:'Gardening',
        image:Gpot,
        price:499,
        prod_no:49,
    },
    {
        id:"gd6",
        name:'Metal Plant Stand',
        category:'Gardening',
        image:Plantstand,
        price:98,
        prod_no:50,
    },
    {
        id:"gd7",
        name:'Neem Oil',
        category:'Gardening',
        image:Neemoil,
        price:75,
        prod_no:51,
    },
    {
        id:"gd8",
        name:'Pest Repellent Spray',
        category:'Gardening',
        image:Gspary,
        price:245,
        prod_no:52,
    },
    {
        id:"gd9",
        name:'Gardening Soil',
        category:'Gardening',
        image:Psoil,
        price:249,
        prod_no:53,
    },
    {
        id:"ty1",
        name:"Baby Swing Car",
        category:'Toys',
        image:Bswingcar,
        price:1999,
        prod_no:54,

    },
    {
        id:"ty2",
        name:"Dancing Cactus",
        category:'Toys',
        image:Dcactus,
        price:429,
        prod_no:55,

    },
    {
        id:"ty3",
        name:"Giraffe Rider",
        category:'Toys',
        image:GRider,
        price:959,
        prod_no:56,

    },
    {
        id:"ty4",
        name:"Mini Piano",
        category:'Toys',
        image:Mpiano,
        price:229,
        prod_no:57,

    },
    {
        id:"ty5",
        name:"Rattle Toy",
        category:'Toys',
        image:Rattletoy,
        price:149,
        prod_no:58,

    },
    {
        id:"ty6",
        name:"Shape Sorter",
        category:'Toys',
        image:Shapesorter,
        price:299,
        prod_no:59,

    },
    {
        id:"ty7",
        name:"Unicorn Soft Toy",
        category:'Toys',
        image:Unicorn,
        price:459,
        prod_no:60,

    },
    {
        id:"ty8",
        name:"Word Builder",
        category:'Toys',
        image:Wordbuilder,
        price:599,
        prod_no:61,

    },
    {
        id:"ty9",
        name:"Building Blocks",
        category:'Toys',
        image:Buildingblocks,
        price:299,
        prod_no:62,

    },
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

];

export default all_product;