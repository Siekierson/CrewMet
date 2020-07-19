import React from 'react';
import styled from 'styled-components';

const InputIn = styled.input`
padding:15px 30px;
border-radius:40px;
background-color: transparent;
border:1px solid #fff;
font-size:3rem;
outline:none;
display:block;
margin:10px;
transition:.5s;
:focus{
    border:1px solid orange;
}
`

const Input = ({name,change,ref})=>(
    <InputIn name={name} ref={ref} onChange={change}/>
)
export default Input;