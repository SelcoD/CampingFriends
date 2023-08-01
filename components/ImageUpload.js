import { useState } from "react";
import styled from "styled-components";

export default function ImageUpload({ setTripImages, tripImages }) {
  const [isUploaded, setIsUploaded] = useState(false);

  async function handleUploadImage(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const response = await fetch("../api/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setIsUploaded(true);
      const newImage = await response.json();
      setTripImages([...tripImages, newImage]);
    }
  }

  return (
    <StyledFormContainer>
      <form onSubmit={handleUploadImage}>
        <label htmlFor="image-upload"></label>
        <br />
        <input type="file" name="image" id="image-upload" />
        <button type="submit">Upload</button>
        {isUploaded && <StyledCheckmark>✓</StyledCheckmark>}
      </form>
    </StyledFormContainer>
  );
}

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledCheckmark = styled.span`
  color: green;
  font-size: 24px;
  margin-left: 10px;
`;
