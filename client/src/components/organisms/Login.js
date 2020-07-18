import React,{useState} from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Form from 'components/atoms/Form';
const Head = styled.h1`
font-size:5rem;
`
const Login = () =>{
    const [inputs,setInputs] = useState({})
    const change = (e)=>setInputs({...inputs,
        [e.target.name]:e.target.value
    })
    return(
        <Form
        initial={{x:'150%',y:'60%'}}
        animate={{ x:'70%' }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 10
        }}
        onSubmit={async(e)=>{
            e.preventDefault()
            const {username,password}=inputs
            await fetch(`http://localhost:5000/users/auth/${username}/${password}`)
             .then(response => response.json())
            .then(data => console.log(data));
        }}
        >
            <Head>Log In</Head>
            <Input name='username' change={change}/>
            <Input name='password' change={change}/>
            <Button type='submit'>Log In</Button>
        </Form>
    )
} 
export default Login;