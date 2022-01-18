import React from "react";

function SubmitPaper() {
    return(
        <div>
            <div class="container">
            <div class="text-center text-lg-left">
              <h3 class="h1"> Submit Paper </h3>
              <p class="" align="justify">The authors are pleasingly invited to submit the full paper of their
                original, unpublished, research contribution which is not currently under review by another conference or
                journal. Only the accepted and registered papers will be allowed to present at the conference.</p>
            </div>
        
            <div class="col-lg- cta-btn-container text-center">
              <p class="cta-text " align="center">Click on the Submit button for paper submission<br>
                <a class="cta-btn black-button" href=" https://easychair.org/conferences/?conf=icmc2022" target="_blank">Submit</a>
              </p>
            </div>
            <div class="text-center text-lg-left">
              <p class="cta-text"><b>All accepted and registered papers will be published by a Springer series (proposal
                  submitted).</b></p>
            </div>
        </div>
        </div>
    );
}

export default SubmitPaper;
