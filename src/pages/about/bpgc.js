import React from "react";
import aboutcontentpng from "../../images/assets/about-content4.jpg";
import aboutbottompng from "../../images/assets/about-bottom3.jpg";

const aboutText =
  ", is an all-India Institute for higher education. The primary motive of BITS is to \"train young men and women able and eager to create and put into action such ideas, methods, techniques and information\". The Institute is a dream come true of its founder, late Mr G. D. Birla - an eminent industrialist, a participant in the Indian freedom struggle and a close associate of the Father of Indian Nation, late Mr Mohandas Karamchand Gandhi (Mahatma Gandhi). What started in the early 1900s as a small school blossomed into a set of colleges for higher education, ranging from the Humanities to Engineering until 1964 when all these colleges amalgamated to culminate into a unique Indian University of International standing. This university was christened as the Birla Institute of Technology and Science, Pilani, known to many as BITS, Pilani. Over the years, BITS has provided the highest quality technical education to students from all over India admitted based on merit. Its graduates may be found throughout the world in all areas of engineering, science and commerce. BITS symbolizes the maturing of Indian technical ability and \"can-do\" entrepreneurial spirit, mainly derived from the private sector. BITS is located in the Vidya Vihar campus adjacent to the town of Pilani in Rajasthan."
const aboutText2 = 
  "BITS Pilani offers UG, PG, and PhD programmes to over 17,000 students across its Pilani, Goa, Hyderabad, Mumbai, and Dubai campuses. BITS Pilani has established itself as a symbol of Excellence and was declared an Institution of Eminence by the Ministry of Education, Government of India in 2020. QS World University Subject Rankings 2021 has ranked BITS Pilani in the Top 351-400 in four areas, namely, Mechanical Engineering (among top 11 in India), Computer Science (among top 12 in India), EEE (among top 11 in India) and Chemical Engineering (among top 14 in India). The pharmacy was ranked globally at 151-200 (Top 4 in India). Nine disciplines have been ranked in the Top 16 in India. BITS Pilani has been ranked among the top 300 in QS World University Graduate Employability Rankings 2022 and within the top 6-8 in India."
const aboutText3 =
  "In the NIRF 2021 rankings, BITS Pilani has been ranked 3rd in Pharmacy, 17th in the University category and 26th in Engineering. Nature Index India 2020 has ranked BITS at #9 in the Physical Sciences category amongst the academic institutes. In QS Asia University Rankings 2021, BITS has been ranked 194th, the only private institute from India in the Asia Top 200, and 18 in India. The Institute has secured more than Rs 330 crore as an external research grant in the last five years. State of the art facilities have been developed to support cutting-edge research, led by students and about 850 faculty members, leading to an h-index of 122, 11700+ publications with 1,25,000 citations as per Scopus Database with 85+ patents filed in the last five years. Recently, BITS Pilani was chosen by DST, Government of India, to establish a Technology Innovation Hub on Bio-Cyber Physical Systems with a grant of Rs 125 Cr; BITS is the only non-Government institute amongst the 25 chosen nationally for this prestigious grant. Recent studies have identified BITS as #3 in terms of the number of Indian start-ups founded by the graduates of an institute.";

function BPGC() {
  return (
    <div className="container" style={{marginBottom: "45px" /* marginLeft:"60px", marginTop: "40px" */}}>
    <div className="titleStyle1">About </div>
      <div className="titleStyle2">
        Birla Institute of Technology and Science
      </div>
      <div className="divider" style={{marginBottom: '30px'}}></div>
      <div className="about-content">
        <div className="about-mid-grid">
          <img
            src={aboutcontentpng}
            alt="Scenic Campus View"
            className="about-img-cnt"
          />
          <p className="about-txt-cnt">The <a href="https://www.bits-pilani.ac.in/" target="_blank" rel="noopener noreferrer" class="modern-link">Birla Institute of Technology &amp; Science, Pilani</a>{aboutText}</p>
          <p className="about-txt-cnt">{aboutText2}</p>
          <p className="about-txt-cnt">{aboutText3}</p>
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

export default BPGC;
