import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData"; //no need of this because api call will do it.
import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {SWIGGY_URL} from "./../utils/constant";

const Body = () =>{
    const arr = useState([]);
    // console.log(arr);
    const [listOfRes,setListOfRes] = arr;

    const[searchText,setSearchText] = useState("");

    const [filteredList,setFilteredList] = useState([]);

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
        setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    //conditional rendering
    if(listOfRes.length==0){
        return <Shimmer></Shimmer>;
    }

    return (
         <div className="body">
            <div className = "filter">
                
                <div className="search">
                    <input type="text" className="search-box" value={searchText} 
                    onChange={(e)=>{
                        setSearchText( e.target.value);
                    }}></input>

                    <button onClick={()=>{

                        const filteredRes =  listOfRes.filter(
                        (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                       );
                       setFilteredList(filteredRes);
                    }}>Search</button>

                    <button onClick={()=>{

                        const filteredRes =  listOfRes.filter(
                        (res)=> res.info.name.toLowerCase().includes("")
                       );
                       setFilteredList(filteredRes);
                    }}>Clear </button>

                </div>

                <button className="filter-btn" onClick={()=>{

                        const topRatedRes = listOfRes.filter(
                        (res) => res.info.avgRating > 4.5
                    )
                    setFilteredList(topRatedRes);
                }}>Top Rated Restaurant</button>
            </div>
                <div className="res-container">
                    {
                        filteredList.map((res)=>(
                            <RestaurantCard key = {res.info.id} resData = {res.info}/>
                        ))}
                </div>
            
         </div>
    );
};
export default Body;