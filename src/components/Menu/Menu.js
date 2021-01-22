import React from 'react';
import { Link } from "react-router-dom";

import './Menu.scss';

class Menu extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul className="navigation">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About</Link></li>
          <li><Link to="/past-shows">Past Shows</Link></li>
          <li><Link to="/teams">Teams</Link></li>
          <li><Link to="/sponsors">Sponsors</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/join"><strong>Get Involved</strong></Link></li>
          {/* <li><Link to="/buy-tickets">BUY TICKETS</Link></li> */}
        </ul>
      </React.Fragment>
    )
  }
}

export default Menu;
