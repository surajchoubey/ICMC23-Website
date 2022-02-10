import React from "react";
import { Link } from 'react-router-dom';
import BITSDome from '../images/bits-dome-whitebg.jpg';
import BITSDClassroom from '../images/bits-d-classroom.jpg';
import BITSAudi from '../images/bits-audi.jpeg';
import Timer from '../layouts/timer';
import Timeline from "./timeline";

const homepg_text = "BITS Pilani K. K. Birla Goa Campus is one of the four campuses of the Birla Institute of Technology & Science, Pilani, a well-known all-India Institute for higher education. In keeping with the tradition of innovation and creativity, the campus has given a state-of-the-art touch to the infrastructure of the entire institute without diminishing, in the least, the natural beauty of Goa surrounding its Campus. Spacious labs state-of-the-art classrooms with soundproof acoustics, modern furniture, computer labs with Internet facility and Library define the infrastructural counters of the institution. Being an Institute of excellence in Technology and Sciences, the primary motive of the institute is to \"train young men and women able and eager to create and put into action such ideas, methods, techniques and information\". Being fully residential, the university hosts five thousand students and about six hundred staff."

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
                                <Link to="/registration/payregfee/" class="black-button" >Registration</Link>
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
                            <p class="" style={{textAlign: 'justify'}}> {homepg_text} </p>
                            <div class="d-flex" style={{textAlign: 'start'}}>
                                <Link to="/about/bpgc/" class="black-button" >VIEW MORE</Link>
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
