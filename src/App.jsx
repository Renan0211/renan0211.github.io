import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import './styles/App.css';

function App() {
  return (
    <div className="App-container">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </div>

  );
}

export default App;
