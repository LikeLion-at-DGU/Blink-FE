import React, { useState } from "react";
import styled from "styled-components";
import KMap from "../../components/post/KMap";
import GMap from "../../components/post/GMap";
import CustomGMap from "../../components/post/CustomGMap";
import PostList from "../../components/post/PostList";
import Post from "../../components/post/Post";
import MinWidthButtonGroup from "../../components/post/MinWidthButtonGroup";
import HomeComponent1 from "../../components/post/HomeComponent1";
import HomeComponent2 from "../../components/post/HomeComponent2";

const HomeContainer = styled.div`
  /* margin-left: 220px; */
  width: 1920px;
  height: 1080px;
  background-color: blue;
`;

export default function Home() {
  const [isPostActive, setIsPostActive] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [clickedLocation, setClickedLocation] = useState(null);

  // 클릭 이벤트 핸들러
  const handleMapClick = (location) => {
    setSelectedLocation(location);
  };

  // CustomGMap로부터 클릭한 위치 정보를 받아올 함수
  const handleLocationUpdate = (location) => {
    setClickedLocation(location);
  };

  const handlePostButtonClick = () => {
    setIsPostActive(true);
  };

  const handlePostListButtonClick = () => {
    setIsPostActive(false);
  };

  return (
    <HomeContainer>
      <MinWidthButtonGroup
        onPostButtonClick={handlePostButtonClick}
        onPostListButtonClick={handlePostListButtonClick}
      ></MinWidthButtonGroup>
      {isPostActive ? <HomeComponent2 /> : <HomeComponent1 />}
    </HomeContainer>
  );
}
