import React from "react";
// import springer from '../../images/springer.jpeg'

const springer_link = "https://link.springer.com/";

const GuidelinesLayout = (props) => {
    return (
        <div style={{display:'flex', flexDirection: 'row', marginBottom:'40px'}}>
            <div className="numStyle">
                {props.serial_number}
            </div>
            <div className="textStyle">
            <div style={{fontWeight:'300'}}>{props.title}</div>
                <p style={{fontWeight: '400'}}> {props.children} </p>
            </div>
        </div>        
    )
}

function Guidelines() {
    return(
        <div className="container" style={{marginBottom: '80px' /* marginLeft:"60px", marginTop: "40px", marginRight: '60px'*/ }}>
            <div className = 'titleStyle1'> Author's </div>
            <div className = 'titleStyle2'> Guidelines </div>
            <div class="divider" style={{marginBottom: '30px'}}></div>
            <GuidelinesLayout serial_number="1" /*title="Access to your published paper"*/>
                Each paper must be original and unpublished work, not submitted for publication elsewhere (copyright infringement issues will be the responsibility of the authors). Papers must be written in good English. Accepted submissions may not appear in any other conference or workshop with proceedings. The submissions must be anonymous, i.e. without author name(s), affiliation(s), acknowledgments, or obvious references. It should begin with a title, a short abstract, and a list of keywords and its introduction should summarize the contributions of the paper. Papers should be at most 12 pages in total, including references and appendices, using 11 point font and reasonable margins. 
                {/* Extra charges of INR 100 or USD 05 per page is required after 12 pages and maximum page limit can be 20. The similarity index for a submitted paper should be below 20%.*/}
            </GuidelinesLayout>
            <GuidelinesLayout serial_number="2" /*title="Access to your published paper"*/>
                The authors are encouraged to prepare their submissions as per the given <a href='https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines' target="_blank" rel="noopener noreferrer" class="modern-link">guidelines</a>. Submitted papers must be in PDF format and should be submitted electronically via easy chair.           
            </GuidelinesLayout>
            <GuidelinesLayout serial_number="3" /*title="Access to your published paper"*/>
            All papers that conform to submission guidelines will be evaluated based on originality, technical and/or research content/depth, correctness, relevance to conference, contributions, and readability. The authors of the accepted papers will be allowed to make corrections in accordance with the suggestions of the reviewers and submit final camera-ready papers within the stipulated deadline.            
            </GuidelinesLayout>
            <br/>
            <br/>
                <p style={{fontWeight: '400', fontSize: '200%'}}>HOW TO <b>PROCEED?</b></p>
                    {/* <a href={springer_link} target="_blank" rel="nopener noreferrer" style={{focus: 'cursor'}}><img src={springer} class="img-fluid" alt="springer logo"/></a> */}
                <p style={{fontWeight: '400'}}>All accepted papers are expected to be published on <a class="modern-link" href={springer_link} target="_blank" rel="nopener noreferrer"> Springer (Waiting for approval)</a>.</p>
        </div>
    );
}

export default Guidelines;
