import React from "react";
// import JSONdata from "./employee.json";
 import { acceptedList } from "./acceptedpapers";
 import BTable from "react-bootstrap/Table";
// import "./styles.css";
 import "bootstrap/dist/css/bootstrap.min.css";


function sentenceCapitalize(s) {
  return s.toLowerCase().replace( /\b./g, (word) => {
    return word.toUpperCase();
  });
};

const upload_source_link = 'https://docs.google.com/forms/d/1usckkagyrU7L-bhV_TkiFXzWC8-6LmeSXwhixMdDT50/viewform?edit_requested=true';
// const word_template_link_pdf = "documents/ICMC_LNNS_Word_Template.pdf";
const word_template_link = "documents/ICMC_LNNS_Word_Template.docx";
const latext_template_link = "documents/ICMC_LNNS_LaTex_Template.zip"

const series_link = 'https://www.springer.com/series/15179';

// const word_template_link = 'https://docs.google.com/document/d/1h-FaUN7iXfvoIUrzdZAFID8WHGJNiE7X/edit?usp=sharing&ouid=108636257006657033217&rtpof=true&sd=true';
// const latext_template_link = 'https://drive.google.com/file/d/1f4uGdVsl1p-P4W3GIJq8zk6_BV2pGXwj/view?usp=sharing';

function AcceptedPapers() {
  const DisplayData = acceptedList.map((info) => {
    return (
      <tr>
        <td style={{ textAlign: 'left' }}> { sentenceCapitalize(info["SR NO"]) } </td>
        <td style={{ textAlign: 'left' }}> { sentenceCapitalize(info.AUTHORS) } </td>
        <td style={{ textAlign: 'left' }}> { sentenceCapitalize(info.TITLE) } </td>
        <td style={{ textAlign: 'left' }}> { sentenceCapitalize(info["Paper ID"]) } </td>
      </tr>
    );
  });

  return (
    <div className="container">
      <div className="titleStyle1"> List of </div>
      <div className="titleStyle2"> Accepted Papers </div>
      <div class="divider" style={{ marginBottom: "30px" }}></div>
      {/* <h3 style={{ textAlign: 'left' }} > ACCEPTED ABSTRACT PAPERS FOR ORAL PRESENTATION </h3> */}
      <BTable striped bordered hover responsive>
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Authors</th>
            <th>Title</th>
            <th>Paper ID</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </BTable>
      <br />
      {/*{ExcuseCard(Excuses.Delay)}*/}
      <p style={{ textAlign: "justify" }}>
        The authors of the accepted papers are requested to make corrections in accordance with the suggestions of the reviewers and upload the final camera-ready papers, within the deadline, in the link below:<br /><p></p><div className="d-flex justify-content-center">
          <a class="black-button" href={upload_source_link} target="_blank" rel="noopener noreferrer">
            Upload Source file
          </a>
        </div><br />
        Kindly note that the manuscript should be made according to the Springer series: <a class="modern-link" href={series_link} target="_blank" rel="nopener noreferrer">Lecture notes in Networks and Systems</a> (LNNNS) format (LaTeX template, Word template).
      </p>
      <p>

        <a class="modern-link" href={word_template_link} target="_blank" rel="nopener noreferrer"> <strong> Click here for Sample Springer Paper Format (Word Template) </strong></a><br /><p></p>
        <a class="modern-link" href={latext_template_link} target="_blank" rel="nopener noreferrer"> <strong> Click here For Sample Springer Paper Format (LaTex Template) </strong></a>.
      </p>
    </div>
  );
}
export default AcceptedPapers;
