import React from "react";
import "../loading.css";

function ErrorPage() {
  return (
    <div class="section-loading">
      <div class="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p>
        Sorry, we're currently working on this page <br /> Thank you for your
        patience, any inconvenience caused is regretted.
      </p>
    </div>
  );
}

export default ErrorPage;
