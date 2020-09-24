import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 50px;
  overflow: hidden;
  box-sizing: content-box;
  @media (max-width: 500px) {
    padding: 20px;
    ${(flex: boolean) =>
      flex &&
      css`
        overflow-x: hidden;
        overflow-y: auto;
      `}
  }
`;
type Props = {
  children: ReactNode;
  flex?: boolean;
};
const DefWrapper = ({ children, flex }: Props) => (
  <Wrapper flex={flex}>{children}</Wrapper>
);
export default DefWrapper;
