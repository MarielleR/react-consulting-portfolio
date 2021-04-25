import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
// import Button from './components/Button';
// import HeroSection from './components/HeroSection';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Router>
    </Fragment>

  );
}

export default App;
