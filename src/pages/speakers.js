import React from "react";
import speaker1 from "../images/speaker1.jpg";
import speaker2 from "../images/speaker2.jpg";
import speaker3 from "../images/speaker3.jpg";
import speaker4 from "../images/speaker4.jpg";
import speaker5 from "../images/speaker5.jpg";
import speaker6 from "../images/speaker6.jpg";
import speaker7 from "../images/speaker7.jpg";
import speaker8 from "../images/speaker8.jpg";
import speaker9 from "../images/speaker9.jpg";
import speaker01 from "../images/speaker01.jpg";
import speaker02 from "../images/speaker02.jpg";
import speaker03 from "../images/speaker03.jpg";
import speaker04 from "../images/speaker04.jpg";
import speaker05 from "../images/speaker05.jpg";
import speaker06 from "../images/speaker06.jpeg";
import speaker07 from "../images/speaker07.jpg";

function SpeakerLink({ link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="nopener noreferrer"
      style={{ all: "unset", cursor: "pointer" }}
    >
      <div className="boxStyleView">VIEW MORE &#160; &#x2192;</div>
    </a>
  );
}

class SpeakerHelper {
  constructor(
    speakerName,
    speakerImage,
    speakerText,
    speakerLink,
    // speakerDescription,
    speakerLinkStyle
  ) {
    this.speakerName = speakerName;
    this.speakerImage = speakerImage;
    this.speakerText = speakerText;
    this.SpeakerLink = speakerLink;
    // this.speakerDescription = speakerDescription;
    this.speakerLinkStyle = speakerLinkStyle;
  }

  static speakerTextStyle = {
    marginTop: "15px",
    flexWrap: "wrap",
    textAlign: "justify",
  };

  static getSpeakerCards(speakerList) {
    return speakerList.map(function (speaker, _) {
      return (
        <div className="speakerDiv">
          <img
            className="speakerImg"
            src={speaker.speakerImage}
            alt={speaker.speakerName}
          />
          <div className="upperDiv">
            <div className="speakerName">{speaker.speakerName}</div>
            <div className="speakerText" style={{ marginTop: "25px" }}>
              {speaker.speakerText}
            </div>
            <div style={speaker.speakerLinkStyle}>
              <SpeakerLink link={speaker.SpeakerLink} />
            </div>
          </div>
          {/* <div className="lowerDiv">
            <div
              style={{
                height: "28px",
                marginTop: "32px",
                fontFamily: "Roboto",
                fontWeight: "300",
                fontSize: "21px",
                lineHeight: "28px",
                color: "#BDBDBD",
                textAlign: "left",
              }}
            >
              Current Research
            </div>
            {speaker.speakerDescription}
          </div> */}
        </div>
      );
    });
  }
}

const speakerList1 = [
  new SpeakerHelper(
    "Prof. Predrag S. Stanimirović",
    speaker1,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        Professor, Faculty of Sciences and Mathematics <br />
        University of Niš, Serbia
      </div>
    ),
    "https://www.pmf.ni.ac.rs/nastavnici-i-saradnici/biografija/?idz=59",
    // (
    //   <div className="speakerText" style={SpeakerHelper.speakerTextStyle}>
    //     § StructNet: Constructing and Mining Structure-Rich Information Networks
    //     for Scientific Research (NSF/IIS) <br />
    //     § Taming Big Networks via Embedding (NSF/IIS-BIGDATA) <br />
    //     § Mining and Leveraging Knowledge Hypercubes for Complex Applications
    //     (NSF-IIS) <br />
    //     § NSF AI Institute for Molecular Discovery, Synthetic Strategy, and
    //     Manufacturing: Molecule Maker Lab Institute <br />
    //     § DARPA/KAIROS: “RESIN: Reasoning about Event Schemas for Induction of
    //     kNowledge” <br />§ DARPA/INCAS: “Analytics of Information Influence:
    //     Effect Characterization”
    //   </div>
    // ),
    { marginTop: "40px" }
  ),
  new SpeakerHelper(
    "Prof. Amiya Kumar Pani",
    speaker2,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        Professor, Department of Mathematics <br />
        IIT Bombay, Mumbai, India
        <br />
      </div>
    ),
    "http://www.math.iitb.ac.in/~akp/",
    // (
    //   <div className="speakerText" style={SpeakerHelper.speakerTextStyle}>
    //     L. Giaretta, A. Lekssays, B. Carminati, E. Ferrari, S. Girdzijauskas.
    //     LiMNet: Early-Stage Detection of IoT Botnets with Lightweight Memory
    //     Networks. ESORICS 2021: 605-625 <br />
    //     <br />
    //     Ha Xuan Son, Barbara Carminati, E. Ferrari. A Risk Assessment Mechanism
    //     for Android Apps. SmartIoT 2021: 237-244 <br />
    //     <br />
    //     P. Colombo, E. Ferrari, E. D. Tümer. Regulating data sharing across MQTT
    //     environments.J. Netw. Comput. Appl. 174: 102907 (2021)
    //   </div>
    // ),
    { marginTop: "40px" }
  ),
  new SpeakerHelper(
    "Prof. M. Thamban Nair",
    speaker3,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        Professor, Department of Mathematics <br />
        IIT Madras, Chennai, India
        <br />
      </div>
    ),
    "https://home.iitm.ac.in/mtnair/index.html",
    { marginTop: "40px" }
  ),
  new SpeakerHelper(
    "Prof. Sokratis Katsikas",
    speaker4,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        Professor and Director, <br />
        Norwegian Center for Cybersecurity in Critical Sectors (NORCICS) <br />
        <br />
        Dept. of Information Security and Communication Technology, <br />
        Norwegian University of Science and Technology, Norway <br />
      </div>
    ),
    "https://www.ntnu.edu/employees/sokratis.katsikas",
    { marginTop: "40px" }
  ),
  new SpeakerHelper(
    "Prof. Krzysztof Szczypiorski",
    speaker5,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        Professor of Telecommunications, <br />
        Institute of Telecommunications (IT) <br />
        <br />
        Faculty of Electronics and Information Technology (FEIT), <br />
        Warsaw University of Technology, Poland <br />
      </div>
    ),
    "http://ksz.tele.pw.edu.pl/",
    { marginTop: "40px" }
  ),
  new SpeakerHelper(
    "Prof. Rakesh M. Verma",
    speaker6,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        Professor of Computer Science, <br />
        Director of ReDAS Lab, <br />
        University of Houston, Houston, USA <br />
      </div>
    ),
    "http://www2.cs.uh.edu/~rmverma/",
    { marginTop: "40px" }
  ),
  new SpeakerHelper(
    "Prof. R.N. Mohapatra",
    speaker7,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        Academic Director & Professor <br />
        Department of Mathematics <br />
        University of Central Florida, Orlando, USA <br />
      </div>
    ),
    "https://sciences.ucf.edu/math/person/ram-mohapatra/",
    { marginTop: "40px" }
  ),
  new SpeakerHelper(
    "Prof. S. Sundar",
    speaker8,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        Professor, (Director, NIT Mizoram) <br />
        Department of Mathematics, <br />
        IIT Madras, Chennai, India <br />
      </div>
    ),
    "https://math.iitm.ac.in/public_html/slnt/index.htm",
    { marginTop: "40px" }
  ),
  new SpeakerHelper(
    "Prof. Dieter Gollmann",
    speaker9,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        Professor, <br />
        Head of the Security in Distributed Applications Institute, <br />
        Hamburg University of Technology, Hamburg, Germany <br />
      </div>
    ),
    "https://www.sba-research.org/team/dieter-gollmann/",
    { marginTop: "40px" }
  ),
];

const speakerList2 = [
  new SpeakerHelper(
    "Dr. Ratikanta Behera",
    speaker01,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        Department of Computational and Data Science <br />
        IISc Bangalore, India
      </div>
    ),
    "http://cds.iisc.ac.in/faculty/ratikanta/people.html",
    { marginTop: "40px" }
  ),
  new SpeakerHelper(
    "Dr. Vineet Kumar Singh",
    speaker02,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        Department of Mathematics Sciences <br />
        IIT(BHU), Varanasi, India
      </div>
    ),
    "https://www.iitbhu.ac.in/dept/mat/people/vksinghapm",
    { marginTop: "40px" }
  ),
  new SpeakerHelper(
    "Dr. Muslim Malik",
    speaker03,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        Department of Mathematics <br />
        IIT Mandi, India
      </div>
    ),
    "http://faculty.iitmandi.ac.in/~muslim/",
    { marginTop: "40px" }
  ),
  new SpeakerHelper(
    "Dr. Sarvesh Kumar Rajput",
    speaker04,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        Department of Mathematics <br />
        IIST Thiruvananthapuram, India
      </div>
    ),
    "https://www.iist.ac.in/mathematics/sarvesh",
    { marginTop: "40px" }
  ),
  new SpeakerHelper(
    "Dr. Kapil Kumar Sharma",
    speaker05,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        Department of Mathematics <br />
        South Asian University, Delhi, India
      </div>
    ),
    "http://www.sau.int/faculty/faculty-profile.html?staff_id=50",
    { marginTop: "40px" }
  ),
  new SpeakerHelper( // 6
    "Dr. Navnit Jha",
    speaker06,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        Department of Mathematics <br />
        South Asian University, Delhi, India
      </div>
    ),
    "http://www.sau.int/faculty/faculty-profile.html?staff_id=49",
    { marginTop: "40px" }
  ),
  new SpeakerHelper( // 7
    "Dr. S Sivananthan",
    speaker07,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        Department of Mathematics <br />
        IIT Delhi, India
      </div>
    ),
    "https://web.iitd.ac.in/~siva/",
    { marginTop: "40px" }
  ),
];

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
      
      {/* <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <img class="card-img-top" src={speaker1} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Prof. Predrag S. Stanimirović</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">View More</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <img class="card-img-top" src={speaker2} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">View More</a>
            </div>
          </div>
        </div>
      </div> */}
      
      <h2 class="heading-secondary">Keynote Speakers</h2>
      {SpeakerHelper.getSpeakerCards(speakerList1)}

      <h2 class="heading-secondary" style={{ marginTop: "50px" }}>Invited Speakers</h2>
      {SpeakerHelper.getSpeakerCards(speakerList2)}
    </div>
  );
}

export default Speakers;
