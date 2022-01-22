import React from "react";
import '../timeline.css';

function Timeline() {
    return(
        <section class="section-timeline">
        <div className="titleStyle1">
            Timeline
        </div>
        <div className="titleStyle2">
            Of Events
        </div>
          <div class="scale">
            <ul class="timeline">
              <li>
                <div class="direction-r">
                  <div class="flag-wrapper">
                    <span class="flag">October 31,2022</span>
                  </div>
                  <div class="desc">Paper Submission Deadline</div>
                </div>
              </li>
    
              <li>
                <div class="direction-l">
                  <div class="flag-wrapper">
                    <span class="flag">December 25, 2022</span>
                  </div>
                  <div class="desc">Final Acceptance Notification</div>
                </div>
              </li>
    
              <li>
                <div class="direction-r">
                  <div class="flag-wrapper">
                    <span class="flag">January 30, 2023</span>
                  </div>
                  <div class="desc">Camera Ready Submission</div>
                </div>
              </li>

              <li>
                <div class="direction-l">
                  <div class="flag-wrapper">
                    <span class="flag flag-range">January 06-08, 2023</span>
                  </div>
                  <div class="desc">Conference Dates</div>
                </div>
              </li>
            </ul>
            <div class="black-button test">
              CONTACT US <span> REGARDING ANY OTHER DETAILS </span>
            </div>
          </div>
        </section>
    )
}

export default Timeline;
