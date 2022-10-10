import React from "react";
// import { ExcuseCard, Excuses } from "../../layouts/excuses.js";
// import BTable from "react-bootstrap/Table";
// import "./styles.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";

function PayRegFee() {
  return (
    <section>
      <div class="container">
        <div className="titleStyle1"> Pay Registration </div>
        <div className="titleStyle2"> Fees </div>
        {/* <div class="divider" style={{ marginBottom: "30px" }}></div>
        {ExcuseCard(Excuses.TBU)} */}
        <div class="divider" style={{ marginBottom: "30px" }}></div>
        <div>
          <h5>Instructions</h5>
        </div>

        <div>1) Pay the fees through the following SBI collect Link.</div>
        <a
          href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm"
          class="link-primary"
        >
          SBI Collect
        </a>

        <div>
          2) Upload the screenshot of reciept on the following Google Form Link.
        </div>
        <a href="https://forms.gle/K1fB1b4vqwyq6Sf78" class="link-primary">
          Google Form
        </a>
      </div>
      <div class="box" style={{ minHeight: "40px" }}></div>
    </section>
  );
}

export default PayRegFee;

