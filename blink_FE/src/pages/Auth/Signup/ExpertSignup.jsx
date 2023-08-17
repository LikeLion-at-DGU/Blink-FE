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
import axios from "../../../assets/api/axios";

export default function ExpertSignup() {
  const [user, setUser] = useState({
    id: "",
    pw: "",
    nickname: "",
  });
  const [pw, setPw] = useState("");
  const [pwMatchMessage, setPwMatchMessage] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [path, setPath] = useState(""); // 가입 경로를 관리하는 state

  const handlePathChange = (e) => {
    setPath(e.target.value);
  };

  const navigate = useNavigate();

  //유효성 검증 위함
  const [isValid, setIsValid] = useState(false);

  const isValidEmail = (email) => {
    // 정규 표현식을 사용하여 이메일 형식 검사
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // 모든 칸이 입력되었는가
    if (user.id && user.pw && confirmPw && user.nickname) {
      // 비밀번호 재입력
      if (user.pw !== confirmPw) {
        setPwMatchMessage("비밀번호를 다시 확인해주세요!");
        return;
      }
    }
  };
  const handleLoginClick = async () => {
    if (user.id === "") {
      alert("이메일을 입력해주세요.");
      return;
    }

    if (user.pw === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    if (confirmPw === "") {
      alert("비밀번호를 다시 한번 입력해주세요.");
      return;
    }

    if (user.nickname === "") {
      alert("닉네임을 입력해주세요.");
      return;
    }

    if (!isValidEmail(user.id)) {
      alert("올바른 이메일 형식을 입력해주세요.");
      return;
    }

    try {
      const response = await axios.post("/api/auth/signup", {
        // 백엔드로 보낼 데이터
        nickname: user.nickname,
        password: user.pw,
        email: user.id,
      }); // Replace "/accounts/signup" with your actual API endpoint

      // console.log(response);
      // // accessToken 받아오기
      // const accessToken = response.data.token.access;
      // const refreshToken = response.data.token.refresh;
      // console.log(response);
      // const nickname = response.data.user.nickname;

      // // 로그인 성공 시
      // setUserInfo({
      //   email: email,
      //   nickname: nickname,
      //   accessToken: accessToken,
      //   refreshToken: refreshToken, // 저장 추가
      // });

      // // 로컬스토리지에 저장
      // localStorage.setItem(
      //   "userInfo",
      //   JSON.stringify({
      //     email: email,
      //     nickname: nickname,
      //     accessToken: accessToken,
      //     refreshToken: refreshToken, // 저장 추가
      //   })
      // );

      if (response.status === 201) {
        //회원가입 성공
        alert("회원가입이 완료되었습니다.");
        navigate("/signin");
      } else {
        alert("회원가입에 실패했습니다.");
      }
    } catch (error) {
      console.error("회원가입 오류:", error);
      alert("회원가입에 실패했습니다.");
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
            handleLoginClick={handleLoginClick}
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
            handleLoginClick={handleLoginClick}
            isvaild="true"
            width="30rem"
            height="3rem"
          />
        </S.SignUpInputWrapper>

        <S.HowSignup>
          <S.HowSignuptext>가입하게 된 경로를 알려주세요!</S.HowSignuptext>
          <S.select required value={path} onChange={handlePathChange}>
            <option value="">가입경로를 선택해주세요 :) </option>
            <option value="social">유튜브, 인스타그램 등 SNS</option>
            <option value="friend">지인 추천</option>
            <option value="search">검색</option>
            <option value="etc">기타</option>
            {/* 추가적인 선택지들을 여기에 추가할 수 있습니다 */}
          </S.select>
        </S.HowSignup>
        {/* 가입하기 버튼 */}
        <LoginButton
          type="submit"
          onClick={handleLoginClick}
          buttonText="전문가로 회원가입하기"
          to="/signin"
        />
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
