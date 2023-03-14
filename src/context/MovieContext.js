import React, { createContext } from "react";
export const MovieContext = createContext();
const MovieContextProvider = ({ children }) => {
  const values = {};
  return <MovieContext.Provider>{children}</MovieContext.Provider>;
};

export default MovieContextProvider;
