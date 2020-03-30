import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './Components/Landing';
import ExerciseMachines from './Components/ExerciseMachines';
import MuscleGroup from './Components/MuscleGroup';
import Map from './Components/Map';

const App = () => (
  <Router>
    <Fragment>
      <Route exact path='/' component={Landing} />
      <Switch>
        <Route exact path='/exerciseMachines' component={ExerciseMachines} />
        <Route exact path='/muscleGroup' component={MuscleGroup} />
        <Route exact path='/map' component={Map} />
      </Switch>
    </Fragment>
  </Router>
);

export default App;

// map
// break down landing page based on body part (ie shoulders, biceps, legs)
// landing page breaks up into muscle type or equipment
// 1st get squat racks displayed on map

// manipulating svg files
// render a letter and color (ie `G` and green)
