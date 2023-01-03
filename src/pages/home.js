import React from "react";
import { Link } from 'react-router-dom';
import BITSDome from '../images/bits-dome-whitebg.jpg';
import BITSDClassroom from '../images/bits-d-classroom.jpg';
import BITSAudi from '../images/bits-audi.jpeg';
import Timer from '../layouts/timer';
import Timeline from "./timeline";
import icmclogo from "./about/icmc-logo.jpg"
import crslogo from "../images/icons/CryptologyResearchSocietofIndia.png";
import rmslogo from "../images/icons/RamanujanMathematicalSociety.png";
import setslogo from "../images/icons/SocietyforElectronicTransactions&Security(SETS).png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const homepg_text = ", a well-known all-India Institute for higher education. In keeping with the tradition of innovation and creativity, a state-of-the-art touch is given to the infrastructure of the entire institute without diminishing, in the least, the natural beauty of Goa surrounding the campus. Spacious labs, classrooms with soundproof acoustics, modern furniture, library and computer labs with internet facility define the infrastructural counters of the institution."
const homepg_text2 = "ICMC 2023 aims to bring together both novice and experienced scientists with developers, to meet new colleagues, collect new ideas and establish new cooperation between research groups and provide a platform for researchers from academic and industry to present their original work and exchange ideas, information, techniques and applications in the field of Computational Applied Mathematics."

function Home() {
    return (
        <div>
            <div class="container">
                <div class="row align-items-around">
                    <div class="col-sm-12 col-md-6">
                        <div class="p-4" style={{minHeight: '500px', display: 'flex', flexDirection:'column', justifyContent: 'space-around', alignSelf: 'center'}}>
                            <div class="d-flex">
                                <h1 style={{textAlign: 'start', fontWeight:'300', color: 'grey'}}>
                                    9th International Conference on Mathematics and Computing
                                </h1>
                            </div>
                            <div class="d-flex">                                                                     
                                <h1 className="" style={{textAlign: 'start', fontWeight:'bold'}}>
                                    ICMC 2023
                                </h1>
                            </div>
                            <div class="d-flex-inline" style={{textAlign: 'start'}}>
                                <Link to="/registration/" class="black-button" >Registration</Link>
                                <a download href="documents/ICMC2023_Programme Schedule.pdf" class="black-button m-2" >Schedule <i class="fa fa-download" aria-hidden="true"></i></a>
                            </div>                                           
                            <div class="d-flex" style={{textAlign: 'start'}}>
                                <h3 style={{fontWeight: '300'}}>JANUARY 6-8 | 2023</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 d-flex justify-content-center">
                        <div class="d-flex align-items-center" style={{display: 'flex', flexDirection:'row', alignSelf: 'center'}}>
                            <img src={BITSDome} alt="" class="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
            
            <Timer />
             <section className="section-carousel">
                <h2 className="my-5 text-center">IN ASSOCIATION WITH</h2>
        <div class="container-fluid test">
          <OwlCarousel
            items={3}
            className="owl-theme px-5"
            loop
            nav
            margin={15}
          >
            <div>
              <img className="img px-lg-5" src={rmslogo} alt="" />
            </div>
            <div>
              <img className="img px-lg-5" src={setslogo} alt="" />
            </div>
            <div>
              <img className="img px-lg-5" src={crslogo} alt="" />
            </div>
          </OwlCarousel>
        </div>
      </section>

            <div class="container my-5 py-0">
                <div class="row  justify-content-center align-middle">             
                    <div class="col-lg-5 col-md-12 p-3" style={{minHeight:'350px'}}>
                        <div>
                            <h1 class="" style={{textAlign: 'start', fontWeight: 'light'}}>About the Institute <br/></h1>
                            <p style={{fontWeight: '400', textAlign: 'justify'}}>
                                <a href="https://www.bits-pilani.ac.in/Goa/" target="_blank" rel="noopener noreferrer" class="modern-link">BITS Pilani K. K. Birla Goa Campus</a>
                                &nbsp;is one of the four campuses of the&nbsp;
                                <a href="https://www.bits-pilani.ac.in/" target="_blank" rel="noopener noreferrer" class="modern-link">Birla Institute of Technology &amp; Science, Pilani</a>
                                {homepg_text}
                            </p>
                            <div class="d-flex" style={{textAlign: 'start'}}>
                                <Link to="/venue/bpgc-goa" class="black-button" >VIEW MORE</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 d-block d-lg-block d-none d-sm-none align-self-center">
                        <img src={BITSAudi} alt="" class="img-fluid"/>
                    </div>
                    <div class="col-lg-3 col-md-6 d-block d-lg-block d-none d-sm-none align-self-center">
                        <img src={BITSDClassroom} alt="" class="img-fluid"/>
                    </div>           
                </div>
            </div>

            <div class="container py-4 my-5">
                <div class="row justify-content-center"> 
                    <div class="col-lg-3 col-md-6 d-block d-lg-block d-none d-sm-none align-self-center">
                        <img src={icmclogo} alt="bitpilanigoalogo" class="img-fluid"/>
                    </div>            
                    <div class="col-lg-8 col-md-12 p-3" style={{minHeight:'350px'}}>
                        <div>
                            <h1 class="" style={{textAlign: 'start', fontWeight: 'light'}}>About the Conference<br/></h1>
                            <p class="" style={{fontWeight: '400', textAlign: 'justify'}}> {homepg_text2} </p>
                            <div class="d-flex" style={{textAlign: 'start'}}>
                                <Link to="/about/icmc/" class="black-button" >VIEW MORE</Link>
                            </div>
                        </div>
                    </div>          
                </div>
            </div>
            
            <Timeline />
        </div>
    );
}

export default Home;
