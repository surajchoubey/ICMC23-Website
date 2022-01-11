import React from "react";
import '../../App.css';

function Tracks() {
    return(
        <div style={{marginLeft:"60px", marginTop: "40px", marginRight: '60px'}}>
        <div className="titleStyle1">
            Contribution
        </div>
        <div className="titleStyle2">
            Tracks
        </div>
        <div className = "tracksTitle">
            mathematics
        </div>
        <div style={{display:'flex', flexWrap: 'wrap', justifyContent: "space-between", marginTop: "120px"}}>
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
                MATHEMATICAL MODELING AND SIMULATION
            </div>
            <div className="tracksStyle">
                GEOMETRY (DISCRETE, ALGEBRAIC, FINITE)
            </div>
            <div className="tracksStyle">
                APPLICATIONS OF FUZZY SET THEORY
            </div>
            <div className="tracksStyle">
                DISCRETE MATHEMATICS
            </div>
            <div className="tracksStyle">
                GAME THEORY
            </div>
            <div className="tracksStyle">
                COMPUTATIONAL FLUID MECHANICS
            </div>
            <div className="tracksStyle">
                INFORMATION THEORY
            </div>
        </div>
        <div className = "tracksTitle">
            computing
        </div>
        <div style={{display:'flex', flexWrap: 'wrap', justifyContent: "space-between", marginTop: "120px"}}>
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
                CRYPTOLOGY AND CYBER SECURITY
            </div>
            <div className="tracksStyle">
                MOBILE, DISTRIBUTED, AND PARALLEL COMPUTING
            </div>
            <div className="tracksStyle">
                MACHINE AND DEEP LEARNING
            </div>
            <div className="tracksStyle">
                GREEN COMPUTING
            </div>
            <div className="tracksStyle">
                BIG DATA
            </div>
            <div className="tracksStyle">
                CLOUD, FOG, AND EDGE COMPUTING
            </div>
            <div className="tracksStyle">
                BIOINFORMATICS
            </div>
            <div className="tracksStyle">
                QUANTUM COMPUTING
            </div>
            <div className="tracksStyle">
                INTERNET OF THINGS
            </div>
            <div className="tracksStyle">
                BLOCKCHAIN
            </div>
            <div className="tracksStyle">
                DEW COMPUTING
            </div>
        </div>
        </div>
    );
}

export default Tracks;