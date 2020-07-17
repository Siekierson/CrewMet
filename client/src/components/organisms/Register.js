import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Form from 'components/atoms/Form';
const Head = styled.h1`
font-size:5rem;
`
const Register = () =>{
    return(
        <Form
        initial={{x:'60%',y:'50%'}}
        animate={{x:'200%'}}
        transition={{
            type: "spring",
            stiffness: 160,
            damping: 10
          }}>
              <Head>Register</Head>
            <Input/>
            <Input/>
            <Input/>
            <Button type='submit'>Create Account</Button>
        </Form>
    )
} 
export default Register;