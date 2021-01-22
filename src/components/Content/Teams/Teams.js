import React from 'react';

import Image1 from '../../../img/teams.jpg';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import './Teams.scss';
import 'react-accessible-accordion/dist/fancy-example.css';

function Teams() {
  return (
    <div id="aboutusbg">
      <img className="header" src={Image1} alt="header" />
      <div id="aboutus">
        <p className="title">TEAMS</p>
        <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Cast</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p><b>What do I do in Cast?</b></p>
              <p>
                As one of the cast members you’re going to be front and centre on stage, showing off what you’ve got to the rest of UNSW! Get ready for a whole lot of singing, dancing, acting and making everyone in Science Theatre roar with laughter. Don’t worry if you have stage fright or no experience in any of the above – you’ll be taught everything from scratch during rehearsals.
              </p>
              <hr />
              <p><b>What skills can I learn in Cast?</b></p>
              <p>
                <ul>
                  <li>Acting, singing and dancing of course! You’ll be channeling your inner Beyonce.</li>
                  <li>How to embody a character and project it on stage</li>
                  <li>Stage presence, articulation and vocal projection</li>
                  <li>Improve your confidence and show off your fabulous self</li>
                  <li>Time management, communication and teamwork skills</li>
                </ul>
              </p>
              <hr />
              <p><b>What's the time commitment like?</b></p>
              <p>
                Approximately 12 hours a week (and more as show approaches). Cast has the heaviest commitment out of all of our portfolios since you’ll be the stars of our show! However, this includes a lot of down time for you to study and socialise. You’ll also be fed and taken care of by our producers and other members of the society so you won’t crumble into an exhausted mess.
              </p>
              <hr />
              <p><b>I'm interested! What now?</b></p>
              <p>
                The best part is there’s no auditions or experience necessary! Cast selection is based entirely on enthusiasm, attitude and availability. We’ll be holding Social Rehearsals at the start of Term 1 for you to meet new people and try out Cast before committing.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Tech</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p><b>What do I do in Tech?</b></p>
              <p>
                Without the set, lights and sound there would be no show! If you’re looking to get involved with the behind-the-scenes aspect of the show, Tech is perfect for you. Throughout the semester, the Tech Team gets their hands dirty with paint and power tools at Revue Barn. The whole team helps design and construct the set for show – everyone gets creative input and can make their ideas come to life.
              </p>
              <p>
                The Stage Crew subteam is dedicated to the actual show, where you can help manage Cast, set up the stage and even learn how to program lights/smoke machines. You’re essentially our backstage ninjas who makes the show look and feel magical to the audience, even though they barely notice you in the dark.
              </p>
              <hr />
              <p><b>What skills can I learn in Tech?</b></p>
              <p>
                <ul>
                  <li>Release your inner Picasso with set design, painting and construction</li>
                  <li>Learn how to program intelligent and static lighting</li>
                  <li>Operate the sound desk for SFX</li>
                  <li>Stage assistance and management</li>
                  <li>Assemble set and lights on stage so it’s all ready for show</li>
                </ul>
              </p>
              <hr />
              <p><b>What's the time commitment like?</b></p>
              <p>
                Tech generally meets on the weekend at Revue Barn at UNSW Randwick Campus (not the Main Campus – the other side of Randwick Racecourse). Although weekly attendance isn’t compulsory, it’s required that you attend a minimum number of Barn Days to be involved in Stage Crew during show week.
              </p>
              <hr />
              <p><b>I'm interested! What now?</b></p>
              <p>
                There’s no experience necessary at all – just bring your lovely self and your willingness to get involved to our Barn Days!
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Promotions</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p><b>What do I do in Promotions?</b></p>
              <p>
                Promos (for short) is all about getting bums on seats, peeps through the door, tickets off the Box Office. In addition to designing the show’s promotional strategy and teaching cast, Promos also has a super guerrilla team of street performers that go out and do awesome publicity stunts. Promos is a great way to get your performance fix if you don’t want to do Cast.
              </p>
              <hr />
              <p><b>What skills can I learn in Promotions?</b></p>
              <p>
                <ul>
                  <li>Marketing strategy for concert/theatre events</li>
                  <li>How to make the best poster glue ever!</li>
                  <li>Communication skills</li>
                  <li>Street performance</li>
                </ul>
              </p>
              <hr />
              <p><b>What's the time commitment like?</b></p>
              <p>
                It varies depending on the projects with which you become involved. The workload is very light ( less than 1 hour / week) at the beginning of semester and builds up closer to Show Week (2 – 5 hours / week). If you decide to do street performance, you’ll need to factor in some rehearsal time.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Band</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p><b>What do I do in Band?</b></p>
              <p>
                The band gets up on stage during the show to perform some awesome pieces and medleys, as well as accompanying musical sketches. The band pieces will be arranged for you and the rest of the team to showcase your musical talents to UNSW! Get ready to spend a bunch of awesome rehearsal sessions filled with laughs, memories and bants.
              </p>
              <hr />
              <p><b>What skills can I learn in Band?</b></p>
              <p>
                <ul>
                  <li>Ability to perform in an ensemble</li>
                  <li>Accompanying and supporting live vocal performances</li>
                  <li>Working with a team on a regular basis</li>
                  <li>Improved skills on your instrument</li>
                  <li>Time management and communication</li>
                </ul>
              </p>
              <hr />
              <p><b>What's the time commitment like?</b></p>
              <p>
                Band will meet up at least once a week for rehearsals (increasing in the couple of weeks before show). You will also be required to learn and practice the pieces during your own time as well as attend every night during show week.
              </p>
              <hr />
              <p><b>I'm interested! What now?</b></p>
              <p>
                Our Band Heads and Directors will hold auditions for the Band at the beginning of Term 1. Please note that enthusiasm, attitude and availability is prioritised over skill level. Click on ‘Get Involved’ and details about auditions will be sent out to you. Good luck and hope to see you there!
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Costumes & Makeup</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p><b>What do I do in Costumes & Makeup?</b></p>
              <p>
                Our Costumes & Makeup Team will leave you in stitches… You’ll be designing and sewing a bunch of our custom costumes for the dances and sketches in the show. In the past we’ve made a range of clothing from simple tailored outfits to an entire Charmander costume. This team also involves creating any specialised makeup designs for the show and teaching our Cast how to cake their face for the stage. Don’t worry if you’re inexperienced in either sewing or makeup – we can teach it all to you!
              </p>
              <hr />
              <p><b>What skills can I learn in Costumes & Makeup?</b></p>
              <p>
                <ul>
                  <li>Be the next James Charles and create stylish looks</li>
                  <li>Fitting and tailoring outfits to Cast</li>
                  <li>Designing and sewing customised costumes</li>
                  <li>Creativity and attention to detail</li>
                  <li>Proficiency with costume equipment (i.e. hot glue guns and sewing machines)</li>
                </ul>
              </p>
              <hr />
              <p><b>What's the time commitment like?</b></p>
              <p>
                Time commitment varies depending on the amount of costumes required for the show of any given year, however expect to spend approximately 2 hours per week with your fellow fashionistas in the Costumes & Makeup Team!
              </p>
              <hr />
              <p><b>I'm interested! What now?</b></p>
              <p>
                Click on ‘Get Involved’ and sign up for the Costumes & Makeup Team! Our Costumes and Makeup Heads will contact you at the beginning of semester to let you know how things are going to run.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Front of House & Ticketing</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p><b>What do I do in Front of House & Ticketing?</b></p>
              <p>
                Our Front of House & Ticketing Team manages the audience’s theatre experience to ensure that the magic of Med Revue begins well before the curtains open! During show week, you’ll mainly be in the foyer of the Science Theatre helping at the ticketing desk, controlling entry points and staffing our confectionery stand (because who doesn’t love food?). If you’re looking to just test the waters of Med Revue, Front of House & Ticketing is a great chance to be involved with a small but crucial role.
              </p>
              <hr />
              <p><b>What skills can I learn in Front of House & Ticketing?</b></p>
              <p>
                <ul>
                  <li>Event management and operations</li>
                  <li>Managing the ticketing allocation system</li>
                  <li>Customer service, teamwork and communication skills</li>
                  <li>Working independently and with others</li>
                  <li>Engaging with audience members to ensure they have the best experience possible</li>
                </ul>
              </p>
              <hr />
              <p><b>What's the time commitment like?</b></p>
              <p>
                Our Front of House & Ticketing Team is incredibly flexible – you’ll only be needed for a couple hours in weeks 9 and 10. However, your Front of House & Ticketing Heads will run a couple social events before then for everyone to get to know each other.
              </p>
              <hr />
              <p><b>I'm interested! What now?</b></p>
              <p>
                It’s as easy as clicking on ‘Get Involved’ and signing up to the Front of House & Ticketing Team! The Front of House & Ticketing Head will e-mail you to keep you in the loop of what’s happening over the semester.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Videos</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p><b>What do I do in Videos?</b></p>
              <p>
                This is your chance to film and edit videos that will be played during our show and that will be immortalised on our Youtube channel! Get involved with our Videos Team to work on scripts, storyboards, filming, editing (and all the fun in between).
              </p>
              <hr />
              <p><b>What skills can I learn in Videos?</b></p>
              <p>
                <ul>
                  <li>Scriptwriting and storyboarding</li>
                  <li>Videography and cinematography</li>
                  <li>Communication skills required for working in a creative team</li>
                  <li>Coordinating filming times, locations and casting</li>
                  <li>Using software to edit videos</li>
                </ul>
              </p>
              <hr />
              <p><b>What's the time commitment like?</b></p>
              <p>
                Time commitment will depend on which part of the production you want to get involved with. This could range from acting for a couple hours to planning/filming/editing over a day or more. Schedules will be organised amongst the Videos Team according to your availabilities.
              </p>
              <hr />
              <p><b>I'm interested! What now?</b></p>
              <p>
                Just click on ‘Get Involved’ and sign up to the Videos Team so that our Videos Head can contact you about what’s going on for the semester!
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Socials</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p><b>What do I do in Socials?</b></p>
              <p>
                If you fancy getting some event management and party planning experience, Socials is the way to go. We have a whole bunch of major society events throughout the year that you’ll get to organise and run. From concept design to promotion to execution, you’ll be there for it all to help the society bond and have heaps of fun together!
              </p>
              <hr />
              <p><b>What skills can I learn in Socials?</b></p>
              <p>
                <ul>
                  <li>Event planning and management</li>
                  <li>Communication skills like negotiation and correspondence</li>
                  <li>Organising run sheets, budgets and required resources</li>
                  <li>Facilitating a positive and inclusive environment at all our events</li>
                  <li>Creating promotional and marketing material</li>
                </ul>
              </p>
              <hr />
              <p><b>What's the time commitment like?</b></p>
              <p>
                Time commitment will depend on whether you want to play a large role in the organisation of an event or whether you just want to help out on the day. There may be some necessary team meetings but there’s no set number of hours you need to dedicate yourself to.
              </p>
              <hr />
              <p><b>I'm interested! What now?</b></p>
              <p>
                Easy stuff – just click the ‘Get Involved’ button and our Socials Heads will be in contact with you about what’s going on for the semester.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        <p><b>If you’re interested in being part of Med Revue 2021, click on <a href="https://forms.gle/ypp9FUzcgUYbqQwQA">Get Involved</a> or send us an email (hello@medrevue.org) for more info!</b></p>
      </div>
    </div>
  )
}

export default Teams;
