import React,{useState,useContext} from 'react';
import styled from 'styled-components';
import Form from 'components/atoms/Form';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import {LoggedContext} from 'contexts/LoggedContext';
const Header = styled.h1`
font-size:5rem;
margin-bottom:40px;
`
const Info = styled.h2`
font-size:3rem;
color:${({scnd})=>scnd?'green':'red'};
`

const CreateCrewView = () =>{
    const {logData}=useContext(LoggedContext);
    const [info,setInfo]=useState([false,false])
    const [inputs,setInputs] = useState({});
    const change = (e)=>setInputs({...inputs,
        [e.target.name]:e.target.value
    })
    const submit=async(e)=>{
        e.preventDefault();
        setInputs({...inputs,
            members:logData.username,
            heads:logData.username   
        })
        e.target.reset();
        setInfo([true,null])
        const fetchFun=async()=>{
            await fetch(`http://localhost:5000/crews/add`,{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputs)
            })
        setInfo([true,true])
        await fetch(`http://localhost:5000/users/group`,{
            method:"PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({login:logData.username,crewname:inputs.crewname})
        })
        }
        const exist= await fetch(`http://localhost:5000/crews/exist/${inputs.crewname}`).then(res=>res.json())
        exist&&inputs.crewname&&inputs.description&&inputs.password?(fetchFun()):(setInfo([true,false]))
    }
    return(
        <Form id='createCrew' onSubmit={submit} initial={{x:'130%',y:'20%'}}>
            <Header>Create your crew</Header>
            {info[0]&&<Info scnd={info[1]}>{info[1]?'Crew created':'Something gone wrong'}</Info>}
            <Input name='crewname' change={change}/>
            <Input name='description' change={change}/>
            <Input name='password' change={change}/>
            <Input name='photo' change={change}/>
            <Button type='submit'>Create crew</Button>
        </Form>
    )
}
export default CreateCrewView;