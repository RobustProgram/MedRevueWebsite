import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Video from './components/Video';
import Menu from './components/Menu';

// Contents
import Landing from './components/Content/Landing';
import AboutUs from './components/Content/AboutUs';
import FAQ from './components/Content/FAQ';

import Footer from './components/Footer';

import './App.scss';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Menu />
        <Switch>
          <Route path='/faq'><FAQ /></Route>
          <Route path='/about-us'><AboutUs /></Route>
          <Route path='/'>
            <Video />
            <Landing />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
