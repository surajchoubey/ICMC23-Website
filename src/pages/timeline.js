import React from "react";
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
  new timelineEvent("October 31,2022", "Paper Submission Deadline"),
  new timelineEvent("December 25, 2022", "Final Acceptance Notification"),
  new timelineEvent("January 30, 2023", "Camera Ready Submission"),
  new timelineEvent("January 06-08, 2023", "Conference Dates"),
];

function Timeline() {
  return (
    <section class="section-timeline">
      <div className="titleStyle1">Timeline</div>
      <div className="titleStyle2">Of Events</div>
      <div class="divider" style={{marginBottom: '50px'}}></div>
      <div class="scale">
        <ul class="timeline">{timelineEvent.getCards(eventList)}</ul>
        <div className="center-fix">
          <div class="black-button mg-tp">
            CONTACT US <span> REGARDING ANY OTHER DETAILS </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
