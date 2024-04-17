import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./assets/Components/Homepage/Homepage";
import MainLayout from "./assets/Components/MainLayout/MainLayout";
import UserProfile from "./assets/Components/UserProfile/UserProfile";
import UpdateProfile from "./assets/Components/UpdateProfile/UpdateProfile";
import Estate_Details from "./assets/Components/Estate_Details/Estate_Details";
import Register from "./assets/Components/Register/Register";
import Log_In from "./assets/Components/Log_In/Log_In";
import FirebaseProvider from "./assets/Components/FirebaseProvier/FirebaseProvider";
import ErrorPage from "./assets/Components/ErrorPage/ErrorPage";
import Blogs from "./assets/Components/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "estate_details/:id",
        element: <Estate_Details></Estate_Details>,
        loader: () => fetch(`/data.json`),
      },
      {
        path: "/update-profile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/user-profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/log_in",
        element: <Log_In></Log_In>,
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>
);
