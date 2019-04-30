import React from 'react';
import './App.css';
//import { Navbar, Container, Row, Col, Image, } from 'react-bootstrap'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
//import StickyFooter from 'react-sticky-footer';
import Profiles from './Views/Profiles';
//import { color } from 'style-value-types';
import Dashboard from './Views/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <div className="App">
            <Route exact path='/' component={Profiles} />
            <Route exact path='/dashboard' component={Dashboard} />
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
