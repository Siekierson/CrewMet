import React, { useState } from "react";
import Switch from "components/atoms/Switch";
import LogingForm from "components/organisms/LogingForm";
import Login from "components/organisms/Login";
import Register from "components/organisms/Register";
import { logVariant, regVariant } from "framerVariants/login";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
const Wrapper = styled(motion.div)`
  position: absolute;
  height: 50vh;
  width: 40vw;
  ${(scnd: boolean) =>
    scnd &&
    css`
      top: 40%;
      left: 60%;
    `}

  transform:translate(-50%,-50%);
`;

const LogView = () => {
  const [logReg, setLogReg] = useState(true);
  return (
    <>
      <Switch circle={logReg} setCircle={() => setLogReg(!logReg)} />
      {/* {logReg ? <Login /> : <Register toLog={setLogReg} />} */}
      {logReg ? (
        <Wrapper variants={logVariant} initial="hidden" animate="visible">
          <LogingForm toLog={setLogReg} variant={logVariant} type={true} />
        </Wrapper>
      ) : (
        <Wrapper variants={regVariant} initial="hidden" animate="visible">
          <LogingForm toLog={setLogReg} variant={regVariant} type={false} />
        </Wrapper>
      )}
    </>
  );
};
export default LogView;
