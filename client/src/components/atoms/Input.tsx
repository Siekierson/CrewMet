import React from "react";
import styled from "styled-components";

const InputIn = styled.input`
  padding: 5px 10px;
  border-radius: 40px;
  background-color: transparent;
  border: 1px solid #fff;
  font-size: 1.5rem;
  outline: none;
  display: block;
  margin: ${(conv: boolean) => (conv ? "0" : "10px")};
  transition: 0.5s;
  :focus {
    border: 1px solid orange;
  }
  @media (max-width: 500px) {
    font-size: 1.8rem;
    padding: 10px 12px;
  }
`;
interface Props {
  onChange(e: any): void;
  placeholder?: string;
  type?: string;
  name?: string;
  conv?: boolean;
  required?: boolean;
  // ref:
}
const Input = ({
  onChange,
  placeholder,
  type,
  name,
  conv,
  required,
}: Props) => {
  const all = {
    name,
    onChange,
    conv,
    placeholder,
    type,
    // ref,
  };
  return <InputIn {...all} />;
};
export default Input;
