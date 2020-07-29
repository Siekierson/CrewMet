import React,{useState} from 'react'
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Form from 'components/atoms/Form';
const All = styled.div`
`
const Create=styled(Form)`
background: #000;
padding:30px;

`
const Meetings = () =>{
    const [create,setCreate]=useState(false);
    const [inputs,setInputs] = useState({});
    const change = (e)=>setInputs({...inputs,
        [e.target.name]:e.target.value
    })
    const submit = (e) =>{
        e.preventDefault()
        e.target.reset()
        console.log(inputs)
    }
    return(
        <>
        <h1>Upcoming meetings</h1><Button onClick={()=>setCreate(!create)}>Create Meeting</Button>
        {create&&(<Create scnd onSubmit={submit}>
                <h1>Creating</h1>
                <Input placeholder='name of meet' onChange={change} name='meetname' required/>
                <Input placeholder='description' onChange={change} name='description' required/>
                <Input placeholder='where ?' onChange={change} name='location' required/>
                <label>When ? <Input type='date' onChange={change} name='date' required/></label>
                <label>At ? <Input type='time' onChange={change} name='time' required/></label>
                <Button>Create Meet</Button>
                </Create>)}
        <All>
        {

        }
        </All>
        </>
    )
}
export default Meetings;