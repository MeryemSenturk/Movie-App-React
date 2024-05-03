import React, { createContext, useContext } from 'react'
import { useState} from 'react';
import { useNavigate } from "react-router-dom";
import {auth} from "../auth/firebase.js"
import {createUserWithEmailAndPassword} from "firebase/auth"

const AuthContext = createContext()


//*custom hook
export const useAuthContext = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {

 const [currentUser, setCurrentUser] = useState(false)
 const navigate = useNavigate();

 const createUser = async(email,password) => {
  try {
    const userCredential=  await createUserWithEmailAndPassword(auth, email, password);
    navigate("/login")
    console.log(userCredential);
    
   } catch (error) {
    console.log(error);
    
   }
 }

  const values = { currentUser, createUser };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider