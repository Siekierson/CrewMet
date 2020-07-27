import React,{useState,useContext,useEffect} from 'react';
import { useLocation } from 'react-router-dom'
import {LoggedContext} from 'contexts/LoggedContext';
import DefWrapper from 'components/atoms/DefWrapper';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Form from 'components/atoms/Form';
import Valid from 'components/atoms/Valid';
import {Header,Photo,Text,Desc,Main,Wrap} from './styled/styledCrewView';

const CrewView = ()=>{
    const {logData}=useContext(LoggedContext);
    const [photo,setPhoto]=useState('')
    const [input,setInput]=useState('')
    const [log,setLog]=useState(false)
    const [valid,setValid]=useState(false)
    let location = useLocation();
    const name = location.pathname.split("/").pop();
    const submit = async(e)=>{
        e.preventDefault()
        e.target.reset()
        await fetch(`http://localhost:5000/crews/auth/${name}/${input}`)
            .then(response => response.json())
            .then(data =>data?setLog(true):setValid(true))
            .catch(err=>console.log(err))
    }
    const change=(e)=>setInput(e.target.value)
    useEffect(() =>{
        const a =async()=>{
            await fetch(`http://localhost:5000/crews/photoDesc/${name}`)
            .then(response => response.json())
            .then(data =>setPhoto(data))
            .catch(err=>console.log(err))
            await fetch(`http://localhost:5000/crews/belong/${name}/${logData.username}`)
            .then(response => response.json())
            .then(data =>setLog(data))
            .catch(err=>console.log(err))
        }
        a()
    } , [name,logData.username])
    return(
        <DefWrapper>
            <Header>
                <Photo src={photo[0]}/>
                <Text>{name}</Text>
                <Desc>{photo[1]}</Desc>
            </Header>
            <Main>
            {log?('jset'):(
                <Wrap>
                <Form onSubmit={submit}>
                    {valid&&<Valid>Invalid password</Valid>}
                    <Desc>You must enter a password, to see group</Desc>
                    <Input type='password' onChange={change}/>
                    <Button>Enter</Button>
                </Form>
                </Wrap>
            )}
            </Main>
        </DefWrapper>
    )
}

export default CrewView;