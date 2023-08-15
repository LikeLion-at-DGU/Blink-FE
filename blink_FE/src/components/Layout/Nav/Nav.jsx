import React, { useRef, useEffect, useState } from "react";
import * as S from "./Styled";
import LogoIcon from "../../../assets/images/Logo.png";
import HorizonLine from "../../Layout/Line";
import { BsChat, BsBell, BsPersonVcard } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { css } from "styled-components";
import { PiUserCircleDuotone } from "react-icons/pi";
import DefaultProfileImage from "../../../assets/images/user.png";
import { Link } from "react-router-dom";

function Nav() {
  //프로필 이미지 불러오기
  const [profileImageUrl, setProfileImageUrl] = useState(null);

  // defaultProfileImageUrl 설정
  const defaultProfileImageUrl = (
    <img
      src={DefaultProfileImage}
      alt="Default Profile"
      style={{ width: "70px", height: "60px" }} // 원하는 크기로 설정
    />
  );

  // useEffect(() => {
  //   fetchUserProfileImage(); // 이미지 가져오는 함수 호출
  // }, []);

  // const fetchUserProfileImage = async () => {
  //   try {
  //     const response = await fetch(`/api/profile-image/${userId}`); // userId는 변경필요
  //     if (response.ok) {
  //       const imageUrl = response.url;
  //       setProfileImageUrl(imageUrl); // 프로필 이미지 URL 설정
  //     } else {
  //       console.error("프로필 이미지를 불러오는데 실패했습니다.");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching profile image:", error);
  //   }
  // };

  return (
    <S.NavContainer>
      <Link to="/home">
        <S.NavLogo>
          <S.NavLogoImage src={LogoIcon} alt="Logo" />
        </S.NavLogo>
      </Link>
      <S.NavIcon>
        <CiSearch className="search" />
        <p>Search</p>
      </S.NavIcon>

      <HorizonLine width="50%" marginTop="0.5rem" opacity="30%" />
      <S.NavIcon>
        <BsChat className="chat" />
        <p>Comuunity</p>
      </S.NavIcon>
      <HorizonLine width="50%" marginTop="0.8rem" opacity="30%" />
      <S.NavIcon>
        <BsBell className="bell" />
        <p>Notice</p>
      </S.NavIcon>
      <HorizonLine width="50%" marginTop="0.8rem" opacity="30%" />
      <Link to="/expertList">
        <S.NavIcon>
          <BsPersonVcard className="Person" />
          <p>Expert</p>
        </S.NavIcon>
      </Link>
      <Link to="/signin">
        <S.Profile>
          {profileImageUrl && (
            <img
              className="profile-image"
              src={profileImageUrl}
              alt="Profile"
            />
          )}
          {!profileImageUrl && defaultProfileImageUrl}
        </S.Profile>
      </Link>
    </S.NavContainer>
  );
}

export default Nav;
