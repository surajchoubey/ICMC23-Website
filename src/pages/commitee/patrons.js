import React from "react";

class CommitteeMember {
  constructor(memberType, name, description, institute) {
    this.patronType = memberType;
    this.name = name;
    this.description = description;
    this.institute = institute;
  }

  static getCards(patronList) {
    return patronList.map(function (patron, _) {
      return (
        <div class="btn-raise raise col-md-4 col-sm-6 col-xs-12">
          <p class="card-name">{patron.name}</p>
          <p class="card-description">{patron.description}</p>
          <p class="card-description">{patron.institute}</p>
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
    "Prof. D. M. Kulkarni",
    "Dean Administration,",
    "BITS Pilani K K Birla Goa Campus"
  ),
  new CommitteeMember(
    "General Co-Chairs",
    "Prof. P.K. Saxena",
    "Scientific Consultant-Cyber Security,",
    "Govt. of India, Former Director, SAG, DRDO, Delhi,"
  ),
  new CommitteeMember(
    "General Co-Chairs",
    "Prof. P.D. Srivastava",
    "Department of Mathematics,",
    "IIT Bhilai"
  ),
];
const ProgrammeChairs = [
  new CommitteeMember(
    "Programme Co-Chairs",
    "Prof. S Ponnusamy",
    "Department of Mathematics,",
    "IIT Madras"
  ),
  new CommitteeMember(
    "Programme Co-Chairs",
    "Prof. Debasis Giri",
    "Department of Information Technology,",
    "Maulana Abul Kalam Azad University of Technology"
  ),
];
function Patrons() {
  return (
    <div style={{textAlign: 'start'}}>
      <div class="titleStyle1">Our</div>
      <div class="titleStyle2">Committee</div>
      <div class="divider" style={{ marginBottom: "30px" }}></div>
      <h2 class="heading-secondary my-4">Chief Patron</h2>
      <div class="row gx-5">
        {CommitteeMember.getCards(ChiefPatron)}
      </div>
      <h2 class="heading-secondary my-4">General Co-Chairs</h2>
      <div class="row gx-5">
        {CommitteeMember.getCards(GeneralChairs)}
      </div>
      <h2 class="heading-secondary my-4">Programme Co-Chairs</h2>
      <div class="row gx-5">
        {CommitteeMember.getCards(ProgrammeChairs)}
      </div>
    </div>
  );
}

export default Patrons;
