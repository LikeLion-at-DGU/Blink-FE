import styled from "styled-components";

//expertList.jsx
export const Upper = styled.div`
  display: flex;
`;

export const Close = styled.div`
  font-size: 30px;
  margin-left: 390px;
`;

export const Container = styled.div`
  width: calc(100vw - 220px);
  flex-wrap: wrap;
  margin-left: 100px;
`;

export const Explain = styled.p`
  padding: 40px;
  color: black;
  font-size: 30px;
  font-weight: 600;
`;

export const Range = styled.select`
  width: 100px;
  height: 30px;
  margin-left: 40px;
  font-size: 15px;
`;

export const Outline = styled.div`
  margin: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: ${(props) => (props.selectedCardData !== null ? "vw" : "83vw")};
`;

export const Card = styled.div`
  width: 400px;
  height: 600px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #d9d9d9;
  color: black;
`;

export const CardImage = styled.img`
  width: 350px;
  height: 350px;
  margin-top: 15px;
  border-radius: 15px;
`;

export const CardJob = styled.p`
  font-size: 30px;
  margin-top: 20px;
  font-weight: 700;
  position: relative;
  right: 80px;
`;

export const CardEx = styled.p`
  font-size: 16px;
  margin-top: 10px;
  font-weight: 600;
`;

export const Wrap = styled.div`
  display: flex;
`;

export const Wrapping = styled.div`
  display: flex;
  position: relative;
  right: 45px;
  margin-top: 15px;
  font-size: 20px;
`;

//ExpertDetail.jsx
export const Box = styled.div`
  width: 460px;
  height: auto;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: #ebe6e6;
  margin-left: 100px;
  display: flex;
  padding-top: 20px;
  padding-left: 40px;
  z-index: 2;
  flex-direction: column;
`;

export const DetailImg = styled.img`
  width: 210px;
  height: 200px;
  margin-top: 15px;
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
`;

export const Section = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  display: flex;
`;

export const Major = styled.p`
  color: gray;
  font-size: 20px;
`;

export const DetailName = styled.p`
  color: black;
  font-size: 35px;
  font-weight: 600;
  line-height: 20px;
`;

export const RequestBtn = styled.div`
  border-radius: 10px;
  color: gray;
  font-size: 20px;
  font-weight: 600;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
`;

export const Commentbox = styled.div`
  height: fit-content;
  width: auto;
  margin-top: 30px;
`;

export const CommentSub = styled.p`
  font-weight: 700;
  font-size: 25px;
  margin-top: 0px;
`;

export const Commentmore = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  padding-bottom: 30px;
  border-bottom: 1px solid gray;
`;
