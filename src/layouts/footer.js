import React from 'react';
import { Link } from 'react-router-dom';

function MyFooter() {

    return (
        <div class="footer text-white py-3 px-2" style={{"margin-top":"auto"}}>
            <div class="container">
                <div class="row my-3 justify-content-around">
                    <div class="col-md-3 col-sm-12">
                        <h5 class="my-3 justify-content-center-md" style={{fontWeight: 'bold', textAlign: 'start'}}>ICMC 2023</h5>
                        <div class="">
                            <Link style={{textAlign: 'start', textDecoration: 'none'}} className='d-sm-flex m-2 text-white' to='/ICMC23-Website/'>Home</Link>
                            <Link style={{textAlign: 'start', textDecoration: 'none'}} className='d-sm-flex m-2 text-white' to='/ICMC23-Website/speakers'>Speakers</Link>
                            <Link style={{textAlign: 'start', textDecoration: 'none'}} className='d-sm-flex m-2 text-white' to='/ICMC23-Website/timeline'>Timeline</Link>
                            <Link style={{textAlign: 'start', textDecoration: 'none'}} className='d-sm-flex m-2 text-white' to='/ICMC23-Website/pasteditions'>Past Editions</Link>
                            <Link style={{textAlign: 'start', textDecoration: 'none'}} className='d-sm-flex m-2 text-white' to='/ICMC23-Website/contact'>Contact Us</Link>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12">
                        <h5 class="my-3" style={{fontWeight: 'bold', textAlign: 'start'}}>Contact</h5>
                        <p style={{textAlign: 'start'}}>
                        <a style={{textDecoration: 'none'}} href="https://universe.bits-pilani.ac.in/goa/jksahoo/profile" class="text-white">
                        <i class="fa fa-map-marker text-white" aria-hidden="true"></i>
                        &nbsp; Dr. Jejati Keshari Sahoo<br/>
                        &nbsp;&nbsp;&nbsp; Organizing Chair<br/>
                        &nbsp;&nbsp;&nbsp; HOD Mathematics<br/>
                        &nbsp;&nbsp;&nbsp; BITS Pilani Goa Campus<br/>
                        </a>
                        </p>
                        <p style={{textAlign: 'start'}}><a style={{textDecoration: 'none'}} href="tel:+919876543210" class="text-white">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            &nbsp; +91-9876543210</a>
                        </p>
                        <p style={{textAlign: 'start'}}><a style={{textDecoration: 'none'}} href="mailto:icmc@goa.bits-pilani.ac.in" class="text-white">
                            <i class="fa fa-envelope-o" aria-hidden="true"></i>
                            &nbsp; icmc@goa.bits-pilani.ac.in</a>
                        </p>                    
                    </div>
                    <div class="col-md-4 col-sm-12 justify-content-center align-middle">
                    <h5 class="mb-3 mt-sm-4" style={{fontWeight: 'bold', textAlign: 'center'}}>Connect with Us</h5>
                    <p style={{textAlign: 'center'}}>
                        <a target="_blank" href="https://www.facebook.com/bitsgoaofficial/" id="connect"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a target="_blank" href="https://twitter.com/bitspilanigoa" id="connect"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        <a target="_blank" href="https://www.instagram.com/bitspilaniofficial/" id="connect"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        <a target="_blank" href="https://www.youtube.com/user/BITSpilaniTechMedia/videos" id="connect"><i class="fa fa-youtube" aria-hidden="true"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/school/birla-institute-of-technology-and-science-pilani---goa-campus/?originalSubdomain=in" id="connect"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    </p>
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