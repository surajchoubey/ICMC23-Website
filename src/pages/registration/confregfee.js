import React from "react";
// import { ExcuseCard, Excuses } from "../../layouts/excuses.js";

function ConfRegFee() {
  return (
    <div>
      <section id="registration" class="team section-bg">
        <div class="container">
          <div class="section-header">
            <div className="titleStyle1">Conference Registration</div>
            <div className="titleStyle2">Fees</div>
            <div class="divider" style={{ marginBottom: "30px" }}></div>
          </div>

          <div class="section-header">
            <div>
              <table class="table table-striped table-bordered">
                <thead>
                  <tr align="center">
                    <th></th>
                    <th colspan="2">Indian Participant</th>
                    <th colspan="2">Foreign Participant</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>Participant Category</b>
                    </td>
                    <td align="center">
                      <b>
                        On or Before
                        <br />
                        October 10, 2022
                      </b>
                    </td>
                    <td align="center">
                      <b>
                        After October 10
                        <br />
                        Before November 10, 2022
                      </b>
                    </td>
                    <td align="center">
                      <b>
                        On or Before
                        <br />
                        October 10, 2022
                      </b>
                    </td>
                    <td align="center">
                      <b>
                        After October 10
                        <br />
                        Before November 10, 2022
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Student
                      {/* <br />
                      <font size="3px">
                        (Paper accepted for Presentation and Publication)
                      </font> */}
                    </td>
                    <td align="center">INR 6000</td>
                    <td align="center">INR 6500</td>
                    <td align="center">USD 250</td>
                    <td align="center">USD 300</td>
                  </tr>
                  <tr>
                    <td>
                      Faculty
                      {/* <br />
                      <font size="3px">
                        (Paper accepted for Presentation and Publication)
                      </font> */}
                    </td>
                    <td align="center">INR 8000</td>
                    <td align="center">INR 9000</td>
                    <td align="center">USD 300</td>
                    <td align="center">USD 400</td>
                  </tr>
                  <tr>
                    <td>
                      Industry / R &amp; D Organization
                      {/* <br />
                      <font size="3px">
                        (Paper accepted for oral presentation )
                      </font> */}
                    </td>
                    <td align="center">INR 12000</td>
                    <td align="center">INR 14000</td>
                    <td align="center">USD 400</td>
                    <td align="center">USD 500</td>
                  </tr>
                  <tr>
                    <td>
                      Only for Presentation
                      {/* <br /> */}
                      {/* <font size="3px">(as a participant)</font> */}
                    </td>
                    <td align="center">INR 3000</td>
                    <td align="center">INR 3500</td>
                    <td align="center">USD 200</td>
                    <td align="center">USD 250</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p></p>
            <a
              class="black-button"
              href="#/registration/confregfee/"
              target="_blank"
              style={{ "margin-top": "2rem" }}
              rel="noopener noreferrer"
            >
              Registration Link
            </a>
            <p></p>
          </div>

          {/* {ExcuseCard(Excuses.TBU)} */}
          <div class="box" style={{ minHeight: "40px" }}></div>
        </div>
      </section>
    </div>
  );
}

export default ConfRegFee;
