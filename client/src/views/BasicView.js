import React from 'react';
import styled from 'styled-components';
import ButtonLink from 'components/molecues/ButtonLink'
const Wrapper = styled.div`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
z-index:3;
text-align:center;
` 
const Slogan = styled.h1`
padding:30px;
font-size:7rem;
color: white;
`

const BasiView = () =>{
    return(
      <>
       <Wrapper>
         <Slogan>
          Lets take meets with your crew ! 
         </Slogan>
        <ButtonLink path='/login'>Create account/Log in</ButtonLink>
       </Wrapper>
      </>
  )
}
export default BasiView;