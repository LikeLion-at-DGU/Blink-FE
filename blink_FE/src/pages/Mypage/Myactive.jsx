import React, { useState, useEffect } from "react"; // Import useState and useEffect

import Mypage from "./component";
import * as S from "./style";
import axios from "../../assets/api/axios";
import { Link } from "react-router-dom";

export default function ActiveRight() {
  const [jebohaeyoData, setJebohaeyoData] = useState([]);
  const [yocheongData, setYocheongData] = useState([]);
  const [postData, setPostData] = useState([]);
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    const apiUrl = "/api/mypage/activities";

    async function fetchUserActive() {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = response.data;
        const jebohaeyo = data.jebo_false_posts;
        const yocheong = data.jebo_true_posts;
        const post = data.community_posts;
        const comment = data.all_comments_and_replies;
        console.log(comment);
        // Update the state with jebohaeyo data
        setJebohaeyoData(jebohaeyo);
        setYocheongData(yocheong);
        setPostData(post);
        setCommentData(comment);
      } catch (error) {
        console.error("API 호출 에러:", error);
      }
    }
    fetchUserActive();
  }, []);

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  return (
    <S.Background>
      {/* 1 */}

      <p style={{ fontSize: "35px", fontWeight: "600", margin: "0px" }}>
        내 활동 관리
      </p>
      <p style={{ fontSize: "20px", color: "#818181", marginTop: "10px" }}>
        내 제보 및 요청, 커뮤니티 글과 댓글을 관리할 수 있습니다.
      </p>
      <S.Settingp>내 제보 모아보기</S.Settingp>
      <S.Listbar>
        {jebohaeyoData.map((item, index) => (
          <div key={index}>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "700",
                  marginLeft: "30px",
                }}
              >
                <Link
                  to={`/post2/:item.id`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {item.title}
                </Link>
              </p>
              <p style={{ marginTop: "30px", marginLeft: "10px" }}>
                {formatDate(item.updated_at)}
              </p>
            </div>
          </div>
        ))}
      </S.Listbar>
      {/* 2 */}
      <S.Settingp>내 요청 모아보기</S.Settingp>
      <S.Listbar>
        {yocheongData.map((item, index) => (
          <div key={index}>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "700",
                  marginLeft: "30px",
                }}
              >
                <Link
                  to={`/post2/:item.id`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {item.title}
                </Link>
              </p>
              <p style={{ marginTop: "30px", marginLeft: "10px" }}>
                {formatDate(item.updated_at)}
              </p>
            </div>
          </div>
        ))}
      </S.Listbar>
      {/* 3 */}

      <S.Settingp>내가 쓴 글 모아보기</S.Settingp>
      <S.Listbar>
        {postData.map((item, index) => (
          <div key={index}>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "700",
                  marginLeft: "30px",
                }}
              >
                <Link
                  to={`/post2/:item.id`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {item.title}
                </Link>
              </p>
              <p style={{ marginTop: "30px", marginLeft: "10px" }}>
                {formatDate(item.updated_at)}
              </p>
            </div>
          </div>
        ))}
      </S.Listbar>

      {/* 4 */}
      <S.Settingp>내가 쓴 댓글 모아보기</S.Settingp>
      <S.Listbar>
        {commentData.map((item, index) => (
          <div key={index}>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "700",
                  marginLeft: "30px",
                }}
              >
                <Link
                  to={`/post2/${item.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {item.content}
                </Link>
              </p>
              <p style={{ marginTop: "30px", marginLeft: "10px" }}>
                {formatDate(item.created_at)} {/* Use item.created_at */}
              </p>
            </div>
          </div>
        ))}
      </S.Listbar>
    </S.Background>
  );
}

export function Myactive() {
  return (
    <div style={{ display: "flex" }}>
      <Mypage></Mypage>
      <ActiveRight></ActiveRight>
    </div>
  );
}
