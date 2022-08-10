import React from "react";
import { ExcuseCard, Excuses } from "../../layouts/excuses.js";

// const conf_link = "https://easychair.org/conferences/?conf=icmc2023";
const paragraph = "The authors are pleasingly invited to submit the full paper of their original, unpublished, research contribution which is not currently under review by another conference or journal. Only the accepted and registered papers will be allowed to present at the conference.";
const paragraph_bold_line = "The paper must be submitted using the EasyChair portal.";
const note1 = "Accepted and registered papers will be published by a Springer series (proposal submitted).";
// const note2_1 = "Those who are interested to present their work and are not interested to publish the work, can mail the abstract to";
// const note2_email = "icmc2023@goa.bits-pilani.ac.in. ";
// const note2_2 = "Please note that they have to pay the registration fee as per the category "
// const note2_3 = "“only for presentation”.";

function SubmitPaper() {
  return (
    <div>
      <div class="container">
        <div class="text-center text-lg-left">
          <div className="titleStyle1"> Submit Your Paper </div>
          <div className="titleStyle2"> Information </div>
          <div class="divider" style={{ marginBottom: "30px" }}></div>
          <p style={{ fontWeight: '400', fontSize: '110%' }} align="justify"> {paragraph} <b> {paragraph_bold_line} </b> </p>
        </div>

        {ExcuseCard(Excuses.NoLongerSubmissions)}

        {/* <div class="col-lg cta-btn-container text-center">
          <p class="cta-text " align="center">
            <br />
            <a
              class="cta-btn black-button"
              rel="nopener noreferrer"
              href={conf_link}
              target="_blank"
              style={{ marginBottom: "30px" }}
            >
              go to easychair portal for icmc 2023
            </a>
          </p>
        </div> */}
        <div class="text-lg-left mw-25">
          <p class="text-left mb-2" style={{ fontWeight: '400', fontSize: '130%' }} align="center">
            <b> PLEASE NOTE: </b>
          </p>
          <ol>
            <li>
              <p class="cta-text mb-2" style={{ fontWeight: '400', fontSize: '110%' }} align="justify">
                {note1}
              </p>
            </li>
            {/* <li>
              <p class="cta-text justify" style={{ fontWeight: '400', fontSize: '110%' }} align="justify">
                {note2_1}
                <b ><a style={{ color: '#444', backgroundColor: 'transparent', textDecoration: 'none' }} href="icmc2023@goa.bits-pilani.ac.in"> {note2_email} </a></b>
                {note2_2}
                <i>{note2_3}</i>
              </p>
            </li> */}
          </ol>
        </div>
        {/* ExcuseCard(Excuses.TBU) */}
      </div>
    </div>
  );
}

export default SubmitPaper;
