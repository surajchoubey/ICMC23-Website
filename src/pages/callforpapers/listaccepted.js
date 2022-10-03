import React from "react";
// import JSONdata from "./employee.json";
import JSONData from "./acceptedpapers.json";
// import { ExcuseCard, Excuses } from "../../layouts/excuses.js";
import BTable from "react-bootstrap/Table";

function AcceptedPapers() {
  const DisplayData = JSONData.map((info) => {
    return (
      <tr>
        <td>{info.AUTHORS}</td>
        <td>{info.TITLE}</td>
      </tr>
    );
  });

  return (
    <>
      <div className="titleStyle1"> List of </div>
      <div className="titleStyle2"> Accepted Papers </div>
      <div class="divider" style={{ marginBottom: "30px" }}></div>
      <BTable striped bordered hover responsive>
        <thead>
          <tr>
            <th>Authors</th>
            <th>Title</th>
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
export default AcceptedPapers;
