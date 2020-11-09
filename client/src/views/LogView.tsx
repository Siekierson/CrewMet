import React, { useState } from "react";
import styled from "styled-components";
import Switch from "components/atoms/Switch";
import Login from "components/organisms/Login";
import Register from "components/organisms/Register";

const Wrapper = styled.div`
  /* padding-top: -50px; */
`;

const LogView = () => {
  const [logReg, setLogReg] = useState(true);
  return (
    <Wrapper>
      <Switch circle={logReg} setCircle={() => setLogReg(!logReg)} />
      {logReg ? <Login /> : <Register toLog={setLogReg} />}
    </Wrapper>
  );
};
export default LogView;
