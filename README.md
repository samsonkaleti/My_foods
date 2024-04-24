# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

import { useState } from "react";
import NavLogo from "../Asscts/NavLogo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Header = () => {
const [open, setOpen] = useState(false);
let Links = [
{ name: "HOME", path: "/" },
{ name: "ABOUT", path: "/about" },
{ name: "CONTACT", path: "/contact" },
{ name: "INFO", path: "/info" },
{ name: "STORE", path: "/store" },
];
const onlineStatus = useOnlineStatus();
let [btnName, setBtnName] = useState(true);
return (
<div className="mb-6 fixed w-full md:flex bg-sky-200 py-4 md:px-10 px-7 h-28   md:justify-between items-center ">
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
              className="text-gray-800 hover:text-yellow-400 duration-500 "
              to={each.path}
            >
              {each.name}
            </Link>
          </li>
        ))}

        <li className="md:ml-8 text-lg font-[poppins]">
          ONLINE STATUS : {onlineStatus ? "🟢" : "🔴"}
        </li>

        <button
          onClick={() => {
            setBtnName(!btnName);
          }}
          className="bg-indigo-600 text-white font-[poppins] py-2 px-6 md:ml-8 hover:bg-indigo-400 duration-500 rounded-md md:w-[140px]"
        >
          {btnName ? "LOGIN" : "LOGOUT"}
        </button>
      </ul>
    </div>

);
};

export default Header;
