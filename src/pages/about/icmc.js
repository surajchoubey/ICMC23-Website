import React from "react";
import icmclogo from "../about/icmc-logo.jpg"

const aboutText = "The conference started its journey from 2013 at Haldia Institute of Technology, India. The flag of the conference was carried by different renowned institutes like IIT (BHU), KIIT, Bhubaneswar, Sikkim University, India etc."
const aboutText3 = "ICMC 2023 aims to bring together both novice and experienced scientists with developers, to meet new colleagues, collect new ideas and establish new cooperation between research groups and provide a platform for researchers from academic and industry to present their original work and exchange ideas, information, techniques and applications in the field of Computational Applied Mathematics, including, but not limited to the broad topics of Operations Research, Numerical Analysis, Computational Fluid Mechanics, Soft Computing, Cryptology & Security Analysis, Image Processing, Big Data, Cloud Computing, Data Analytics, IoT, Pervasive Computing and other emerging areas of research.";

const aboutText2 = "The conference will be conducted in hybrid mode";
const aboutText2_2 = " but more preferable for offline mode. In the pandemic situation, travel has become difficult, so those who are unable to travel can present via the online platform google meet.";

function ICMC() {
    return(
      <div className="container" style={{marginBottom:"20px"}}>
      <div className="titleStyle1">About</div>
      <div className="titleStyle2">
        ICMC 2023
      </div>
      <div className="divider" style={{marginBottom: '30px'}}></div>
      <div className="about-content">
        <div className="about-mid-grid">
          <img
            src={icmclogo}
            alt="ICMC logo"
            className="about-img-logo"
          />
          <p style={{fontWeight: '400'}} className="about-txt-cnt">{aboutText}</p>
          <p style={{fontWeight: '400'}} className="about-txt-cnt">
            <mark style={{ backgroundColor: 'yellow'}}>{aboutText2}</mark> 
            {aboutText2_2}
          </p>
          <p style={{fontWeight: '400'}} className="about-txt-cnt">{aboutText3}</p>
        </div>
      </div>
    </div>
   );
}
    
 export default ICMC;
  
