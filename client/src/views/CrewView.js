import React,{useState,useContext,useEffect} from 'react';
import {useLocation} from 'react-router-dom'
import {LoggedContext} from 'contexts/LoggedContext';
import DefWrapper from 'components/atoms/DefWrapper';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Form from 'components/atoms/Form';
import Valid from 'components/atoms/Valid';
import {Header,Photo,Text,Desc,Main,StyledSwitch} from './styled/styledCrewView';
import Switch from 'components/atoms/Switch';
import Conversation from './crewViews/Conversation';
import Meetings from './crewViews/Meetings';
const CrewView = ()=>{
    const {logData,setLogData}=useContext(LoggedContext);
    const [photo,setPhoto]=useState('')
    const [input,setInput]=useState('s')
    const [log,setLog]=useState(false)
    const [circle,setCircle]=useState(true)
    const [valid,setValid]=useState(false)
    let location = useLocation();
    const name = location.pathname.split("/").pop();
    const submit = async(e)=>{
        e.preventDefault()
        e.target.reset()
        const truefun =async(data)=>{
            const dataObj={...logData,groups:[...logData.groups,name]}
            localStorage.setItem('logData',JSON.stringify(dataObj))
            setLogData(dataObj)
            setLog(data)
            await fetch(`http://localhost:5000/users/group`,{
                method:"PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({login:logData.username,crewname:name})
            })
            .then(response => response.json())
            .then(data=>console.log(data))
            .catch(err=>console.log(err))
        }
        await fetch(`http://localhost:5000/crews/auth/${name}/${input}`,{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(logData)
        })
            .then(response => response.json())
            .then(data =>data?truefun(data):setValid(true))
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
            {log?(<>
                <StyledSwitch><Switch circle={circle} setCircle={()=>setCircle(!circle)}/></StyledSwitch>
                {
                    circle?(
                        <Conversation user={logData.username} groupId={log._id} name={name}/>
                    ):
                    (
                       <Meetings user={logData.username} groupId={log._id}/>
                    )
                }
                </>
            ):(
                <Form scnd onSubmit={submit}>
                    {valid&&<Valid>Invalid password</Valid>}
                    <Desc>You must enter a password, to see group</Desc>
                    <Input type='password' onChange={change}/>
                    <Button>Enter</Button>
                </Form>
            )}
            </Main>
        </DefWrapper>
    )
}

export default CrewView;