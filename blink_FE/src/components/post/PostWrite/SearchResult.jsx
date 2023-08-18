// 도로명 주소 검색 결과 컨포넌트

import React from 'react'; 
import styled from 'styled-components';

const StyledSearchResult = styled.div`
  position: absolute;
  bottom: -50px; /* Adjust the value as needed */
  left: 0;
  width: 100%;
  background-color: white;
  padding: 10px;
`;

const SearchResultInputs = ({ postcode, address, detailAddress, extraAddress, handleDetailAddressChange }) => (
  <div>
    <input type="text" value={postcode} placeholder="postcode" readOnly />
    <input type="text" value={address} placeholder="address" readOnly />
    <input
      type="text"
      value={detailAddress}
      placeholder="detail address"
      onChange={handleDetailAddressChange}
    />
    <input type="text" value={extraAddress} placeholder="Notes" readOnly />
  </div>
);

export { StyledSearchResult, SearchResultInputs };
