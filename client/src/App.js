import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import styled from 'styled-components';
import Navbar from 'components/organisms/Navbar';
import FriendVideo from 'components/atoms/FriendVideo';
import BasicView from 'views/BasicView'
import LogView from 'views/LogView';
import HomeView from 'views/HomeView' 
import LoggedProvider from 'contexts/LoggedContext';
import CreateCrewView from 'views/CreateCrewView';
const Wrapper = styled.div`
margin-top:100px;
height:calc(100vh - 100px);
`
const App = ()=>{
  return (
    <div className="App">
      <LoggedProvider>
      <BrowserRouter>
      <FriendVideo/>
      <Navbar/>
      <Wrapper>
      <Switch>
        <Route exact path='/' component={BasicView}/>
        <Route exact path='/login' component={LogView}/>
        <Route exact path='/home' component={HomeView}/>
        <Route exact path='/create' component={CreateCrewView}/>
      </Switch>
      </Wrapper>
      </BrowserRouter>
      </LoggedProvider>
    </div>
  );
}

export default App;
