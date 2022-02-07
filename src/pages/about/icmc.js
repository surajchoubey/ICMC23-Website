import React from "react";
import icmclogo from "../about/icmc-logo.png"

const aboutText = "The conference started its journey from 2013 at Haldia Institute of Technology, India. The flag of the conference was carried by different renowned institutes like IIT (BHU), KIIT, Bhubaneswar, Sikkim University, India etc. <br/> <br/> ICMC 2022 aims to bring together both novice and experienced scientists with developers, to meet new colleagues, collect new ideas and establish new cooperation between research groups and provide a platform for researchers from academic and industry to present their original work and exchange ideas, information, techniques and applications in the field of Computational Applied Mathematics, including, but not limited to the broad topics of Operations Research, Numerical Analysis, Computational Fluid Mechanics, Soft Computing, Cryptology &amp; Security Analysis, Image Processing, Big Data, Cloud Computing, Data Analytics, IoT, Pervasive Computing and other emerging areas of research.";

function ICMC() {
    return(
      <div className="container" style={{marginBottom:"20px"/* marginLeft:"60px", marginTop: "40px" */}}>
      <div className="titleStyle1">About</div>
      <div className="titleStyle2">
        ICMC 2023
      </div>
      <div className="divider"></div>
      <div className="about-content">
        <div className="about-mid-grid">
          <img
            src={icmclogo}
            alt="Speaker at a conference"
            className="about-img-cnt"
          />
          <p className="about-txt-cnt" dangerouslySetInnerHTML={{__html: aboutText}}></p>
        </div>
      </div>
    </div>
        );
    }
    
    export default ICMC;
    
