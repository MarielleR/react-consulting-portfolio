import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Button from './components/Button';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
    </Fragment>

  );
}

export default App;
