import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';

const AdrSearchContainer = styled.div`
  position: fixed;
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%);
  z-index: 1000; /* Higher z-index to ensure it's above other elements */
  background-color: white; /* Set the background color */
  padding: 40px 20px 20px 20px; /* Add padding for spacing */
  border: 2px solid black; /* Add a border */
  border-radius: 10px; /* Rounded corners */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function AddressSearch({ onUpdateAddress, showAdrSearch, setShowAdrSearch }) {
  const [addressInfo, setAddressInfo] = useState({
    postcode: '',
    address: '',
    detailAddress: '',
    extraAddress: '',
  });

  const handleComplete = (data) => {
    const updatedAddressInfo = {
      postcode: data.zonecode,
      address: data.roadAddress || data.jibunAddress,
      detailAddress: '',
      extraAddress: data.userSelectedType === 'R' ? data.bname || data.buildingName : '',
    };
  
    setAddressInfo(updatedAddressInfo); // You can remove this line
    onUpdateAddress(updatedAddressInfo); // Call the callback function
    setShowAdrSearch(false); // Close the AdrSearch window after address selection
  };

  const handleClose = () => {
    setShowAdrSearch(false); // Close the AdrSearch window
  };

  

  return (
    <AdrSearchContainer show={showAdrSearch}>
      <CloseButton onClick={handleClose}>X</CloseButton>
      <DaumPostcode onComplete={handleComplete} />
    </AdrSearchContainer>
  );
}
