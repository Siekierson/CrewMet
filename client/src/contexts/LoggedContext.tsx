import React, { createContext, useState, ReactNode } from "react";

export const LoggedContext = createContext<any>(null);

const LoggedProvider: React.FC<ReactNode> = ({ children }) => {
  const [logData, setLogData] = useState<any>(false);
  const [wait, setWait] = useState<any>(false);
  const [photos, setPhotos] = useState<any>(false);
  return (
    <LoggedContext.Provider
      value={{ logData, setLogData, wait, setWait, photos, setPhotos }}
    >
      {children}
    </LoggedContext.Provider>
  );
};

export default LoggedProvider;
