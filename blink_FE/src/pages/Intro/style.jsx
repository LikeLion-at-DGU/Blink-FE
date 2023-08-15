import styled, { keyframes } from "styled-components";

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

//첫페이지

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

//두번째 페이지

export const TwoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background-color: ${({ bgColor }) => bgColor};
  opacity: ${({ opacity }) => opacity};
  color: ${({ textColor }) => textColor};
  animation: ${({ isFadingIn }) => (isFadingIn ? fadeIn : fadeOut)} 2s
    ease-in-out;
`;

export const Button = styled.div``;
