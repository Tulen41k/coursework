import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Home from './Home';
import Test from './Test';
import Info from './Info';
import About from './About';
import Fakts from './Fakts';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

function App (){

  const [selectPage, setCount] = useState(0);
  return (
  <>
    <Header/>
    <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/About">
            <About/>
          </Route>
          <Route path="/Test">
            <Test/>
          </Route>
          <Route path="/Info">
            <Info/>
          </Route>
          <Route path="/Fakts">
            <Fakts/>
          </Route>
      </Switch>
  </>
  )
}

export  default App;