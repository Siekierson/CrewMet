import React from 'react';
import styled from 'styled-components';

const SValid = styled.h2`
font-size:3rem;
color:red;
@media (max-width: 500px) {
    font-size:1.8rem;
}
` 

const Valid = ({children}) =><SValid>{children}</SValid> 

export default Valid;