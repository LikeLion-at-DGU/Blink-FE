import * as React from "react";
import styled from "styled-components";
import Box from "@mui/joy/Box";
import Checkbox from "@mui/joy/Checkbox";

const BoxGroup = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-left: auto;
  margin-right: 20px;
`;

export default function SortStandard() {
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleCheckboxChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <BoxGroup sx={{ display: "flex", gap: 3 }}>
      <Checkbox
        label="최신순"
        checked={selectedOption === "최신순"}
        onChange={() => handleCheckboxChange("최신순")}
      />
      <Checkbox
        label="오래된 순"
        checked={selectedOption === "오래된 순"}
        onChange={() => handleCheckboxChange("오래된 순")}
      />
    </BoxGroup>
  );
}
