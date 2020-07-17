import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Form from 'components/atoms/Form';
const Head = styled.h1`
font-size:5rem;
`
const Login = () =>{
    return(
        <Form
        initial={{x:'150%',y:'60%'}}
        animate={{ x:'70%' }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 10
        }}
        >
            <Head>Log In</Head>
            <Input/>
            <Input/>
            <Button type='submit'>Log In</Button>
        </Form>
    )
} 
export default Login;