import React, { createContext, useEffect, useState } from "react";
import Loader from '../Loader';
import fire from './fireB';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setTimeout(() => {
        setPending(false)
      }, 1000);
    });
  }, []);

  if(pending){
    return <><Loader/></>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};