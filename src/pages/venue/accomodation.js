import React from "react";

const hotelslink = "https://www.bits-pilani.ac.in/goa/goahotels"

const accoText = "Those participants who are interested in availing of the campus hostel accommodation facility (nominal charges), please add the required information in the registration form. The hostel accommodation charges will be collected at the time of registration."

function Accomodation() {
    return (
        <div className="container">
            <div className="titleStyle1"> Accomodation </div>
            <div className="titleStyle2"> Nearby </div>
            <div class="divider" style={{marginBottom: '30px'}}></div>

            <p style={{fontWeight: '400'}} className="about-txt-cnt">{accoText}</p>
            <a class="black-button" href={hotelslink} target="_blank" rel="nopener noreferrer">CLICK HERE FOR ACCOMODATION DETAILS NEARBY</a>
            <p></p>
            
        </div>
    );
}

export default Accomodation;