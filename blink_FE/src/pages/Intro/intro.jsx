import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Logo from "../../assets/images/NuLogo.png";
import Locationpin from "../../assets/images/location.png";
import Magnifying from "../../assets/images/magnify.png";
import Camera from "../../assets/images/camera.png";
import * as S from "./style";
import { Link } from "react-router-dom";

const Page1 = () => (
  <S.Container bgColor="#1B2130" textColor="white" isFadingIn={true}>
    <S.LogoImage src={Logo} alt="Logo" />
    <S.LogoText>블랙박스, 세상을 연결하는 눈이 되다</S.LogoText>
    <S.LogoBlink>B:Link!</S.LogoBlink>
  </S.Container>
);

const Page2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const viewportHeight = window.innerHeight;
    const pageTop = viewportHeight * 0.5; // 50% 위치 계산

    if (window.scrollY >= pageTop) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAnimationEnd = () => {
    setIsVisible(false);
  };

  return (
    <S.ThreeContainer bgColor="#34446D" textColor="white" isFadingIn={true}>
      <S.LocationImg
        src={Camera}
        alt="Location"
        onAnimationEnd={handleAnimationEnd}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(100px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      />
      <S.WholeLocationText>
        <S.LocationTextTitle>사고는 갑자기 찾아온답니다</S.LocationTextTitle>
        <S.LocationText>
          내 사고장면을 찍어준 다른 사람이 있다면 얼마나 고마울까요?
          <br />
          번거로운 보험, 법적 절차를 간단하게 만들어줄 수 있는 영상이
          <br />
          빠르게 제보된다면 얼마나 편할까요?
        </S.LocationText>
      </S.WholeLocationText>
      {/* <S.Button onClick={onClick}>Go to Main Page</S.Button> */}
    </S.ThreeContainer>
  );
};

const Page3 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const viewportHeight = window.innerHeight;
    const pageTop = viewportHeight * 1.0; // 50% 위치 계산

    if (window.scrollY >= pageTop) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAnimationEnd = () => {
    setIsVisible(false);
  };

  return (
    <S.ThreeContainer bgColor="#1B2130" textColor="white" isFadingIn={true}>
      <S.WholeLocationText>
        <S.LocationTextTitle>
          사라진.. 전동킥보드를 찾습니다 ...!
        </S.LocationTextTitle>
        <S.LocationText>
          사라진 내 킥보드를 찾고 싶으신가요? <br />
          혹은,사고로 인해 증거영상이 필요하신가요? <br />
          특정 지점에 대한 블랙박스를 요청해보세요!
        </S.LocationText>
      </S.WholeLocationText>
      <S.LocationImg
        src={Magnifying}
        alt="Location"
        onAnimationEnd={handleAnimationEnd}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(100px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      />
      {/* <S.Button onClick={onClick}>Go to Main Page</S.Button> */}
    </S.ThreeContainer>
  );
};

const Page4 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // useNavigate 훅 가져오기

  const handleGoToMainPage = () => {
    // "/home" 경로로 이동
    navigate("/home");
  };

  const handleScroll = () => {
    const viewportHeight = window.innerHeight;
    const pageTop = viewportHeight * 1.8; // 50% 위치 계산

    if (window.scrollY >= pageTop) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAnimationEnd = () => {
    setIsVisible(false);
  };

  return (
    <S.PageWrapper bgColor="#34446D" textColor="#333" isFadingIn={true}>
      <S.TwoContainer>
        <S.LocationImg
          src={Locationpin}
          alt="Location"
          onAnimationEnd={handleAnimationEnd}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(100px)",
            transition: "opacity 1s ease, transform 1s ease",
          }}
        />
        <S.WholeLocationText>
          <S.LocationTextTitle>
            블랙박스로 서로의 눈과 귀가 되어주세요!
          </S.LocationTextTitle>
          <S.LocationText>
            <br /> 당신의 제보가 필요한 사람들이 많답니다 <br />
            누군가에게 중요한 사람이 되어주세요 <br />
            그리고 다시 보답받으세요 :)
          </S.LocationText>
        </S.WholeLocationText>
      </S.TwoContainer>
      <S.GoMain>
        <Link to="/home">
          <S.Button>Blink 시작하기</S.Button>
        </Link>
      </S.GoMain>
    </S.PageWrapper>
  );
};

function Intro() {
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
      <Page4 />
    </>
  );
}

export default Intro;
