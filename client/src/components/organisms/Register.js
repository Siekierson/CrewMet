import React,{useState} from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Form from 'components/atoms/Form';
const Head = styled.h1`
font-size:5rem;
`
const Valid = styled.h2`
font-size:3rem;
color:red;
`
const Register = ({toLog}) =>{
    const [inputs,setInputs] = useState({})
    const [valid,setValid] = useState(false)
    const change = (e)=>setInputs({...inputs,
        [e.target.name]:e.target.value
    })
    return(
        <Form
        initial={{x:'60%',y:'20%'}}
        animate={{x:'200%'}}
        transition={{
            type: "spring",
            stiffness: 160,
            damping: 10
          }}
        onSubmit={async(e)=>{
            e.preventDefault();
            await fetch('http://localhost:5000/users/add',{
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(inputs)
            }).then(data=>data.json()).then(res=>res==="User added!"?toLog(true):setValid(true))
        }}
        >
              <Head>Register</Head>
              {valid&&<Valid>Invalid fields or user arleady exist</Valid>}
            <Input name='username' holder='username' change={change}/>
            <Input name='password' holder='password' change={change}/>
            <Input name='email' holder='email' change={change}/>
            <Button type='submit'>Create Account</Button>
        </Form>
    )
} 
export default Register;