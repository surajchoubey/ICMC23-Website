import React from "react";
// import JSONdata from "./employee.json";
import JSONData from "./acceptedpapers.json";
// import { ExcuseCard, Excuses } from "../../layouts/excuses.js";
import BTable from "react-bootstrap/Table";

function sentenceCapitalize(s) {
  return s.toLowerCase().replace( /\b./g, (word) => {
    return word.toUpperCase(); 
  });
};

function AcceptedPapers() {
  const DisplayData = JSONData.map((info) => {
    return (
      <tr>
        <td style={{ textAlign: 'left' }}> { sentenceCapitalize(info.AUTHORS) } </td>
        <td style={{ textAlign: 'left' }}> { sentenceCapitalize(info.TITLE) } </td>
      </tr>
    );
  });

  return (
    <div className="container">
      <div className="titleStyle1"> List of </div>
      <div className="titleStyle2"> Accepted Papers </div>
      <div class="divider" style={{ marginBottom: "30px" }}></div>
      <h3 style={{ textAlign: 'left' }} > ACCEPTED ABSTRACT PAPERS FOR ORAL PRESENTATION </h3>
      <BTable striped bordered hover responsive>
        <thead>
          <tr>
            <th>Authors</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </BTable>
      <br />
    </div>
  );
}
export default AcceptedPapers;
