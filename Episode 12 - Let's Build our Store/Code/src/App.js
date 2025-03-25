import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// Ondemand Loading
// Dynamic Import

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // authentication
  useEffect(() => {
    const data = {
      name: "Anand Kumar",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter(
  [
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
            <Suspense fallback={<h1>Loading...</h1>}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/restaurants/:resId",
          element: <RestaurantMenu />,
        },
        {
          path: "/grocery",
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <Grocery />
            </Suspense>
          ),
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
      errorElement: <Error />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
