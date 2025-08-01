import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState } from "react";

const Body = () =>{
    const [listOfRes,setListOfRes] = useState(resList);
    return (
         <div className="body">
            <div className = "filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listOfRes.filter(
                        (res) => res.rating > 4.5
                    )
                    setListOfRes(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="search">Search</div>
                <div className="res-container">
                    {
                        listOfRes.map((res,index)=>(
                            <RestaurantCard key = {index} resData = {res}/>
                        ))}
                </div>
            
         </div>
    );
};
export default Body;