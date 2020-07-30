import React,{useState} from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Form from 'components/atoms/Form';
import Valid from 'components/atoms/Valid';
const Head = styled.h1`
font-size:5rem;
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
        animate={{x:'150%'}}
        transition={{
            type: "spring",
            stiffness: 160,
            damping: 10
          }}
        onSubmit={async(e)=>{
            e.preventDefault();
            await fetch('/users/add',{
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(inputs)
            }).then(data=>data.json()).then(res=>res==="User added!"?toLog(true):setValid(true))
        }}
        >
              <Head>Register</Head>
              {valid&&<Valid>Invalid fields or user arleady exist</Valid>}
            <Input name='username' placeholder='username' onChange={change}/>
            <Input name='password' type='password' placeholder='password' onChange={change}/>
            <Input name='email' placeholder='email' onChange={change}/>
            <Button type='submit'>Create Account</Button>
        </Form>
    )
} 
export default Register;