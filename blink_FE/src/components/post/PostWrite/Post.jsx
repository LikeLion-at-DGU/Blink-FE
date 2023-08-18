// Post.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AdrSearch from "./AdrSearch";
import { StyledSearchResult, SearchResultInputs } from "./SearchResult";
import FileUpload from "./FileUpload";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineCloudUpload } from "react-icons/ai";
import HorizonLine from "./Line";
import Calendartwo from "./DatePicker";
import axios from "../../../assets/api/axios";
import instance from "../../../assets/api/axios";

class Question extends React.Component {
  render() {
    return (
      <h3>
        Lets go for a <BiSearchAlt2 />?
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
  border: 1px solid white;
  background-color: gray;
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
  margin-left: 40px;
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

const FloatingCalendarContainer = styled.div`
  position: fixed;
  top: 50%; /* Adjust the vertical position as needed */
  left: 50%; /* Adjust the horizontal position as needed */
  transform: translate(-50%, -50%);
  z-index: 1000; /* Make sure the calendar appears above other content */
  background-color: white;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
`;

export default function Post({ selectedLocation }) {
  //지도에서 선택한 위치 받아오기 위한 useState
  const [selectedLocationState, setSelectedLocationState] = useState(null);
  // post 전달하기용 useState
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showAdrSearch, setShowAdrSearch] = useState(false);
  const [addressInfo, setAddressInfo] = useState({
    postcode: "",
    address: "",
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isReportChecked, setIsReportChecked] = useState(true);
  const [isLookForChecked, setIsLookForChecked] = useState(false);

  useEffect(() => {
    setSelectedLocationState(selectedLocation);
  }, [selectedLocation]);

  const handleLocationUpdate = (location) => {
    setSelectedLocation(location); // 클릭한 위치 정보 업데이트
  };

  const renderSelectedLocationInfo = (selectedLocation) => {
    if (selectedLocation) {
      console.log(selectedLocation);
      return (
        <div>
          <p>선택한 위치 정보:</p>
          <p>위도: {selectedLocation.lat.toFixed(6)}</p>
          <p>경도: {selectedLocation.lng.toFixed(6)}</p>
        </div>
      );
    } else {
      return <p>선택한 위치가 없습니다.</p>;
    }
  };

  const handleRegisterClick = async () => {
    console.log(selectedDate);
    console.log(category);
    const postData = {
      title: title,
      filmed_at: selectedDate
        ? Math.floor(new Date(selectedDate).getTime() / 1000)
        : null,
      category: category,
      jebo_bool: isReportChecked,
      lat: selectedLocation ? selectedLocation.lat : null,
      lng: selectedLocation ? selectedLocation.lng : null,
      location: addressInfo.address,
      content: content,
      media: uploadedFiles,
    };

    try {
      const response = await instance.post("/api/mainposts", postData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // 헤더에 토큰 추가
        },
      });

      if (response.status === 201) {
        console.log("Post request successful:", response.data);
        alert("게시글이 작성되었습니다.");
      }
    } catch (error) {
      console.error("Post error:", error);
      console.error("Server response:", error.response.data);
    }
  };

  const handleAddressSearchClick = () => {
    console.log("handleAddressSearchClick is triggered");
    setShowAdrSearch(true);
  };

  const toggleAdrSearch = () => {
    setShowAdrSearch(!showAdrSearch);
    setShowDatePicker(false);
  };

  const handleDatePickerSelect = (date) => {
    const formattedDate = convertToYYYYMMDD(date);
    setSelectedDate(formattedDate); // 변환된 형식으로 날짜 업데이트
    setShowDatePicker(false); // Hide the date picker
  };

  const handleComplete = (data) => {
    const fullAddress = `${data.zonecode} ${
      data.roadAddress || data.jibunAddress
    } ${data.userSelectedType === "R" ? data.bname || data.buildingName : ""}`;
    const updatedAddressInfo = {
      postcode: data.zonecode,
      address: data.roadAddress || data.jibunAddress,
      detailAddress: "",
      extraAddress:
        data.userSelectedType === "R" ? data.bname || data.buildingName : "",
      location: fullAddress, // 여기에 합쳐진 주소 정보를 저장
    };

    setAddressInfo(updatedAddressInfo);
    setShowAdrSearch(false);
  };

  const handleDetailAddressChange = (e) => {
    const detail = e.target.value;
    const fullAddress = `${addressInfo.postcode} ${addressInfo.address} ${detail} ${addressInfo.extraAddress}`;

    setAddressInfo({
      ...addressInfo,
      detailAddress: detail,
      location: fullAddress, // 여기에 합쳐진 주소 정보를 저장
    });
  };

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

  const handleReportCheckboxChange = () => {
    setIsReportChecked(!isReportChecked);
    setIsLookForChecked(false);
  };

  const handleLookForCheckboxChange = () => {
    setIsLookForChecked(!isLookForChecked);
    setIsReportChecked(false);
  };

  const handleDatePickerClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  function convertToYYYYMMDD(dateString) {
    const parts = dateString.split("/");
    const newDate = `${parts[2]}${parts[0].padStart(2, "0")}${parts[1].padStart(
      2,
      "0"
    )}`;
    return newDate;
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}${month}${day}`; // 점(.)을 제거하여 형식 변경
  }

  return (
    <Outer>
      <CheckDisplay>
        <Check onClick={handleReportCheckboxChange}>
          제보해요
          <Checkbox type="checkbox" checked={isReportChecked} />
        </Check>
        <Check onClick={handleLookForCheckboxChange}>
          찾아요
          <Checkbox type="checkbox" checked={isLookForChecked} />
        </Check>
      </CheckDisplay>
      <PostContainer>
        <TopRow>
          <Search
            onClick={toggleAdrSearch}
            selectedAddress={addressInfo.address}
          >
            {addressInfo.address
              ? addressInfo.address
              : "지역명, 도로명, 주소를 입력해주세요."}
            <BiSearchAlt2 />
          </Search>

          <Search2 onClick={handleDatePickerClick}>
            {selectedDate ? formatDate(selectedDate) : "촬영 or 요청 일자"}
            <BiSearchAlt2 />
          </Search2>
        </TopRow>

        <AdrSearchContainer show={showAdrSearch}>
          {showAdrSearch && (
            <AdrSearch
              onUpdateAddress={setAddressInfo}
              showAdrSearch={showAdrSearch}
              setShowAdrSearch={setShowAdrSearch}
            />
          )}
        </AdrSearchContainer>

        {showDatePicker && (
          <FloatingCalendarContainer>
            <Calendartwo
              user="your_user_here"
              onSelectDate={handleDatePickerSelect}
            />
          </FloatingCalendarContainer>
        )}
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
                <TitleInput
                  type="text"
                  placeholder="제목을 입력해주세요."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormRow>
              <FormRow>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="" disabled>
                    카테고리
                  </option>
                  <Option value="교통사고">교통사고</Option>
                  <Option value="도난,절도">도난,절도</Option>
                  <Option value="실종신고">실종신고</Option>
                  <Option value="기타">기타</Option>
                </Select>
              </FormRow>
            </Display>
            <HorizonLine />
            <FormRow>
              <TextArea
                rows="10"
                placeholder="내용을 입력해주세요."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </FormRow>
            {/* 창준 추가 */}
            {renderSelectedLocationInfo(selectedLocation)}
            {selectedLocation && (
              <div>
                <p>선택한 위치 정보:</p>
                <p>위도: {selectedLocation.lat.toFixed(6)}</p>
                <p>경도: {selectedLocation.lng.toFixed(6)}</p>
              </div>
            )}
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
      <RegisterButton onClick={handleRegisterClick}>등록하기</RegisterButton>
    </Outer>
  );
}
