import React from 'react';

import './Menu.scss';

class Menu extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul className="navigation">
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">SPONSORS</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">GET INVOLVED</a></li>
          <li><a href="#">BUY TICKETS</a></li>
        </ul>
      </React.Fragment>
    )
  }
}

export default Menu;