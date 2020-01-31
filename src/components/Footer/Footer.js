import React from 'react';

import './Footer.scss';

function Footer () {
  return (
    <div id="footer">
      <p className="title">CONTACT US</p>
      <div id="content">
        <div id="left">
          <p>Got questions, comments or a sick joke that you’re dying to tell us? Drop it to our e-mails below!</p>
          <p>
            <div><strong>Executives:</strong> exec@medrevue.org</div>
            <div><strong>Directors:</strong> directors@medrevue.org</div>
            <div><strong>Producers:</strong> producers@medrevue.org</div>
          </p>
        </div>
        <div id="right"></div>
      </div>
    </div>
  )
}

export default Footer;