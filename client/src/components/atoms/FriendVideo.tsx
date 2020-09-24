import React from "react";
import styled from "styled-components";
const Video = styled.video`
  position: fixed;
  bottom: 0;
  z-index: -2;
  width: 100%;
  @media (max-width: 700px) {
    height: 100%;
    width: auto;
    bottom: 20%;
    left: -1100px;
  }
`;
const Shadow = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  margin-top: -100px;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: -1;
  @media (max-width: 500px) {
    margin-top: -50px;
  }
`;
const FriendVideo = () => (
  <>
    <Shadow />
    <Video loop muted autoPlay>
      <source src={require("assets/friends.mp4")} type="video/mp4" />
    </Video>
  </>
);

export default FriendVideo;
