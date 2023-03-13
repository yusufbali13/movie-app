import React, { createContext } from "react";

// export const {Provider} = createContext()
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const values = { currentUser: { displayName: "felix franko" } };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
