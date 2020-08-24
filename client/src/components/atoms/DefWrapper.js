import React from 'react';
import styled,{css} from 'styled-components';
const Wrapper = styled.div`
height: 100%;
width:100%;
padding:50px;
overflow:hidden;
box-sizing:content-box;
@media (max-width: 500px) {
    padding:20px;
    ${({ flex }) =>
    flex &&
    css`
        overflow-x: hidden; 
        overflow-y: auto;
    `}
}
`
const DefWrapper = ({children,flex})=><Wrapper flex={flex}>{children}</Wrapper>
export default DefWrapper
