import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import ShowProjects from './components/ShowProjects';
import ShowActions from './components/ShowActions';

function App() {

  return (
    <>
     <Route exact path='/' component={ShowProjects} /> 
     <Route exact path='/:id' component={ShowActions} /> 
    </>
  );
}

export default App;
