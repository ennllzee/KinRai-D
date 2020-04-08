import React, { Component } from 'react';
import './App.css';
import {v4} from 'uuid';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/Register';

export default class App extends Component {

  render() {
    return (
      <Router>
      <div className="container mt-4 mb-5">
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

