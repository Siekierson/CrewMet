import React from 'react'
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
const FormIn = styled(motion.form)`
position:absolute;
height: 50vh;
width:30vw;
${({ scnd }) =>
    scnd &&
    css`
      top:50%;
      left:50%;
    `}
transform:translate(-50%,-50%);
`
const Form = ({scnd,children,animate,initial,transition,onSubmit}) =>{
    const props = {scnd,animate,initial,transition,onSubmit};
    return(
        <FormIn {...props}>{children}</FormIn>
        )
}
export default Form;
