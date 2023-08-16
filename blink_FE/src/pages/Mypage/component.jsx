import React from "react";
import * as S from "./style";
import {
  faRightFromBracket,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Mypage() {
  return (
    <S.Outline>
      <p style={{ fontSize: "40px", fontWeight: "600", marginTop: "0px" }}>
        프로필
      </p>
      <S.ImgBox />
      <S.Idp>여기가 아이디</S.Idp>
      <S.Settingp style={{ marginTop: "100px" }}>
        내 계정 관리 <FontAwesomeIcon icon={faChevronRight} />
      </S.Settingp>
      <S.Settingp>
        내 활동 관리 <FontAwesomeIcon icon={faChevronRight} />
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
