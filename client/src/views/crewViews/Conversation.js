import React,{useState} from 'react';
import styled from 'styled-components';

const Form = styled.form`
position:absolute;
bottom:17%;
height:70%;
width:100%;
background-color: #fff;
`
const Input = styled.input`
position:absolute;
bottom:0;
width:100%;
background-color: transparent;
border:none;
padding:10px;
border-bottom:2px solid white;
`
const H1 = styled.h1`
font-size:4rem;
`
const Conversation = () =>{
    return(
        <>
        <H1>Conversation</H1>
        <Form>
            <Input type='text' placeholder='text to crew'/>
        </Form>
        </>
    )
}
export default Conversation;