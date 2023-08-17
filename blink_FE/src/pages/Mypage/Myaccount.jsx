import React from "react";
import Mypage from "./component";
import * as S from "./style";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AccountRight() {
  const [nickname, setNickname] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  const apiUrl = "/api/mypage/profile";

  const handleProfileUpdate = async () => {
    try {
      const formData = new FormData();

      formData.append("nickname", nickname);
      formData.append("old_password", oldPassword);
      formData.append("new_password", newPassword);
      formData.append("new_password_confirm", newPasswordConfirm);

      const response = await axios.put(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error("API 호출 에러:", error);
    }
  };

  return (
    <S.AccountBackground>
      <p style={{ fontSize: "35px", fontWeight: "600", margin: "0px" }}>
        내 계정 관리
      </p>
      <p style={{ fontSize: "20px", color: "#818181", marginTop: "10px" }}>
        대표 프로필과 별명을 수정할 수 있습니다.
      </p>
      <S.Textbox>
        <p style={{ fontSize: "25px" }}>프로필 사진 변경</p>
        <S.ImgBox></S.ImgBox>
        <S.Middle>
          <form action="/upload" method="post" enctype="multipart/form-data">
            <input type="file" id="photo" name="photo" />
          </form>
        </S.Middle>
        <S.Middle>
          <S.Explain>닉네임</S.Explain>
          <S.Inputt
            type="text"
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
          />
        </S.Middle>
        <S.Middle>
          <S.Explain>현재 비밀번호</S.Explain>
          <S.Inputt
            type="text"
            value={oldPassword}
            onChange={(event) => setOldPassword(event.target.value)}
          />
        </S.Middle>
        <S.Middle>
          <S.Explain>변경할 비밀번호</S.Explain>
          <S.Inputt
            type="text"
            value={newPassword}
            onChange={(event) => setnewPassword(event.target.value)}
          />
        </S.Middle>

        <S.Middle>
          <S.Explain>비밀번호 확인</S.Explain>
          <S.Inputt
            type="text"
            value={newPasswordConfirm}
            onChange={(event) => setnewPasswordConfirm(event.target.value)}
          />
        </S.Middle>
      </S.Textbox>
      <button onClick={handleProfileUpdate}>변경 사항 저장</button>
    </S.AccountBackground>
  );
}

export function Myaccount() {
  return (
    <div style={{ display: "flex" }}>
      <Mypage></Mypage>
      <AccountRight></AccountRight>
    </div>
  );
}
