import {v4 as uuidv4} from 'uuid'

const Shimmer = () => {
  return (
    <div className="h-full  w-full  pt-36 left-0 right-0 ">
      <div className="p-4 m-4 items-center  flex-nowrap flex">
        <div className="h-8 rounded-md w-40 md:w-56 p-2 ml-4 mt-2 outline-none border-solid border-2 bg-gray-200"></div>
        <div className="bg-gray-200 py-1 px-4 w-5 rounded-md mr-4"></div>
        <div className="invisible md:visible text-[14px]    px-4 py-1 rounded-lg justify-center left-0 border-solid border-2  border-black"></div>

        <div className="flex  items-center flex-wrap w-full">
          {Array.from({ length: 24 }).map((i, e) => {
            return (
              <div
                key={uuidv4()}
                className="shadow-lg rounded-lg w-40 md:min-w-[220px] justify-center  m-4 p-4 md:min-h-[300px]    items-center bg-slate-200"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
