import React from 'react';

import Image1 from '../../../img/aboutus-1.jpg';
import ArcLogo from '../../../img/sponsor-2.png';
import Orana from '../../../img/sponsor-3.png';
import ACT from '../../../img/sponsor-4.png';

import './Sponsors.scss';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Sponsors() {
  return (
    <div id="sponsorsbg">
      <img className="header" src={Image1} alt="header" />
      <div id="sponsors">
        <p className="title">SPONSORS</p>
        <p className="center">Proudly supported by</p>
        <p className="center">
          <img id="arc" src={ArcLogo} alt="Arc"/>
        </p>
        <p className="title">PLATINUM SPONSORS</p>
        <p className="center">
          <img id="orana" src={Orana} alt="Orana"/>
          <img id="act" src={ACT} alt="ACT"/>
        </p>
      </div>
    </div>
  )
}
