import React from "react";

const HorizonLine = ({ text }) => {
  return (
    <div
      style={{
        width: "95%", // Keep the width as needed
        textAlign: "center",
        borderBottom: "1px solid #aaa",
        lineHeight: "0.2em",
        margin: "auto", // Center horizontally by adjusting left and right margins
        marginTop: "0.1em", // Keep the top margin
        marginBottom: "0.5em", // Keep the bottom margin
      }}
    ></div>
  );
};

export default HorizonLine;
