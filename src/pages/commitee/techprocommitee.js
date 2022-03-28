import React from "react";
import JSONData from "./techcomm.json";
import BTable from "react-bootstrap/Table";
// import "./styles.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { ExcuseCard, Excuses } from "../../layouts/excuses.js";

function TechProCommittee() {
  const DisplayData = JSONData.map((info) => {
    return (
      <tr>
        <td>{info.Name}</td>
        <td>{info.Institution}</td>
      </tr>
    );
  });

  return (
    <>
      <div className="titleStyle1"> Technical Program </div>
      <div className="titleStyle2"> Committee </div>
      <div class="divider" style={{ marginBottom: "30px" }}></div>
      <BTable striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Organization</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </BTable>
      {/* {TBA("test")} */}
      {/* {ExcuseCard(Excuses.TBA)} */}
      <br />
    </>
  );
}
export default TechProCommittee;
