import React from "react";
import OrgCommittee from './orgcommitee';
import TechProCommittee from './techprocommitee';

class Patron {
  constructor(patronType, name, description) {
    this.patronType = patronType;
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
const ChiefPatrons = [
  new Patron(
    "General Co-Chairs",
    "Dr. Sheela A",
    "Associate Dean, School of Advanced Sciences, VIT, Vellore"
  ),
];
const GeneralCoChairs = [
  new Patron("Chief Patron", "Dr. G. Viswanathan", "Chancellor, VIT, Vellore"),
  new Patron(
    "General Co-Chairs",
    "K. Karthikeyan",
    "OD(Mathematics), School of Advanced Sciences, VIT, Vellore"
  ),
  new Patron(
    "General Co-Chairs",
    "Ramesh Babu K",
    "Dean, (CSE), School of Advanced Sciences, VIT, Velloree"
  ),
  new Patron(
    "General Co-Chairs",
    "Ch. Aswani Kumar",
    "Information Technology and Engineering, VIT, Vellore"
  ),
];

function Patrons() {
  return (
    <section class="section-comittee">
      <div class="titleStyle1">Our</div>
      <div class="titleStyle2">Committee</div>
      <div class="divider" style={{marginBottom: '30px'}}></div>
      <h2 class="heading-secondary">Chief Patron</h2>
      <div class="committee-flxbx">{Patron.getCards(ChiefPatrons)}</div>
      <h2 class="heading-secondary">General Co-Chairs</h2>
      <div class="committee-flxbx">{Patron.getCards(GeneralCoChairs)}</div>

      <OrgCommittee />

      <TechProCommittee />

    </section>
  );
}

export default Patrons;
