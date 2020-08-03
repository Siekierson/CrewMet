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
margin:${({conv})=>conv?'0':'10px'};
transition:.5s;
:focus{
    border:1px solid orange;
}
@media (max-width: 500px) {
    font-size: 1.8rem;
    padding:10px 12px;
}
`

const Input = ({name,conv,onChange,placeholder,type,ref})=>{
    const all = {
        name,onChange,conv,placeholder,type,ref
     }
    return(
    <InputIn {...all}/>
)}
export default Input;