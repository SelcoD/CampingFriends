import Image from "next/image";
import styled from "styled-components";

export default function ImageUpload({ onSubmit, tripImages }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="image-upload">Picture</label>
        <input type="file" name="image" id="image-upload" />
        <button type="submit">Upload</button>
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
