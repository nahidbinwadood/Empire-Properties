import PropTypes from "prop-types";
import UseAuth from "../Hook/UseAuth";
import { Navigate, useLocation } from "react-router-dom";

const Private_Route = ({children}) => {

        const {user,loading}=UseAuth();
        const location=useLocation();
        if(loading){
            return <div className=" mt-20 flex items-center justify-center"><span className="loading loading-spinner text-neutral"></span></div>
        }
        if(!user){
            return <Navigate to='/log_in' state={location?.pathname || '/'}></Navigate>
        }
    return (
        <div>
            {children}
        </div>
    );
};
Private_Route.propTypes = {
    children: PropTypes.object.isRequired,
  };
export default Private_Route;