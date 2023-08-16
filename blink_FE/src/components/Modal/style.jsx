import { styled } from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1200;
  width: 300px;
  height: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  left: 120px;
  top: 180px;
  border-radius: 30px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const Modal = styled.div`
  background: white;
  overflow: hidden;
  border-radius: 8px;
  transition: all 400ms ease-in-out 2s;
  animation: fadeIn 400ms;
  width: 30px;
  height: 30px;
`;

export const ModalCloseBtn = styled.span`
  cursor: pointer;
  z-index: 1000;
  color: black;
  position: absolute;
  right: 27px;
  top: 20px;
  padding: 1%;
  font-size: 20px;
`;

export const ModalContent = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
`;

export const ModalNoContent = styled.div`
  color: black;
  justify-content: center;
  display: flex;
  margin-top: 100px;
  margin-right: 60px;
  width: 100%;
`;
export const ModalTitle = styled.h2`
  font-size: 20px;
  color: black;
  font-weight: bolder;
  margin-top: 30px;
  margin-left: 30px;
`;

export const ModalText = styled.div`
  border: 1px solid black;
  width: 230px;
  height: 50px;
  border-radius: 15px;
`;

export const title = styled.div``;

// NotificationItem 스타일 설정

export const NotificationBox = styled.div`
  background-color: #f2f2f2;
  margin: 5px 0;
  padding: 10px;
  width: 80%;
  height: 20px;
  text-align: center;
  border-radius: 20px;
  margin-left: 20px;
  align-items: center;
`;

export const NotificationText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 15px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const ModaltitleWrap = styled.div`
  max-height: 320px;
  margin-top: 20px;
  overflow-x: hidden;
  overflow-y: scroll;
`;
