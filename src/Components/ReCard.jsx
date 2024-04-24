import { COULD_IMG } from "../utils/content";
import { MdStars } from "react-icons/md";

const ReCard = (props) => {
  const { sla, name, cloudinaryImageId, locality, avgRating, cuisines } =
    props.resData.info;

  return (
    // <div className="cardContainer">
    <div className=" hover:scale-[0.9] duration-500 shadow-lg rounded-lg w-40 md:min-w-[220px] justify-center  m-4 p-4 md:min-h-[300px]    items-center  ">
      <div className="">
        <img
          src={COULD_IMG + cloudinaryImageId}
          alt="cardImg"
          className="w-52 h-32 rounded-md"
        />
      </div>

      <div className=" w-52 mt-1  ">
        <h1 className=" font-[poppins] text-black font-bold text-[18px] w-32 md:w-48  whitespace-nowrap overflow-hidden text-ellipsis">
          {name}
        </h1>
        <div className="flex   items-center whitespace-nowrap overflow-hidden text-ellipsis w-28 md:w-48">
          <h1 className="mr-2 text-2xl">
            <MdStars className="text-green-700" />
          </h1>
          <h1 className="text-lg font-bold mr-2 text-black">{avgRating}</h1>{" "}
          <span className="font-bold">&</span>
          <h1 className="ml-2 text-[#02060cbf] font-bold">{sla.slaString}</h1>
        </div>

        <h3 className=" w-32 md:w-44 whitespace-nowrap overflow-hidden text-ellipsis text-[#02060c99] font-[400] text-[16px] leading-5">
          Locality : {locality}
        </h3>

        <h3 className="w-32 md:w-44  whitespace-nowrap overflow-hidden text-ellipsis text-[#02060c99] font-[400] text-[16px] leading-5">
          Cuisines : <span className="cuisines">{cuisines.join(",")}</span>
        </h3>
      </div>
    </div>
  );
};

export const withOpenLabel = (ReCard) => {
  return (props) => {
    return (
      <div className="">
        <label className=" overflow-hidden absolute px-2 py-1 ml-8 bg-green-300 top-50 rounded-md">
          Open
        </label>
        <ReCard {...props} />
      </div>
    );
  };
};

export default ReCard;
