import styled from "styled-components";
import { Link } from "react-router-dom";
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 65px;
  width: calc(100% - 100px);
  margin: auto;
  display: flex;
  overflow-y: hidden;
  overflow-x: auto;
  @media (max-width: 500px) {
    height: 100px;
    width: calc(100vw - 40px);
  }
`;
export const Item = styled(Link)`
  display: flex;
  height: 100%;
  width: 200px;
  margin-right: 10%;
  text-decoration: none;
  text-align: center;
`;
export const Photo = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  display: block;
`;
export const Text = styled.h3`
  font-size: 1.3rem;
  line-height: 100%;
  padding: 15% 10%;
`;
