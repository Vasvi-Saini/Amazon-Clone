import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart"
import { Navigate, createBrowserRouter, RouterProvider} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import PageLayout from "./Components/PageLayout";
import SignIn from "./Pages/SignIn";

const router = createBrowserRouter([
  {
    path: "auth",
    element: <SignIn />,
  },

  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"home"} />,
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "products",
        children: [
          {
          index: true,
          element :<Products/>
          },
          {
            path: ":productId",
            element : <Product />
          },
          {
            path: "*",
            element: <div>Product Not Found</div>
          }
        ]
      },
    ],

  },

  
  {
    path: "*",
    element: <div>Page Not Found 404</div>
  }

]
);


export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router";

// import React from "react";
// import ReactDOM from "react-dom/client";

// export default function App() {
//   return (
//     <div>App</div>
//   )
// }



