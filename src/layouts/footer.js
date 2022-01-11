import React from 'react';

function MyFooter() {

    return (
        <div class="footer bg-dark text-white py-3 px-2" style={{"margin-top":"auto"}}>
            <div class="container">
                <div class="row my-5">
                    <div class="col-lg-6 col-sm-12">
                        <h1 class="d-flex">ICMC 2023</h1>
                        <p class="d-flex">9th International Conference on Mathematics and Computing</p>
                    </div>
                    <div class="col-lg-6 col-sm-12 d-flex-inline">
                        <h5 class="d-flex">CONTACT US</h5><br/>
                        <div class="d-flex">Dr. J. K. Sahoo</div>
                        <div class="d-flex">Organizing Chair, ICMC-2023</div>
                        <div class="d-flex">Department of Mathematics</div>
                        <div class="d-flex">Birla Institute of Technology and Science, Goa</div>
                        <div class="d-flex">NH17B Bypass, Goa, India. Pincode:403726</div>
                        <div class="d-flex">Phone: +91-1234567890</div>
                        <div class="d-flex">Email: icmc@bits-pilani.goa.ac.in</div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    &copy; 2022 All Rights Reserved<br />
                    Designed &amp; Developed by Department of Mathematics, BITS Pilani Goa
                </div>
            </div>
        </div>
    );

}

export default MyFooter;