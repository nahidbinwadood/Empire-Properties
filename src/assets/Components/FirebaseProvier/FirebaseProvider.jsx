import { createContext } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";


export const AuthContext=createContext(null);
const FirebaseProvider = ({children}) => {

    //Register:
    const register=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const allValues={
        register
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

FirebaseProvider.propTypes = {
    children: PropTypes.object.isRequired,
}
export default FirebaseProvider;