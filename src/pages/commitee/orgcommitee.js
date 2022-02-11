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
        <div class="btn-raise raise col-md-4 col-sm-6 col-xs-12 p-3 my-2">
          <p class="card-name">{patron.name}</p>
          <p class="card-description">{patron.description}</p>
          <p class="card-description">{patron.institute}</p>
        </div>
      );
    });
  }
}

const OrganizingChair = [
  new CommitteeMember(
    "Organizing Chair",
    "Prof. J. K. Sahoo",
    "Department of Mathematics,",
    "BITS Pilani K K Birla Goa Campus"
  ),
];
const OrganizingCoChairs = [
  new CommitteeMember(
    "Organizing Co-Chairs",
    "Prof. Anil Kumar",
    "Department of Mathematics,",
    "BITS Pilani K K Birla Goa Campus"
  ),
  new CommitteeMember(
    "Organizing Co-Chairs",
    "Prof. P. Danumjaya",
    "Department of Mathematics,",
    "BITS Pilani K K Birla Goa Campus"
  ),
];
const OrganizingCommittee = [
  new CommitteeMember(
    "Organizing Committee",
    "Prof. Tarkeshwar Singh",
    "Department of Mathematics,",
    "BITS Pilani K K Birla Goa Campus"
  ),
  new CommitteeMember(
    "Organizing Committee",
    "Prof. Shilpa Gondhali",
    "Department of Mathematics,",
    "BITS Pilani K K Birla Goa Campus"
  ),
  // new CommitteeMember(
  //   "Organizing Committee",
  //   "Prof. Amit Setia",
  //   "Department of Mathematics,",
  //   "BITS Pilani K K Birla Goa Campus"
  // ),
  // new CommitteeMember(
  //   "Organizing Committee",
  //   "Prof. Manoj Kumar Pandey",
  //   "Department of Mathematics,",
  //   "BITS Pilani K K Birla Goa Campus"
  // ),
  // new CommitteeMember(
  //   "Organizing Committee",
  //   "Prof. Prasanna Kumar N.",
  //   "Department of Mathematics,",
  //   "BITS Pilani K K Birla Goa Campus"
  // ),
];
const WebsiteTeam = [
  new CommitteeMember(
    "Website Team",
    "Mr. Suraj Choubey",
    "Department of Mathematics,",
    "BITS Pilani K K Birla Goa Campus"
  ),
  new CommitteeMember(
    "Website Team",
    "Ms. Shruti Rastogi",
    "Department of Mathematics,",
    "BITS Pilani K K Birla Goa Campus"
  ),
  new CommitteeMember(
    "Website Team",
    "Mr. Yash Trivedi",
    "Department of Mathematics,",
    "BITS Pilani K K Birla Goa Campus"
  ),
  new CommitteeMember(
    "Website Team",
    "Mr. Utkarsh Omer",
    "Department of Mathematics,",
    "BITS Pilani K K Birla Goa Campus"
  ),
];

function OrgCommittee() {
  return (
    <section style={{textAlign: 'start'}}>
      <div class="titleStyle1">Organizing</div>
      <div class="titleStyle2">Committee</div>
      <div class="divider" style={{ marginBottom: "30px" }}></div>
      <h2 class="heading-secondary my-4">Organizing Chair</h2>
      <div class="row px-3">
        {CommitteeMember.getCards(OrganizingChair)}
      </div>
      <h2 class="heading-secondary my-4">Organizing Co-Chairs</h2>
      <div class="row px-3">
        {CommitteeMember.getCards(OrganizingCoChairs)}
      </div>
      <h2 class="heading-secondary my-4">Organizing Committee</h2>
      <div class="row px-3">
        {CommitteeMember.getCards(OrganizingCommittee)}
      </div>
      <h2 class="heading-secondary my-4">Website Team</h2>
      <div class="row px-3">{CommitteeMember.getCards(WebsiteTeam)}</div>
    </section>
  );
}

export default OrgCommittee;
