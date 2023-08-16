import React, { useState } from "react";
import styled from "styled-components";
import KMap from "../../components/post/KMap";
import GMap from "../../components/post/GMap";
import PostList from "../../components/post/PostList";
import Post from "../../components/post/Post";
import MinWidthButtonGroup from "../../components/post/MinWidthButtonGroup";

const HomeContainer = styled.div`
  margin-left: 220px;
  width: 1920px;
  height: 1080px;
  background-color: green;
  display: flex;
  justify-content: flex-start;
`;

export default function Home() {
  const [isPostActive, setIsPostActive] = useState(false);

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
      />
      {isPostActive ? <Post /> : <PostList />}
      <GMap />
    </HomeContainer>
  );
}
