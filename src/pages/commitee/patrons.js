import React from "react";
import OrgCommittee from "./orgcommitee";
import TechProCommittee from "./techprocommitee";
class CommitteeMember {
  constructor(memberType, name, description) {
    this.patronType = memberType;
    this.name = name;
    this.description = description;
  }

  static getCards(patronList) {
    return patronList.map(function (patron, _) {
      return (
        <div class="btn-raise raise">
          <p class="card-name">{patron.name}</p>
          <p class="card-description">{patron.description}</p>
        </div>
      );
    });
  }
}

const ChiefPatron = [
  new CommitteeMember(
    "Chief Patron",
    " Prof. Souvik Bhattacharyya",
    "Vice Chancellor, Birla Institute of Technology and Science, Pilani"
  ),
];
const GeneralChairs = [
  new CommitteeMember(
    "General Co-Chairs",
    "Prof. D. M. Kulkarni",
    "Dean Administration, BITS Pilani K K Birla Goa Campus"
  ),
  new CommitteeMember(
    "General Co-Chairs",
    "Prof. P.K. Saxena",
    "Scientific Consultant-Cyber Security, Govt. of India, Former Director, SAG, DRDO, Delhi,"
  ),
  new CommitteeMember(
    "General Co-Chairs",
    "Prof. P.D. Srivastava",
    "Department of Mathematics, IIT Bhilai"
  ),
];
const ProgrammeChairs = [
  new CommitteeMember(
    "Programme Co-Chairs",
    "Prof. S Ponnusamy",
    "Department of Mathematics, IIT Madras"
  ),
  new CommitteeMember(
    "Programme Co-Chairs",
    "Prof. Debasis Giri",
    "Department of Information Technology, Maulana Abul Kalam Azad University of Technology"
  ),
];
function Patrons() {
  return (
    <>
      <section class="section-comittee">
        <div class="titleStyle1">Our</div>
        <div class="titleStyle2">Committee</div>
        <div class="divider" style={{ marginBottom: "30px" }}></div>
        <h2 class="heading-secondary">Chief Patron</h2>
        <div class="committee-flxbx">
          {CommitteeMember.getCards(ChiefPatron)}
        </div>
        <h2 class="heading-secondary">General Co-Chairs</h2>
        <div class="committee-flxbx">
          {CommitteeMember.getCards(GeneralChairs)}
        </div>
        <h2 class="heading-secondary">Programme Co-Chairs</h2>
        <div class="committee-flxbx">
          {CommitteeMember.getCards(ProgrammeChairs)}
        </div>
      </section>
      <OrgCommittee />
      <TechProCommittee />
    </>
  );
}

export default Patrons;
