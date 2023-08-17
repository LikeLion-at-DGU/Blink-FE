import styled from "styled-components";

export const SignupWhole = styled.div`
  width: 75vw;
  height: 90vh;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  left: 25%;
  border: 1px solid black;
`;

export const SignUpInputWrapper = styled.div``;

export const SignUpInput = styled.input`
  border: none;
  border: 1px solid black;
  border-radius: 10px;
  outline: none;
  padding: 5px;
  ::placeholder {
    color: #aeafb9;
  }
  /* Your styling here */
  border: ${(props) =>
    props.isvaild == "true" ? "1px solid black" : "1px solid red"};
  /* Additional styling based on validity */
`;

export const MessageText = styled.span`
  color: ${(props) => (props.isvaild == "true" ? "#00C24E" : "#FF5D47")};
  font-size: 13px;
  position: relative;
  top: -10px;
`;

export const SignUpInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 10%;
  position: relative;
`;

export const SocialLogin = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

//expersignup으로 이동
export const ExpertPageMove = styled.div``;
export const Expertint = styled.div`
  margin-top: 10%;
  text-align: center;
  line-height: 1.2rem;
`;
export const Expertclick = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: large;
  font-weight: bolder;
  color: black;
`;

export const UnderlinedText = styled.span`
  text-decoration: underline;
`;

export const HowSignup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5%;
`;

export const HowSignuptext = styled.div`
  margin-right: 30px;
`;

export const select = styled.select`
  background-color: #f5f5f5;
  border: none;
  padding: 3px;
  width: 230px;
  height: 30px;
`;

export const LoginWhole = styled.div`
  height: 100%;
`;

export const FontAwesomeIcon = styled.div`
  width: 50px;
  height: 50px;
`;
