import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom'
import DefWrapper from 'components/atoms/DefWrapper';
const Header = styled.div`
width:350px;
height:100%;
position:absolute;
padding:20px;
display:flex;
flex-wrap:wrap;
background-color: rgba(0,0,0,.5);
border-radius:50px;
text-align:center;
`
const Photo = styled.img`
position:absolute;
left:50%;
top:15%;
transform:translate(-50%,-50%);
height: 180px;
width:180px;
border-radius:50%;
display:block;
`
const Text = styled.h1`
font-size:4rem;
margin:70% 0 -100% 0;
width:100%;
`
const Description = styled.h2`
font-size:2.5rem;
font-weight:lighter;
width:100%;
`
const CrewView = ()=>{
    const [photo,setPhoto]=useState('')
    let location = useLocation();
    const name = location.pathname.split("/").pop();
    const localData=JSON.parse(localStorage.getItem('logData'))
    const getPhoto =async()=>{
        await fetch(`http://localhost:5000/crews/photoDesc/${name}`)
        .then(response => response.json())
        .then(data =>setPhoto(data))
        .catch(err=>console.log(err))
    }
    useEffect(() =>{
        const a =async()=>getPhoto()
        a()
    } , [])
    return(
        <DefWrapper>
            <Header>
                <Photo src={photo[0]}/>
                <Text>{name}</Text>
                <Description>{photo[1]}</Description>
                {}
            </Header>
        </DefWrapper>
    )
}

export default CrewView;