import React from 'react';
import { Link } from 'react-router-dom';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import Image1 from '../../../img/aboutus-1.jpg';
import Image2 from '../../../img/faq-1.jpg';

import './FAQ.scss';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function FAQ() {
  return (
    <div id="faqbg">
      <img className="header" src={Image1} alt="header" />
      <div id="faq">
        <p className="title">FAQ</p>
        <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>What is Med Revue?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Med Revue is an annual comedy sketch show that’s made up of short skits, songs and dances. We also have a live band, video skits, flashy lights and special effects to make the show as spectacular as possible! Our society extends beyond the stage &ndash; we’re all about making friends for life, improving everyone’s skills and partying hard!
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>When does Med Revue Run?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Med Revue runs in Term 1 every year in the Science Theatre at UNSW, usually during the later weeks. Dates differ each year – our upcoming 2021 show will run from the 13th to 16th April.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>I’m not a medical student, can I still join?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Of course! Med Revue is open to students from all faculties at any stage of their university lives – whether you’re a fresh first year studying Medicine or UNSW Art & Design student in their graduating year, we welcome you to our society. We also encourage students from universities outside of UNSW to get involved!
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>How do I sign up?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>Just click <a href="https://forms.gle/ypp9FUzcgUYbqQwQA">right here!</a></p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>What roles are there in Med Revue?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                We have a large diversity of roles in the whole society! Whether you’re keen to get on stage and act, wanting to program some colourful lights for the show, or hoping to film and edit some entertaining videos, we have a portfolio for you.
              </p>
              <p><b>Portfolio Teams</b></p>
              <p>
                These are the portfolios that are open to anyone and everyone, without any applications needed – just sign up to our society and let us know which team you’re interested in taking part of! These open portfolio teams include:
                <ul>
                  <li>Cast</li>
                  <li>Tech</li>
                  <li>Band</li>
                  <li>Costumes &amp; Make-Up</li>
                  <li>Videos</li>
                  <li>Socials</li>
                  <li>Front of House/Ticketing</li>
                  <li>Marketing</li>
                  <li>MR Eats</li>
                </ul>
              </p>
              <p><b>Portfolio Heads</b></p>
              <p>
                Our portfolio heads take on a leadership position within the society by organising everything for the teams above! We also have a range of portfolios that are only managed independently by the heads and function without a team. These portfolios include:
                <ul>
                  <li>Vocal Directors</li>
                  <li>Choreographers</li>
                  <li>Design &amp; Publications</li>
                  <li>Webmin/IT</li>
                </ul>
              </p>
              <p>
                Applications to be a portfolio head are available to everyone and are generally open towards the end of Term 2!
              </p>
              <p>For more information about each of these, <Link to="/teams">click here</Link>.</p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                What’s the commitment level like in Med Revue?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Commitment varies depending on the role you wish to do. This commitment can range from continuous weekly rehearsals (for Cast) to just a couple hours during show week (for Front of House/Ticketing). Some portfolios may require some time during the weekend (e.g. Tech), which may be a more flexible option for you! Commitment levels may also vary due to the size of the team.
              </p>
              <p>
                We also have roles that cater to your personal availabilities so you can roster on whenever you are free (e.g. MR Eats, Marketing). This allows you to commit to just a few hours on a couple of days while still having the opportunity to meet everyone and contribute to the show!
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                I’m not good at singing, dancing or acting though…
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                We believe that you are &ndash; you just may not have realised it yet. We understand that the thought of performing can be nerve-racking, but in Med Revue we believe that everyone should give things a go. Throughout the weeks of rehearsals leading up to show, our directors will ensure that every cast member grows in confidence and skills. Even if you’ve never sung a note in your life or if the only dance you can do is the Macarena, we’ll make sure that you’ll become a shining star on stage to wow your family, friends and hundreds of UNSW students!
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                I don’t have the skills required for the role – can I still get involved?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Yes, of course! For the vast majority of the roles, no experience or knowledge is required. We’re all about expanding and improving the skills of every member of our society. As long as you have the willingness to learn, we are more than happy to help you get started with the basics of the tasks required – so don’t be afraid to join us!
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Are there other revues at UNSW? Can I get involved with more than one a year?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Med Revue is one of the three major revues at UNSW – the other two being Law Revue and CSE Revue, which are both held during Terms 2 and 3 every year. You’re more than welcome to join more than one revue a year – in fact, a lot of the revue community gets involved with at least two a year!
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Where can I find the society constitution?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                The society constitution can be found <a href="https://drive.google.com/file/d/1xvO8p8ogoRmLjXBF_FNs_u944CO5WRs1/view?usp=sharing">here!</a>
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        <p><b>Have any more questions? Don’t hesitate to get in touch with us via hello@medrevue.org!</b></p>
      </div>
    </div>
  )
}
