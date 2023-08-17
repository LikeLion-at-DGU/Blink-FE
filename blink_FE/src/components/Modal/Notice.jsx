import React from "react";
import * as S from "./style";

export default function NotificationItem({ title }) {
  return (
    <S.NotificationBox>
      <S.NotificationText>
        {title} 글에 댓글이 게시되었습니다.
      </S.NotificationText>
    </S.NotificationBox>
  );
}
