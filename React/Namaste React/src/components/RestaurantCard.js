import {IMG_ID} from './../utils/constant';

const RestaurantCard = (props) =>{ 
    const {name,cuisines,avgRating,sla,cloudinaryImageId} = props?.resData;
    return (
        <div className="res-card">
            <img alt="res-card" className= "res-logo" src={IMG_ID+cloudinaryImageId}/>

            <h3>{name}</h3>
            <h5>{cuisines.join(',')}</h5>
            <h4> {avgRating} star rating</h4>
            <h4> {sla.deliveryTime} min delivery time</h4>
        </div>
    );
};

export default RestaurantCard;