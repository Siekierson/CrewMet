import React from "react";
import { Link } from "react-router-dom";
import { ButtonIn } from "../atoms/Button";
interface Props {
  text: string;
  path: string;
  onClick?: () => void;
}
const ButtonLink = ({ text, onClick, path }: Props) => {
  return (
    <Link onClick={() => onClick} to={path}>
      <ButtonIn>{text}</ButtonIn>
    </Link>
  );
};
export default ButtonLink;
