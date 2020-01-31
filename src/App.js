import React from 'react';

import Video from './components/Video';
import Menu from './components/Menu';

// Contents
import Landing from './components/Content/Landing';

import Footer from './components/Footer';

import './App.scss';

function App() {
  return (
    <React.Fragment>
      <Menu />
      <Video />
      <Landing />
      <Footer />
    </React.Fragment>
  );
}

export default App;
