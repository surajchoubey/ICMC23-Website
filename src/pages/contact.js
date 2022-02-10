import React from "react";
import BITSGoaOnGMAP from "../layouts/bits-goa-map";

const contactuslink = "https://forms.gle/unohzJ54tW31MUvcA";


const connectstyle = {
    color: 'grey',
    backgroundColor: 'transparent',
    textDecoration: 'none'
}

const connectstyle2 = {
    color: 'black',
    textDecoration: 'none',
    fontSize: "130%", 
    fontWeight: 'bold',
    cursor: 'pointer'
}

const profContact = [{
    "name": "Prof. J. K. Sahoo",
    "phone": "8322580441",
    "email": "icmc2023@goa.bits-pilani.ac.in",
    "profile": "https://universe.bits-pilani.ac.in/goa/jksahoo/profile"
},
{
    "name": "Prof. Anil K Pundir",
    "phone": "8322580446",
    "email": "anilpundir@goa.bits-pilani.ac.in",
    "profile": "https://www.bits-pilani.ac.in/goa/anilpundir/profile"
},
{
    "name": "Prof. P. Danumjaya",
    "phone": "9850275789",
    "email": "danuiitb@gmail.com",
    "profile": "https://universe.bits-pilani.ac.in/goa/danu/profile"
}
];

const ProfContact = () => {
    return profContact.map(element => (
    <div class="col-sm-12 col-md-6" style={{marginBottom: '7px'}}>
        <a style={connectstyle2} href={element["profile"]} target="_blank" rel="nopener noreferrer" title="Visit website">{element["name"]}</a> <br/> Mobile:&nbsp;
        <a style={connectstyle} href={"tel:+91" + element["phone"]} title="Call" >{element["phone"]}</a> <br/>Email:&nbsp;
        <a style={connectstyle} href={"mailto:" + element["email"]} title="Email">{element["email"]}</a>
    </div>
    ));
};

function Contact() {
    return (
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-12" style={{minHeight: "400px"}}>
                <div class="">
                    <div class="contact-content" style={{textAlign: 'start'}}>
                        <div className="titleStyle1"> Contact </div>
                        <div className="titleStyle2"> Information </div>
                        <div class="divider" style={{marginBottom: '30px'}}></div>
                        <p class="address">
                            <strong>Birla Institute of Technology &amp; Science</strong><br/>
                            NH 17B, Bypass Road, Zuarinagar, Sancoale,<br/>Goa 403726
                        </p>

                        <div class="row">
                            <ProfContact />
                        </div>

                        <div style={{marginTop: "20px", marginBottom: "30px"}}>
                            <a className="black-button" href={contactuslink} target="_blank" rel="nopener noreferrer">CONTACT WEBSITE TEAM</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 mb-1 gmap-bits-goa" id="bits-goa-on-gmaps" style={{display: 'flex',justifyContent: 'space-between', alignItems: 'center'}}>
                <BITSGoaOnGMAP height={"400px"} width={"100%"} />
            </div>
        </div>
        <div className="row" style={{minHeight: '40px'}}></div>
    </div>
    );
    }
    
    export default Contact;
