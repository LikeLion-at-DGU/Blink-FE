import React, { useState, useEffect } from "react"; // Import useState and useEffect
import * as S from "./style";
import {
  faRightFromBracket,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../assets/api/axios";
import { Link } from "react-router-dom";

export default function Mypage() {
  const [name, setName] = useState(""); // Initialize with an appropriate value

  useEffect(() => {
    const apiUrl = "/api/mypage/profile";

    async function fetchUserProfile() {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(response);
        const data = response.data;
        const profileImage = data.profile_image;
        const nickname = data.nickname;

        console.log("프로필 이미지:", profileImage);
        console.log("닉네임:", nickname);

        // Update the state if needed
        setName(nickname);
      } catch (error) {
        console.error("API 호출 에러:", error);
      }
    }

    fetchUserProfile();
  }, []);

  return (
    <S.Outline>
      <p style={{ fontSize: "40px", fontWeight: "600", marginTop: "0px" }}>
        프로필
      </p>
      <S.ImgBox src="" alt="프로필 이미지" />
      <S.Idp>{name}</S.Idp>
      <S.Settingp style={{ marginTop: "100px" }}>
        <Link to="/myaccount">
          내 계정 관리 <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </S.Settingp>
      <S.Settingp>
        <Link to="/myactive">
          내 활동 관리 <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </S.Settingp>

      <S.Logoutp>
        <FontAwesomeIcon
          icon={faRightFromBracket}
          style={{ marginRight: "20px" }}
        />
        로그아웃
      </S.Logoutp>
    </S.Outline>
  );
}
