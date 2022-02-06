import React from "react";
import BITSGoaOnGMAP from "../layouts/bits-goa-map";

function Contact() {
    return (<div class="container my-5">
        <div class="row py-3">
            <div class="col-md-5 col-sm-12 col-xs-12 py-2" style={{minHeight: "400px", display: 'flex',justifyContent: 'space-between', alignItems: 'center'}}>
                <div class="contact-flxbx">
                    <div class="contact-content" style={{textAlign: 'start'}}>
                        <div className="titleStyle1">
                            Contact
                        </div>
                        <div className="titleStyle2">
                            Information
                        </div>
                        <p class="address" style={{marginTop: '30px'}}>
                            <strong>Birla Institute of Technology &amp; Science</strong><br/>
                            NH 17B, Bypass Road, Zuarinagar, Sancoale,<br/>Goa 403726
                        </p>
                        <div class="contact-flxbx-2">
                            <p class="contact-number">0832 258 0101</p>
                            <p class="contact-email">ssbaral@goa.bits-pilani.ac.in</p>
                            <div class="black-button">CONTACT US</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-7 col-sm-12 col-xs-12 py-2 gmap-bits-goa" id="bits-goa-on-gmaps" style={{display: 'flex',justifyContent: 'space-between', alignItems: 'center'}}>
                <BITSGoaOnGMAP />
            </div>
        </div>
    </div>
    );
    }
    
    export default Contact;
