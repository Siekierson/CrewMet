import React,{useContext,useEffect} from 'react';
import styled from 'styled-components';
import {Switch,Route} from 'react-router-dom';
import {Redirect} from 'react-router';
import {LoggedContext} from 'contexts/LoggedContext';
import BasicView from 'views/BasicView'
import LogView from 'views/LogView';
import HomeView from 'views/HomeView' 
import CreateCrewView from 'views/CreateCrewView';
import CrewView from 'views/CrewView';
const Wrapper = styled.div`
margin-top:100px;
height:calc(100vh - 100px);
width:100%;
overflow:hidden;
@media (max-width: 500px) {
    margin-top:50px;
}
`
const RouterSwitch = () =>{
    const {logData,setLogData,wait} = useContext(LoggedContext);
    const localData=JSON.parse(localStorage.getItem('logData'))
    useEffect(() => {
        if(!logData&&localData)setLogData(localData)
    }, [logData,localData,setLogData])
    return(
        <Wrapper>
            <Switch>
                <Route exact path='/' component={BasicView}/>
                <Route path='/login' component={LogView}/>
                {logData||localData?
                (<>
                    <Route path='/home' component={HomeView}/>
                    <Route path='/create' component={CreateCrewView}/>
                    <Route path='/crews/:name' component={CrewView}/>
                </>)
                :
                (!wait&&<Redirect to='/login'/>)
                }
            </Switch>
        </Wrapper>
    )
}
export default RouterSwitch;