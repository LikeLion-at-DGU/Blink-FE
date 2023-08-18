// post2.jsx
import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import HorizonLine from "../Layout/Line";
import React, { useState } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import "react-calendar/dist/Calendar.css";
import axios from "../../assets/api/axios";

const Outer = styled.div`
  width: 1150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin-left: 150px;
  padding-bottom: 80px;
  font-size: 50px;
  font-weight: bold;
  gap: 0.5em;
`;

const Text = styled.div`
  margin-top: 30px;
  width: 920px;
  display: flex;
  justify-content: left;
`;

const HereBox = styled.div`
  border: 1px solid black;
  width: 920px;
  height: 56px;
  border-radius: 10px;
  font-size: 25px;
  display: flex;
  align-items: center;
  gap: 0.1em;
`;

const Here = styled.div`
  width: 700px;
  height: 38px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-weight: 500;
  border-radius: 10px;
`;

const PostBox = styled.div`
  border: 1px solid black;
  width: 920px;
  height: 371px;
  border-radius: 10px;
  font-size: 38px;
`;

const CommentBox = styled.div`
  border: 1px solid black;
  width: 920px;
  height: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const ClipBox = styled.div`
  border: 1px solid black;
  width: 920px;
  height: 338px;
  border-radius: 10px;
`;

const Context = styled.div`
  font-size: 23px;
  font-weight: 500;
  margin: 30px 40px 20px 32px;
  line-height: 1.4em;
`;

const CommentTitle = styled.div`
  font-size: 28px;
  margin: 40px 20px 0px 30px;
  font-weight: bold;
`;

const PostDate = styled.div`
  width: 160px;
  font-size: 25px;
  height: 30px;
  font-weight: 400;
  position: fixed; /* Fix the position */
  top: 28%;
  left: 61%;
  color: gray;
`;

const CommentForm = styled.form`
  margin: 20px;
  display: flex;
  align-items: center;
`;

const CommentInput = styled.input`
  width: 700px;
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

//답글
const UploadedComment = styled.div`
  font-size: 18px;
  color:gray;
  font-weight: 500;
  margin-left:20px;
  display:flex;
  margin-left:20px;
`;

//오리지널댓글
const OriginalComment = styled(UploadedComment)`
  font-size: 22px;
  cursor: pointer;
  display:flex;
  align-items:center;
  gap:2px;
  color:black;
  margin-bottom:20px;
`;


//답글버튼
const ReplyButton = styled.button`
  background-color: #C4C4C4;
  color: white;
  border: none;
  padding: 4px 6px;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  width:49px;
  height:20px;
  text-align:center;
  align-items:center;
  display:flex;
  justify-content:center;
  margin-right:10px;
  `;

//삭제버튼
const DeleteButton = styled(ReplyButton)`
margin-right:180px;
`;

const UploadButton = styled.button`
  background-color: #C4C4C4;
  color: white;
  border: none;
  padding: 18px 16px;
  height:54px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  display:flex;
  justify-content:center;
  align-items:center;
  width:90px;
`;

const CommentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ClipIcon = styled(AiOutlinePaperClip)`
  color: #C4C4C4;
  margin:4px 6px 0 6px;
`;

const TitleBox = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-size: 38px;
  margin: 10px 15px 10px 0;
`;
const Category = styled(Title)`
  margin: 10px 5px 10px 20px;
`



// Define your main functional component
const Post2 = () => {

  const handleSubmitReply = (event, parentIndex) => {
    event.preventDefault();
    const updatedComments = [...comments];
    if (updatedComments[parentIndex].newReply.trim() !== "") {
      const newReplyObj = {
        text: updatedComments[parentIndex].newReply,
        user: currentUser,
      };
      updatedComments[parentIndex].replies.push(newReplyObj);
      updatedComments[parentIndex].newReply = ""; // Clear the reply input
      setComments(updatedComments);
    }
  };
  

  const handleReplyInputChange = (event, parentIndex) => {
    const updatedComments = [...comments];
    updatedComments[parentIndex].newReply = event.target.value;
    setComments(updatedComments);
  };

  const handleDeleteComment = (index) => {
  const updatedComments = comments.filter((_, i) => i !== index);
  setComments(updatedComments);
};

const handleDeleteCommentReply = (parentIndex, replyIndex) => {
  const updatedComments = [...comments];
  updatedComments[parentIndex].replies.splice(replyIndex, 1);
  setComments(updatedComments);
};

const handleReplyButtonClick = (parentIndex) => {
  const updatedComments = [...comments];
  updatedComments[parentIndex].showReplyInput = !updatedComments[parentIndex].showReplyInput;
  setComments(updatedComments);
};


  const [attachments, setAttachments] = useState([]);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [currentUser, setCurrentUser] = useState("유저이름"); // Set the initial user name
  
  
  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmitComment = (event, parentIndex = null) => {
    event.preventDefault();
    if (newComment.trim() !== "") {
      const newCommentObj = { text: newComment, user: currentUser, replies: [] };
      if (parentIndex === null) {
        setComments([...comments, newCommentObj]);
      } else {
        const updatedComments = [...comments];
        updatedComments[parentIndex].replies.push(newCommentObj);
        setComments(updatedComments);
      }
      setNewComment("");
    }
  };
  

    return (
      <Outer>
        <Text>요청 상세 페이지</Text>
        <HereBox>
          <> 
            <MdLocationOn size={30} />
            요청 위치
          </>
          <Here>: 실제위치 </Here>
        </HereBox>
    
        <PostBox>
          <TitleBox>
          <Category>카테고리<>/</></Category>
            <Title>제목</Title>
          </TitleBox>
          <HorizonLine />
          <Context>
            첫줄
            <br />
            둘쨋줄
          </Context>
        </PostBox>
    
        <ClipBox>첨부파일 자리</ClipBox>
        <CommentBox>
          <CommentTitle>댓글</CommentTitle>
          <CommentForm onSubmit={handleSubmitComment}>
            <CommentFooter>
              <CommentInput
                type="text"
                placeholder="댓글을 남겨보세요."
                value={newComment}
                onChange={handleCommentChange}
              />
              <label>
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.mp4"
                  style={{ display: "none" }}
                  onChange={(e) => setAttachments([...attachments, e.target.files[0]])}
                />
                <ClipIcon />
              </label>
              <UploadButton type="submit">댓글</UploadButton>
            </CommentFooter>
          </CommentForm>

          {comments.map((comment, index) => (
  <div key={index}>
    <OriginalComment>
      <div style={{ flex: 1 }}>
        <strong>{comment.user}:</strong> {comment.text}
      </div>
      <div style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
  <ReplyButton onClick={() => handleReplyButtonClick(index)}>답글</ReplyButton>
  <DeleteButton onClick={() => handleDeleteComment(index)}>삭제</DeleteButton>
</div>

    </OriginalComment>

    {comment.replies.map((reply, replyIndex) => (
      <UploadedComment key={replyIndex}>
        <div style={{ flex: 1 }}>
          <strong>{reply.user}:</strong> {reply.text}
        </div>
        <div style={{ marginRight:"10px"}}>
        <DeleteButton onClick={() => handleDeleteCommentReply(index, replyIndex)}>
          삭제
        </DeleteButton></div>
      </UploadedComment>
    ))}

    {comment.showReplyInput && (
      <div>
        <CommentForm onSubmit={(e) => handleSubmitReply(e, index)}>
          <CommentFooter>
            <CommentInput
              type="text"
              placeholder="답글을 남겨보세요."
              value={comment.newReply}
              onChange={(e) => handleReplyInputChange(e, index)}
            />
            <label>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.mp4"
                style={{ display: "none" }}
                onChange={(e) => setAttachments([...attachments, e.target.files[0]])}
              />
            </label>
            <UploadButton type="submit">등록</UploadButton>
          </CommentFooter>
        </CommentForm>
      </div>
    )}
  </div>
))}

      </CommentBox>
    </Outer>
  );
};

export default Post2;