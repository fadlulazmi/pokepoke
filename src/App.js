import React from 'react';
import './App.css';
import Home from './views/Home';
import Detail from './views/Detail';
import MyPokemon from './views/MyPokemon';
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div id="App">
      <Router>
        <Navbar />
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Detail} exact path="/detail/:id" />
          <Route component={MyPokemon} exact path="/myPokemon" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
