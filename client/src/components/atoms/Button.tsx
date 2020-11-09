import React, { ReactNode } from "react";
import styled from "styled-components";
export const ButtonIn = styled.button`
  padding: 14px 35px;
  font-size: 2.8rem;
  border-radius: 45px;
  color: white;
  border: 1px solid white;
  transition: 0.5s;
  background-color: transparent;
  outline: none;
  margin: 10px 5px;
  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  @media (max-width: 500px) {
    font-size: 2rem;
    padding: 10px 25px;
  }
`;
type Props = {
  children: ReactNode;
  onClick?: () => void;
  type?: string;
};
const Button = ({ children, onClick, type }: Props) => {
  return (
    <ButtonIn type={type} onClick={onClick}>
      {children}
    </ButtonIn>
  );
};
export default Button;
