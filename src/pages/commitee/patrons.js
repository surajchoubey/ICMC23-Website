import React from "react";

function Patrons() {
    return(
        <section class="section-comittee container">
        <h1 style={{color: 'gray', textAlign: 'start', fontWeight: '300', fontSize: '4rem'}}>Our</h1>
        <h1 class="heading-primary" style={{textAlign: 'start', fontSize: '4rem'}}>Committee</h1>
        <div class="divider"></div>
        <h2 class="heading-secondary">Chief Patron</h2>
        <div class="committee-flxbx">
          <div class="block btn-raise raise">
            <p class="block-name">Dr. G. Viswanathan</p>
            <p class="block-description">Chancellor, VIT, Vellore</p>
          </div>
        </div>
        <h2 class="heading-secondary">General Co-Chairs</h2>
        <div class="committee-flxbx">
          <div class="block btn-raise raise">
            <p class="block-name">Dr. Sheela A</p>
            <p class="block-description">
              Associate Dean,<br />
              School of Advanced Sciences, VIT, Vellore
            </p>
          </div>
          <div class="block btn-raise raise">
            <p class="block-name">K. Karthikeyan</p>
            <p class="block-description">
              HOD(Mathematics),
              <br />
              School of Advanced Sciences, VIT, Vellore
            </p>
          </div>
          <div class="block btn-raise raise">
            <p class="block-name">Ramesh Babu K</p>
            <p class="block-description">
              Dean, (CSE),<br />
              School of Advanced Sciences, VIT, Vellore
            </p>
          </div>
          <div class="block btn-raise raise">
            <p class="block-name">Ch. Aswani Kumar</p>
            <p class="block-description">
              Information Technology and Engineering,<br />
              VIT, Vellore
            </p>
          </div>
        </div>
      </section>
    );
}

export default Patrons;
