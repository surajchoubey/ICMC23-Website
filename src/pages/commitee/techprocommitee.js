import React from "react";
import JsonData from "./techcomm.json";
import "bootstrap/dist/css/bootstrap.min.css";
import BTable from "react-bootstrap/Table";

function TechProCommittee() {
  const DisplayData = JsonData.map((info) => {
    return (
      <tr>
        <td>{info.Name}</td>
        <td>{info.Organization}</td>
      </tr>
    );
  });

  return (
    <div class="section-header">
      <h2 align="center">Technical Program Committee</h2>
      <div class="container">
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
