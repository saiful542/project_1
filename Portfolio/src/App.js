import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navigation from './components/Navigation';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation></Navigation>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/Home"><Home></Home></Route>
          <Route path="/Resume"><Resume></Resume></Route>
          <Route></Route>
          <Route></Route>
        </Switch>
      </BrowserRouter>
      
    </>
  );
}

export default App;
