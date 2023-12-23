import React, { createContext, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";

const auth = getAuth(app);
export const AuthPovider = createContext(null);

const ContextProvider = ({ children }) => {

  const providerFB = new FacebookAuthProvider();
  const FBSignIn = () => {
    return signInWithPopup(auth, providerFB);
  };

  const providerGoogle = new GoogleAuthProvider();
  const GoogleSignIn = () => {
    return signInWithPopup(auth, providerGoogle);
  };

  const providerX = new GoogleAuthProvider();
  const TwitterSignIn = () => {
    return signInWithPopup(auth, providerX);
  };


  const authentication = {FBSignIn, GoogleSignIn, TwitterSignIn}
  return (
    <AuthPovider.Provider value={authentication}>
      {children}
    </AuthPovider.Provider>
  );
};

export default ContextProvider;
