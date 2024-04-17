import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import  { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Toaster></Toaster>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;