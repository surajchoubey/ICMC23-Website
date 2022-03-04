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
                    <td align="center">USD 350</td>
                    <td align="center">USD 450</td>
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
                    <td align="center">INR 4000</td>
                    <td align="center">USD 200</td>
                    <td align="center">USD 150</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ textAlign: "justify" }}>
              <strong>Note:</strong> The registration fees include, cost of
              tea/coffee, snacks, working lunch and banquet dinner.
              Accommodation is not included, for accommodation please refer to
              the information given in the conference website.
            </p>
            <a
              class="black-button"
              href="#/registration/payregfee"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pay Registration Fees
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
