import React, { useState } from "react";
import styled from "styled-components";
import CustomGMap from "./CustomGMap";
import PostList from "./PostList";

const Home1Container = styled.div`
  /* margin-left: 220px; */
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
  justify-content: flex-start;
`;

export default function HomeComponent1() {
  return (
    <Home1Container>
      <PostList />
      <CustomGMap />
    </Home1Container>
  );
}
