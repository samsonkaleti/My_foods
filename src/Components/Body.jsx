import ReCard, { withOpenLabel } from "./ReCard";
import Shimmer from "./Shimmer";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RESTRO_DELHI } from "../utils/content"; 
import userContext from "../utils/UserContext";

const Body = () => {
  const [ResList, setResList] = useState([]);
  const [FilterList, setFilterList] = useState([]);
  const [SearchText, setSearchText] = useState("");

  const ReCardWithOpenLabel = withOpenLabel(ReCard)
  

  useEffect(() => {
    ApiData();
  }, []);

  const ApiData = async () => {
    // const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    const fetchData = await fetch(RESTRO_DELHI);
    const jsonData = await fetchData.json();

    setResList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    // console.log(ResList)
    setFilterList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    const filterNameDataList =  ResList.filter((data) =>
      data.info.name.toLowerCase().includes(SearchText.toLocaleLowerCase())
    );
    setFilterList(filterNameDataList);
  }, [ResList, SearchText]);  

  const {LoggedInUser,setUserName} = useContext(userContext)



  return(ResList?.length === 0 ? (
    <Shimmer />
  ) :
   (
    <div className="h-full  w-full  pt-36 left-0 right-0">
      <div className=" p-4 m-4 items-center  flex-nowrap">
        <input
          type="search"
          placeholder="Search Here"
          name="search"
          value={SearchText}
          className="h-8 rounded-md w-40 md:w-56 p-2 mr-2 outline-none border-solid border-2 border-fuchsia-400"
          id="search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-green-400 py-1 px-4 rounded-md mr-4 "
          type="text"
          onClick={() => {
            const ButtonSearch = ResList.filter((e) =>
              e.info.name.toLowerCase().includes(SearchText.toLocaleLowerCase())
            );

            setFilterList(ButtonSearch);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            const filterList = ResList.filter(
              (each) => each.info.avgRating > 4
            );

            setFilterList(filterList);
          }}
          type="button"
          className="invisible md:visible text-[14px]    px-4 py-1 rounded-lg justify-center left-0 border-solid border-2  border-black"
        >
          Top Rated Restraints
        </button>

        <label htmlFor="useName" className="m-2">User Name : </label>
        <input className=  " px-2 py-1 rounded-md border-2  border-pink-500 " type="text" name="username" id="useName" value={LoggedInUser} onChange={(e) => setUserName(e.target.value)} />
        </div>
        



      <div className="flex  items-center flex-wrap w-full">
        {FilterList?.map((res) => (
          <Link
            className="link"
            key={res.info.id}
            to={"/restaurants/" + res.info.id}
          >
            {res.info.isOpen ? (
              <ReCardWithOpenLabel resData={res} />
            ) : (
              <ReCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
    )
  )
};

export default Body;
