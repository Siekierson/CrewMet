import React,{useState,useEffect,useContext} from 'react';
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
    const {logData,setLogData}=useContext(LoggedContext);
    const [info,setInfo]=useState([false,false])
    const [inputs,setInputs] = useState({});
    const change = (e)=>setInputs({...inputs,
        [e.target.name]:e.target.value
    })
    const submit=async(e)=>{
        e.preventDefault();
        e.target.reset();
        setInfo([true,null])
        const fetchFun=()=>{
            fetch(`http://localhost:5000/crews/add`,{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputs)
                })
            setInfo([true,true])
             fetch(`http://localhost:5000/users/group`,{
            method:"PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({login:logData.username,crewname:inputs.crewname})
            })
        localStorage.setItem('logData',JSON.stringify({...logData,groups:[...logData.groups,inputs.crewname]}))
        setLogData({...logData,groups:[...logData.groups,inputs.crewname]})
        }
        const exist= await fetch(`http://localhost:5000/crews/exist/${inputs.crewname}`).then(res=>res.json())
        exist&&inputs.member&&inputs.crewname.length>4&&inputs.description.length>4&&inputs.password.length>4?(fetchFun()):(setInfo([true,false]))
    }
    useEffect(() => {
        setInputs({member:logData.username})
    }, [logData])
    return(
        <Form id='createCrew' onSubmit={submit} initial={{x:'130%',y:'20%'}}>
            <Header>Create your crew</Header>
            {info[0]&&<Info scnd={info[1]}>{info[1]?'Crew created':'Something gone wrong'}</Info>}
            <Input name='crewname' placeholder='name of crew' onChange={change}/>
            <Input name='description' placeholder='description'onChange={change}/>
            <Input name='password' type='password' placeholder='password to group' onChange={change}/>
            <Input name='photo' placeholder='link to photo (not required)' onChange={change}/>
            <Button type='submit'>Create crew</Button>
        </Form>
    )
}
export default CreateCrewView;