import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home/Index.jsx';
import About from './About/Index.jsx';
import Users from './Users/Index.jsx';
import App from './App.jsx';
ReactDOM.render(
  <Router className="App">
    <div className="App-header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <App></App>
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById('app')
);
