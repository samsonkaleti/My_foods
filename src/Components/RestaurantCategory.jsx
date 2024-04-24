import React from "react";
// import { useState } from "react";
import ItemList from "./ItemList";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function RestaurantCategory({ data, showItems, setShowIndex }) {
  //  const [showItem, setShowItem] = useState(true);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="">
      <div className=" w-full  mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          onClick={handleClick}
          className="flex justify-between cursor-pointer"
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span className = 'text-2xl'>{showItems ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </div>

        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
}

export default RestaurantCategory;
