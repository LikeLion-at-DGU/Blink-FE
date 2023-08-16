// Import necessary libraries
import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import HorizonLine from "../Layout/Line";
import React, { useState } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";

const Outer = styled.div`
  width: 1150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin-left: 150px;
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
  height: 332px;
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

const Title = styled.div`
  font-size: 38px;
  margin: 30px;
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

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CommentForm = styled.form`
  margin: 20px;
  display: flex;
  align-items: center;
`;

const CommentInput = styled.input`
  width: 740px;
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
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
`;

const CommentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UploadedComment = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const ClipIcon = styled(AiOutlinePaperClip)`
  font-size: 24px;
  color: #C4C4C4;
  margin-right: 10px;
`;



// Define your main functional component
const Post2 = () => {

  const [attachments, setAttachments] = useState([]);


  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmitComment = (event) => {
    event.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <Outer>
      <Text>요청 상세 페이지</Text>
      <HereBox>
        <>
          &nbsp; <MdLocationOn size={30} />
          요청 위치
        </>
        <Here>: 실제위치</Here>
      </HereBox>

      <PostBox>
        <TitleBox>
          <Title>제목<PostDate>2023.10.10</PostDate></Title>
        </TitleBox>
        <HorizonLine />
        <Context>
          내용
          <br />
          둘쨋줄
        </Context>
      </PostBox>

      <ClipBox>영상임베디드</ClipBox>
      <CommentBox>
        <CommentTitle>댓글</CommentTitle>
        <CommentForm onSubmit={handleSubmitComment}>
  <CommentFooter>
    <CommentInput
      type="text"
      placeholder="Leave a comment!"
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
    <UploadButton type="submit">Upload!</UploadButton>
  </CommentFooter>
</CommentForm>

        {comments.map((comment, index) => (
          <UploadedComment key={index}>{comment}</UploadedComment>
        ))}
      </CommentBox>
    </Outer>
  );
};

// Export your component
export default Post2;
