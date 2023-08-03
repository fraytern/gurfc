import React from "react";

  function RosterData(props){
    return(
      <div className="roster-div">
        <div>
        <h3>{props.img}</h3> </div>
        <div className="roster-info">
          <h1>{props.name}</h1>
          <h2>{props.position}</h2>
          <h3>{props.hometown}</h3>
        </div>
      </div>
    )
  }
  
  export default RosterData;