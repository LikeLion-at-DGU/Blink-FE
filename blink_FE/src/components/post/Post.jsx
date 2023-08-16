//Post.jsx
// #1 메인 - 글쓰기 페이지 총괄

import React, { useState } from "react";
import styled from "styled-components";
import AdrSearch from "./AdrSearch";
import { StyledSearchResult, SearchResultInputs } from "./SearchResult";
import Calendartwo from "./DatePicker";
import FileUpload from "./FileUpload";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineCloudUpload } from "react-icons/ai";
import HorizonLine from "./Line";

class Question extends React.Component {
  render() {
    return (
      <h3>
        {" "}
        Lets go for a <BiSearchAlt2 />?{" "}
      </h3>
    );
  }
}

const Outer = styled.div`
  height: 1080px;
  width: 1150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px;
`;

const CheckDisplay = styled.div`
  width: 1150px;
  margin-left: 120px;
  margin-bottom: 20px;
  display: flex;
`;

const Check = styled.div`
  height: 35px;
  width: 164px;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-right: 20px;
`;

const Checkbox = styled.input`
  width: 24px; // Set the width
  height: 24px; // Set the height
`;

const AdrSearchContainer = styled.div`
  position: fixed;
  top: 5720px;
  left: 250px;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  border-radius: 10px;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const PostContainer = styled.div`
  width: 1030px;
  height: 806px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-radius: 20px;
`;

const TopRow = styled.div`
  display: flex;
  width: 958px;
  justify-content: space-between;
`;

const Search = styled.div`
  height: 56px;
  width: 660px;
  border: 2px solid black;
  border-radius: 10px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  align-items: center;
  font-size: 27px;
`;

const Lsquare = styled.div`
  margin-bottom: 30px;
`;

const SquareBox = styled.div`
  width: 958px;
  height: 371px;
  border-radius: 10px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

const Display = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SquareBox2 = styled(SquareBox)`
  height: 250px;
  align-items: center;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Select = styled.select`
  width: 151px;
  height: 40px;
  padding: 5px;
  border: 2px solid black;
  border-radius: 10px;
  font-size: 21px;
  text-align: center;
`;

const Option = styled.option`
  background-color: gray; /* Set background color */
  color: white; /* Set text color */
  height: 40px; /* Set height */
`;

const TitleInput = styled.input`
  width: 600px;
  height: 50px;
  font-size: 27px;
  font-weight: bold;
  padding: 0 0 0 10px;
  border: none;
`;

const Search2 = styled(Search)`
  width: 295px;
  height: 56px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  font-size: 27px;
  cursor: pointer;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 220px;
  padding: 10px;
  border: none;
  resize: none;
  font-size: 27px;
`;


const Thumbnail = styled.img`
  max-width: 250px;
  max-height: 150px;
  object-fit: contain;
`;

const ThumbnailsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const CustomCloudUploadIcon = styled(AiOutlineCloudUpload)`
  font-size: 40px;
  margin-left:40px;
`;

const UploadText = styled.div`
  margin: -40px; /* Adjust the margin as needed */
`;

const RegisterButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #1b2130;
  color: white;
  border-radius: 15px;
  cursor: pointer;
  font-size: 28px;
  font-weight: 500;
  box-shadow: 3px 3px 3px gray;
`;

export default function Post() {

  const handleAddressSearchClick = () => {
    console.log("handleAddressSearchClick is triggered");
    setShowAdrSearch(true);
  };

  const [showAdrSearch, setShowAdrSearch] = useState(false);
  const [addressInfo, setAddressInfo] = useState({
    postcode: "",
    address: "",
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState("");

  const toggleAdrSearch = () => {
    setShowAdrSearch(!showAdrSearch);
    setShowDatePicker(false); // Hide the date picker when toggling AdrSearch
  };

  const handleDatePickerSelect = (date) => {
    setSelectedDate(date); // Update the selected date
    setShowDatePicker(false); // Hide the date picker
  };

  const handleComplete = (data) => {
    const updatedAddressInfo = {
      postcode: data.zonecode,
      address: data.roadAddress || data.jibunAddress,
      detailAddress: "",
      extraAddress:
        data.userSelectedType === "R" ? data.bname || data.buildingName : "",
    };

    setAddressInfo(updatedAddressInfo);
    onUpdateAddress(updatedAddressInfo);
    setSelectedAddress(updatedAddressInfo.address); // Update selected address
    setShowAdrSearch(false); // Close the AdrSearch window after address selection
  };

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (files) => {
    if (files.length > 2) {
      alert("You can only upload up to 2 files.");
      return;
    }

    setUploadedFiles(files);
  };
  const handleRemoveThumbnail = (index) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles.splice(index, 1);
    setUploadedFiles(updatedFiles);
  };

  const [isReportChecked, setIsReportChecked] = useState(true);
  const [isLookForChecked, setIsLookForChecked] = useState(false);
  
  const handleReportCheckboxChange = () => {
    setIsReportChecked(!isReportChecked);
    setIsLookForChecked(false);
  };

  const handleLookForCheckboxChange = () => {
    setIsLookForChecked(!isLookForChecked);
    setIsReportChecked(false);
  };

  return (
    <Outer>
      <CheckDisplay>
        <Check onClick={handleReportCheckboxChange}>
          제보해요 &nbsp;
          <Checkbox type="checkbox" checked={isReportChecked} />
        </Check>
        <Check onClick={handleLookForCheckboxChange}>
          찾아요 &nbsp;&nbsp;
          <Checkbox type="checkbox" checked={isLookForChecked} />
        </Check>
      </CheckDisplay>
      <PostContainer>
        <TopRow>
          <Search
            onClick={toggleAdrSearch}
            selectedAddress={addressInfo.address} // Pass the selected address
          >
            {addressInfo.address
              ? addressInfo.address
              : "지역명, 도로명, 주소를 입력해주세요."}
            <BiSearchAlt2 />
          </Search>

          <Search2 onClick={() => setShowDatePicker(!showDatePicker)}>
            {selectedDate
              ? selectedDate.toLocaleDateString()
              : "촬영 or 요청일자"}
            <BiSearchAlt2 />
          </Search2>
        </TopRow>

        <AdrSearchContainer show={showAdrSearch || showDatePicker}>
          {showAdrSearch ? (
            <AdrSearch
              onUpdateAddress={setAddressInfo}
              showAdrSearch={showAdrSearch}
              setShowAdrSearch={setShowAdrSearch} // Pass the function here
            />
          ) : (
            showDatePicker && (
              <Calendartwo onSelectDate={handleDatePickerSelect} />
            )
          )}
        </AdrSearchContainer>

        {showAdrSearch && (
          <StyledSearchResult>
            <SearchResultInputs
              postcode={addressInfo.postcode}
              address={addressInfo.address}
              detailAddress={addressInfo.detailAddress}
              extraAddress={addressInfo.extraAddress}
              handleDetailAddressChange={(e) =>
                setAddressInfo({
                  ...addressInfo,
                  detailAddress: e.target.value,
                })
              }
            />
          </StyledSearchResult>
        )}
        <Lsquare>
          <SquareBox>
            <Display>
              <FormRow>
                <TitleInput type="text" placeholder="제목을 입력해주세요." />
              </FormRow>
              <FormRow>
                <Select>
                  <option value="" disabled selected hidden>
                    카테고리
                  </option>
                  <Option value="Traffic Accident">교통사고</Option>
                  <Option value="Theft">도난, 절도</Option>
                  <Option value="Report Missing">실종 신고</Option>
                  <Option value="Other">기타</Option>
                </Select>
              </FormRow>
            </Display>
            <HorizonLine />
            <FormRow>
              <TextArea rows="10" placeholder="내용을 입력해주세요." />
            </FormRow>
          </SquareBox>
        </Lsquare>

        <SquareBox2>
          {uploadedFiles.length === 0 && (
            <>
              <CustomCloudUploadIcon />
              <UploadText>
                .mov, .mp4 .png, .jpg, .jpeg, .pdf 파일을 업로드해주세요.
                <br />
                <br />
                최대 2장까지 업로드할 수 있습니다.
              </UploadText>
            </>
          )}
          {/* Display the FileUpload component */}
          <FileUpload
            onFileUpload={handleFileUpload}
            maxFiles={2}
            ThumbnailComponent={Thumbnail}
            handleRemoveThumbnail={handleRemoveThumbnail}
            uploadedFiles={uploadedFiles}
          />
          <br />
        </SquareBox2>
      </PostContainer>
      <RegisterButton>등록하기</RegisterButton>
    </Outer>
  );
}
