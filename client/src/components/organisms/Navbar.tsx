import React from "react";
import Logo from "components/atoms/Logo";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.nav`
  width: 100vw;
  /* height: 100px; */
  position: fixed;
  top: 0;
  left: 0;
  padding: 15px 30px;
  border-bottom: 3px solid orange;
  @media (max-width: 500px) {
    /* height: 60px; */
  }
`;
const Navbar = () => {
  return (
    <Wrapper>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo color="white" />
      </Link>
    </Wrapper>
  );
};
export default Navbar;
