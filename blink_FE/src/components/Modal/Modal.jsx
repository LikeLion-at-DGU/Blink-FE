import React, { useState, useEffect, useRef } from "react";
import * as S from "./style";
import axios from "../../assets/api/axios";
import NotificationItem from "./Notice"; // 알림 컴포넌트 임포트
import { Link } from "react-router-dom"; // react-router-dom에서 Link 컴포넌트 임포트

export default function Modal({ setModalOpen, Id, title }) {
  const [notifications, setNotifications] = useState([]);
  const modalRef = useRef(null);

  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    async function fetchNotifications() {
      try {
        const response = await axios.get(`/api/mainposts/notification${Id}`);
        setNotifications(response.data); // 가져온 알림 데이터를 설정
      } catch (error) {
        console.error("알림창 에러:", error);
      }
    }

    fetchNotifications();
  }, [Id]);

  useEffect(() => {
    // 모달 내용이 추가되면 스크롤을 아래로 이동시킴
    modalRef.current.scrollTop = modalRef.current.scrollHeight;
  }, [notifications]);

  return (
    <S.ModalContainer onClick={() => setModalOpen(false)}>
      <S.ModalCloseBtn onClick={() => setModalOpen(false)}>X</S.ModalCloseBtn>

      <S.ModalContent ref={modalRef}>
        <S.ModalTitle>Notifications</S.ModalTitle>
        <S.ModaltitleWrap>
          {notifications.length === 0 ? (
            <S.ModalNoContent>알림이 없습니다.</S.ModalNoContent>
          ) : (
            notifications.map((notification) => (
              <Link
                key={notification.id}
                to={`/post/${notification.postId}`} // 포스트 디테일 페이지 URL로 이동
              >
                <NotificationItem
                  notification={{
                    ...notification,
                    title:
                      notification.title.length > 4
                        ? `${notification.title.substring(0, 4)}...`
                        : notification.title,
                  }} // 알림 데이터 전달
                />
              </Link>
            ))
          )}
        </S.ModaltitleWrap>
      </S.ModalContent>
    </S.ModalContainer>
  );
}
