import React, { useState } from "react";
import styled from "styled-components";
import Post from "./Post";
import CustomGMap from "./CustomGMap";

const Home1Container = styled.div`
  margin-left: 220px;
  width: 80%;
  height: 100%;
  background-color: green;
  display: flex;
  justify-content: flex-start;
`;

function HomeComponent2() {
  const [selectedLocation, setSelectedLocation] = useState({ lat: 0, lng: 0 });

  const handleLocationUpdate = (location) => {
    setSelectedLocation(location);
  };

  return (
    <Home1Container>
      <Post selectedLocation={selectedLocation} />
      <CustomGMap onUpdateLocation={handleLocationUpdate} />
    </Home1Container>
  );
}

export default HomeComponent2;
