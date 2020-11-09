import React from "react";
import styled from "styled-components";
const Log = styled.h1`
  font-family: "Permanent Marker", sans-serif;
  font-size: 4rem;
  text-align: center;
  line-height: 100%;
  color: ${(color: string) => color};
`;
type clr = {
  color: string;
};
const Logo = ({ color }: clr) => <Log color={color}>CrewMet</Log>;

export default Logo;
