import React, { ReactNode } from "react";
import styled from "styled-components";

const SValid = styled.h2`
  font-size: 3rem;
  color: ${(scnd: boolean) => (scnd ? "green" : "red")};
  @media (max-width: 500px) {
    font-size: 1.8rem;
  }
`;
interface Props {
  children: ReactNode;
  scnd?: boolean | null;
}
const Valid = ({ children, scnd }: Props) => (
  <SValid scnd={scnd}>{children}</SValid>
);

export default Valid;
