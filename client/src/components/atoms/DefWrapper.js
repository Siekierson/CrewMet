import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
height: 100%;
width:100%;
padding:50px;
overflow:hidden;
box-sizing:content-box;
display:${({flex})=>flex&&'flex'};
@media (max-width: 500px) {
    padding:20px;
}
`
const DefWrapper = ({children,flex})=><Wrapper flex={flex}>{children}</Wrapper>
export default DefWrapper
