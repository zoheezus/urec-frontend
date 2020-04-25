import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Map from './Components/Map';

const App = () => (
  <Router>
    <Fragment>
      <Route exact path='/' component={Map} />
    </Fragment>
  </Router>
);

export default App;
