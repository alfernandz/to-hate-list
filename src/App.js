import React from 'react';
import { Router, Switch, Redirect } from 'react-router-dom';
import { history } from './helpers';
import { PublicRoute, PrivateRoute, HomePage, HatesPage } from './routes';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img className="App-logo" src={logo} alt="To hate list" title="To hate list" />
      <Router history={history}>
        <Switch>
          <PublicRoute exact path="/" component={HomePage} />
          <PrivateRoute path="/hates" component={HatesPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;