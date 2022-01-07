import React from "react";

function Contact() {
    return(
        <div class="container my-5">
            <div class="row py-3">
                <div class="col py-2">
                    <h3>For any conference related details:</h3><br/>
                    <a href="mailto:icef@bits-pilani.goa.ac.in" style={{"text-decoration":"none"}}>icef@bits-pilani.goa.ac.in</a><br/><br/>
                    For logistic related queries, contact:<br/><br/>
                    <h2>Mr. X Y Sharma</h2><br/>
                    Public Relations Officer<br/>
                    BITS-Pilani, KK Birla Goa Campus<br/><br/>
                    Phone: <a href="tel:+911234567890" style={{"text-decoration":"none"}}>+91-1234567890</a><br/>
                    Email: <a href="mailto:ic.pru@goa.bits-pilani.ac.in" style={{"text-decoration":"none"}}>ic.pru@goa.bits-pilani.ac.in</a><br/><br/>

                    <a class="btn btn-primary btn-large" href="https://www.google.com/">Contact the Web Developer</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
