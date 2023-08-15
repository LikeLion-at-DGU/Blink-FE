import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Logo from "../../assets/images/NuLogo.png";
import Locationpin from "../../assets/images/location.png";
import * as S from "./style";
// Define keyframes animation
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background-color: ${({ bgColor }) => bgColor};
  opacity: ${({ opacity }) => opacity};
  color: ${({ textColor }) => textColor};
  animation: ${({ isFadingIn }) => (isFadingIn ? fadeIn : fadeOut)} 2s
    ease-in-out;
`;

export const LogoImage = styled.img`
  width: 20rem;
  height: 20rem;
`;

export const LogoText = styled.div`
  margin-top: 5rem;
  line-height: 2.5rem;
  text-align: center;
  font-family: "GangwonEduPowerExtraBoldA";
`;

export const LogoBlink = styled.div`
  margin-top: 1rem;
  line-height: 2.5rem;
  text-align: center;
  font-size: 3rem;
  font-weight: bolder;
`;

export const LocationImg = styled.img`
  width: 20rem;
  height: 20rem;
  z-index: 100;
`;

export const LocationTextTitle = styled.div`
  color: white;
  font-weight: bolder;
`;

const onClick = () => {
  history.push("/main");
};

const Page1 = () => (
  <S.Container bgColor="#1B2130" textColor="white" isFadingIn={true}>
    <S.LogoImage src={Logo} alt="Logo" />
    <S.LogoText>
      내 블랙박스가 세상의 눈이 된다면
      <br />
      지도 기반 블랙박스 영상 공유 플랫폼
    </S.LogoText>
    <S.LogoBlink>Blink</S.LogoBlink>
  </S.Container>
);

const Page2 = () => (
  <S.TwoContainer bgColor="#34446D" textColor="#333" isFadingIn={true}>
    <S.LocationImg src={Locationpin} alt="Location" />
    <S.LocationTextTitle>
      사라진.. 전동킥보드를 찾습니다 ...!
    </S.LocationTextTitle>
  </S.TwoContainer>
);

const Page3 = () => (
  <S.Container bgColor="#1B2130" textColor="white" isFadingIn={true}>
    <S.LocationImg src={Locationpin} alt="Location" />
    <S.LocationTextTitle>
      사라진.. 전동킥보드를 찾습니다 ...!
    </S.LocationTextTitle>
    <S.Button onClick={onClick}>Go to Main Page</S.Button>
  </S.Container>
);

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Page1 />
      <Page2 />
      <Page3 />
    </>
  );
}

export default App;
