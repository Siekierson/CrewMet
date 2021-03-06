import React from "react";
import styled from "styled-components";
import ButtonLink from "components/molecues/ButtonLink";
import { motion } from "framer-motion";
const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  text-align: center;
  width: 100%;
  padding: 200px;
  @media (max-width: 500px) {
    padding: 40px;
  }
`;
const Slogan = styled(motion.h1)`
  font-size: 6rem;
  color: white;
  margin-bottom: 30px;
  width: 100%;
`;
const BtnMotion = styled(motion.div)``;
const BasicView = () => {
  return (
    <>
      <Wrapper>
        <Slogan
          initial={{ opacity: 0, y: "50%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: "spring",
            stiffness: 60,
            damping: 10,
          }}
        >
          Lets take meets with your crew !
        </Slogan>
        <BtnMotion
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          <ButtonLink path="/login" text="Create account / Log in" />
        </BtnMotion>
      </Wrapper>
    </>
  );
};
export default BasicView;
