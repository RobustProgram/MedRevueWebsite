import React from 'react';
import { Parallax } from 'react-parallax';

import TeamCast from '../../../img/team-cast.jpg';
import TeamTech from '../../../img/team-tech.jpg';
import TeamMarketing from '../../../img/team-marketing.jpg';

import './Landing.scss';

function Landing() {
  return (
    <div id="landing">
      <div id="about-us-wrapper">
        <div id="about-us">
          <p className="title">UNSW MED REVUE</p>
          <p>UNSW Med Revue is a comedy sketch show held in Term 1 every year!</p>
          <p>Whether you love being front and centre on stage or hidden behind-the-scenes away from the crowd, we’ve got you covered. We welcome students from ALL faculties, skill-set and even different universities – as long as you’re committed, fun-loving and enthusiastic, we’d love for you to come join us for the year!</p>
          <p>Beyond the theatre, we’re all about making friends for life, performing hard and partying even harder. Our society is a fun way to make new friends, develop yourself and learn new skills that can be utilised beyond the stage!</p>
          <p>Get involved with a hallmark event in UNSW’s calendar and become part of one of the largest communities on campus!</p>
        </div>
      </div>
      <Parallax
        bgImage={require('../../../img/2.jpg')}
        bgImageAlt="the cat"
        strength={1000}
      >
        <div style={{ height: '60vh' }} />
      </Parallax>
      <div id="teams-wrapper">
        <p className="title">TEAMS</p>
        <div id="team-list">
          <button className="team-item">
            <div className="image" style={{backgroundImage: `url(${TeamCast})`}}></div>
            <div className="text">Cast</div>
          </button>
          <button className="team-item">
            <div className="image" style={{backgroundImage: `url(${TeamTech})`}}></div>
            <div className="text">Tech</div>
          </button>
          <button className="team-item">
            <div className="image" style={{backgroundImage: `url(${TeamMarketing})`}}></div>
            <div className="text">Marketing</div>
          </button>
        </div>
      </div>
      <Parallax
        bgImage={require('../../../img/3.jpg')}
        bgImageAlt="the cat"
        strength={1000}
      >
        <div style={{ height: '60vh' }} />
      </Parallax>
    </div>
  )
}

export default Landing;