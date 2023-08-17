import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Link, useNavigate } from "react-router-dom";
import { LoginNavigates } from "../../../components/Login/LoginNavigateBar/LoginNavigates";
import { LoginTitleComponent } from "../../../components/Login/LoginForm/LoginTitle";
import { SocialLoginButton } from "../../../components/Login/SocialLogin/socialLogins";
import {
  LoginInputComponent,
  LoginButton,
} from "../../../components/Login/LoginForm/LoginForm";
import axios from "../../../assets/api/axios";

// import ExpertSignup from "../Signup/ExpertSignup";

function Signup() {
  const [user, setUser] = useState({
    id: "",
    pw: "",
    nickname: "",
  });
  const [pw, setPw] = useState("");
  const [pwMatchMessage, setPwMatchMessage] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

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
        <LoginTitleComponent LogintitleText="Sign up to Blink!" />
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
            isvaild={user.pw === confirmPw ? "true" : "false"}
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

        {/* 가입하기 버튼 */}
        <LoginButton
          type="submit"
          onClick={handleLoginClick}
          buttonText="회원가입 완료하기"
        />

        <S.ExpertPageMove>
          <S.Expertint>
            변호사, 손해사정사 등 전문가이신가요?
            <br />
            전문가 회원으로 전용 기능을 누려보세요!
          </S.Expertint>
          <S.Expertclick>
            <Link to="/expertSignup">전문가 가입 {">"}</Link>
          </S.Expertclick>
        </S.ExpertPageMove>
      </S.SignUpInputContainer>
      <LoginNavigates
        LoginNavigatetitle={
          <>
            이미 계정이 <br /> 있으신가요?
          </>
        }
        LoginNavigatecotent={
          <>
            이미 계정이 있다면, <br />
            BLink에 로그인해서 <br />
            누군가의 눈과 귀가
            <br />
            되어주세요! <br />
            그리고 여러분도 도움을
            <br /> 받아보세요 :)
          </>
        }
        // handleLoginClick={handleLoginClick}
        buttonText="로그인하기"
        to="/signin"
      />
    </S.SignupWhole>
  );
}

export default Signup;
