import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/organisms/Navbar";
import FriendVideo from "components/atoms/FriendVideo";
import LoggedProvider from "contexts/LoggedContext";
import RouterSwitch from "components/organisms/RouterSwitch";

const App = () => {
  return (
    <LoggedProvider>
      <BrowserRouter>
        <FriendVideo />
        <Navbar />
        <RouterSwitch />
      </BrowserRouter>
    </LoggedProvider>
  );
};

export default App;
