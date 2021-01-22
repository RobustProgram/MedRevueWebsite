import React from 'react';

import './Footer.scss';

function Footer () {
  return (
    <div id="footer">
      <p className="title">CONTACT US</p>
      <div id="content">
        <div id="left">
          <p>Got questions, comments or a sick joke that you’re dying to tell us? Drop it in!</p>
          <p>
            <div><strong>Ask us a question:</strong> <a href="mailto:hello@medrevue.org">hello@medrevue.org</a></div>
            <div><strong>Contact the executives:</strong> <a href="mailto:exec@medrevue.org">exec@medrevue.org</a></div>
          </p>
        </div>
        <div id="right"></div>
      </div>
    </div>
  )
}

export default Footer;
