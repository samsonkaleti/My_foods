import { useState,useContext } from "react";
import NavLogo from "../Asscts/NavLogo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import userContext from "../utils/UserContext";


const Header = () => {

  const { LoggedInUser } = useContext(userContext) 

  const [open, setOpen] = useState(false);
  let Links = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
    
    { name: "STORE", path: "/store" },
  ];
  const onlineStatus = useOnlineStatus();
  let [btnName, setBtnName] = useState(true);
  return (
    <div className="">
      <div className="bg-white shadow-md top-0 left-0 w-full fixed  h-[10vh] md:h-[18vh] mb-6  md:flex  py-4 md:px-10 px-7   md:justify-between items-center z-[1000]  ">
        <div className="">
          <Link to={"/"} className="link">
            <img
              src={NavLogo}
              alt="Logo"
              className="md:w-[140px] md:h-[100px] w-20"
            />
          </Link>
        </div>

        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="text-3xl absolute right-8 top-10 cursor-pointer md:hidden"
        >
          {open ? <IoMdClose /> : <MdMenu />}
        </div>

        <ul
          className={`md:flex md:items-center absolute md:static bg-white md:bg-transparent  md:z-auto z-[-1] left-0 w-full md:w-auto pl-6 md:pl-0 transition-all duration-500 ease-in pt-8 md:pt-0 pb-4 md:pb-0 ${
            open
              ? "top-20 opacity-100 md:top-0"
              : " md:top-0 top-[-490px] md:opacity-100 opacity-0"
          } `}
        >
          {Links.map((each) => (
            <li
              key={each.name}
              className="md:ml-8 text-lg font-[poppins] md:my-0 my-4 hover:scale-110 duration-500"
            >
              <Link
                className="text-gray-800 hover:text-yellow-400 duration-500 font-semibold "
                to={each.path}
              >
                {each.name}
              </Link>
            </li>
          ))}

          <li className="md:ml-8 text-lg font-[poppins] font-semibold">
            ONLINE STATUS : {onlineStatus ? "🟢" : "🔴"}
          </li>

          <button
            onClick={() => {
              setBtnName(!btnName);
            }}
            className=" font-semibold bg-indigo-600 text-white font-[poppins] py-2 px-6 md:ml-8  duration-500 rounded-md md:w-[140px] hover:bg-green-500"
          >
            {btnName ? "LOGIN" : "LOGOUT"}
          </button>

          <li>{LoggedInUser}</li>
        </ul>



        
      </div>
    </div>
  );
};

export default Header;
