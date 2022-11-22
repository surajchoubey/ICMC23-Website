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
  NoLongerSubmissions: {
    message: "PAPER SUBMISSION WINDOW CLOSED",
    description: "No longer accepting submissions!",
    helperClass: "alert alert-danger alert-dismissible fade show",
  },
  Delay: {
    message: "Accepted Papers may be notified in a week",
    description: "Please note that we will give you an option for presenting your paper even if it gets rejected for publication in the conference proceeding. So kindly, plan accordingly.",
    helperClass: "alert alert-info alert-dismissible fade show",
  },
  RegistrationsClosed: {
    message: "REGISTRATIONS ARE CLOSED",
    description: "No refund of the registration fee after November 22, 2022.",
    helperClass: "alert alert-danger alert-dismissible fade show",
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
