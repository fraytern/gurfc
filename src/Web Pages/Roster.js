import React from "react";
import Roster from "../RosterData";
import Head from './Components/Navbar';
import Footer from './Components/Footer';

let headshot=<img className='roster-pic' src='https://www.aae.org/specialty/wp-content/uploads/sites/2/2022/03/blank-headshot.jpeg' />

function RosterFunc(){
  return(
    <div>
      <Head />
      <Roster 
      name='Aubrey Aird'
      position='Flanker'
      hometown='London, England'
      img={headshot}
      />

    <Roster 
      name='Jake Allen'
      position='Flanker'
      hometown='Boston, MA'
      img={headshot}
      />

    <Roster 
      name='Anthony Altobelli'
      position='Wing'
      hometown='Long Beach Island, NJ'
      img={headshot}
      />

    <Roster 
      name='Gavin Brady'
      position='Inside Center'
      hometown='Chevy Chase, MD'
      img={headshot}
      />

    <Roster 
      name='Charlie Chapman'
      position='Scrumhalf'
      hometown='San Francisco, CA'
      img={headshot}
      />
    
    <Roster 
      name='Michael Chorabik'
      position='Prop'
      hometown='Baltimore, MD'
      img={headshot}
      />

    <Roster 
      name='Jimmy FitzPatrick'
      position='Hooker'
      hometown='Darien, CT'
      img={headshot}
      />

    <Roster 
      name='Terrence Franks'
      position='Prop'
      hometown='Chicago, IL'
      img={headshot}
      />

    <Roster 
      name='Nick Frayter'
      position='Lock'
      hometown='Greenwich, CT'
      img={headshot}
      />

    <Roster 
      name='Isaac Greenspan'
      position='Fullback'
      hometown='Ocean Township, NJ'
      img={headshot}
      />

    <Roster 
      name='Kurt Jensen (C)'
      position='Wing'
      hometown='Bethesda, MD'
      img={headshot}
      />

    <Roster 
      name='Mark Kearney'
      position='Flyhalf'
      hometown='San Francisco, CA'
      img={headshot}
      />

    <Roster 
      name='Jack Kelly'
      position='Flanker'
      hometown='Arlington, VA'
      img={headshot}
      />

    <Roster 
      name='Jackson Link'
      position='Flanker'
      hometown='Nashville, TN'
      img={headshot}
      />
    
    <Roster 
      name='Braeden Mahoney'
      position='8-Man'
      hometown='Boston, MA'
      img={headshot}
      />

    <Roster 
      name='Andrew Maloney'
      position='Outside Center'
      hometown='Westchester, NY'
      img={headshot}
      />

    <Roster 
      name='Alex Martin'
      position='Flyhalf'
      hometown='Zurich, Switzerland'
      img={headshot}
      />

    <Roster 
      name='Patrick Milito'
      position='Prop'
      hometown='Chicago, IL'
      img={headshot}
      />

    <Roster 
      name='Jacob Nelson'
      position='Scrumhalf'
      hometown='Chicago, IL'
      img={headshot}
      />  

    <Roster 
      name='Ben St. Peters'
      position='Lock'
      hometown='Boston, MA'
      img={headshot}
      />  

    <Roster 
      name='John Sullivan'
      position='Flanker'
      hometown='Chicago, IL'
      img={headshot}
      /> 

    <Roster 
      name='Noah Thurm'
      position='Lock'
      hometown='San Fransico, CA'
      img={headshot}
      /> 

    <Roster 
      name='Quinn Zebrowski'
      position='Outside Center'
      hometown='Morristown, NJ'
      img={headshot}
      /> 

      <Footer />
    </div>
  )
}

export default RosterFunc;