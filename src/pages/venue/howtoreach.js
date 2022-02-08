import React from "react";
// import "./styles.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import BTable from "react-bootstrap/Table";

function Howtoreach() {
  return (
    <div>
      <div className="container">
        <div className="titleStyle1">HOW TO</div>
        <div className="titleStyle2">REACH?</div>

        <div class="divider" style={{ marginBottom: "30px" }}></div>
        <BTable striped bordered hover responsive>
          <thead>
            <tr>
              <th>From</th>
              <th>Distance (kms)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Airport</td>
              <td>05</td>
            </tr>
            <tr>
              <td>Vasco Da Gama Railway Station (VSG)</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Madgaon Railway Station (MAO)</td>
              <td>24</td>
            </tr>
            <tr>
              <td>Panjim</td>
              <td>26</td>
            </tr>
          </tbody>
        </BTable>
        <p></p>
        <p>
          <strong>
            For more details, Visit:{" "}
            <a href="https://www.bits-pilani.ac.in/goa/reachGoaCampus">
              How to Reach BITS Pilani, Goa Campus
            </a>
          </strong>
        </p>
      </div>

      <div>
        <section class="map cid-ryayIXJ2Pr" id="map1-i">
          <div
            class="mbr-row mbr-justify-content-center"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div class="map-title mbr-col-sm-12 mbr-col-md-12 align-center"></div>
            <div class="google-map">
              <amp-iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAEIpgj38KyLFELm2bK9Y7krBkz1K-cMq8&amp;q=place_id:ChIJbWZRWDe4vzsRQAIREDBo1Uo"
                height="400"
                layout="fill"
                sandbox="allow-scripts allow-same-origin allow-popups"
                frameborder="0"
                class="mobirise-loader i-amphtml-element i-amphtml-layout-fill i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout"
                i-amphtml-layout="fill"
              >
                <div placeholder="" class="placeholder amp-hidden">
                  <div class="mobirise-spinner">
                    <em></em>
                    <em></em>
                    <em></em>
                  </div>
                </div>
                <i-amphtml-scroll-container class="amp-active">
                  <iframe
                    title="bits"
                    class="i-amphtml-fill-content"
                    name="amp_iframe0"
                    frameborder="0"
                    allow=""
                    sandbox="allow-scripts allow-same-origin allow-popups"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAEIpgj38KyLFELm2bK9Y7krBkz1K-cMq8&amp;q=place_id:ChIJbWZRWDe4vzsRQAIREDBo1Uo#amp=1"
                  ></iframe>
                </i-amphtml-scroll-container>
              </amp-iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Howtoreach;
