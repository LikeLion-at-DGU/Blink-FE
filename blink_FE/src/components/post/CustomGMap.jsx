import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";

const GMapContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1390px;
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

function CustomGMap({ onUpdateLocation }) {
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
  const [loadingFailed, setLoadingFailed] = useState(false);
  const [loading, setLoading] = useState(true);

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const handleMapLoadFailure = () => {
    setLoadingFailed(true);
  };

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapApiKey}&libraries=places`;
      script.async = true;
      script.defer = true;

      // 스크립트 로딩 성공 시
      script.onload = () => {
        initMap();
        initAutocomplete();
        setIsMapError(false); // 에러 상태를 false로 설정
      };

      // 스크립트 로딩 실패 시
      script.onerror = () => {
        setIsMapError(true); // 에러 상태를 true로 설정
      };

      document.head.appendChild(script);
    };

    // 스크립트가 이미 로드되었는지 확인
    if (!window.google) {
      loadGoogleMapsScript();
    } else {
      initMap();
      initAutocomplete();
    }
  }, []);

  const clickListenerRef = useRef(null); // useRef를 이용한 클릭 이벤트 리스너 저장

  const initMap = () => {
    const mapOptions = {
      center: center,
      zoom: 16,
      fullscreenControl: false,
      minZoom: 13,
      maxZoom: 20,
    };
    const newMap = new window.google.maps.Map(
      document.getElementById("map"),
      mapOptions
    );

    // 기존에 등록된 클릭 이벤트 리스너가 있다면 제거
    if (clickListenerRef.current) {
      clickListenerRef.current.remove();
    }

    // 새로운 클릭 이벤트 리스너 생성 및 저장
    const newClickListener = newMap.addListener("click", (event) => {
      if (!clickDisabled) {
        const clickedLatLng = event.latLng.toJSON();
        setClickedLocation(clickedLatLng);
        onUpdateLocation(clickedLatLng);

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

    // 클릭 이벤트 리스너 저장
    clickListenerRef.current = newClickListener;

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

  const handleMapClick = (event) => {
    // console.log(event.latLng.toJSON());
    const clickedLatLng = event.latLng.toJSON();
    setClickedLocation(clickedLatLng);

    if (marker) {
      marker.setMap(null); // Remove the previous marker
    }

    const newMarker = new window.google.maps.Marker({
      position: clickedLatLng,
      map: map,
      title: "선택한 위치",
    });
    setMarker(newMarker);
    setMarkers([...markers, newMarker]);

    // onUpdateLocation(clickedLatLng); // 위치 정보 업데이트해서 부모로 보내기
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
      <GMapContainer id="map" onClick={handleMapClick}>
        {/* {map && ( */}
        {!loading && (
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
      {/* 이제 맵에 lat, lng 나타낼 필요 없으니까 지움.
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
      </div> */}
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
