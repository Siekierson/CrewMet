
import React, { createContext, useState } from 'react';

export const LoggedContext = createContext();

const LoggedProvider = (props) => {
  const [logData,setLogData] = useState(false);
  const [wait,setWait] = useState(false);
  const [photos,setPhotos] = useState(false);
  return (
    <LoggedContext.Provider value={{logData,setLogData,wait,setWait,photos,setPhotos}}>
      {props.children}
    </LoggedContext.Provider>
  )
}

export default LoggedProvider;