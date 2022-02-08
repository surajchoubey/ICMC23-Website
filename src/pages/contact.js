import React from "react";
import BITSGoaOnGMAP from "../layouts/bits-goa-map";

function Contact() {
    return (
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-sm-12 col-xs-12" style={{minHeight: "400px"}}>
                <div class="">
                    <div class="contact-content" style={{textAlign: 'start'}}>
                        <div className="titleStyle1"> Contact </div>
                        <div className="titleStyle2"> Information </div>
                        <div class="divider" style={{marginBottom: '30px'}}></div>
                        <p class="address">
                            <strong>Birla Institute of Technology &amp; Science</strong><br/>
                            NH 17B, Bypass Road, Zuarinagar, Sancoale,<br/>Goa 403726
                        </p>
                        
                        <div class="">
                            <p class="contact-number">0832 258 0101</p>
                            <p class="contact-email">ssbaral@goa.bits-pilani.ac.in</p>
                            <div class="black-button">CONTACT US</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12 mb-1 gmap-bits-goa" id="bits-goa-on-gmaps" style={{display: 'flex',justifyContent: 'space-between', alignItems: 'center'}}>
                <BITSGoaOnGMAP height={"400px"} width={"100%"} />
            </div>
        </div>
        <div className="row" style={{minHeight: '40px'}}></div>
    </div>
    );
    }
    
    export default Contact;
