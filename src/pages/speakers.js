import React from "react";
import speaker1 from '../images/speaker1.jpg';
import speaker2 from '../images/speaker2.jpg';

function Speakers() {
    return(
        <div style={{marginLeft:"60px", marginTop: "40px", marginRight:"60px"}}>
        <div className="titleStyle1">
            Our
        </div>
        <div className="titleStyle2">
            Speakers
        </div>
        <div style={{height: "350px", marginTop: "40px", 
                    background: "#FBFBFB", display: "flex", flexDirection:"row", justifyContent: 'space-between'}}>
            <img src={speaker1} style={{height: "350px", marginRight: "20px"}}/>
            <div style={{height: "350px", marginRight: "0px", width: "260px"}}>
                <div className="speakerName">
                Jiawei Han
                </div>
                <div className="speakerText" style={{marginTop: "45px"}}>
                Department of Computer Science <br/>
                Univ. of Illinois at Urbana-Champaign
                </div>
                <div className="boxStyle" style={{backgroundColor:"white", marginTop: "40px"}}>
                    <a href='https://google.com/' style={{color:"black", textDecoration:'none'}} target="_blank">VIEW MORE &#160; &#x2192;</a>
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
                §  DARPA/INCAS: “Analytics of Information Influence: Effect Characterization” <br/>
                </div>
            </div>
        </div>
        <div style={{height: "350px", marginTop: "40px", 
                    background: "#FBFBFB", display: "flex", flexDirection:"row", justifyContent: 'space-between'}}>
            <img src={speaker2} style={{height: "350px", marginRight: "20px"}}/>
            <div style={{height: "350px", marginRight: "0px", width: "260px"}}>
                <div className="speakerName">
                Ellena Ferrari
                </div>
                <div className="speakerText" style={{marginTop: "45px"}}>
                Department of Computer Science <br/>
                Univ. of Illinois at Urbana-Champaign
                </div>
                <div className="boxStyle" style={{backgroundColor:"white", color:"black", marginTop: "40px"}}>
                    <a href='https://google.com/' style={{color:"black", textDecoration:'none'}} target="_blank">VIEW MORE &#160; &#x2192;</a>
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
                §  DARPA/INCAS: “Analytics of Information Influence: Effect Characterization” <br/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Speakers;
