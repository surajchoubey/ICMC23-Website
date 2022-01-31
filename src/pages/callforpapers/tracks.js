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
  return (
    <div
      className="container"
      style={{
        margin:
          "0 auto" /*marginLeft:"60px", marginTop: "40px", marginRight: '60px'*/,
      }}
    >
      <div className="titleStyle1">Contribution</div>
      <div className="titleStyle2">Tracks</div>
      <div class="divider" style={{ marginBottom: "50px" }}></div>
      <h2 class="heading-secondary">mathematics</h2>
      <div style={Track.trackStyle}>{Track.getCards(mathTracks)}</div>
      <h2 class="heading-secondary">computing</h2>
      <div style={Track.trackStyle}>{Track.getCards(compTracks)}</div>
    </div>
  );
}

export default Tracks;
