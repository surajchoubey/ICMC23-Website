import React from "react";
import BTable from "react-bootstrap/Table";
import { JSONData } from "./techcom";

const DisplayData = () => {

  JSONData.sort((a,b) => (a.FirstName > b.FirstName) ? 1 : ((b.FirstName > a.FirstName) ? -1 : 0))

  return JSONData.map(person => (
    <tr>
      <td align="start">{person["FirstName"]} {person["LastName"]} </td>
      <td align="start">{person["Affiliation"]}</td>
    </tr>
  ))
};

function TechProCommittee() {
  return (
    <>
      <div className="titleStyle1"> Technical Program </div>
      <div className="titleStyle2"> Committee </div>
      <div class="divider" style={{ marginBottom: "30px" }}></div>
      <BTable striped bordered hover responsive>
        <thead>
          <tr>
            <th align="start">Name</th>
            <th align="start">Affiliation</th>
          </tr>
        </thead>
        <tbody>
          <DisplayData/>
        </tbody>
      </BTable>
      <br />
    </>
  );
}
export default TechProCommittee;
