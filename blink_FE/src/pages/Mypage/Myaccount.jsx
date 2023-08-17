import React from "react";

import Mypage from "./component";
import * as S from "./style";
import { useEffect, useState } from "react";

export default function AccountRight() {
  const [profileImage, setProfileImage] = useState(null);
  const [nickname, setNickname] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleImageUpload = (event) => {
    const uploadedImage = event.target.files[0];
    setProfileImage(uploadedImage);
  };

  const handleImageDelete = () => {
    setProfileImage(null);
  };

  const handleSubmit = () => {};

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
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
          />
        </S.Middle>
        <S.Middle>
          <S.Explain>변경할 비밀번호</S.Explain>
          <S.Inputt
            type="text"
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
          />
        </S.Middle>

        <S.Middle>
          <S.Explain>비밀번호 확인</S.Explain>
          <S.Inputt
            type="text"
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
          />
        </S.Middle>
      </S.Textbox>
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
