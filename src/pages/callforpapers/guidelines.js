import React from "react";

const GuidelinesLayout = (props) => {
    return (
        <div style={{display:'flex', flexDirection: 'row', marginBottom:"40px"}}>
            <div className="numStyle">
                {props.serial_number}
            </div>
            <div className="textStyle">
            <div style={{fontWeight:'500'}}>{props.title}</div>
                {props.children}
            </div>
        </div>        
    )
}

function Guidelines() {
    return(
        <div className="container" style={{marginBottom: '80px' /* marginLeft:"60px", marginTop: "40px", marginRight: '60px'*/ }}>
            <div className = 'titleStyle1'> Author's </div>
            <div className = 'titleStyle2'> Guidelines </div>
            <div class="divider" style={{marginBottom: '50px'}}></div>
            <GuidelinesLayout serial_number="1" title="Access to your published paper">
                If the conference organizers opt for 4-week free access to the volume on SpringerLink, then participants are able to access all papers via the conference website during this period (usually around the time of the conference).<br/> <br/>
                Conference organizers may also purchase printed books and/or USB-sticks containing navigable content for distribution amongst the participants.<br/> <br/>
                In addition, all authors who have included their email addresses in the headers of their papers will receive an email containing a coded personal access link, which will enable them to download the PDF of their paper directly from SpringerLink.<br/> <br/>
                Springer's policy on content sharing is given on the following page: <a href='http://www.springer.com/gp/springernature/landing/content-sharing' target="_blank" rel="noopener noreferrer">http://www.springer.com/gp/springernature/landing/content-sharing</a>           
            </GuidelinesLayout>
            <GuidelinesLayout serial_number="2" title="Access to your published paper">
                If the conference organizers opt for 4-week free access to the volume on SpringerLink, then participants are able to access all papers via the conference website during this period (usually around the time of the conference).<br/> <br/>
                Conference organizers may also purchase printed books and/or USB-sticks containing navigable content for distribution amongst the participants.<br/> <br/>
                In addition, all authors who have included their email addresses in the headers of their papers will receive an email containing a coded personal access link, which will enable them to download the PDF of their paper directly from SpringerLink.<br/> <br/>
                Springer's policy on content sharing is given on the following page: <a href='http://www.springer.com/gp/springernature/landing/content-sharing' target="_blank" rel="noopener noreferrer">http://www.springer.com/gp/springernature/landing/content-sharing</a>            
            </GuidelinesLayout>
            <GuidelinesLayout serial_number="3" title="Access to your published paper">
                If the conference organizers opt for 4-week free access to the volume on SpringerLink, then participants are able to access all papers via the conference website during this period (usually around the time of the conference).<br/> <br/>
                Conference organizers may also purchase printed books and/or USB-sticks containing navigable content for distribution amongst the participants.<br/> <br/>
                In addition, all authors who have included their email addresses in the headers of their papers will receive an email containing a coded personal access link, which will enable them to download the PDF of their paper directly from SpringerLink.<br/> <br/>
                Springer's policy on content sharing is given on the following page: <a href='http://www.springer.com/gp/springernature/landing/content-sharing' target="_blank" rel="noopener noreferrer">http://www.springer.com/gp/springernature/landing/content-sharing</a>            
            </GuidelinesLayout>
            <GuidelinesLayout serial_number="4" title="Access to your published paper">
                If the conference organizers opt for 4-week free access to the volume on SpringerLink, then participants are able to access all papers via the conference website during this period (usually around the time of the conference).<br/> <br/>
                Conference organizers may also purchase printed books and/or USB-sticks containing navigable content for distribution amongst the participants.<br/> <br/>
                In addition, all authors who have included their email addresses in the headers of their papers will receive an email containing a coded personal access link, which will enable them to download the PDF of their paper directly from SpringerLink.<br/> <br/>
                Springer's policy on content sharing is given on the following page: <a href='http://www.springer.com/gp/springernature/landing/content-sharing' target="_blank" rel="noopener noreferrer">http://www.springer.com/gp/springernature/landing/content-sharing</a>            
            </GuidelinesLayout>
        </div>
    );
}

export default Guidelines;