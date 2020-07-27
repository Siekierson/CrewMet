import React from 'react';
import styled from 'styled-components';

const SValid = styled.h2`
font-size:3rem;
color:red;
` 

const Valid = ({children}) =><SValid>{children}</SValid> 

export default Valid;