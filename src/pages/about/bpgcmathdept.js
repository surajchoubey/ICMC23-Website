import React from "react";
import aboutbottompng from '../../images/assets/about_bottom2.jpg';

const aboutText =
"The Department of Mathematics was established in 2004. The department has competent faculties with vast knowledge in pure & applied Mathematics. The department offers M.Sc. (Hons) and PhD programs. The average strength in each year is approximately eighty students."
const aboutText2 =  
"The department provides opportunities for the students to choose their career in education and research in various fields of Mathematics. Department runs several foundation courses for all students pursuing integrated first-degree programs (B.E., M.Sc. (Hons), M.Sc. (Tech)) of the Institute, which provides a solid foundation for the various fields of Mathematics that would be essential and useful in both engineering and sciences. Besides these, the department also offers specialized courses in Mathematics for students pursuing M.Sc. (Hons) and PhD degrees in Mathematics. The department also contributes substantially towards the Work Integrated Learning Programs (WILP) of the Institute, specifically designed for the professionals working in various industries."
 const aboutText3 = "The graduates from the department will have distinguished careers in science and engineering. The track record in this regard shows that our alumni have occupied leading positions in top-ranked industries and premier institutes across the globe. The department is deeply involved in research and shares the knowledge and transfers it to the academic and industrial sectors through publications, lectures, collaborations, consultations etc."

function BPGCMathDept() {
    return(
        <div className="container" style={{marginBottom: "45px"/* marginLeft:"60px", marginTop: "40px" */}}>
            <div className="titleStyle1">
            About
            </div>
            <div className="titleStyle2">
            Department of Mathematics
            </div>
            <div class="divider" style={{marginBottom: '30px'}}></div>
            <div className="about-content">
                <div className="about-mid-grid">
                <p className="about-txt-cnt">{aboutText}</p>
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

export default BPGCMathDept;
