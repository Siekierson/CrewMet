import React, { ReactNode } from "react";
import styled from "styled-components";

const SValid = styled.h2`
  font-size: 1.5rem;
  color: ${({ scnd }: any) => (scnd ? "green" : "red")};
`;
interface Props {
  children: ReactNode;
  scnd?: boolean | null;
}
const Valid = ({ children, scnd }: Props) => (
  <SValid scnd={scnd}>{children}</SValid>
);

export default Valid;
