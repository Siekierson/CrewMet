import React,{useContext} from 'react';
import styled from 'styled-components';
import {Switch,Route} from 'react-router-dom';
import {Redirect} from 'react-router';
import {LoggedContext} from 'contexts/LoggedContext';
import BasicView from 'views/BasicView'
import LogView from 'views/LogView';
import HomeView from 'views/HomeView' 
import CreateCrewView from 'views/CreateCrewView';
const Wrapper = styled.div`
margin-top:100px;
height:calc(100vh - 100px);
`
const RouterSwitch = () =>{
    const {logData,wait} = useContext(LoggedContext)
    return(
        <Wrapper>
            <Switch>
                <Route exact path='/' component={BasicView}/>
                <Route exact path='/login' component={LogView}/>
                {logData?
                (<>
                    <Route exact path='/home' component={HomeView}/>
                    <Route exact path='/create' component={CreateCrewView}/>
                </>)
                :
                (!wait&&<Redirect to='/login'/>)
                }
            </Switch>
        </Wrapper>
    )
}
export default RouterSwitch;