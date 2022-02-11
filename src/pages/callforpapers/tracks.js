import React from "react";

const mathTracks = [
  "NUMERICAL ANALYSIS",
  "APPROXIMATION THEORY",
  "LINEAR ALGEBRA",
  "DIFFERENTIAL EQUATIONS",
  "COMPUTATIONAL NUMBER THEORY",
  "ANALYSIS",  
  "OPERATIONS RESEARCH",
  "PROBABILITY AND STATISTICS",
  "DISCRETE MATHEMATICS",
  "GAME THEORY",
  "MATHEMATICAL MODELING AND SIMULATION",
  "INFORMATION THEORY",
  "GEOMETRY (DISCRETE, ALGEBRAIC, FINITE)",
  "APPLICATIONS OF FUZZY SET THEORY",
  "COMPUTATIONAL FLUID MECHANICS"
];
const compTracks = [
  "WIRELESS NETWORKS",
  "NETWORK SECURITY",
  "DIGITAL IMAGE PROCESSING",
  "DIGITAL WATERMARKING",
  "GREEN COMPUTING",
  "BLOCKCHAIN",  
  "DEW COMPUTING",
  "BIG DATA",
  "BIOINFORMATICS",  
  "CRYPTOLOGY AND CYBER SECURITY",
  "CLOUD, FOG, AND EDGE COMPUTING",  
  "MACHINE AND DEEP LEARNING",
  "QUANTUM COMPUTING",
  "INTERNET OF THINGS",
  "MOBILE, DISTRIBUTED, AND PARALLEL COMPUTING"
];

const MathTiles = () => { return mathTracks.map(trackname => (<div className="tracksStyle"> {trackname} </div>)) };
const CompTiles = () => { return compTracks.map(trackname => (<div className="tracksStyle"> {trackname} </div>)) };

function Tracks() {
    return(
        <div className="container" style={{marginBottom: '50px' /*marginLeft:"60px", marginTop: "40px", marginRight: '60px'*/}}>

            <div className="titleStyle1"> Contribution </div>
            <div className="titleStyle2"> Tracks </div>

            <div class="divider" style={{marginBottom: '30px'}}></div>

            <h2 class="heading-secondary">mathematics</h2>
            <div style={{display:'flex', flexWrap: 'wrap', justifyContent: "space-between", marginTop: "50px"}}>
                <MathTiles />  
            </div>

            <h2 class="heading-secondary">computing</h2>
            <div style={{display:'flex', flexWrap: 'wrap', justifyContent: "space-between", marginTop: "50px"}}>
                <CompTiles />
            </div>

        </div>
    );
}

export default Tracks;
