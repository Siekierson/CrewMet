import React from 'react';
import styled from 'styled-components';

const SValid = styled.h2`
font-size:3rem;
color:${({scnd})=>scnd?'green':'red'};
@media (max-width: 500px) {
    font-size:1.8rem;
}
` 

const Valid = ({children,scnd}) =><SValid scnd={scnd}>{children}</SValid> 

export default Valid;