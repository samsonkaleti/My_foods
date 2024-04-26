import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./Components/About";
import ErrorPage from "./Components/ErrorPage";
import Contact from "./Components/Contact";
// import Info from "./Components/Info";
import RestroMenu from "./Components/RestroMenu";
import Shimmer from "./Components/Shimmer";
// import Store from "./Components/Store";
import userContext from "./utils/UserContext";

const Store = lazy(() => import("./Components/Store"));
const About = lazy(() => import("./Components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    // fetch method

    const data = "samson kaleti";
    setUserName(data);
  }, []);
  return (
    <userContext.Provider value={{ LoggedInUser: userName, setUserName }}>
      <div className=" bg-white">
        <Header />
        <Outlet />
      </div>
    </userContext.Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/store",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Store />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:reid",
        element: <RestroMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={AppRouter} />
  // <AppLayout/>
);
