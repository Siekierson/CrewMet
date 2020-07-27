import React,{useContext,useState,useEffect} from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import ButtonLink from 'components/molecues/ButtonLink';
import Input from 'components/atoms/Input';
import Form from 'components/atoms/Form';
import {Redirect} from 'react-router-dom';
import {LoggedContext} from 'contexts/LoggedContext';
import Valid from 'components/atoms/Valid';
const Head = styled.h1`
font-size:5rem;
`
const Login = () =>{
    const {setLogData,setWait} = useContext(LoggedContext)
    const [inputs,setInputs] = useState({})
    const [rdr,setRdr]=useState(null)
    const [ls,setLs]=useState(null)
    const change = (e)=>setInputs({...inputs,
        [e.target.name]:e.target.value
    })
    const isLogged = (data)=>{
        setRdr(true)
        setLogData(data)
        localStorage.setItem('logData',JSON.stringify(data))
    }
    const storagedLogin = ()=>{
        setLogData(ls)
    }
    const submit =async(e)=>{
        e.preventDefault()
        e.target.reset()
        setWait(true)
        const {username,password}=inputs
        await fetch(`http://localhost:5000/users/auth/${username}/${password}`)
         .then(response => response.json())
        .then(data => data?isLogged(data):setRdr(false))
        .catch(err=>setRdr(false))
    }
    useEffect(()=>{
        const newls=JSON.parse(localStorage.getItem('logData'))
        setLs(newls);
    },[])
    return(
        <Form
        initial={{x:'150%',y:'20%'}}
        animate={{ x:'70%' }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 10
        }}
        onSubmit={submit}
        >
            {rdr&&<Redirect to='/home'/>}
            <Head>Log In</Head>
            {rdr===false&&<Valid>Invalid fields or user is not exist</Valid>}
            <Input name='username' placeholder='username' onChange={change}/>
            <Input name='password' type='password' holder='password' onChange={change}/>
            <Button type='submit'>Log In</Button>
            {ls&&<ButtonLink onClick={storagedLogin} path='/home'>Or log as {ls.username}</ButtonLink>}
        </Form>
    )
} 
export default Login;