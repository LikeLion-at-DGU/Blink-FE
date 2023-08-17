import React from "react";
import * as S from "./style";
import {
  faRightFromBracket,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../assets/api/axios";
import { useNavigate } from "react-router-dom";

export default function Mypage() {
  const apiUrl = "/api/mypage/profile";
  const navigate = useNavigate();

  axios
    .get(apiUrl)
    .then((response) => {
      const data = response.data;
      const profileImage = data.profile_image;
      const nickname = data.nickname;
      console.log("프로필 이미지:", profileImage);
      console.log("닉네임:", nickname);
    })
    .catch((error) => {
      console.error("API 호출 에러:", error);
    });

  const handleLogout = () => {
    // 로그아웃 API 요청
    axios
      .post("/api/dj-rest-auth/logout/")
      .then((response) => {
        // 만약 로그아웃이 성공적으로 이루어진다면, 로컬 스토리지에서 토큰을 제거하고
        // 홈으로 리디렉션
        localStorage.removeItem("token");
        navigate("/home");
      })
      .catch((error) => {
        console.error("Logout failed", error);
      });
  };
  return (
    <S.Outline>
      <p style={{ fontSize: "40px", fontWeight: "600", marginTop: "0px" }}>
        프로필
      </p>

      <S.ImgBox src="" alt="프로필 이미지" />
      <S.Idp> {}</S.Idp>
      <S.Settingp style={{ marginTop: "100px" }}>
        내 계정 관리 <FontAwesomeIcon icon={faChevronRight} />
      </S.Settingp>
      <S.Settingp>
        내 활동 관리 <FontAwesomeIcon icon={faChevronRight} />
      </S.Settingp>
      <S.Logoutp onClick={handleLogout}>
        <FontAwesomeIcon
          icon={faRightFromBracket}
          style={{ marginRight: "20px" }}
        />
        로그아웃
      </S.Logoutp>
    </S.Outline>
  );
}
