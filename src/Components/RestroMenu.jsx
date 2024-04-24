import { Link, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MdOutlineDeliveryDining } from "react-icons/md";
import useFetchMenu from "../utils/useFetchMenu";
import { v4 as uuidv4 } from "uuid";
import { MdStars } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestroMenu = () => {
  const { reid } = useParams();
  const resInfo = useFetchMenu(reid); 
  const [showIdex, setShowIndex] = useState(null) 

  if (resInfo === null) return <Shimmer />;

  let {
    name,
    city,
    locality,
    cuisines,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    feeDetails,

    sla,
  } = resInfo?.data?.cards[2]?.card?.card?.info || {};
 
  let { offers } =
    resInfo?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle || {};

  
  let  categories = 
    resInfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

 if(resInfo?.length === 0) return <Shimmer/>

  return (
    <div className="min-screen  w-8/12 m-auto  mt-36  ">
      <div className="">
        <ul className="flex items-center">
          <li>
            <Link to="/" className="text-[10px] text-[rgb(83, 86, 101)]">
              Home /
            </Link>
          </li>
          <li>
            <Link to="/" className="text-[10px] text-[rgb(83, 86, 101)]">
              {city + " /"}
            </Link>
          </li>
          <li>
            <Link to="/" className="text-[10px] text-[rgb(83, 86, 101)]">
              {name}
            </Link>
          </li>
        </ul>
      </div>

      <h1 className=" mt-4 heading p-4 text-2xl text-[rgba(2, 6, 12, 0.92] font-bold leading-3">
        {name}
      </h1>
      <div className="rounded-lg shadow-2xl mt-4  p-8 ">
        <div className="flex  items-center">
          <h1 className=" text-2xl mr-2 ">
            <MdStars className="text-green-700" />
          </h1>
          <h2 className="text-xl font-bold mr-2">{avgRatingString}</h2>

          <h2 className="text-xl font-bold mr-2 text-[rgba(2, 6, 12, 0.92]">
            {"(" + totalRatingsString + ")"}
          </h2>
          <h2 className="text-xl font-bold">{costForTwoMessage}</h2>
        </div>

        <h3 className="p-2 mt-1 text-md font-bold text-[rgb(241,87,0)] flex">
          {cuisines &&
            cuisines.map((e) => (
              <li className="list-none" key={e}>
                {e + ","}
              </li>
            ))}
        </h3>
        <div className="px-2 mb-2">
          <h2 className="text-lg font-bold mb-2">
            <span className="font-bold-[200px] text-[14px]">{locality}</span>
          </h2>
          <h2 className="text-lg   font-bold">{sla?.slaString}</h2>
        </div>

        <hr />

        <div className="mt-2 flex items-center">
          <h1 className="text-2xl p-2">
            <MdOutlineDeliveryDining />
          </h1>
          <h2 className="mr-1">{sla?.lastMileTravel} Kms</h2>
          <h2>|</h2>
          <h2 className="ml-1">
            {feeDetails?.totalFee ? feeDetails?.totalFee / 100 : 0} ₹ Delivery
            fee will apply *
          </h2>
        </div>
      </div>

      <h1 className="text-[Basis_Grotesque_Pro - 800] text-2xl text-[rgba(2, 6, 12, 0.92) leading-3 mt-4 font-bold p-4 ]">
        Deals for you
      </h1>

      <div className="flex items-center   overflow-x-scroll  mt-4 ">
        {offers &&
          offers.map((each) => (
            <div
              key={uuidv4()}
              className="flex items-center justify-around shadow-xl rounded-lg bg-slate-300 w-full m-4"
            >
              <h1 className=" ml-2 text-5xl">
                <BiSolidOffer />
              </h1>
              <div className="w-[180px] h-[100px] items-center flex flex-col justify-center cursor-pointer ">
                <h1 className="text-lg">{each.info.header}</h1>
                <h1>{each.info.couponCode}</h1>
              </div>
            </div>
          ))}
      </div>

      <h1 className="text-4xl font-bold  text-center mt-4">Menu</h1>
      <hr />

      {categories?.map((each, index) => (
        <RestaurantCategory
          data={each?.card?.card}
          key={each?.card?.card?.title}
          showItems={index === showIdex && true}
          setShowIndex={() =>
            index === showIdex ? setShowIndex(null) : setShowIndex(index)
          }
        />
      ))}
    </div>
  );
};

export default RestroMenu;
