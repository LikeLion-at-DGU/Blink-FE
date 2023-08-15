import React from "react";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function LoginNavigates({
  LoginNavigatetitle,
  LoginNavigatecotent,
  buttonText,
  onClick,
  width,
  position,
  top,
  showIcon = false,
  display,
  flexDirection,
  marginTop,
  Top,
  showButton = true,
  showEmail = false,
  to,
}) {
  return (
    <S.LoginNavigateContainer width={width}>
      <S.LoginNavigateText position={position} top={top}>
        <S.LoginNavigateTitle
          display={display}
          flexDirection={flexDirection}
          Top={Top}
        >
          {showIcon && <FontAwesomeIcon icon={faCircleInfo} />}{" "}
          <S.LNT marginTop={marginTop}>{LoginNavigatetitle}</S.LNT>
        </S.LoginNavigateTitle>
        <S.LoginNavigateContent>{LoginNavigatecotent}</S.LoginNavigateContent>
      </S.LoginNavigateText>
      <Link to={to}>
        {showButton && ( // showButton 값에 따라 버튼을 표시하거나 생략
          <S.LoginNavigateButton onClick={onClick}>
            {buttonText}
          </S.LoginNavigateButton>
        )}
      </Link>
      {showEmail && <S.email>@babylikelion@likelion.ac.kr</S.email>}
    </S.LoginNavigateContainer>
  );
}
