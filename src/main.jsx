import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./assets/Components/Homepage/Homepage";
import MainLayout from "./assets/Components/MainLayout/MainLayout";
import UpdateProfile from "./assets/Components/UpdateProfile/UpdateProfile";
import Estate_Details from "./assets/Components/Estate_Details/Estate_Details";
import Register from "./assets/Components/Register/Register";
import Log_In from "./assets/Components/Log_In/Log_In";
import FirebaseProvider from "./assets/Components/FirebaseProvier/FirebaseProvider";
import ErrorPage from "./assets/Components/ErrorPage/ErrorPage";
import Blogs from "./assets/Components/Blogs/Blogs";
import Private_Route from "./assets/Components/Private_Route/Private_Route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage title='Error'></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Homepage title='Empire Properties'></Homepage>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "estate_details/:id",
        element: (
          <Private_Route>
            <Estate_Details title='Estate Details'></Estate_Details>
          </Private_Route>
        ),
        loader: () => fetch(`/data.json`),
      },
      {
        path: "/update-profile",
        element: <UpdateProfile title='Update Profile'></UpdateProfile>,
      },
      {
        path: "/register",
        element: <Register title='Register'></Register>,
      },
      {
        path: "/log_in",
        element: <Log_In title='Log In'></Log_In>,
      },
      {
        path: "/blogs",
        element: <Blogs title='Blogs'></Blogs>,
      },
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
