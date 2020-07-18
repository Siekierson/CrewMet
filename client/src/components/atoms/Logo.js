import React from 'react'
import styled from 'styled-components';
const Log = styled.h1`
font-family: 'Permanent Marker',sans-serif;
font-size:5rem;
line-height:100%;
color:${({color})=>color};
`
const Logo = ({color}) =><Log color={color}>CrewMet</Log>

export default Logo