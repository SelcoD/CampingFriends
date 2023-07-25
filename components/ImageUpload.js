import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

export default function ImageUpload() {
  const [tripImages, setTripImages] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    console.log("somehow send formData to /api/upload");

    const response = await fetch("../api/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const newImage = await response.json();
      setTripImages([...tripImages, newImage]);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="image-upload">Picture</label>
        <input type="file" name="image" id="image-upload" />
        <button type="submit">Submit</button>
      </form>
      <div>
        {tripImages.map((tripImage) => (
          <StyledImage
            key={tripImage.id}
            src={tripImage.src}
            width={tripImage.width}
            height={tripImage.height}
            alt="Trip image"
          />
        ))}
      </div>
    </div>
  );
}

const StyledImage = styled(Image)`
  border-radius: 0.5rem;
  width: 50vw;
  object-fit: contain;
  height: auto;
  border-color: aliceblue;
`;
