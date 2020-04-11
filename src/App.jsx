import React, { Component } from 'react';
import './App.css';

import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Random from './components/Random';


export default class App extends Component {

  render() {
    return (
      <Router>
      <div className="app">
        <Route exact path="/KinRai-D/" render={ props => (
          <div>
            <Login/>

          </div>
        )} />
        <Route path="/random" component={Random} />   
        <Route path="/register" component={Register} />        
      </div>
 
      </Router>
    )
  }
}

