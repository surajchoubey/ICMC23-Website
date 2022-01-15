import React from 'react';
import ReactDOM from 'react-dom';

class BITSGoaOnGMAP extends React.Component {
    render() {
        return <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.729603700582!2d73.8781616!3d15.3911236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb8375851666d%3A0x4ad5683010110240!2sBITS%20Pilani%20K%20K%20Birla%20Goa%20Campus!5e0!3m2!1sen!2sin!4v1642067706848!5m2!1sen!2sin" height="437px" width="100%" style="border: 0" allowfullscreen="" loading="lazy" class="contact-map-img"/>
    }
  }
  
ReactDOM.render(<BITSGoaOnGMAP />, document.getElementById("bits-goa-on-gmaps"));