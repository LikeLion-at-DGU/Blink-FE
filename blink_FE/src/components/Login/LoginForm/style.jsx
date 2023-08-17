import styled from "styled-components";

export const LoginInput = styled.input`
  display: flex;
  flex-direction: column;
  width: ${(props) =>
    props.width || "26rem"}; /* 기본값 26rem, props로 width 전달 가능 */
  height: ${(props) =>
    props.height || "4rem"}; /* 기본값 4rem, props로 height 전달 가능 */
  background: rgb(248, 248, 250);
  border: none;
  border-radius: 10px;
  padding-left: 15px;
  margin-bottom: 1.3rem;
  border: ${(props) => (props.isvaild === "true" ? "none" : "1px solid red")};
`;

export const StyledLoginButton = styled.button`
  background-color: #3865bf;
  display: flex;
  justify-content: center;
  color: white;
  width: 13rem;
  height: 3rem;
  align-items: center;
  cursor: pointer;
  margin-top: 44px;
  &:hover {
    box-shadow: 0 0 5px rgba(25, 33, 48, 0.6); /* 강조 효과를 위한 그림자 */
    outline: none;
  }
`;

export const StyledLoginTitle = styled.div`
  color: rgb(52, 68, 109);
  position: relative;
  top: -50px;
  font-size: 300%;
  font-weight: bolder;
`;
