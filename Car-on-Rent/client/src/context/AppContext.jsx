import { useContext, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const value = {};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
