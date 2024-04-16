import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Homepage from "./assets/Components/Homepage/Homepage";
import MainLayout from './assets/Components/MainLayout/MainLayout';
import UserProfile from "./assets/Components/UserProfile/UserProfile";
import UpdateProfile from "./assets/Components/UpdateProfile/UpdateProfile";
import Estate_Details from "./assets/Components/Estate_Details/Estate_Details";
import Sign_up from "./assets/Components/Sign_Up/Sign_up";
import Sign_in from "./assets/Components/Sign_In/Sign_in";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Homepage></Homepage>,
        loader:() => fetch('/data.json')
      },
      {
        path: 'estate_details/:id',
        element: <Estate_Details></Estate_Details> ,
        loader: () => fetch(`/data.json`)
      },
      {
        path:'/update-profile',
        element:<UpdateProfile></UpdateProfile>
      },
      {
        path: '/user-profile',
        element:<UserProfile></UserProfile>
      },
      {
        path: '/sign_up',
        element:<Sign_up></Sign_up>
      },
      {
        path: '/sign_in',
        element:<Sign_in></Sign_in>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
