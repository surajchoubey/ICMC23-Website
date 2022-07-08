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
  const Text1 = "The conference will be in hybrid mode";
  const Text2 = "but more preferable for offline mode.";

  return (
    <>
        <div class="alert alert-info d-flex" role="alert">
        <div class="alignleft"></div>
        <div class="aligncenter"> <strong> {Text1} </strong> &nbsp;{Text2} </div>
        <div class="alignright"> <button style={Style} type="button" class="close" data-dismiss="alert"> {""}&times;{""} </button> </div>
        </div>
    </>
  );
};

export default Notification;
