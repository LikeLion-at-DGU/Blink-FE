import React from "react";
import styled from "styled-components";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Wrapper } from "@googlemaps/react-wrapper";
import CustomGMap from "./CustomGMap";

export default function GMap({ onUpdateLocation }) {
  const handleMapClick = (e) => {
    const clickedLocation = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    onUpdateLocation(clickedLocation); // 부모 컴포넌트로 클릭한 위치 정보 전달
  };
  return (
    <Wrapper>
      {/* apiKey={"AIzaSyCjXg90oMZF6DW0GoDdlFmOwtRFGGYY6DI"}
      libraries={"places"} */}
      <CustomGMap onUpdateLocation={handleMapClick} />
    </Wrapper>
  );
}
