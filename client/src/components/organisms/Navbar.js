import React from 'react'
import Logo from 'components/atoms/Logo';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const Wrapper = styled.nav`
width:100vw;
height:100px;
position:fixed;
top:0;
left:0;
padding:20px 40px;
border-bottom:4px solid orange;
`
const Navbar = () =>{
    return(
        <Wrapper>
            <Link to='/' style={{textDecoration:'none'}}><Logo color='white'/></Link>
        </Wrapper>
    )
}
export default Navbar