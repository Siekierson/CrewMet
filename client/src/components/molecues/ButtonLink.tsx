import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ButtonIn } from "../atoms/Button";
interface Props {
  text: string;
  path: string;
  onClick?: () => void;
  children?: ReactNode;
}
const ButtonLink = ({ text, onClick, path, children }: Props) => {
  return (
    <Link onClick={() => onClick} to={path}>
      <ButtonIn>
        {text}
        {children && children}
      </ButtonIn>
    </Link>
  );
};
export default ButtonLink;
