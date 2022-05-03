import React from "react";
import aboutbottompng from "../../images/assets/about_bottom2.jpg";

const aboutText = " is one of the four campuses of The Birla Institute of Technology & Science, Pilani, a well-known all-India Institute for higher education. In keeping with the tradition of innovation and creativity, the campus has given a state-of-the-art touch to the infrastructure of the entire institute without diminishing, in the least, the natural beauty of Goa surrounding its Campus. Spacious Labs State of art Classrooms with soundproof acoustics, modern furniture, computer labs with Internet facility and Library define the infrastructural counters of the institution. Being an Institute of excellence in Technology and Sciences, the primary motive of the institute is to \"train young men and women able and eager to create and put into action such ideas, methods, techniques and information\". Being fully residential, the university hosts five thousand students and about six hundred staff."
const aboutText2 = "Goa is a well-known and popular hotspot on the tourist map of India and the world. The name immediately brings to one’s mind the lush green meadows, hills and valleys, the sea and its attractive beaches. This charm and beauty set the right ambience for BITS, Pilani – K. K. Birla Goa Campus, an Institute of excellence in Technology and Sciences. Nesting in the lap of verdant hills, overlooking the Zuari River, the Campus is spread over an area of 180 acres. The campus location is unique in respect of scenic beauty and panoramic view of picturesque surroundings encompassing the Zuari River, hillocks, waterways, forests and landscape.";

function BPGCGoa() {
    return(
        <div className="container" style={{marginBottom: "30px" /* marginLeft:"60px", marginTop: "40px" */}}>
    <div className="titleStyle1">Venue</div>
      <div className="titleStyle2">
        BITS Goa
      </div>
      <div className="divider" style={{marginBottom: '30px'}}></div>
      <div className="about-content">
        <div className="about-mid-grid">
          <p style={{fontWeight: '400'}} className="about-txt-cnt">
            <a
              class="modern-link"
              href="https://www.bits-pilani.ac.in/Goa/"
              target="_blank"
              rel="noopener noreferrer"
            >BITS Pilani K. K. Birla Goa Campus</a>{aboutText}</p>
          <p style={{fontWeight: '400'}} className="about-txt-cnt">{aboutText2}</p>
        </div>
        <img
          src={aboutbottompng}
          alt="Scenic Campus View"
          className="about-img-btm"
        />
      </div>
    </div>
    );
}

export default BPGCGoa;
