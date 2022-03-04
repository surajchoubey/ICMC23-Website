import React from "react";

class CommitteeMember {
  constructor(memberType, name, description, institute, link) {
    this.patronType = memberType;
    this.name = name;
    this.description = description;
    this.institute = institute;
    this.link = link;
  }

  static getCards(patronList) {
    return patronList.map(function (patron, _) {
      return (
        <div class="btn-raise raise col-md-4 col-sm-6 col-xs-12 p-3 my-2">
          <a href={patron.link} target="_blank" rel="nopener noreferrer">
            <p class="card-name">{patron.name}</p>
            <p class="card-description">{patron.description}</p>
            <p class="card-description">{patron.institute}</p>
          </a>
        </div>
      );
    });
  }
}

const ChiefPatron = [
  new CommitteeMember(
    "Chief Patron",
    " Prof. Souvik Bhattacharyya",
    "Vice Chancellor,",
    "Birla Institute of Technology and Science, Pilani"
  ),
];
const GeneralChairs = [
  new CommitteeMember(
    "General Co-Chairs",
    "Prof. D.M. Kulkarni",
    "Dean Administration,",
    "BITS Pilani K K Birla Goa Campus"
  ),
  new CommitteeMember(
    "General Co-Chairs",
    "Prof. P. K. Saxena",
    "Scientific Consultant-Cyber Security,",
    "Govt. of India, Former Director, SAG, DRDO, New Delhi, India"
  ),
  new CommitteeMember(
    "General Co-Chairs",
    "Prof. P. D. Srivastava",
    "Department of Mathematics,",
    "IIT Bhilai, Raipur, India"
  ),
];
const ProgrammeChairs = [
  new CommitteeMember(
    "Programme Co-Chairs",
    "Prof. S. Ponnusamy",
    "Department of Mathematics,",
    "IIT Madras, India",
    "https://iitm.irins.org/profile/22792"
  ),
  new CommitteeMember(
    "Programme Co-Chairs",
    "Prof. Predrag S. Stanimirović",
    "Faculty of Sciences and Mathematics,",
    "University of Niš, Serbia",
    "https://www.pmf.ni.ac.rs/nastavnici-i-saradnici/biografija/?idz=59"
  ),
  new CommitteeMember(
    "Programme Co-Chairs",
    "Prof. Dieter Gollmann",
    "Hamburg University of Technology,",
    "Hamburg, Germany",
    "https://www.sba-research.org/team/dieter-gollmann/"
  ),
  new CommitteeMember(
    "Programme Co-Chairs",
    "Prof. Sakurai Kouichi",
    "Faculty of Information Science and Electrical Engineering,",
    "Kyushu University, Japan",
    "http://itslab.inf.kyushu-u.ac.jp/~sakurai/"
  ),
  new CommitteeMember(
    "Programme Co-Chairs",
    "Prof. Debasis Giri",
    "Department of Information Technology,",
    "Maulana Abul Kalam Azad University of Technology, West Bengal, India",
    "https://debasisgiri.in/"
  ),
];
function Patrons() {
  return (
    <div style={{ textAlign: "start" }}>
      <div class="titleStyle1">Our</div>
      <div class="titleStyle2">Committee</div>
      <div class="divider" style={{ marginBottom: "30px" }}></div>
      <h2 class="heading-secondary my-4">Chief Patron</h2>
      <div class="row px-3">{CommitteeMember.getCards(ChiefPatron)}</div>
      <h2 class="heading-secondary my-4">General Chairs</h2>
      <div class="row px-3">{CommitteeMember.getCards(GeneralChairs)}</div>
      <h2 class="heading-secondary my-4">Programme Chairs</h2>
      <div class="row px-3">{CommitteeMember.getCards(ProgrammeChairs)}</div>
    </div>
  );
}

export default Patrons;
