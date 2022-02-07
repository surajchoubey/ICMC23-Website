import React from "react";
import speaker1 from '../images/speaker1.jpg';
import speaker2 from '../images/speaker2.jpg';

function SpeakerLink({link}) {
    return (
        <a href={link} target="_blank" rel="nopener noreferrer" style={{all: 'unset', cursor: 'pointer'}}>
            <div className='boxStyle'>
                VIEW MORE &#160; &#x2192;
            </div>
        </a>
    )
}


function Speakers() {
    return(
        <div className="container" style={{marginBottom: '50px' /* marginLeft:"60px", marginTop: "40px", marginRight:"60px" */}}>
        <div className="titleStyle1">
            Our
        </div>
        <div className="titleStyle2">
            Speakers
        </div>
        <div class="divider" style={{marginBottom: '50px'}}></div>
        <div style={{height: "350px", marginTop: "40px", 
                    background: "#FBFBFB", display: "flex", flexDirection:"row", justifyContent: 'space-between'}}>
            <img src={speaker1} style={{height: "350px", marginRight: "20px"}} alt="speaker1"/>
            <div style={{height: "350px", marginRight: "0px", width: "260px"}}>
                <div className="speakerName">
                Jiawei Han
                </div>
                <div className="speakerText" style={{marginTop: "25px"}}>
                Department of Computer Science <br/>
                Univ. of Illinois at Urbana-Champaign
                </div>
                <div style={{marginTop: "40px"}}>
                <SpeakerLink link="https://www.google.com"/>
                </div>
            </div>
            <div style={{marginRight: "40px", width: "400px"}}>
                <div style={{position: "relative", height: "28px", marginTop: "32px", fontFamily: "Roboto",
                            fontWeight: "300", fontSize: "21px",lineHeight: "28px",color: "#BDBDBD", textAlign:"left"}}>
                    Current Research
                </div>
                <div className="speakerText" style={{marginTop: "15px", flexWrap: "wrap"}}>
                §  StructNet: Constructing and Mining Structure-Rich Information Networks for Scientific Research (NSF/IIS) <br/>
                §  Taming Big Networks via Embedding (NSF/IIS-BIGDATA) <br/>
                §  Mining and Leveraging Knowledge Hypercubes for Complex Applications (NSF-IIS) <br/>
                §  NSF AI Institute for Molecular Discovery, Synthetic Strategy, and Manufacturing: Molecule Maker Lab Institute <br/>
                §  DARPA/KAIROS: “RESIN: Reasoning about Event Schemas for Induction of kNowledge” <br/>
                §  DARPA/INCAS: “Analytics of Information Influence: Effect Characterization”
                </div>
            </div>
        </div>
        <div style={{height: "350px", marginTop: "40px", 
                    background: "#FBFBFB", display: "flex", flexDirection:"row", justifyContent: 'space-between'}}>
            <img src={speaker2} style={{height: "350px", marginRight: "20px"}} alt="speaker2"/>
            <div style={{marginRight: "0px", width: "260px"}}>
                <div className="speakerName">
                Ellena Ferrari
                </div>
                <div className="speakerText" style={{marginTop: "25px"}}>
                Professor of Database Management Systems <br/>
                Director, DiSTA STRICT SociaLab <br/>
                <br/>
                University of Insubria <br/>
                Department of Theoretical and Applied Science
                </div>
                <div style={{marginTop: "125px"}}>
                <SpeakerLink link="https://www.google.com"/>
                </div>
            </div>
            <div style={{marginRight: "40px", width: "400px"}}>
                <div style={{position: "relative", height: "28px", marginTop: "32px", fontFamily: "Roboto",
                            fontWeight: "300", fontSize: "21px",lineHeight: "28px",color: "#BDBDBD", textAlign:"left"}}>
                    Recent Publications
                </div>
                <div className="speakerText" style={{marginTop: "15px", flexWrap: "wrap"}}>
                L. Giaretta, A. Lekssays, B. Carminati, E. Ferrari, S. Girdzijauskas. LiMNet: Early-Stage Detection of IoT Botnets with Lightweight Memory Networks. ESORICS 2021: 605-625 <br/>
                <br/>
                Ha Xuan Son, Barbara Carminati, E. Ferrari. A Risk Assessment Mechanism for Android Apps. SmartIoT 2021: 237-244 <br/>
                <br/>
                P. Colombo, E. Ferrari, E. D. Tümer. Regulating data sharing across MQTT environments.J. Netw. Comput. Appl. 174: 102907 (2021)
                </div>
            </div>
        </div>
        </div>
    )
}

export default Speakers;