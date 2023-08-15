import * as React from "react";
import styled from "styled-components";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Typography from "@mui/joy/Typography";
import { Link } from "react-router-dom";

export default function MinWidthButtonGroup() {
  const [selectedButton, setSelectedButton] = React.useState("전체 목록");

  const handleButtonClick = (label) => {
    setSelectedButton(label);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        width: "70%",
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
          {/* 아래 버튼 클릭하면 글쓰기 폼 띄워야 함. */}
          <Link to="/post">
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
          </Link>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}
