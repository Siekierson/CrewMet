import React from 'react';
import styled from 'styled-components';
import ButtonLink from 'components/molecues/ButtonLink';
import {motion} from 'framer-motion';
const Wrapper = styled.div`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
z-index:3;
text-align:center;
` 
const Slogan = styled(motion.h1)`
padding:30px;
font-size:7rem;
color: white;
`
const BtnMotion = styled(motion.div)`
padding:10px;
`
const BasiView = () =>{
  
    return(
      <>
       <Wrapper>
         <Slogan
         initial={{opacity:0,y:'50%'}}
         animate={{opacity:1,y:'0%'}}
         transition={{
          duration: 1,
          delay: .5,
          type: "spring",
          stiffness: 60,
          damping: 10
           }}
         >
          Lets take meets with your crew ! 
         </Slogan>
        <BtnMotion
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
         duration: 1,
         delay: 1,
          }}>
        <ButtonLink 
        path='/login'
        >Create account/Log in</ButtonLink>
        </BtnMotion>
       </Wrapper>
      </>
  )
}
export default BasiView;