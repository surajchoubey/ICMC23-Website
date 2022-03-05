import React from "react";

const conf_link = "https://easychair.org/conferences/?conf=icmc2023";
const paragraph = "The authors are pleasingly invited to submit the full paper of their original, unpublished, research contribution which is not currently under review by another conference or journal. Only the accepted and registered papers will be allowed to present at the conference.";
const paragraph_bold_line = "The paper must be submitted using the EasyChair portal.";
const note = "Accepted and registered papers will be published by a Springer series (proposal submitted).";

function SubmitPaper() {
  return (
    <div>
      <div class="container">
        <div class="text-center text-lg-left">
          <div className="titleStyle1"> Submit Your Paper </div>
          <div className="titleStyle2"> Information </div>
          <div class="divider" style={{ marginBottom: "30px" }}></div>
          <p style={{fontWeight: '400', fontSize: '110%'}} align="justify"> {paragraph} <b> {paragraph_bold_line} </b> </p>
        </div>

        <div class="col-lg- cta-btn-container text-center">
          <p class="cta-text " align="center">
            <br />
            <a
              class="cta-btn black-button"
              rel="nopener noreferrer"
              href={conf_link}
              target="_blank"
            >
              link to easychair portal for icmc 2023
            </a>
          </p>
        </div>
        <div class="text-center text-lg-left">
          <br/>
          <p class="cta-text justify" style={{fontWeight: '400', fontSize: '110%'}}>
            <b> Note: </b> 
              {note}
          </p>
        </div>
        {/* ExcuseCard(Excuses.TBU) */} 
      </div>
    </div>
  );
}

export default SubmitPaper;
