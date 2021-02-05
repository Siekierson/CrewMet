import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
interface Props {
  text: string;
  path: string;
  onClick?: () => void;
  children?: ReactNode;
}
const ButtonLink = ({ text, onClick, path, children }: Props) => {
  return (
    <Link to={path}>
      <Button onClick={onClick}>
        {text}
        {children && children}
      </Button>
    </Link>
  );
};
export default ButtonLink;
