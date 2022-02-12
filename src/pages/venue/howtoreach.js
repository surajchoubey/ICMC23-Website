import React from "react";
// import "./styles.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import BITSGoaOnGMAP from "../../layouts/bits-goa-map.js";
import BTable from "react-bootstrap/Table";

function Howtoreach() {
  return (
    <div>
      <div className="container">
        <div className="titleStyle1">HOW TO</div>
        <div className="titleStyle2">REACH?</div>

        <div class="divider" style={{ marginBottom: "30px" }}></div>
        <BTable striped bordered hover responsive>
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th>From</th>
              <th>Distance (kms)</th>
              <th>Taxi Fare (INR)</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            <tr>
              <td>Goa International Airport (GOI)</td>
              <td>05</td>
              <td>300</td>
            </tr>
            <tr>
              <td>Vasco Da Gama Railway Station (VSG)</td>
              <td>10</td>
              <td>300</td>
            </tr>
            <tr>
              <td>Madgaon Railway Station (MAO)</td>
              <td>24</td>
              <td>700</td>
            </tr>
            <tr>
              <td>Panjim</td>
              <td>26</td>
              <td>800</td>
            </tr>
          </tbody>
        </BTable>
        <p>
          <b>Note</b>- The fare mentioned above are subject to variation as per
          market demand. Our Campus is not responsible for any change in the
          indicated fare.
        </p>
        <p></p>
            <a class="black-button" href="https://www.bits-pilani.ac.in/goa/reachGoaCampus" target="_blank" rel="noopener noreferrer">
                More on How to Reach BITS Pilani Goa Campus
            </a>
        <p></p>
        <p></p>
        <BITSGoaOnGMAP height={"400px"} width={"100%"} />
        <p></p>
        <p></p>
      </div>
    </div>
  );
}

export default Howtoreach;
