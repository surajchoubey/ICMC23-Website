import React from "react";
class Track {
  constructor(name) {
    this.name = name;
  }

  static trackStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    "column-gap": "10px",
    "row-gap": "10px",
    margin: "20px 0 50px 0",
  };

  static getCards(trackList) {
    return trackList.map(function (track, _) {
      return <div className="track-card">{track.name}</div>;
    });
  }
}

const mathTracks = [
  new Track("NUMERICAL ANALYSIS"),
  new Track("APPROXIMATION THEORY"),
  new Track("LINEAR ALGEBRA"),
  new Track("DIFFERENTIAL EQUATIONS"),
  new Track("COMPUTATIONAL NUMBER THEORY"),
  new Track("OPERATIONS RESEARCH"),
  new Track("PROBABILITY AND STATISTICS"),
  new Track("MATHEMATICAL MODELING AND SIMULATION"),
  new Track("GAME THEORY"),
  new Track("INFORMATION THEORY"),
  new Track("ANALYSIS"),
  new Track("GEOMETRY (DISCRETE, ALGEBRAIC, FINITE)"),
  new Track("APPLICATIONS OF FUZZY SET THEORY"),
  new Track("DISCRETE MATHEMATICS"),
  new Track("COMPUTATIONAL FLUID MECHANICS"),
];
const compTracks = [
  new Track("WIRELESS NETWORKS"),
  new Track("NETWORK SECURITY"),
  new Track("DIGITAL IMAGE PROCESSING"),
  new Track("DIGITAL WATERMARKING"),
  new Track("CRYPTOLOGY AND CYBER SECURITY"),
  new Track("MOBILE, DISTRIBUTED, AND PARALLEL COMPUTING"),
  new Track("MACHINE AND DEEP LEARNING"),
  new Track("GREEN COMPUTING"),
  new Track("CLOUD, FOG, AND EDGE COMPUTING"),
  new Track("BIOINFORMATICS"),
  new Track("QUANTUM COMPUTING"),
  new Track("INTERNET OF THINGS"),
  new Track("BIG DATA"),
  new Track("BLOCKCHAIN"),
  new Track("DEW COMPUTING"),
];

function Tracks() {
    return(
        <div className="container" style={{marginBottom: '50px' /*marginLeft:"60px", marginTop: "40px", marginRight: '60px'*/}}>
        <div className="titleStyle1">
            Contribution
        </div>
        <div className="titleStyle2">
            Tracks
        </div>
        <div class="divider" style={{marginBottom: '50px'}}></div>
        <h2 class="heading-secondary">mathematics</h2>
        <div style={{display:'flex', flexWrap: 'wrap', justifyContent: "space-between", marginTop: "50px"}}>
            <div className="tracksStyle">
                NUMERICAL ANALYSIS
            </div>
            <div className="tracksStyle">
                APPROXIMATION THEORY
            </div>
            <div className="tracksStyle">
                LINEAR ALGEBRA
            </div>
            <div className="tracksStyle">
                DIFFERENTIAL EQUATIONS
            </div>
            <div className="tracksStyle">
                COMPUTATIONAL NUMBER THEORY
            </div>
            <div className="tracksStyle">
                ANALYSIS
            </div>
            <div className="tracksStyle">
                OPERATIONS RESEARCH
            </div>
            <div className="tracksStyle">
                PROBABILITY AND STATISTICS
            </div>
            <div className="tracksStyle">
                DISCRETE MATHEMATICS
            </div>
            <div className="tracksStyle">
                GAME THEORY
            </div>
            <div className="tracksStyle">
                MATHEMATICAL MODELING AND SIMULATION
            </div>
            <div className="tracksStyle">
                INFORMATION THEORY
            </div>
            <div className="tracksStyle">
                GEOMETRY (DISCRETE, ALGEBRAIC, FINITE)
            </div>
            <div className="tracksStyle">
                APPLICATIONS OF FUZZY SET THEORY
            </div>
            <div className="tracksStyle">
                COMPUTATIONAL FLUID MECHANICS
            </div>
        </div>
        <h2 class="heading-secondary" style={{color: '#f2f2f2'}}>computing</h2>
        <div style={{display:'flex', flexWrap: 'wrap', justifyContent: "space-between", marginTop: "50px"}}>
            <div className="tracksStyle">
                WIRELESS NETWORKS
            </div>
            <div className="tracksStyle">
                NETWORK SECURITY
            </div>
            <div className="tracksStyle">
                DIGITAL IMAGE PROCESSING
            </div>
            <div className="tracksStyle">
                DIGITAL WATERMARKING
            </div>
            <div className="tracksStyle">
                GREEN COMPUTING
            </div>
            <div className="tracksStyle">
                BLOCKCHAIN
            </div>
            <div className="tracksStyle">
                DEW COMPUTING
            </div>
            <div className="tracksStyle">
                BIG DATA
            </div>
            <div className="tracksStyle">
                BIOINFORMATICS
            </div>
            <div className="tracksStyle">
                CRYPTOLOGY AND CYBER SECURITY
            </div>
            <div className="tracksStyle">
                CLOUD, FOG, AND EDGE COMPUTING
            </div>
            <div className="tracksStyle">
                MACHINE AND DEEP LEARNING
            </div>
            <div className="tracksStyle">
                QUANTUM COMPUTING
            </div>
            <div className="tracksStyle">
                INTERNET OF THINGS
            </div>
            <div className="tracksStyle">
                MOBILE, DISTRIBUTED, AND PARALLEL COMPUTING
            </div>
        </div>
        </div>
    );
}

export default Tracks;
