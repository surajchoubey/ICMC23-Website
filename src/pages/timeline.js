import React from "react";
import { Link } from "react-router-dom";
import "../timeline.css";

class timelineEvent {
  constructor(date, name) {
    this.name = name;
    this.date = date;
  }

  static getCards(eventList) {
    return eventList.map(function (event, index) {
      return (
        <li>
          <div class={index % 2 ? "direction-r" : "direction-l"}>
            <div class="flag-wrapper">
              <span class="flag">{event.date}</span>
            </div>
            <div class="desc">{event.name}</div>
          </div>
        </li>
      );
    });
  }
}

const eventList = [
  new timelineEvent("September 20,2022", "Paper Submission Deadline"),
  new timelineEvent("October 20, 2022", "Final Acceptance Notification"),
  new timelineEvent("November 10, 2022", "Camera Ready Submission"),
  new timelineEvent("January 06-08, 2023", "Conference Dates"),
];

function Timeline() {
  return (
    <div class="container">
      <div className="titleStyle1">Timeline</div>
      <div className="titleStyle2">Of Events</div>
      <div class="divider" style={{ marginBottom: "30px" }}></div>
      <div class="scale">
        <ul class="timeline">{timelineEvent.getCards(eventList)}</ul>
        <div className="center-fix">
          <Link class="black-button mg-tp" to="/contact">
            CONTACT US <span> REGARDING ANY OTHER DETAILS </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
