//DatePicker.jsx

import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
  gap: 20px;
  background-color: black;
`;
const DotBox = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Calendartwo({ user, onSelectDate }) {
  const [value, onChange] = useState(new Date());
  const dateArr = ["2023. 08. 15.", "2023. 08. 17."];

  const handleDateSelect = (date) => {
    onChange(date);
    onSelectDate(date); // Call the onSelectDate prop with the selected date
  };

  return (
    <Container>
      <Calendar
        onChange={handleDateSelect} // Use the handleDateSelect function
        value={value}
        formatDay={(locale, date) =>
          //xx일 -> xx 으로 format 변경
          new Date(date).toLocaleDateString("en-us", {
            day: "2-digit",
          })
        }
        tileContent={({ date, view }) => {
          //
          const exist = dateArr.find(
            (oneDate) =>
              oneDate ===
              String(
                new Date(date).toLocaleDateString("ko", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
              )
          );
        }}
      />
    </Container>
  );
}