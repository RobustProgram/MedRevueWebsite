import React from 'react';

import Image1 from '../../../img/aboutus-1.jpg';
import Image2 from '../../../img/aboutus-2.jpg';

import './AboutUs.scss';

function AboutUs() {
  return (
    <div id="aboutusbg">
      <img className="header" src={Image1} alt="header" />
      <div id="aboutus">
        <p className="title">ABOUT US</p>
        <p>UNSW Med Revue is an annual comedy sketch show, filled with singing, dancing and acting! For the past 43 years, our society has produced high-calibre shows for all at UNSW to enjoy. Whether you’re about getting on stage to make people laugh, programming lights and smoke machines, filming and editing videos, or cooking up great food, we’ve got something for everyone regardless of your degree or abilities. Our portfolio teams cover a wide range of interests so there is something for everyone to get involved with!</p>
        <img src={Image2} alt="about us" />
        <p>Beyond the theatre, we’re all about making friends for life, performing hard and partying even harder. We also strive to teach everyone new skills and allow individuals to achieve personal development to be utilised beyond the stage! Get involved with a hallmark event in UNSW’s calendar and become part of one of the largest communities on campus!</p>
        <hr />
        <p className="title">REVUE: DEFINED</p>
        <p>A revue is a light, theatrical entertainment show consisting of short sketches, songs and dances. If you’ve ever seen Monty Python’s Flying Circus, it’s like that plus a live band, singing, dancing, video clips and other awesome theatre stuff.</p>
        <hr />
        <p className="title">REVUE HISTORY</p>
        <p><strong>(As written by the producer of the first UNSW Med Revue, Dr. Greg Deacon)</strong></p>
        <i>
          <p>
          In May 1974 three 3rd year medical students from the University of NSW, Jonathan Marks, Eric Wegman and Greg Deacon attended the Sydney University Medical Revue and were inspired to organise a similar revue at UNSW. There had never been any type of revue at UNSW. Over the ensuing 12 months they made it happen.</p>
          <p>The Medical Faculty was very supportive particularly the Professor of Pathology, Don Wilhelm. One of the first tasks was selecting a venue. The Physics Theatrette was chosen. This was a theatre in the Physics building that seated about 330. It had a small stage and reasonable back stage facilities. The second Med Revue was held in the Science Theatre however this was three times the size with much poorer back stage facilities. It had nowhere to store the large number of huge props which we made and was not available for rehearsals until 2 or 3 days before the performances commenced. In contrast the Physics Theatrette was always available.</p>
          <p>Subsequent revues of all types for many years were held in the Physics Theatrette which was refurbished in the early 1980s. I don’t believe the Physics Theatrette any longer exists. One of the key factors in the success of the first two revues was the recruiting of Andrew Field to the team. He was a great organizer and was both the co-producer with Greg Deacon and co-director with Bob Wells.</p>
          <p>The other key people were Greg Bellamy the musical director and pianist along with guitarist Paul Holz, major scriptwriter George Faithful, performers Russell Knudsen, John Moran, Greg Downey, Greg Reading and Warren Stowe and costume makers Annette Trotter and Anne Donnelley.</p>
          <p>Everything had to be done for the first time, there was no money so the key organisers lent the funds. There was no experience from anyone as this was the first ever revue at the university. We designed and produced programmes, tickets, T shirts, props, costumes and posters, doing most of the work at our parents’ homes. We hand printed the posters, silk screened the T shirts and typeset the programme gluing on the text and the photos.</p>
          <p>The name chosen for the first Med Revue was Rumpleforeskin. It was a brilliant title that made publicising the show very easy. The first poster was a smiling phallus that would be described in today’s vernacular as going viral. It was picked up by a raunchy Kings Cross magazine called “Ribald”. Before long the Med Faculty told us we could keep the name but we had to produce a less suggestive poster! One of our fathers designed a more acceptable logo and we covered both UNSW and Sydney University with posters.</p>
          <p>Our concerns about ticket sales soon disappeared as the tickets sold very rapidly. We managed all the ticket sales ourselves, plus organised the front of house. The Revue ran Thursday to Sunday in the first week of May 1975. As it drew closer to the opening we realised we needed artistic assistance to prevent a disaster. Andrew Field invited Bob Wells, a semi professional singer and dancer to assist us in the last two weeks. He was the only non medical student involved and was an enormous help as choreographer and co-director. After the last night the cast and crew partied until dawn at Greg Deacon’s parents’ home with the band playing all night. There were no noise restrictions in 1975.</p>
          <p>We still have an audio recording of the first revue and many photographs but no video. Video recording was primitive and expensive. A black and white video recording was made however unfortunately has been lost. We finished with a surplus allowing us to donate $1000 to the Cystic Fibrosis Society plus had some seed funds for the next year’s show.</p>
          <p>The second Med Revue held in 1976 was called “Pandemonia (or Thanks for the Mammary)”. Many of us regretted not simply calling it Rumpleforeskin 2. It had the same key cast and crew, now in 5th year, however was far bigger in every way. Far larger cast, more lavish costumes and props plus we made a 30 minute film and held it in the Science Theatre.</p>
          <p>The film was written and directed by Eric Wegman. A keen member of the university film society, Michael Gillett, was recommended to us as a camera man. He agreed to do the job for free so long as we paid for the film. He was the only other non medical student involved along with Bob Wells. Bob participated from the first rehearsals in the 2nd revue.</p>
          <p>The film was titled “Florence of Arabia” and starred Russell Knudsen as Rudolf Vaselino and Annette Hamori as Florence. It was silent, except for the introduction, made on 16mm film with sub titles, background music and sound effects. It was introduced kindly by the film expert Bill Collins and produced and edited by Jonathan Marks, Steve Lynch and Greg Deacon.</p>
          <p>The revue was held on the Friday, Saturday and Sunday of the first week of May 1976. It was again a sell out with yet another party until dawn at the Deacons. The total expenses were $8,000, a huge sum for 1976, however with income of $10,000 there was a surplus of $2000 for the Cystic Fibrosis Society. The film and 2nd UNSW Med Revue are preserved on DVD.</p>
        </i>
      </div>
    </div>
  )
}

export default AboutUs;
