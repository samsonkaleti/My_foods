
import ReCard from "./ReCard"
import Shimmer from "./Shimmer"
import { useEffect, useState } from "react"

const Body = () => { 
    const [ResList , setResList] = useState([])  
    const [FilterList,setFilterList] = useState([])
    const [SearchText,setSearchText] = useState("") 

    useEffect(()=>{
        ApiData()


    },[]) 


const ApiData =  async() =>{
                    // const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    const fetchData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const jsonData = await fetchData.json()  

    setResList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}




    return (ResList.length===0)?(<Shimmer/>) : (
        <div className="resContainer">
        <div className="SearchContainer">
        
        <input type="search" name="search" value={SearchText}  className="SearchBar" id="search" onChange={(e)=>{
           
           setSearchText(e.target.value)

        }
       
    } />
        <button className="SearchButton" type="text" onClick={
            ()=>{
               const ButtonSearch =  ResList.filter((e)=>e.info.name.toLowerCase().includes(SearchText.toLocaleLowerCase()) ) 

               setFilterList(ButtonSearch)
            }
        }>Search</button> 
         <button onClick={()=>
            {const filterList = ResList.filter(each => each.info.avgRating > 4) 

                setFilterList(filterList)
            }
        
        }type="button" className="filterButton">
            Top Rated Restraints
            </button>
        </div>
 <div className="cardContainer">

 {
    FilterList.map((res) => <ReCard resData = {res}/>)
 }
 
       
       
      




 </div>
       
        </div>
    )
} 

export default Body