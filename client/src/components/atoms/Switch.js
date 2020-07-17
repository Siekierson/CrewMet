import React from 'react';
import styled from 'styled-components';

const ScreenChooser=styled.div`
position:absolute;
top:20%;
left:50%;
transform:translate(-50%,-50%);
height:30px;
width:70px;
background-color:#666;
border:2px solid white;
border-radius:30px;
`
const Dot=styled.div`
position:absolute;
top:50%;
left:0;
height:20px;
width:20px;
background-color:white;
border-radius:50%;
transition:.3s;
transform:translate(${({screen})=>screen? '20%' : '210%' },-50%);
`

const Switch=({circle,setCircle})=>{
  return (
    <ScreenChooser onClick={setCircle}>
          <Dot screen={circle}/>
    </ScreenChooser>
  );
};

export default Switch;