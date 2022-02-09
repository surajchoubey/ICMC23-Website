import React from "react";
import { ExcuseCard, Excuses } from "../../layouts/excuses.js";

function PayRegFee() {
  return (
    <section>
      <div class="container">
        <div className="titleStyle1"> Pay Registration </div>
        <div className="titleStyle2"> Fees </div>
        <div class="divider" style={{ marginBottom: "30px" }}></div>
        {ExcuseCard(Excuses.TBU)}
      </div>
      <div class="box" style={{ minHeight: "40px" }}></div>
    </section>
  );
}

export default PayRegFee;
