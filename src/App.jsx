import React, { Component } from 'react';
import './App.css';
import {v4} from 'uuid';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/Register';
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
        
        <Route path="/register" component={Register} />        
      </div>
 
      </Router>
    )
  }
}

