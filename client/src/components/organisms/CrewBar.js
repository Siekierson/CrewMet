import React,{useContext} from 'react';
import styled from 'styled-components';
import {LoggedContext} from 'contexts/LoggedContext'
const Wrapper = styled.div`
height:150px;
width:100vw;
padding:10px;
display: flex;
justify-content:space-around;
`
const Item = styled.div`
height:100%;
width:150px;
text-align:center;
`
const Photo = styled.img`
display:block;
`
const CrewBar = ()=>{
    const {logData} = useContext(LoggedContext)
    const photos = fetch()
    return(
    <Wrapper>
        {
            
            logData&&logData.groups.map((item,index)=>(
            <Item key={item}><Photo src={}/>{item}</Item>
                ))
        }
    </Wrapper>
    )
}
export default CrewBar;