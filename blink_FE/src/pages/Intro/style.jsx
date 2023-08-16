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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  height: 70vh;
`;

export const PageWrapper = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ bgColor }) => bgColor};
  opacity: ${({ opacity }) => opacity};
  color: ${({ textColor }) => textColor};
  animation: ${({ isFadingIn }) => (isFadingIn ? fadeIn : fadeOut)} 2s
    ease-in-out;
`;
export const Button = styled.div`
  border: none;
  width: 10rem;
  height: 3rem;
  justify-content: center;
  display: flex;
  background-color: #1b2130;
  border-radius: 20px;
  color: white;
  font-size: 20px;
  text-align: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 3rem;
  box-shadow: 5px 5px;
  &:hover {
    color: #3865bf;
  }
`;

export const GoMain = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const LocationText = styled.div`
  color: white;
  font-size: 1.5rem;
  justify-content: center;
  text-align: center;
  line-height: 2rem;
  margin-top: 1.5rem;
`;

export const WholeLocationText = styled.div`
  margin-left: 1rem;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

//세번째 페이지

export const ThreeContainer = styled.div`
  width: 100vw;
  height: 70vh;
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
