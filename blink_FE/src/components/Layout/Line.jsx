import React from "react";

const HorizonLine = ({ width, borderBottom, marginTop, opacity }) => {
  return (
    <div
      style={{
        width: width || "95%", // Use the provided width prop, or default to "95%"
        textAlign: "center",
        borderBottom: borderBottom || "1px solid #aaa",
        ...(opacity !== undefined && { opacity: `${opacity}` }),
        lineHeight: "0.2em",
        margin: "auto", // Center horizontally by adjusting left and right margins
        marginTop: marginTop || "0.1em", // Keep the top margin
        marginBottom: "0.5em", // Keep the bottom margin
      }}
    ></div>
  );
};

export default HorizonLine;
