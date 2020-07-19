
import React, { createContext, useState } from 'react';

export const LoggedContext = createContext();

const LoggedProvider = (props) => {
  const [logData,setLogData] = useState(false);
  
  return (
    <LoggedContext.Provider value={{logData,setLogData}}>
      {props.children}
    </LoggedContext.Provider>
  )
}

export default LoggedProvider;