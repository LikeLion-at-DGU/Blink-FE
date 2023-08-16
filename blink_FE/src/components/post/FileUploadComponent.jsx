import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineCloudUpload } from "react-icons/ai";

const CustomCloudUploadIcon = styled(AiOutlineCloudUpload)`
  font-size: 40px;
  margin-left: 40px;
`;

const UploadText = styled.div`
  margin: -40px; /* Adjust the margin as needed */
`;

const FileUploadComponent = ({
  onFileUpload,
  maxFiles,
  ThumbnailComponent,
  handleRemoveThumbnail,
  uploadedFiles,
}) => {
  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileList = Array.from(files);

    if (fileList.length > maxFiles) {
      alert(`You can only upload up to ${maxFiles} files.`);
      return;
    }

    onFileUpload(fileList);
  };

  return (
    <div>
      {uploadedFiles.length === 0 && (
        <>
          <label htmlFor="fileInput">
            <CustomCloudUploadIcon />
            <UploadText>
              Please upload .mov, .mp4 .png, .jpg, .jpeg, .pdf files.
              <br />
              <br />
              You can upload up to {maxFiles} photos.
            </UploadText>
          </label>
          <input
            type="file"
            id="fileInput"
            multiple
            accept=".mov,.mp4,.png,.jpg,.jpeg,.pdf"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </>
      )}
      {uploadedFiles.map((file, index) => (
        <div key={index}>
          <ThumbnailComponent src={URL.createObjectURL(file)} />
          <button onClick={() => handleRemoveThumbnail(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default FileUploadComponent;
