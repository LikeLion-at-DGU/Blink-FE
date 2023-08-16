import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";

const GMapContainer = styled.div`
  position: relative;
  width: 1390px;
  height: 1080px;
`;

const Input = styled.input`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 700px;
  height: 100px;
  border: 3px dotted red;
  z-index: 5;
`;

const ClearMarkersButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 500px;
  padding: 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  cursor: pointer;
  z-index: 5;
`;

const ClearMarkersButton2 = styled.button`
  position: absolute;
  bottom: 10px;
  left: 1000px;
  padding: 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  cursor: pointer;
  z-index: 5;
`;

const ClearMarkersButton3 = styled.button`
  position: absolute;
  bottom: 10px;
  left: 1500px;
  padding: 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  cursor: pointer;
  z-index: 5;
`;

const LeftDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  left: 500px;
`;

let clickListener; // 클릭 이벤트 리스너 저장 변수

function CustomGMap() {
  const googleMapApiKey = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY;
  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [clickedLocation, setClickedLocation] = useState(null);
  const [marker, setMarker] = useState(null);
  const [center, setCenter] = useState({ lat: 37.468352, lng: 127.039021 });
  const [markers, setMarkers] = useState([]);
  const [clickDisabled, setClickDisabled] = useState(false); // 클릭 이벤트 비활성화 상태
  const [maxMarkersAlert, setMaxMarkersAlert] = useState(false);

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapApiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        initMap();
        initAutocomplete();
      };
      document.head.appendChild(script);
    };

    loadGoogleMapsScript();
  }, []);

  const initMap = () => {
    const mapOptions = {
      center: center,
      zoom: 16,
      fullscreenControl: false, // 맵 상에서 풀스크린(F11) 기능 삭제
      minZoom: 13, // 최소 줌 레벨 설정
      maxZoom: 20, // 최대 줌 레벨 설정
    };
    const newMap = new window.google.maps.Map(
      document.getElementById("map"),
      mapOptions
    );

    // 원하는 위치에 마커 추가
    const markerLocations = [
      { lat: 37.514438, lng: 127.037484 },
      { lat: 37.514838, lng: 127.037084 },
      { lat: 37.512438, lng: 127.030484 },
    ];

    markerLocations.forEach((location) => {
      const marker = new window.google.maps.Marker({
        position: location,
        map: newMap,
        title: "마커 위치",
      });
      setMarkers((prevMarkers) => [...prevMarkers, marker]);
    });

    clickListener = newMap.addListener("click", (event) => {
      if (!clickDisabled) {
        const clickedLatLng = event.latLng.toJSON();
        setClickedLocation(clickedLatLng);

        if (marker) {
          marker.setMap(null); // Remove the previous marker
        }

        const newMarker = new window.google.maps.Marker({
          position: clickedLatLng,
          map: newMap,
          title: "선택한 위치",
        });
        setMarker(newMarker);
        setMarkers([...markers, newMarker]);
      }
    });

    newMap.addListener("center_changed", () => {
      const newCenter = newMap.getCenter().toJSON();
      setCenter(newCenter);
    });

    setMap(newMap);
  };

  const initAutocomplete = () => {
    if (window.google && window.google.maps) {
      setAutocomplete(new window.google.maps.places.AutocompleteService());
    }
  };

  const handleInputChange = (e) => {
    if (autocomplete) {
      setSelectedPlace(e.target.value);
    }
  };

  const clearAllMarkers = () => {
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    setMarkers([]);
    setClickedLocation(null);
  };

  const temporarilyDisableClickEvent = () => {
    if (clickListener) {
      // 클릭 이벤트 리스너를 제거하여 클릭 이벤트 비활성화
      window.google.maps.event.removeListener(clickListener);
      setClickDisabled(true);

      // 클릭 이벤트 리스너를 추가하여 클릭 시 알림 띄우기
      clickListener = map.addListener("click", () => {
        window.alert("마커 기능이 제한되어 있습니다.");
      });
    }
  };

  const temporarilyEnableClickEvent = () => {
    if (clickDisabled) {
      setMarker(null);
      setMaxMarkersAlert(false);

      clickListener = map.addListener("click", (event) => {
        const clickedLatLng = event.latLng.toJSON();
        setClickedLocation(clickedLatLng);

        const newMarker = new window.google.maps.Marker({
          position: clickedLatLng,
          map: map,
          title: "선택한 위치",
        });
        setMarker(newMarker);
        setMarkers([newMarker]);
      });

      setClickDisabled(false);
    }
  };

  return (
    <>
      {/* {autocomplete && (
        <Autocomplete>
          <Input
            type="text"
            placeholder="주소"
            onChange={handleInputChange}
            value={selectedPlace ? selectedPlace : ""}
          />
        </Autocomplete>
      )} */}
      <GMapContainer id="map">
        {map && (
          <LoadScript googleMapsApiKey={googleMapApiKey}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={20}
            >
              {marker && (
                <Marker
                  position={marker.getPosition().toJSON()}
                  title="선택한 위치"
                />
              )}
            </GoogleMap>
          </LoadScript>
        )}
      </GMapContainer>

      {clickedLocation && (
        <div>
          <p>선택한 위치:</p>
          <p>위도: {clickedLocation.lat.toFixed(6)}</p>
          <p>경도: {clickedLocation.lng.toFixed(6)}</p>
        </div>
      )}
      <div>
        <p>현재 지도 중심 위치:</p>
        <p>위도: {center.lat.toFixed(6)}</p>
        <p>경도: {center.lng.toFixed(6)}</p>
      </div>
      <LeftDiv>
        <ClearMarkersButton3 onClick={clearAllMarkers}>
          마커 제거
        </ClearMarkersButton3>
        <ClearMarkersButton onClick={temporarilyDisableClickEvent}>
          클릭 이벤트 일시 비활성화
        </ClearMarkersButton>
        <ClearMarkersButton2 onClick={temporarilyEnableClickEvent}>
          클릭 이벤트 다시 활성화
        </ClearMarkersButton2>
      </LeftDiv>
    </>
  );
}

export default CustomGMap;
