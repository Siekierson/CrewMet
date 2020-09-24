import React, { createContext, useState } from "react";

export const LoggedContext = createContext(null);

const LoggedProvider = ({ children }) => {
  const [logData, setLogData] = useState(false);
  const [wait, setWait] = useState(false);
  const [photos, setPhotos] = useState(false);
  return (
    <LoggedContext.Provider
      value={{ logData, setLogData, wait, setWait, photos, setPhotos }}
    >
      {children}
    </LoggedContext.Provider>
  );
};

export default LoggedProvider;
