import React from "react";
import { Link } from 'react-router-dom';
import BITSDome from '../images/bits-dome-whitebg.png';
import BITSDClassroom from '../images/bits-d-classroom.jpg';
import BITSAudi from '../images/bits-audi.jpeg';
import Timer from '../layouts/timer';
import Timeline from "./timeline";

function Home() {
    return (
        <div>
            <div class="container">
                <div class="row align-items-around">
                    <div class="col-sm-12 col-md-6">
                        <div class="p-4" style={{minHeight: '500px', display: 'flex', flexDirection:'column', justifyContent: 'space-around', alignSelf: 'center'}}>
                            <div class="d-flex">
                                <h1 style={{textAlign: 'start', fontWeight:'lighter', color: 'grey'}}>
                                    9th International Conference on Mathematics and Computing
                                </h1>
                            </div>
                            <div class="d-flex">                                                                     
                                <h1 className="" style={{textAlign: 'start', fontWeight:'bold'}}>
                                    ICMC 2023
                                </h1>
                            </div>
                            <div class="d-flex" style={{textAlign: 'start'}}>
                                <Link to="/ICMC23-Website/registration/payregfee/" class="black-button" >Registration</Link>
                            </div>                                           
                            <div class="d-flex" style={{textAlign: 'start'}}>
                                <h3 style={{fontWeight: 'lighter'}}>JANUARY 6-8 | 2023</h3>
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

            <div class="container my-5 py-5">
                <div class="row align-middle">             
                    <div class="col-lg-6 col-md-12 p-3" style={{minHeight:'350px'}}>
                        <div>
                            <h1 class="" style={{textAlign: 'start', fontWeight: 'lighter'}}>About<br/></h1>
                            <p class="" style={{textAlign: 'justify'}}> Vellore Institute of Technology (VIT) was founded in 1984 as Vellore Engineering College by the Chancellor Dr. G. Viswanathan. VIT attracts students from all the 29 states of India and more than 41 different countries because of its academic excellence. The Government of India recognizes VIT as an Institution of Eminence (IoE). The credentials of VIT in academics and research have ranked VIT in 1st position among private institutions.</p>
                            <div class="d-flex" style={{textAlign: 'start'}}>
                                <a class="btn text-secondary btn-light" type="button" href="www.google.com">
                                    READ MORE
                                </a>
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
            
            <Timeline />
        </div>
    );
}

export default Home;
