import React from 'react'
import {COULD_IMG} from '../utils/content'

const ItemList = ({items}) => {
  return (
    <div>
      {items?.map((e) => (
        <div
          key={e.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-semibold">{e.card.info.name}</span>
              <span>
                - ₹
                {e.card.info.price
                  ? e.card.info.price / 100
                  : e.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{e.card.info.description}</p>
          </div>
          <div className="sm:w-3/12 relative">
            <img
              src={COULD_IMG + e.card.info.imageId}
              className="w-[85%] m-auto object-cover max-h-[160px] relative rounded-md"
              alt="infoImage"
            />
           
              <button className="bg-gray-900 bg-opacity-90 text-white px-4 py-1 w-4/12 absolute left-0 right-0 bottom-0 mx-auto rounded-md sm:w-6/12 sm:-bottom-3 ">
                Add +
              </button>
           
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList
