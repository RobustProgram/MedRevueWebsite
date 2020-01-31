import React from 'react';
import ReactPlayer from 'react-player';

import Logo from '../../img/mono-full-white-copy.png';

import './Video.scss';

function Video () {
  return (
    <div id="background-video">
      <div id="logo">
        <img src={Logo} alt="logo" />
      </div>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=xi77FZxdoms'
        playing={true}
        loop={true}
        height="100%"
        width="100%"
        volume="0"
      />
    </div>
  )
};

export default Video;