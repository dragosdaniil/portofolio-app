import React, { useContext, useState, useEffect } from "react";
import dataset from "./data";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataset.content);
  }, []);

  return <AppContext.Provider value={{ data }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
