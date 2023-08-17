import React from "react";
import * as S from "./style";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { DetailImg } from "./style";

// 변호사 상세 파일
export default function ExpertDetail({ CardData }) {
  const { Id } = useParams();

  const [isDetailOpen, setIsDetailOpen] = useState(true);
  const findItem = CardData.find((item) => item.Id === parseInt(Id));
  const navigate = useNavigate();

  const formatExperience = (experience) => {
    const lines = experience.split(/\s(?=\d{4}~)/);
    return lines.map((line, index) => (
      <React.Fragment key={index}>
        {index !== 0 && <br />}
        {line}
      </React.Fragment>
    ));
  };

  function insertNewlinesBeforeNumbers(text) {
    const pattern = /(\D)(\d)/g;
    const newText = text.replace(pattern, "$1\n$2");
    return newText;
  }
  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    navigate("/expertList");
  };

  return (
    <>
      {isDetailOpen && (
        <S.Box>
          <S.Close onClick={handleCloseDetail}>x</S.Close>
          <DetailImg src={findItem.imageUrl} alt="전문가" />

          <S.Section>
            <S.Major>{findItem.job}</S.Major>
            <S.DetailName>{findItem.userId}</S.DetailName>
          </S.Section>
          <S.RequestBtn>{findItem.email}</S.RequestBtn>

          <S.Commentbox>
            <S.CommentSub>
              전문가 자기소개
              <br />
              <S.Commentmore>{findItem.info}</S.Commentmore>
            </S.CommentSub>
          </S.Commentbox>
          <S.Commentbox>
            <S.CommentSub>
              전문가 경력
              <br />
              <S.Commentmore>
                {formatExperience(findItem.experience)}
              </S.Commentmore>
            </S.CommentSub>
          </S.Commentbox>
          <S.Commentbox>
            <S.CommentSub>
              전문가 상담 가격
              <S.Commentmore>{findItem.price}</S.Commentmore>
            </S.CommentSub>
          </S.Commentbox>
          <S.Commentbox>
            <S.CommentSub>
              제공될 상담
              <br />
              <S.Commentmore>
                {insertNewlinesBeforeNumbers(findItem.content)}
              </S.Commentmore>
            </S.CommentSub>
          </S.Commentbox>
          <S.Commentbox>
            <S.CommentSub>
              사진
              <br />
              <S.CardImage src={findItem.imageUrl} alt="전문가" />
            </S.CommentSub>
          </S.Commentbox>
        </S.Box>
      )}
    </>
  );
}
