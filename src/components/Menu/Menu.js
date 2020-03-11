import React from 'react';
import { Link } from "react-router-dom";

import './Menu.scss';

class Menu extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul className="navigation">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about-us">ABOUT</Link></li>
          <li><Link to="/past-shows">PAST SHOWS</Link></li>
          <li><Link to="/teams">TEAMS</Link></li>
          <li><Link to="/sponsors">SPONSORS</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><a href="https://forms.gle/TgoudDGdXJSh54Tp6">GET INVOLVED</a></li>
          {/* <li><Link to="/buy-tickets">BUY TICKETS</Link></li> */}
        </ul>
      </React.Fragment>
    )
  }
}

export default Menu;