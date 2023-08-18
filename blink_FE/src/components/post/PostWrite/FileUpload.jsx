import React, { useState } from "react";
import styled from "styled-components";

const FileUploadContainer = styled.div`
  margin-top: 20px;
  display:flex;
  align-items:center;
`;

const VideoThumbnail = styled.video`
  width: 250px;
  max-height: 250px;
  border: 1px solid black;
`;

const FileInput = styled.input`
  display: none;
`;

const SelectFileButton = styled.label`
  display: inline-block;
  width: 120px;
  height: 20px;
  padding: 10px 20px;
  background-color: white;
  color: rgba(83, 83, 255, 0.7); 
  border: 2px solid blue;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  margin: 0 30px 0 80px;

  &:hover {
    background-color: rgba(83, 83, 255, 0.7); ;
    color: white;
  }
`;

const NoFileSelectedText = styled.span`
  margin-left: 10px;
  font-size: 14px;
  color: blue;
`;

const ThumbnailsContainer = styled.div`
  gap: 10px;
  display: flex;
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function FileUpload({
  onFileUpload,
  maxFiles,
  ThumbnailComponent,
  handleRemoveThumbnail,
  uploadedFiles,
}) {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const totalFiles = selectedFiles.length + files.length;

    if (totalFiles > maxFiles) {
      alert(`You can only upload up to ${maxFiles} files.`);
      return;
    }

    const updatedFiles = [
      ...selectedFiles,
      ...Array.from(files).slice(0, maxFiles - selectedFiles.length),
    ];
    setSelectedFiles(updatedFiles);
    onFileUpload(updatedFiles);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = selectedFiles.filter((file, i) => i !== index);
    setSelectedFiles(updatedFiles);
    onFileUpload(updatedFiles);
  };

  return (
    <FileUploadContainer>
      <FileInput
        id="fileInput"
        type="file"
        accept=".png, .jpg, .jpeg, .pdf, .mov, .mp4"
        multiple
        onChange={handleFileChange}
      />
      <SelectFileButton htmlFor="fileInput">
      이미지 첨부하기
      </SelectFileButton>
      <ThumbnailsContainer>
        {selectedFiles.map((file, index) => (
          <ThumbnailWrapper key={index}>
            {file.type.startsWith("image/") ? (
              <ThumbnailComponent
                src={URL.createObjectURL(file)}
                alt={`Thumbnail ${index + 1}`}
              />
            ) : file.type.startsWith("video/") ? (
              <VideoThumbnail controls>
                <source src={URL.createObjectURL(file)} type={file.type} />
              </VideoThumbnail>
            ) : (
              <div>Unsupported File Type</div>
            )}
            <button onClick={() => handleRemoveFile(index)}>파일 삭제</button>
          </ThumbnailWrapper>
        ))}
      </ThumbnailsContainer>
    </FileUploadContainer>
  );
}
