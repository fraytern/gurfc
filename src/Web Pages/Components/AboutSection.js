import React from "react";
import InterestForm from "./InterestForm";
import SlidePics from "../../Slideshow";

function AboutSection(){
    return(
        <div>
        <div className="about-section">
            <h3>About Us</h3>
            <p>The Georgetown University Rugby Football Club is the intercollegiate men's rugby union team that represents Georgetown University in the Mid-Atlantic Rugby Conference of National Collegiate Rugby, Division II. They have twice reached the USA Rugby National Tournament Final Four, in 2005 and 2009.</p>
            <p>For the 2022 Fall season, the Hoyas went undefeated during the regular season, with a staggering point differential of 496-89. They won their second straight MARC championship with a 65-19 victory over Villanova, which punched them a ticket into the National Collegiate Rugby Division II Sweet 16. Unfortunately, the Hoyas fell to Norwich University 27-41 in a hard fought match.</p>
            <SlidePics />
        </div>
        <div className="about-section">
        <InterestForm />
        </div>
        </div>
    )
}

export default AboutSection;