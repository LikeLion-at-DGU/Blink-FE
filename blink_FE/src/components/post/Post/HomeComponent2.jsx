import React, { useState } from "react";
import styled from "styled-components";
import Post from "../PostWrite/Post";
import CustomGMap from "./CustomGMap";

const Home2Container = styled.div`
  /* margin-left: 220 px; */
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: flex-start;
`;

const PostStyled = styled(Post)`
  width: 800px;
  height: 100%;
  background-color: yellow;
`;

function HomeComponent2() {
  const [selectedLocation, setSelectedLocation] = useState({ lat: 0, lng: 0 });

  const handleLocationUpdate = (location) => {
    setSelectedLocation(location);
  };

  return (
    <Home2Container>
      <PostStyled selectedLocation={selectedLocation} />
      <CustomGMap onUpdateLocation={handleLocationUpdate} />
    </Home2Container>
  );
}

export default HomeComponent2;
