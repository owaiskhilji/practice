import React from 'react'
import App from "../../App";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import Addproductpage from "../Pages/Dashboard/Addproductpage";
import Getimage from '../Imagefire/Imgstorage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/add-product",
    element: <Addproductpage />,
  },
  {
    path: "/image",
    element: <Getimage />,
  },
]);

export default function Navigation() {
  return (
    <div>
      <RouterProvider
        router={router}
      />
    </div>
  )
}
