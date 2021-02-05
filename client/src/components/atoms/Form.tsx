import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
const FormIn = styled(motion.form)`
  position: absolute;
  height: 50vh;
  width: 40vw;
  ${(scnd: boolean) =>
    scnd &&
    css`
      top: 10%;
      left: 120%;
    `}
  transform:translate(-50%,-50%);
`;
type Animation = {
  hidden: {
    x: string;
    y: string;
  };
  visible: {
    x: string;
    transition: {
      type: string;
      stiffness: number;
      damping: number;
    };
  };
};
interface Props {
  children: ReactNode;
  onSubmit: Function;
  animate?: string;
  initial?: string;
  create?: boolean;
  variants?: Animation;
  id?: string;
  auth?: boolean;
  scnd?: boolean;
}
const Form = (prop: Props) => {
  return <FormIn {...prop}>{prop.children}</FormIn>;
};
export default Form;
