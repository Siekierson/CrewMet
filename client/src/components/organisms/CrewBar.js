import React,{useContext,useEffect, useState} from 'react';
import styled from 'styled-components';
import {LoggedContext} from 'contexts/LoggedContext'
const Wrapper = styled.div`
height:150px;
width:100%;
padding:10px;
display: flex;
overflow-y: hidden; 
overflow-x: auto; 
`
const Item = styled.div`
display:flex;
height:100%;
width:200px;
margin:0 5%;
text-align:center;
`
const Photo = styled.img`
height: 100px;
width:100px;
border-radius:50%;
display:block;
`
const Text = styled.h3`
font-size:3rem;
padding:10% 10%;
`
const CrewBar = ()=>{
    const {logData} = useContext(LoggedContext);
    const [photos,setPhotos]=useState([])
    const getPhotos= () => {
        fetch('http://localhost:5000/crews/photos',{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({"groups":logData.groups})
        })
             .then(response => response.json())
            .then(data =>setPhotos(data))
            .catch(err=>console.log(err))
    }
    useEffect(()=>{getPhotos()},[])
    return(
    <Wrapper>
        {
            logData&&logData.groups.map((item,index)=>(
            <Item key={item}><Photo src={photos[index]}/><Text>{item}</Text></Item>
                ))
        }
    </Wrapper>
    )
}
export default CrewBar;