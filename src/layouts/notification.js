import React from "react";

const Style = {
  background: "none",
  color: "inherit",
  border: "none",
  padding: 0,
  font: "inherit",
  cursor: "pointer",
  outline: "inherit",
  textAlign: "right",
};

const Notification = () => {
  const Text1 = "The accepted papers have been published! They can be accessed by clicking on";
  const Text2 = "ACCEPTED PAPERS";

  return (
    <>
        <div class="alert alert-success d-flex" role="alert">
        <div class="alignleft"></div>
        <div class="aligncenter">{Text1} <strong> {Text2}</strong>. </div>
        <div class="alignright"> <button style={Style} type="button" class="close" data-dismiss="alert">{""}{""}</button> </div>
        </div>
    </>
  );
};

export default Notification;
