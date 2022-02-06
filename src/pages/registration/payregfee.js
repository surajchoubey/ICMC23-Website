import React from "react";

function PayRegFee() {
    return(
        <div>
            <section id = "registeration" class="team section-bg">
            <div class="container aos-init aos-animate">
                <div class="section-header">
                  <div className="titleStyle1"> Pay Registration </div>
                  <div className="titleStyle2"> Fees </div>
                </div>
        
                <div class="section-header">
                  <center>
                    <h4>Conference Participation Fees </h4>
                    <div >
                      <table class="table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th></th>
                            <th align="center">Foreign Participant</th>
                            <th align="center">Indian Participant</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><b>Participant Category</b></td>
                            <td align="center"><b>Due Date<br />December 31, 2021</b></td>
                            <td align="center"><b>Due Date<br />December 31, 2021</b></td>
                          </tr>
                          <tr>
                            <td>Student<br />
                              <font size="3px"> (Paper accepted for Presentation and Publication)</font>
                            </td>
                            <td align="center">USD 50</td>
                            <td align="center">INR 1000</td>
                          </tr>
                          <tr>
                            <td>Industry / R &amp; D Organization / Academia<br />
                              <font size="3px"> (Paper accepted for Presentation and Publication)
                            </font></td>
                            <td align="center">USD 70</td>
                            <td align="center">INR 1200</td>
                          </tr>
                          <tr>
                            <td>Attending and Presenting <br />
                              <font size="3px"> (Paper accepted for oral presentation )
                            </font></td>
                            <td align="center">USD 40</td>
                            <td align="center">INR 500</td>
                          </tr>
                          <tr>
                            <td>Attending only<br />
                              <font size="3px"> (as a participant)
                            </font></td>
                            <td align="center">USD 30</td>
                            <td align="center">INR 300</td>
                          </tr>
                        </tbody>
                      </table>
        
                    </div><br />
                    <center>
                      <a href="https://events.vit.ac.in/events/ICMC/" target="_blank" rel="noopener noreferrer"><button class="button button2 black-button">Registration Link</button></a>
                      <br />
                </center></center></div>
        
              </div>

        </section>
        </div>
    );
}

export default PayRegFee;
