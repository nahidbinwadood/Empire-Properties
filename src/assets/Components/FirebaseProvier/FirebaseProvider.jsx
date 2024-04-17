import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);

  //Providers:
  const googleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();

  //Observer:
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  //Register:
  const registerAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Login :
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };



  //Google:

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };


 //Github:
 const githubSignIn=()=>{
    return signInWithPopup(auth,GithubProvider);
 } 
  const allValues = {
    registerAccount,
    logIn,
    googleLogin,
    githubSignIn
  };
  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

FirebaseProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
export default FirebaseProvider;
