import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InnerPost from "./InnerPost";
import axios from "axios";
import instance from "../../../assets/api/axios"; // 변경된 부분
import { useNavigate } from "react-router-dom";

const PostListSlideContainer = styled.div`
  overflow: auto;
  max-height: 900px;
  min-height: 600px;
  /* 스크롤 바 커스터마이징 */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f2f2f2;
  }
`;

// post에 들어갈 text내용
const postData = [
  {
    title: "첫 번째 포스트",
    content: "첫 번째 포스트 내용...",
    inProgress: true,
    jebo: true,
  },
  {
    title: "두 번째 포스트",
    content: "두 번째 포스트 내용...",
    inProgress: false,
    jebo: false,
  },
  {
    title: "세 번째 포스트",
    content: "세 번째 포스트 내용...",
    inProgress: true,
    jebo: false,
  },
  {
    title: "네 번째 포스트",
    content: "네 번째 포스트 내용...",
    inProgress: false,
    jebo: true,
  },
  {
    title: "다섯 번째 포스트",
    content: "다섯 번째 포스트 내용...",
    inProgress: true,
    jebo: false,
  },
  {
    title: "여섯 번째 포스트",
    content: "여섯 번째 포스트 내용...",
    inProgress: false,
    jebo: true,
  },
  {
    title: "일곱 번째 포스트",
    content: "일곱 번째 포스트 내용...",
    inProgress: true,
    jebo: true,
  },
  {
    title: "여덟 번째 포스트",
    content: "여덟 번째 포스트 내용...",
    inProgress: true,
    jebo: true,
  },
  {
    title: "아홉 번째 포스트",
    content: "아홉 번째 포스트 내용...",
    inProgress: false,
    jebo: false,
  },
  {
    title: "열 번째 포스트",
    content: "열 번째 포스트 내용...",
    inProgress: false,
    jebo: true,
  },
];

export default function PostListScroll() {
  const [posts, setPosts] = useState([]); // 데이터를 저장할 state

  useEffect(() => {
    // 서버에서 데이터 가져오기
    instance
      .get("/api/mainposts") // 변경된 부분
      .then((response) => {
        setPosts(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // useEffect는 컴포넌트가 마운트될 때 한 번만 실행됩니다.

  const navigate = useNavigate();

  const handlePostClick = (postId) => {
    navigate(`/post2/${postId}`);
  };

  return (
    <PostListSlideContainer>
      {posts.map((post) => (
        <div onClick={() => handlePostClick(post.id)}>
          <InnerPost
            key={post.id}
            title={post.title}
            category={post.category}
            content={post.content}
            // 제보해요 or 찾아요 나누는 항목
            jebo={post.jebo_bool}
            writer={post.writer}
            lat={post.lat}
            lng={post.lng}
            location={post.location}
            created_at={post.created_at}
            comments_cnt={post.comments_cnt}
          />
        </div>
      ))}
    </PostListSlideContainer>
  );
}
