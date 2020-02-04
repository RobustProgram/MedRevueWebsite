import React from 'react';

import Logo from '../../img/mono-full-white-copy.png';

import './Video.scss';

function Video () {
  return (
    <div id="background-video">
      <div id="logo">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  )
};

export default Video;