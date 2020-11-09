import React, {Suspense} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


const Home = React.lazy(() => import('./views/Home'))
const Detail = React.lazy(() => import('./views/Detail'))
const MyPokemon = React.lazy(() => import('./views/MyPokemon'))
const Navbar = React.lazy(() => import('./components/Navbar'))

function App() {
  return (
    <div id="App">
      <Suspense fallback={<div/>}>
        <Router>
          <Navbar />
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Detail} exact path="/detail/:id" />
            <Route component={MyPokemon} exact path="/myPokemon" />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
