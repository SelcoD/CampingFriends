import {
  Container,
  Card,
  Header,
  CenteredLink,
  StyledImageLogo,
  FooterContainer,
  StyledListPageButton,
} from "../styles/styles";
import styled from "styled-components";
import Image from "next/image";

export default function DetailCard({ campingTrip }) {
  return (
    <>
      <Header>
        <StyledImageLogo
          src="/logo.png"
          alt="My Logo"
          width={200}
          height={100}
        />
      </Header>
      <Container>
        <StyledDetailCard>
          <article>
            Your trip starts on {campingTrip.date} <br /> to{" "}
            {campingTrip.location}
          </article>
          <br />
          <article>The weather is:</article>
          {campingTrip.conditions.length > 0 ? (
            <ul>
              {campingTrip.conditions.map((condition) => {
                return <StyledList key={condition}>{condition}</StyledList>;
              })}
            </ul>
          ) : (
            <p>no conditions added</p>
          )}
          <article>Friends:</article>
          {campingTrip.friends.length > 0 ? (
            <ul>
              {campingTrip.friends.map((friend) => {
                return <StyledList key={friend}>{friend}</StyledList>;
              })}
            </ul>
          ) : (
            <p>no friends added</p>
          )}
          {campingTrip.tripImages.length > 0 ? (
            <ul>
              {campingTrip.tripImages.map((image, index) => (
                <StyledList key={index}>
                  <Image
                    src={image.src}
                    width={200}
                    height={150}
                    alt={`Trip Image ${index + 1}`}
                  />
                </StyledList>
              ))}
            </ul>
          ) : (
            <p>no images added</p>
          )}
        </StyledDetailCard>
        <FooterContainer>
          <CenteredLink href="/">
            <StyledListPageButton>Back to List Page</StyledListPageButton>
          </CenteredLink>
        </FooterContainer>
      </Container>
    </>
  );
}

const StyledList = styled.li`
  list-style-type: none;
`;

const StyledDetailCard = styled.article`
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 800px;
  border-radius: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
