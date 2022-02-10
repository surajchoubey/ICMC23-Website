import React from "react";

const hotelslink = "https://www.bits-pilani.ac.in/goa/goahotels"

function Accomodation() {
    return(
        <div className="container">
            <div className="titleStyle1"> Accomodation </div>
            <div className="titleStyle2"> Nearby </div>
            <div class="divider" style={{marginBottom: '30px'}}></div>

            <a class="black-button" href={hotelslink} target="_blank" rel="nopener noreferrer">CLICK HERE FOR ACCOMODATION DETAILS NEARBY</a>
            <p></p>
        </div>
    );
}

export default Accomodation;