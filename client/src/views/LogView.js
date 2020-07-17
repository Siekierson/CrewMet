import React,{useState} from 'react';
import styled from 'styled-components';
import Switch from 'components/atoms/Switch';
import Login from 'components/organisms/Login';
import Register from 'components/organisms/Register';
import {motion} from 'framer-motion';
const Wrapper = styled.div`
padding-top:100px;
`

const LogView = () =>{
    const [logReg,setLogReg]=useState(true)
    return(
      <Wrapper>
       <Switch circle={logReg} setCircle={()=>setLogReg(!logReg)}/>
       {logReg?(
        <Login
        />):(
        <Register/>)}
       </Wrapper>
  )
}
export default LogView;