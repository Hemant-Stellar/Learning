import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Header
 * - Logo
 *  - NavItems
 * Body
 *  - Search
 *  - card container
 *  - RestaurantContainer
 *      - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisines, delivery time.
 * Footer
 * - Copyright
 *  - Links
 *  - Contact
 */
const resdata = [
    {
        resName: "Monica",
        cuisine: "Xyz deadly",
        rating: 4.4,
        delivery: 30
    },
    {
        resName: "Spice Villa",
        cuisine: "Indian, Mughlai",
        rating: 4.6,
        delivery: 25
    },
    {
        resName: "Pasta Fiesta",
        cuisine: "Italian",
        rating: 4.2,
        delivery: 35
    },
    {
        resName: "Dragon Wok",
        cuisine: "Chinese",
        rating: 4.0,
        delivery: 40
    },
    {
        resName: "Green Bowl",
        cuisine: "Healthy, Salads",
        rating: 4.5,
        delivery: 20
    },
    {
        resName: "Burger Blast",
        cuisine: "Fast Food, Burgers",
        rating: 4.1,
        delivery: 28
    },
    {
        resName: "Sushi Hub",
        cuisine: "Japanese",
        rating: 4.3,
        delivery: 45
    },
    {
        resName: "Tandoori Nights",
        cuisine: "North Indian, BBQ",
        rating: 4.7,
        delivery: 32
    },
    {
        resName: "Wrap & Roll",
        cuisine: "Street Food, Wraps",
        rating: 4.0,
        delivery: 22
    },
    {
        resName: "Curry Leaf",
        cuisine: "South Indian",
        rating: 4.4,
        delivery: 30
    },
    {
        resName: "Pizza Palace",
        cuisine: "Pizza, Continental",
        rating: 4.2,
        delivery: 33
    }
];


const Header = ()=>{
    return(
        <div className = "header">
            <div className = "logo-container">
                <img className="logo" src ="https://img.freepik.com/premium-vector/fast-food-delivery-vector-logo_1012247-128.jpg?w=2000" />
            </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div> 
    ); 
};

const RestaurantCard = (props) =>{ 
    const {resName,cuisine,rating,delivery} = props?.resData;
    return (
        <div className="res-card">
            <img alt="res-card" className= "res-logo" src="https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg"/>

            <h3>{resName}</h3>
            <h5>{cuisine}</h5>
            <h4> {rating} star rating</h4>
            <h4> {delivery} min delivery time</h4>
        </div>
    );
};

const Body = () =>{
    return (
         <div className="body">
            <div className="search">Search</div>
                <div className="res-container">
                    {
                        resdata.map((res,index)=>(
                            <RestaurantCard key = {index} resData = {res}/>
                        ))}
                </div>
            
         </div>
    );
};

const AppLayout = () =>{
    return (
        <div className ="app">
            <Header />
            <Body />
        </div>
    )
    
}



const root = ReactDOM.createRoot(document.getElementById("root"));
  
root.render(<AppLayout/>);