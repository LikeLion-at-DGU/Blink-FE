import React from "react";
import styled from "styled-components";
import MinWidthButtonGroup from "./MinWidthButtonGroup";
import SortStandard from "./SortStandard";
import PostListScroll from "./PostListScroll";

const PostListContainer = styled.div`
  width: 532px;
  /* height: 70%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-radius: 20px;
  background-color: white;
  color: black;
`;

export default function PostList() {
  return (
    <PostListContainer>
      {/* <MinWidthButtonGroup /> */}
      <SortStandard />
      <PostListScroll />
    </PostListContainer>
  );
}
