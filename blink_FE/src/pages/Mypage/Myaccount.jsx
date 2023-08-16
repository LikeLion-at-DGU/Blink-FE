import React from "react";

import Mypage from "./component";
import * as S from "./style";

export default function AccountRight() {
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
          <form></form>
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
