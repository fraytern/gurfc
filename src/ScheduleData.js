import React from "react";

function ScheduleData(props){
  return(
    <div className="schedule-div">
        <div>
            <h3 className="logo">{props.logo}</h3>
        </div>
        <div className="schedule-info">
            <h1>{props.opponent}</h1>
            <h2>{props.date}</h2>
            <h3>{props.location}</h3>
            <h3>{props.score}</h3>
        </div>
    </div>
  )
}

export default ScheduleData;