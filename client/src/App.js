import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar from 'components/organisms/Navbar';
import BasicView from 'views/BasicView'
const App = ()=>{
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={BasicView} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
