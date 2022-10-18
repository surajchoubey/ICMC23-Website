import React from "react";

const Excuses = {
  TBA: {
    message: "TO BE ANNOUNCED!",
    description: "Sit back and relax!",
    helperClass: "alert alert-info alert-dismissible fade show",
  },
  TBU: {
    message: "TO BE UPDATED!",
    description: "Sit back and relax!",
    helperClass: "alert alert-info alert-dismissible fade show",
  },
  UnderDevelopmentPhase: {
    message: "Website is currently under development phase.",
    description: "Please come back later!",
    helperClass: "alert alert-danger alert-dismissible fade show",
  },
  Delay: {
    message: "Sorry for the delay",
    description: "Please wait for a couple of days. We will update it soon.",
    helperClass: "alert alert-info alert-dismissible fade show",
  },
};

const ExcuseCard = (excuseType) => {
  return (
    <div class={excuseType.helperClass} role="alert">
      <strong>{excuseType.message.toUpperCase()}</strong>
      <br />
      &nbsp; {excuseType.description} &nbsp;
    </div>
  );
};

export { ExcuseCard, Excuses };
