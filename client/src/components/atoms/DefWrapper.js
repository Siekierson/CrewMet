import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
height: 100%;
width:100%;
padding:50px;
box-sizing:content-box;
`
const DefWrapper = ({children})=><Wrapper>{children}</Wrapper>
export default DefWrapper
