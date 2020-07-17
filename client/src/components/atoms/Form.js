import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
const FormIn = styled(motion.form)`
position:absolute;
height: 50vh;
width:30vw;
transform:translate(-50%,-50%);
`
const Form = ({children,animate,initial,transition}) => (
<FormIn animate={animate} initial={initial} transition={transition}>{children}</FormIn>
)
export default Form;
