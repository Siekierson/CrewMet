import React from 'react'
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
const FormIn = styled(motion.form)`
position:absolute;
height: 50vh;
width:40vw;
${({ scnd }) =>
    scnd &&
    css`
      top:40%;
      left:60%;
    `}
transform:translate(-50%,-50%);
`
const Form = ({scnd,children,animate,initial,transition,variants,onSubmit}) =>{
    const props = {scnd,animate,initial,transition,variants,onSubmit};
    return(
        <FormIn {...props}>{children}</FormIn>
        )
}
export default Form;
