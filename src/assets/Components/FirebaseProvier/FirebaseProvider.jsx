import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

export const AuthContext = createContext(null);
const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);
  console.log(user);
  console.log(loading);

  //Providers:
  const googleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  //Observer:
  useEffect(() => {
   const unSubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setLoading(false)
    });
    return ()=>unSubscribe();
  }, []);

  //Register:
  const registerAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Login :
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //LogOut:

  const logOut = () => {
    setUser(null);
    signOut(auth);
  };

  //Google:

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //Github:
  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, GithubProvider);
  };

  //Facebook:

  const facebookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };
  const allValues = {
    user,
    registerAccount,
    logIn,
    googleLogin,
    githubSignIn,
    facebookLogin,
    logOut,
    loading
  };
  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

FirebaseProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
export default FirebaseProvider;
