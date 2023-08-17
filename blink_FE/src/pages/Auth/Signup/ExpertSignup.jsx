import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { LoginNavigates } from "../../../components/Login/LoginNavigateBar/LoginNavigates";
import { LoginTitleComponent } from "../../../components/Login/LoginForm/LoginTitle";
import { SocialLoginButton } from "../../../components/Login/SocialLogin/socialLogins";
import {
  LoginInputComponent,
  LoginButton,
} from "../../../components/Login/LoginForm/LoginForm";

//image import
import GoogleIcon from "../../../assets/images/google.png";
import KakaoIcon from "../../../assets/images/kakao.png";
import NaverIcon from "../../..//assets/images/naver.png";

import { Line } from "../../../components/Login/LoginLine/Line";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ExpertSignup() {
  const [user, setUser] = useState({
    id: "",
    pw: "",
    nickname: "",
  });
  const [pw, setPw] = useState("");
  const [pwMatchMessage, setPwMatchMessage] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [selectedPath, setSelectedPath] = useState(""); // 선택된 값을 상태로 관리
  const handlePathChange = (e) => {
    setSelectedPath(e.target.value); // 선택된 값을 상태에 업데이트
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user.id:", user.id);
    console.log("user.pw:", user.pw);
    console.log("confirmPw:", confirmPw);
    console.log("user.nickname:", user.nickname);

    e.preventDefault();
    // 모든 칸이 입력되었는가
    if (user.id && user.pw && confirmPw && user.nickname) {
      // 비밀번호 재입력
      if (user.pw !== confirmPw) {
        setPwMatchMessage("비밀번호를 다시 확인해주세요!");
        return;
      }
      try {
        // axios.post("/accounts/signup", user);
        alert("회원가입이 완료되었습니다.");
        navigate("/accounts/signup");
      } catch (error) {
        alert("회원가입에 실패했습니다.");
      }
    } else {
      alert("모든 칸을 입력해주세요 :)");
    }
  };

  // 비밀번호 입력
  const handlePw = (e) => {
    const pw = e.target.value;
    setPw(pw);
    setUser({ ...user, pw: pw });
  };

  // 비밀번호 확인 입력
  const handleConfirmPw = (e) => {
    e.preventDefault();
    const confirmPw = e.target.value;
    setConfirmPw(confirmPw);

    if (confirmPw !== pw) {
      setPwMatchMessage("비밀번호를 다시 확인해주세요!");
    } else {
      setPwMatchMessage("확인 완료되었습니다 :)");
    }
  };

  return (
    <S.SignupWhole>
      <S.SignUpInputContainer onSubmit={handleSubmit}>
        <LoginTitleComponent LogintitleText="Sign up to BLink!" />
        <S.SignUpInputWrapper>
          {/* 아이디 입력 */}
          <LoginInputComponent
            required
            placeholder="사용하실 이메일을 입력해주세요."
            type="email"
            name="id"
            onChange={(e) => setUser({ ...user, id: e.target.value })}
            value={user.id}
            isvaild="true"
            width="30rem"
            height="3rem"
          />
        </S.SignUpInputWrapper>

        {/* 비밀번호 입력 */}
        <S.SignUpInputWrapper>
          <LoginInputComponent
            required
            placeholder="사용하실 비밀번호를 입력해주세요"
            type="password"
            name="pw"
            onChange={handlePw}
            value={user.pw}
            isvaild="true"
            autocomplete="new-password"
            width="30rem"
            height="3rem"
          />
        </S.SignUpInputWrapper>

        {/* 비밀번호 재확인 입력 */}
        <S.SignUpInputWrapper>
          <LoginInputComponent
            required
            placeholder="비밀번호를 다시 한번 입력해주세요"
            type="password"
            name="confirmPw"
            onChange={handleConfirmPw}
            value={confirmPw}
            isvaild={pw === confirmPw ? "true" : "false"}
            autocomplete="new-password"
            width="30rem"
            height="3rem"
          />
          {confirmPw ? (
            pw === confirmPw ? (
              <S.MessageText isvaild="true">확인 완료</S.MessageText>
            ) : (
              <S.MessageText isvaild="false">
                비밀번호가 일치하지 않습니다!
              </S.MessageText>
            )
          ) : (
            ""
          )}
        </S.SignUpInputWrapper>

        {/* 닉네임 입력 */}
        <S.SignUpInputWrapper>
          <LoginInputComponent
            required
            placeholder="사용하실 닉네임을 입력해주세요."
            type="text"
            name="nickname"
            onChange={(e) => setUser({ ...user, nickname: e.target.value })}
            value={user.nickname}
            isvaild="true"
            width="30rem"
            height="3rem"
          />
        </S.SignUpInputWrapper>

        <S.HowSignup>
          <S.HowSignuptext>가입하게 된 경로를 알려주세요!</S.HowSignuptext>
          <S.select required value={selectedPath} onChange={handlePathChange}>
            <option value="">가입경로를 선택해주세요 :) </option>
            <option value="social">유튜브, 인스타그램 등 SNS</option>
            <option value="friend">지인 추천</option>
            <option value="search">검색</option>
            <option value="etc">기타</option>
            {/* 추가적인 선택지들을 여기에 추가할 수 있습니다 */}
          </S.select>
        </S.HowSignup>
        {/* 가입하기 버튼 */}
        <LoginButton type="submit" buttonText="전문가로 회원가입하기" />
      </S.SignUpInputContainer>
      <LoginNavigates
        showIcon={true}
        width="350px"
        position="relative"
        top="0%"
        LoginNavigatetitle="INFO"
        display="flex"
        flexDirection="column"
        marginTop="15px"
        Top="-60px"
        LoginNavigatecotent={
          <>
            전문가 인증을 위해서는 <br />
            양식에 맞춰 내용을 작성해 <br />
            메일로 보내주셔야 합니다. <br />
            <br />
            작성하신 이메일로 양식을 <br />
            보내드리겠습니다.
            <br />
            <br />
            만약 7일 내로 메일이 가지 않거나, <br />
            문의사항이 있는 경우 언제든지 <br />
            <S.UnderlinedText>
              babylikelion@likelion.ac.kr
            </S.UnderlinedText>{" "}
            <br />
            연락 주시길 바랍니다.
          </>
        }
        // handleLoginClick={handleLoginClick}
        showButton={false}
        showEmail={true}
      />
    </S.SignupWhole>
  );
}
