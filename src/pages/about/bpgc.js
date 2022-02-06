import React from "react";
import abouttoppng from "../../images/assets/about-top.png";
import aboutcontentpng from "../../images/assets/about-content.png";
import aboutbottompng from "../../images/assets/about-bottom.png";

const aboutText =
  " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta vitaelaboriosam sequi accusamus nobis delectus omnis nesciunt temporibusnihil necessitatibus illo dicta quos, natus aliquam ad! Praesentiumconsequatur iste fugiat obcaecati animi minus magnam tempora numquamdistinctio suscipit accusantium deserunt, cumque minima mollitia fugitea eaque. Vero labore necessitatibus nisi veniam temporibus,consequatur, cumque provident quisquam in eum cupiditate nobis illum,dolor perspiciatis laudantium similique magni repudiandae ipsam? Porrosequi tempore doloribus amet, officiis iusto quis similique dolores,cumque ipsum, fuga quas recusandae nam saepe obcaecati perspiciatis.Ullam hic voluptates veritatis voluptate eum esse, harum numquamdistinctio quod necessitatibus cumque quisquam, ducimus consecteturnemo vel similique unde ex est illum mollitia aspernatur commodivoluptatum cupiditate? Cum blanditiis, alias minus, reiciendisarchitecto reprehenderit facilis quam, odit quae inventore iure itaquelaboriosam rerum quidem repellendus eum incidunt harum magni deseruntcommodi nobis. Voluptate laudantium pariatur debitis ut quibusdam oditquas dolor aspernatur vitae temporibus accusamus animi facilis, quosnihil fugit consequatur qui omnis accusantium delectus doloremquesuscipit id molestias? Recusandae facilis sint enim inventore quasblanditiis amet id possimus at iure dolorem, saepe cupiditate.Facilis, eum quia quidem officia recusandae sint. Nisi libero illo,officia eum illum labore enim possimus ab pariatur corporis laudantiumeius dignissimos autem sed expedita est qui mollitia unde obcaecati?Dolorum et hic numquam veniam dolore voluptas beatae ";

function BPGC() {
  return (
    <div className="container" style={{marginBottom: "45px" /* marginLeft:"60px", marginTop: "40px" */}}>
    <div className="titleStyle1">About the Campus</div>
      <div className="titleStyle2">
        Birla Institute of Technology and Science
      </div>
      <div className="divider"></div>
      <div className="about-content">
        <img
          src={abouttoppng}
          alt="Professors and Students attending a conference"
          className="about-img-top"
        />
        <div className="about-mid-grid">
          <img
            src={aboutcontentpng}
            alt="Speaker at a conference"
            className="about-img-cnt"
          />
          <p className="about-txt-cnt">{aboutText}</p>
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