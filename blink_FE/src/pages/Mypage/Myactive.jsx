import React, { useState, useEffect } from "react"; // Import useState and useEffect

import Mypage from "./component";
import * as S from "./style";
import axios from "../../assets/api/axios";

export default function ActiveRight() {
  useEffect(() => {
    const apiUrl = "/api/mypage/activities";

    async function fetchUserActive() {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(response);

        const data = response.data;
        console.log(data);
      } catch (error) {
        console.error("API 호출 에러:", error);
      }
    }
    fetchUserActive();
  }, []);

  return (
    <S.Background>
      <p style={{ fontSize: "35px", fontWeight: "600", margin: "0px" }}>
        내 활동 관리
      </p>
      <p style={{ fontSize: "20px", color: "#818181", marginTop: "10px" }}>
        내 제보 및 요청, 커뮤니티 글과 댓글을 관리할 수 있습니다.
      </p>
      <S.Settingp>내 제보 모아보기</S.Settingp>
      <S.Listbar></S.Listbar>
      <S.Settingp>내 요청 모아보기</S.Settingp>
      <S.Listbar></S.Listbar>
      <S.Settingp>내가 쓴 글 모아보기</S.Settingp>
      <S.Listbar></S.Listbar>
      <S.Settingp>내가 쓴 댓글 모아보기</S.Settingp>
      <S.Listbar></S.Listbar>
    </S.Background>
  );
}

export function Myactive() {
  return (
    <div style={{ display: "flex" }}>
      <Mypage></Mypage>
      <ActiveRight></ActiveRight>
    </div>
  );
}
