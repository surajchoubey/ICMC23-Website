import React from "react";

const maplink =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.729603700582!2d73.8781616!3d15.3911236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb8375851666d%3A0x4ad5683010110240!2sBITS%20Pilani%20K%20K%20Birla%20Goa%20Campus!5e0!3m2!1sen!2sin!4v1642067706848!5m2!1sen!2sin";

const BITSGoaOnGMAP = (props) => {
  return (
    <iframe
      src={maplink}
      height={props.height}
      width={props.width}
      style={{ border: "0" }}
      loading="lazy"
      title="bitsgoagmap"
      className="contact-map-img"
    />
  );
};

export default BITSGoaOnGMAP;
