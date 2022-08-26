import "../css/tailwind.css";

import * as React from "react";

import { monthFormat, now } from "../controller/string-pack/date";

import { useState } from "react";

export function App() {
  return (
    <div className="spa bg-base dark:bg-base-dark">
      <h1>Start Calendar</h1>
      <RenderDays />
      <Calendar />
    </div>
  );
}

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(monthFormat(new Date()));

  return <div>{currentMonth}</div>;
}

const RenderDays = () => {
  const dateFormat = "dddd";
  const days = [];

  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="col col-center" key={i}>
        {now.weekday(i).format(dateFormat)}
      </div>,
    );
  }
  return <div className="days row">{days}</div>;
};
