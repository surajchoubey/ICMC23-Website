import React from "react";
import aboutcontentpng from "../../images/assets/about-content.png";
import aboutbottompng from '../../images/assets/about_bottom2.png';

const aboutText =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta vitae laboriosam sequi accusamus nobis delectus omnis nesciunt temporibus nihil necessitatibus illo dicta quos, natus aliquam ad! Praesentium consequatur iste fugiat obcaecati animi minus magnam tempora numquam distinctio suscipit accusantium deserunt, cumque minima mollitia fugit ea eaque. Vero labore necessitatibus nisi veniam temporibus, consequatur, cumque provident quisquam in eum cupiditate nobis illum, dolor perspiciatis laudantium similique magni repudiandae ipsam? Porro sequi tempore doloribus amet, officiis iusto quis similique dolores, cumque ipsum, fuga quas recusandae nam saepe obcaecati perspiciatis. Ullam hic voluptates veritatis voluptate eum esse, harum numquam distinctio quod necessitatibus cumque quisquam, ducimus consectetur nemo vel similique unde ex est illum mollitia aspernatur commodi voluptatum cupiditate? Cum blanditiis, alias minus, reiciendis architecto reprehenderit facilis quam, odit quae inventore iure itaque laboriosam rerum quidem repellendus eum incidunt harum magni deserunt commodi nobis. Voluptate laudantium pariatur debitis ut quibusdam odit quas dolor aspernatur vitae temporibus accusamus animi facilis, quos nihil fugit consequatur qui omnis accusantium delectus doloremque suscipit id molestias? Recusandae facilis sint enim inventore quas blanditiis amet id possimus at iure dolorem, saepe cupiditate. Facilis, eum quia quidem officia recusandae sint. Nisi libero illo, officia eum illum labore enim possimus ab pariatur corporis laudantium eius dignissimos autem sed expedita est qui mollitia unde obcaecati? Dolorum et hic numquam veniam dolore voluptas beatae cumque alias saepe recusandae soluta veritatis ad animi fuga deserunt libero reiciendis, laboriosam error velit culpa magni. Incidunt obcaecati fuga voluptas est, quod debitis! Ipsam reprehenderit deleniti maxime quod facilis?"

function BPGCMathDept() {
    return(
        <div className="container" style={{marginBottom: "45px"/* marginLeft:"60px", marginTop: "40px" */}}>
            <div className="titleStyle1">
            About
            </div>
            <div className="titleStyle2">
            Department of Mathematics
            </div>
            <div className="divider"></div>
            <div className="about-content">
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

export default BPGCMathDept;
