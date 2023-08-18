import * as React from "react";
import styled from "styled-components";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Typography from "@mui/joy/Typography";
import { Link } from "react-router-dom";

export default function MinWidthButtonGroup({
  onPostButtonClick,
  onPostListButtonClick,
  minWidth,
}) {
  const [selectedButton, setSelectedButton] = React.useState("전체 목록");

  const handleButtonClick = (label) => {
    setSelectedButton(label);

    if (label === "전체 목록") {
      onPostListButtonClick(); // Call the function to switch back to PostList
    } else if (label === "글 등록하기") {
      onPostButtonClick(); // Call the function to switch to Post
    }
  };

  return (
    <Card
      variant="outlined"
      sx={{
        // width: "100%", // Card의 width를 100%로 설정
        width: minWidth, // 최소 너비를 지정한 minWidth로 설정
        height: "50px",
        overflow: "auto",
      }}
    >
      <CardContent sx={{ textAlign: "center", alignItems: "center" }}>
        <ButtonGroup
          variant="soft"
          aria-label="outlined primary button group"
          buttonFlex="0 1 200px"
          sx={{ width: "100%", justifyContent: "center", height: "auto" }}
        >
          <Button
            onClick={() => handleButtonClick("전체 목록")}
            sx={{
              backgroundColor:
                selectedButton === "전체 목록" ? "#34446D" : "#BABABA",
              color: "white",
            }}
          >
            전체 목록
          </Button>
          <Button
            onClick={() => handleButtonClick("글 등록하기")}
            sx={{
              backgroundColor:
                selectedButton === "글 등록하기" ? "#34446D" : "#BABABA",
              color: "white",
            }}
          >
            글 등록하기
          </Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}
