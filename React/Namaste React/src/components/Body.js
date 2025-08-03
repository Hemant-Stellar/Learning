import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData"; //no need of this because api call will do it.
import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {SWIGGY_URL} from "./../utils/constant";

const Body = () =>{
    const arr = useState([]);
    // console.log(arr);
    const [listOfRes,setListOfRes] = arr;

    useEffect(()=>{
        fetchData();
    },[]);


    const fetchData = async ()=>{
        const data = await fetch(
            SWIGGY_URL
        )

        const json = await data.json();
        // setListOfRes(json); // now the ui will be updated and the page is already loaded till now.
        setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    //conditional rendering
    if(listOfRes.length==0){
        return <Shimmer></Shimmer>;
    }

    return (
         <div className="body">
            <div className = "filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listOfRes.filter(
                        (res) => res.info.avgRating > 4.5
                    )
                    setListOfRes(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="search">Search</div>
                <div className="res-container">
                    {
                        listOfRes.map((res)=>(
                            <RestaurantCard key = {res.info.id} resData = {res.info}/>
                        ))}
                </div>
            
         </div>
    );
};
export default Body;