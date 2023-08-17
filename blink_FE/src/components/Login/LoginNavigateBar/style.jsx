import styled from "styled-components";

export const LoginNavigateTitle = styled.div`
  font-weight: 700;
  font-size: xx-large;
  color: white;
  top: ${(props) => props.Top || "-80px"};
  position: relative;
  line-height: 35px;
  display: ${(props) => props.display || ""};
  flex-direction: ${(props) => props.flexDirection || ""};
`;

export const LoginNavigateContent = styled.div`
  font-size: large;
  color: white;
  line-height: 28px;
  padding: 5px;
`;

export const LoginNavigateContainer = styled.div`
  display: flex;
  width: ${(props) =>
    props.width || "260px"}; // props.width 값이 없을 때 기본값 "240px" 사용
  height: 100%;
  flex-direction: column;
  background-color: #34446d;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const LoginNavigateButton = styled.button`
  margin-top: 70%;
  width: 9rem;
  font-size: large;
  font-weight: 500;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginNavigateText = styled.div`
  position: ${(props) => props.position || "relative"};
  ${(props) => props.top && `top: ${props.top};`}
`;

export const LNT = styled.div`
  margin-top: ${(props) => props.marginTop || ""};
  font-size: x-large;
`;

export const email = styled.div`
  bottom: -18%;
  position: relative;
  font-size: 1rem;
  color: white;
  opacity: 60%;
`;
