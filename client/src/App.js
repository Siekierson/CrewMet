import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar from 'components/organisms/Navbar';
import FriendVideo from 'components/atoms/FriendVideo';
import BasicView from 'views/BasicView'
import LogView from 'views/LogView'
const App = ()=>{
  return (
    <div className="App">
      <BrowserRouter>
      <FriendVideo/>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={BasicView} />
        <Route exact path='/login' component={LogView} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
