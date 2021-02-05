import React, { useState } from "react";
import Switch from "components/atoms/Switch";
import LogingForm from "components/organisms/LogingForm";
import Login from "components/organisms/Login";
import Register from "components/organisms/Register";
import { logVariant, regVariant } from "framerVariants/login";
import styled from "styled-components";
const Wrapper = styled.div`
  position: absolute;
  height: 50vh;
  width: 40vw;
  top: 60%;
  left: 60%;
  transform: translate(-50%, -50%);
`;

const LogView = () => {
  const [logReg, setLogReg] = useState(true);
  return (
    <>
      <Switch circle={logReg} setCircle={() => setLogReg(!logReg)} />
      <Wrapper>
        {logReg ? (
          <LogingForm variant={logVariant} toLog={setLogReg} type={true} />
        ) : (
          <LogingForm variant={logVariant} toLog={setLogReg} type={false} />
        )}
      </Wrapper>
    </>
  );
};
export default LogView;
