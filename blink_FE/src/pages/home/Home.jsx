import React, { useState } from "react";
import styled from "styled-components";
// import KMap from "../../components/post/KMap";
// import GMap from "../../components/post/Post/GMap";
import CustomGMap from "../../components/post/Post/CustomGMap";
import PostList from "../../components/post/PostList/PostList";
import Post from "../../components/post/PostWrite/Post";
import MinWidthButtonGroup from "../../components/post/PostList/MinWidthButtonGroup";
import HomeComponent1 from "../../components/post/Post/HomeComponent1";
import HomeComponent2 from "../../components/post/Post/HomeComponent2";

const HomeContainer = styled.div`
  /* margin-left: 220px; */
  width: 1920px;
  height: 1080px;
  background-color: white;
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
      {isPostActive ? (
        <MinWidthButtonGroup
          onPostButtonClick={handlePostButtonClick}
          onPostListButtonClick={handlePostListButtonClick}
          minWidth={1120}
        />
      ) : (
        <MinWidthButtonGroup
          onPostButtonClick={handlePostButtonClick}
          onPostListButtonClick={handlePostListButtonClick}
          minWidth={500}
        />
      )}
      {isPostActive ? (
        <HomeComponent2 minWidth={532} />
      ) : (
        <HomeComponent1 minWidth={1150} />
      )}
    </HomeContainer>
  );
}
