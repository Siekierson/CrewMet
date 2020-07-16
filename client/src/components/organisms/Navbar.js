import React from 'react'
import Logo from 'components/atoms/Logo';
import styled from 'styled-components';

const Wrapper = styled.nav`
width:100vw;
height:100px;
position:fixed;
top:0;
left:0;
padding:20px 40px;
border-bottom:4px solid orange;
z-index:99;
`
const Navbar = () =>{
    return(
        <Wrapper>
            <Logo/>
        </Wrapper>
    )
}
export default Navbar