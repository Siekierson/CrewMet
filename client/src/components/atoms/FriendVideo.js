import React from 'react'
import styled from 'styled-components';
const Video = styled.video`
position:absolute;
bottom:0;
z-index:-2;
` 
const Shadow = styled.div`
position:absolute;
height:100vh;
width:100vw;
background-color: rgba(0,0,0,.8);
z-index:-1;

`
const FriendVideo = () =>(
    <>
    <Shadow/>
    <Video loop muted autoPlay>
        <source src={require('assets/friends.mp4')} type="video/mp4" />
    </Video>
    </>
    )

export default FriendVideo