import React from "react";
import styled from "styled-components";
const Log = styled.h1`
  font-family: "Permanent Marker", sans-serif;
  font-size: 2.5rem;
  text-align: center;
  line-height: 100%;
  color: ${(color: string) => color};
  /* @media (max-width: 500px) {
    font-size: 3rem;
  } */
`;
type clr = {
  color: string;
};
const Logo = ({ color }: clr) => <Log color={color}>CrewMet</Log>;

export default Logo;
