import React from "react";
import {
  Container,
  Explain,
  Range,
  Outline,
  Card,
  CardJob,
  CardImage,
  CardEx,
  Wrap,
  Wrapping,
  Upper,
} from "./style";
import { useState } from "react";
import { CardData } from "../Expert/ExpertData";
import { Link, Outlet } from "react-router-dom";

// 경력 설명 부분 문자열 엔터처리 함수
const formatExperience = (experience) => {
  const lines = experience.split(/\s(?=\d{4}~)/);
  return lines.map((line, index) => (
    <React.Fragment key={index}>
      {index !== 0 && <br />}
      {line}
    </React.Fragment>
  ));
};

// 변호사 리스트업 컴포넌트
export default function ExpertList() {
  const [selectedCardData, setSelectedCardData] = useState("");

  const handleCardClick = (card) => {
    setSelectedCardData(card);
  };

  return (
    <Upper>
      <Outlet />
      <Container>
        <Explain>당신에게 맞는 전문가를 찾아보세요!</Explain>
        <Range>
          <option value="latest">최신 순</option>
          <option value="relevant">관련도 순</option>
        </Range>
        <input type="submit" value="적용" />
        <Outline>
          {CardData.map((card) => (
            <Link key={card.Id} to={`/expertList/${card.Id}`}>
              <Card onClick={() => handleCardClick(card)}>
                <CardImage src={card.imageUrl} alt="변호사 이미지" />
                <Wrap>
                  <CardJob>
                    {card.job} {card.userId}
                  </CardJob>
                </Wrap>
                <Wrapping>
                  <CardEx>
                    경력
                    <br />
                    {formatExperience(card.experience)}
                  </CardEx>
                </Wrapping>
              </Card>
            </Link>
          ))}
        </Outline>
      </Container>
    </Upper>
  );
}
