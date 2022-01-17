import React from "react";
import BITSDome from '../images/bits-dome.png';
import BITSDClassroom from '../images/bits-d-classroom.jpg';
import BITSAudi from '../images/bits-audi.jpeg';
import Timer from '../layouts/timer';
import ferrari from '../images/speakers/ferrari.jpg';
import whitenigga from '../images/speakers/whitenigga.jpg';
import momos from '../images/speakers/momos.jpg';
import samplediv from '../images/speakers/samplediv.jpg';

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
                                <button class="black-button">Registration</button>
                            </div>                                           
                            <div class="d-flex" style={{textAlign: 'start'}}>
                                <h3 style={{fontWeight: 'lighter'}}>JANUARY 6-8 | 2023</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <div class="p-3 justify-self-center" style={{minHeight: '500px', display: 'flex', flexDirection:'column', alignItems: 'center'}}>
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
                            <p class="" style={{textAlign: 'start'}}> Vellore Institute of Technology (VIT) was founded in 1984 as Vellore Engineering College by the Chancellor Dr. G. Viswanathan. VIT attracts students from all the 29 states of India and more than 41 different countries because of its academic excellence. The Government of India recognizes VIT as an Institution of Eminence (IoE). The credentials of VIT in academics and research have ranked VIT in 1st position among private institutions.</p>
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

            <div class="container-fluid bg-light py-5">
                <div class="container">
                <h1 style={{textAlign: 'start', fontWeight: 'lighter', color: 'gray'}} class="mb-5">Author's Guidelines</h1>
                    <div class="row justify-content-between">
                        <div class="col-lg-1 col-md-2 col-sm-3">
                            <div><h1 style={{fontSize: '500%', color:'gray', fontWeight: 'bold'}}>1</h1></div>
                        </div>
                        <div class="col-lg-5 col-md-4 col-sm-9">
                            <div style={{textAlign: 'start'}}>Each paper must be original and unpublished work, not submitted for publication elsewhere (copyright infringement issues will be the responsibility of the authors). Papers must be written in good English. Accepted submissions may not appear in any other conference or workshop with proceedings.</div>
                        </div>
                        <div class="col-lg-1 col-md-2 col-sm-3 mt-md-0 mt-sm-4">
                            <div><h1 style={{fontSize: '500%', color:'gray', fontWeight: 'bold'}}>2</h1></div>
                        </div>
                        <div class="col-lg-5 col-md-4 col-sm-9 mt-md-0 mt-sm-4">
                            <div style={{textAlign: 'start'}}>The submissions must be anonymous, i.e. without author name(s), affiliation(s), acknowledgments, or obvious references. It should begin with a title, a short abstract, and a list of keywords and its introduction should summarize the contributions of the paper</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container my-5">
                <h1 style={{textAlign: 'start', fontWeight: 'lighter', color: 'gray'}} class="mb-5">Speakers</h1>
                <div class="row gx-1 mt-5">
                    <div class="col-6"><img src={samplediv} alt="" class="img-fluid"/></div>
                    <div class="col-6"><img src={samplediv} alt="" class="img-fluid"/></div>
                </div>
                <div class="row justify-content-around mt-5">
                    <div class="col-3"><img src={momos} alt="" class="img-fluid"/></div>
                    <div class="col-3"><img src={ferrari} alt="" class="img-fluid"/></div>
                    <div class="col-3"><img src={whitenigga} alt="" class="img-fluid"/></div>
                </div>
                <div class="mt-5 d-flex flex-row-reverse">
                    <a class="black-button">All Speakers</a>
                </div>
            </div>

        </div>
    );
}

export default Home;
