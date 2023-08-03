import React from "react";
import ScheduleData from "../ScheduleData";
import Head from './Components/Navbar';
import Footer from './Components/Footer';

let UVA=<img className='opponent-logo' src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Virginia_Cavaliers_sabre.svg/1200px-Virginia_Cavaliers_sabre.svg.png' />
let UMBC=<img className='opponent-logo' src='https://styleguide.umbc.edu/wp-content/uploads/sites/113/2019/09/UMBCretrievers_JUSTHEAD-on-white-or-black.png' />
let towson=<img className='opponent-logo' src='https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Towson_Tigers_logo.svg/1200px-Towson_Tigers_logo.svg.png' />
let mount=<img className="opponent-logo" src='https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Mount_St._Mary%27s_Mountaineers_logo.svg/1200px-Mount_St._Mary%27s_Mountaineers_logo.svg.png' />
let bloom=<img className="opponent-logo" src='https://www.bloomu.edu/sites/default/files/2021-10/07BU_head.eps_newbrandcolors-01.png' />
let nova=<img className="opponent-logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Villanova_Wildcats_logo.svg/2296px-Villanova_Wildcats_logo.svg.png' />
let norwich=<img className="opponent-logo" src='https://www.nsnsports.net/wp-content/uploads/2016/01/norwich_shield_logo.png' />

function ScheduleFunc(){
  return(
    <div>
      <Head />
      <ScheduleData 
      opponent='UVA'
      date='9/3/2022'
      location='@ UVA'
      score='W 33-19'
      logo={UVA}
      />

    <ScheduleData 
      opponent='UMBC'
      date='9/17/2022'
      location='Kenilworth Field'
      score='W 92-0'
      logo={UMBC}
      />

    <ScheduleData 
      opponent='Towson'
      date='9/24/2022'
      location='@ Towson'
      score='W 34-12'
      logo={towson}
      />
      
      <ScheduleData 
      opponent='UMBC'
      date='10/01/2022'
      location='@ UMBC'
      score='W 32-0'
      logo={UMBC}
      />

      <ScheduleData 
      opponent="Mount St. Mary's"
      date='10/07/2022'
      location='Cooper Field'
      score='W 69-15'
      logo={mount}
      />

    <ScheduleData 
      opponent='Towson'
      date='10/15/2022'
      location='Cooper Field'
      score='W 44-0'
      logo={towson}
      />
    
    <ScheduleData 
      opponent="Mount St. Mary's"
      date='10/22/2022'
      location='@ Echo Field'
      score='W 55-17'
      logo={mount}
      />

    <ScheduleData 
      opponent="Bloomsburg - MARC Semifinal"
      date='10/29/2022'
      location='@ Temple University'
      score='W 72-7'
      logo={bloom}
      />

    <ScheduleData 
      opponent="Villanova - MARC Final"
      date='11/04/2022'
      location='Maryland'
      score='W 65-19'
      logo={nova}
      />
    
    <ScheduleData 
      opponent="Norwich - NCR Sweet 16"
      date='11/18/2022'
      location='@ Culpepper, VA'
      score='L 27-41'
      logo={norwich}
      />

      <Footer />
    </div>
  )
}

export default ScheduleFunc;