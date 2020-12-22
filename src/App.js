import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'

function App() {
  return (
    <BrowserRouter>   
      <Switch>
        <Route exact path='/' component={LandingPage} />
      </Switch>  
    </BrowserRouter>
  );
}

export default App;
