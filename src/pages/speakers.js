import React from "react";
// import speaker1 from "../images/speaker1.jpg";
// import speaker2 from "../images/speaker2.jpg";
import { ExcuseCard, Excuses } from "../layouts/excuses.js";

// function SpeakerLink({ link }) {
//   return (
//     <a
//       href={link}
//       target="_blank"
//       rel="nopener noreferrer"
//       style={{ all: "unset", cursor: "pointer" }}
//     >
//       <div className="boxStyleView">VIEW MORE &#160; &#x2192;</div>
//     </a>
//   );
// }

// class SpeakerHelper {
//   constructor(
//     speakerName,
//     speakerImage,
//     speakerText,
//     speakerLink,
//     speakerDescription,
//     speakerLinkStyle
//   ) {
//     this.speakerName = speakerName;
//     this.speakerImage = speakerImage;
//     this.speakerText = speakerText;
//     this.SpeakerLink = speakerLink;
//     this.speakerDescription = speakerDescription;
//     this.speakerLinkStyle = speakerLinkStyle;
//   }

//   static speakerTextStyle = {
//     marginTop: "15px",
//     flexWrap: "wrap",
//     textAlign: "justify",
//   };

//   static getSpeakerCards(speakerList) {
//     return speakerList.map(function (speaker, _) {
//       return (
//         <div className="speakerDiv">
//           <img
//             className="speakerImg"
//             src={speaker.speakerImage}
//             alt="speakerImage"
//           />
//           <div className="upperDiv">
//             <div className="speakerName">{speaker.speakerName}</div>
//             <div className="speakerText" style={{ marginTop: "25px" }}>
//               {speaker.speakerText}
//             </div>
//             <div style={speaker.speakerLinkStyle}>
//               <SpeakerLink link={speaker.SpeakerLink} />
//             </div>
//           </div>
//           <div className="lowerDiv">
//             <div
//               style={{
//                 height: "28px",
//                 marginTop: "32px",
//                 fontFamily: "Roboto",
//                 fontWeight: "300",
//                 fontSize: "21px",
//                 lineHeight: "28px",
//                 color: "#BDBDBD",
//                 textAlign: "left",
//               }}
//             >
//               Current Research
//             </div>
//             {speaker.speakerDescription}
//           </div>
//         </div>
//       );
//     });
//   }
// }

// const speakerList = [
//   new SpeakerHelper(
//     "Jiawei Han",
//     speaker1,
//     (
//       <div className="speakerText" style={{ marginTop: "25px" }}>
//         Department of Computer Science <br />
//         Univ. of Illinois at Urbana-Champaign
//       </div>
//     ),
//     "www.google.com",
//     (
//       <div className="speakerText" style={SpeakerHelper.speakerTextStyle}>
//         § StructNet: Constructing and Mining Structure-Rich Information Networks
//         for Scientific Research (NSF/IIS) <br />
//         § Taming Big Networks via Embedding (NSF/IIS-BIGDATA) <br />
//         § Mining and Leveraging Knowledge Hypercubes for Complex Applications
//         (NSF-IIS) <br />
//         § NSF AI Institute for Molecular Discovery, Synthetic Strategy, and
//         Manufacturing: Molecule Maker Lab Institute <br />
//         § DARPA/KAIROS: “RESIN: Reasoning about Event Schemas for Induction of
//         kNowledge” <br />§ DARPA/INCAS: “Analytics of Information Influence:
//         Effect Characterization”
//       </div>
//     ),
//     { marginTop: "40px" }
//   ),
//   new SpeakerHelper(
//     "Ellena Ferrari",
//     speaker2,
//     (
//       <div className="speakerText" style={{ marginTop: "25px" }}>
//         Professor of Database Management Systems <br />
//         Director, DiSTA STRICT SociaLab <br />
//         <br />
//         University of Insubria <br />
//         Department of Theoretical and Applied Science
//       </div>
//     ),
//     "www.google.com",
//     (
//       <div className="speakerText" style={SpeakerHelper.speakerTextStyle}>
//         L. Giaretta, A. Lekssays, B. Carminati, E. Ferrari, S. Girdzijauskas.
//         LiMNet: Early-Stage Detection of IoT Botnets with Lightweight Memory
//         Networks. ESORICS 2021: 605-625 <br />
//         <br />
//         Ha Xuan Son, Barbara Carminati, E. Ferrari. A Risk Assessment Mechanism
//         for Android Apps. SmartIoT 2021: 237-244 <br />
//         <br />
//         P. Colombo, E. Ferrari, E. D. Tümer. Regulating data sharing across MQTT
//         environments.J. Netw. Comput. Appl. 174: 102907 (2021)
//       </div>
//     ),
//     { marginTop: "125px" }
//   ),
// ];
function Speakers() {
  return (
    <div
      className="container"
      style={{
        marginBottom: "50px",
      }}
    >
      <div className="titleStyle1">Our</div>
      <div className="titleStyle2">Speakers</div>
      <div class="divider" style={{ marginBottom: "30px" }}></div>
      {/* {SpeakerHelper.getSpeakerCards(speakerList)} */}
      {ExcuseCard(Excuses.TBA)}
    </div>
  );
}

export default Speakers;
