import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import ErrorPage from "./Components/ErrorPage";
import Contact from "./Components/Contact";
import Info from "./Components/Info";
import RestroMenu from "./Components/RestroMenu";
import Shimmer from "./Components/Shimmer";
// import Store from "./Components/Store";

const Store = lazy(() => import("./Components/Store"));

const AppLayout = () => {
  return (
    <div className=" bg-white">
      <Header />
      <Outlet />
    </div>
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
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/info",
        element: <Info />,
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
