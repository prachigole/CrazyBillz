import React from 'react';
import { Home } from './Components/Home'
import { Signup } from './Components/Signup'
import { Login } from './Components/Login'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NotFound } from './Components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Signup" component={Signup}/>
        <Route path="/Login" component={Login}/>
        <Route exact path="/" component={ Home }/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
