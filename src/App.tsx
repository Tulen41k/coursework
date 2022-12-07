import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Home from './Home';

function App (){

  const [selectPage, setCount] = useState(0);

  return (
  <>
    <Header/>
    
    <Home/>
  </>
  )
}

export  default App;