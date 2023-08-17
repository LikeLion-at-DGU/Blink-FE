import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginInputComponent,
  LoginButton,
} from "../../../components/Login/LoginForm/LoginForm";
import { SigninForm, SocialLogin, SigninWrapper } from "./style";
import { LoginTitleComponent } from "../../../components/Login/LoginForm/LoginTitle";
import { LoginNavigates } from "../../../components/Login/LoginNavigateBar/LoginNavigates";
import { Link } from "react-router-dom";
import * as S from "./style";
import axios from "../../../assets/api/axios";

//style import

function Signin() {
  const [loginData, setLoginData] = useState({
    id: "",
    pw: "",
  });

  const [pw, setPw] = useState("");
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState("");

  //유효성 검증 위함
  const [isValid, setIsValid] = useState(false);

  const isValidEmail = (email) => {
    // 정규 표현식을 사용하여 이메일 형식 검사
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 모든 필수 칸이 입력되었는지 확인
    if (loginData.id && loginData.pw) {
      if (!isValidEmail(loginData.id)) {
        alert("올바른 이메일 형식을 입력해주세요.");
        return;
      }
    }
  };
  // 비밀번호 확인 입력
  const handlePw = (e) => {
    const pw = e.target.value;
    setPw(pw);
    setLoginData({ ...loginData, pw: pw });
  };

  const handleLoginClick = async () => {
    if (loginData.id === "") {
      alert("이메일을 입력해주세요.");
      return;
    }

    if (loginData.pw === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    if (!isValidEmail(loginData.id)) {
      alert("올바른 이메일 형식을 입력해주세요.");
      return;
    }
    console.log("로그인 정보:", loginData);

    // 여기에 로그인 처리 로직을 작성합니다.
    try {
      // const formData = {
      //   email: loginData.id,
      //   password: loginData.pw,
      // };

      // console.log(formData);

      const response = await axios.post("/api/auth/login", {
        // 백엔드로 보낼 데이터
        email: loginData.id,
        password: loginData.pw,
      });
      // accessToken 받아오기

      const accessToken = response.data.token.access;
      console.log(response);
      const nickname = response.data.user.nickname;

      console.log(response.data.token);

      // 로그인 성공 시
      setUserInfo({
        nickname: nickname,
        accessToken: accessToken,

        // 저장 추가
      });

      // 로컬스토리지에 저장
      // localStorage.setItem(
      //   "userInfo",
      //   JSON.stringify({
      //     nickname: response.data.user.nickname,
      //     email: response.data.user.email,
      //     accessToken: response.data.user.accessToken,
      //   })
      // );

      localStorage.setItem("token", response.data.token.access);

      if (response.status === 200) {
        // 로그인 성공
        alert("로그인이 완료되었습니다.");
        navigate("/home");
      } else {
        // 로그인 실패
        alert("로그인에 실패했습니다.");
      }
    } catch (error) {
      // 예외 처리
      console.error("로그인 오류:", error);
      alert("로그인에 실패했습니다.");
    }
  };

  return (
    // <SigninWhole>
    <SigninWrapper>
      <LoginNavigates
        LoginNavigatetitle={
          <>
            블랙박스로 <br />
            세상을 Link하는
            <br />
            BLink입니다
          </>
        }
        LoginNavigatecotent={
          <>
            BLink에 처음이신가요? <br />
            여러분의 블랙박스를 <br />
            공유하고 공유받아보세요!
          </>
        }
        handleLoginClick={handleLoginClick}
        buttonText="회원가입하기"
        width="200px"
        to="/signup"
      />

      <S.SigninForm onSubmit={handleSubmit}>
        <LoginTitleComponent LogintitleText="Login to Blink!" />
        <S.SignInInputWrapper>
          <LoginInputComponent
            required
            type="email"
            onChange={(e) => setLoginData({ ...loginData, id: e.target.value })}
            placeholder="이메일을 입력하세요"
            isvaild="true"
            value={loginData.id}
            name="id"
          />
        </S.SignInInputWrapper>

        <S.SignInInputWrapper>
          <LoginInputComponent
            type="password"
            onChange={handlePw}
            placeholder="비밀번호를 입력하세요"
            isvaild="true"
            value={loginData.pw}
            name="pw"
            handleLoginClick={handleLoginClick}
            required
          />
        </S.SignInInputWrapper>

        <LoginButton
          type="submit"
          onClick={handleLoginClick}
          buttonText="로그인"
        />
        {/* <LoginButton
          type="submit"
          onClick={console.log(loginData.id, loginData.pw)}
          buttonText="로그인"
        /> */}
      </S.SigninForm>
    </SigninWrapper>
    // </SigninWhole>
  );
}

export default Signin;
