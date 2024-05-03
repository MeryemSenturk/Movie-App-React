import React, { createContext, useContext } from 'react'
import { useState } from 'react';

const AuthContext = createContext()


//*custom hook
export const useAuthContext = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {

 const [currentUser, setCurrentUser] = useState(false)

  const values = { currentUser };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider