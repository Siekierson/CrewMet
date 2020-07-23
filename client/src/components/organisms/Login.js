import React,{useContext,useState} from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Form from 'components/atoms/Form';
import {Redirect} from 'react-router-dom';
import {LoggedContext} from 'contexts/LoggedContext'
const Head = styled.h1`
font-size:5rem;
`
const Valid = styled.h2`
font-size:2rem;
color:red;
`
const Login = () =>{
    const {setLogData,setWait} = useContext(LoggedContext)
    const [inputs,setInputs] = useState({})
    const [rdr,setRdr]=useState(null)
    const change = (e)=>setInputs({...inputs,
        [e.target.name]:e.target.value
    })
    const isLogged = (data)=>{
        setRdr(true)
        setLogData(data)
    }
    return(
        <Form
        initial={{x:'150%',y:'20%'}}
        animate={{ x:'70%' }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 10
        }}
        onSubmit={async(e)=>{
            e.preventDefault()
            setWait(true)
            const {username,password}=inputs
            await fetch(`http://localhost:5000/users/auth/${username}/${password}`)
             .then(response => response.json())
            .then(data => data?isLogged(data):setRdr(false))
            .catch(err=>setRdr(false))
        }}
        >
            {rdr&&<Redirect to='/home'/>}
            <Head>Log In</Head>
            {rdr===false&&<Valid>Invalid fields or user is not exist</Valid>}
            <Input name='username' change={change}/>
            <Input name='password' change={change}/>
            <Button type='submit'>Log In</Button>
        </Form>
    )
} 
export default Login;