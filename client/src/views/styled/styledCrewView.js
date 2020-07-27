import styled from 'styled-components';
export const Header = styled.div`
width:350px;
height:100%;
position:absolute;
padding:20px;
display:flex;
flex-wrap:wrap;
background-color: rgba(0,0,0,.5);
border-radius:50px;
text-align:center;
`
export const Photo = styled.img`
position:absolute;
left:50%;
top:15%;
transform:translate(-50%,-50%);
height: 180px;
width:180px;
border-radius:50%;
display:block;
`
export const Text = styled.h1`
font-size:4rem;
margin:70% 0 -100% 0;
width:100%;
`
export const Desc = styled.h2`
font-size:2.5rem;
font-weight:lighter;
width:100%;
`
export const Main = styled.div`
width:calc(94% - 350px);
height:100%;
margin-left:350px;
position:absolute;
/* background: #000; */
`
export const Wrap = styled.div`
position:absolute;
top:50%;
left:50%;
`