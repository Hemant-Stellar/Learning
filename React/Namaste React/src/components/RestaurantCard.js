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

export default RestaurantCard;