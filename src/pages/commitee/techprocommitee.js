import React from "react";
import JSONData from "./techcomm.json";
import BTable from "react-bootstrap/Table";

function TechProCommittee() {
  const DisplayData = JSONData.map((info) => {
    return (
      <tr>
        <td>{info.Name}</td>
        <td>{info.Organization}</td>
      </tr>
    );
  });

  return (
    <div class="section-header">
      <div class="container">
      <div className="titleStyle1"> Technical Program </div>
      <div className="titleStyle2"> Committee </div>
      <div class="divider" style={{marginBottom: '50px'}}></div>
        <BTable striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Organization</th>
            </tr>
          </thead>
          <tbody>{DisplayData}</tbody>
        </BTable>
      </div>
    </div>
  );
}
export default TechProCommittee;
