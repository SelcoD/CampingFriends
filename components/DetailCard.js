import { Container, Card, Header, Footer } from "../styles/styles";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

export default function DetailCard({ campingTrip }) {
  console.log("campingTrip:", campingTrip);
  return (
    <>
      <Header>
        <h1>Check the details of your trips</h1>
      </Header>
      <Container>
        <Card>
          <h2>{campingTrip.location}</h2>
          <h2>{campingTrip.date}</h2>
          <h3>Conditions:</h3>
          {campingTrip.conditions.length > 0 ? (
            <ul>
              {campingTrip.conditions.map((condition) => {
                return <StyledList key={condition}>{condition}</StyledList>;
              })}
            </ul>
          ) : (
            <p>no conditions added</p>
          )}
          <h3>Friends:</h3>
          {campingTrip.friends.length > 0 ? (
            <ul>
              {campingTrip.friends.map((friend) => {
                return <StyledList key={friend}>{friend}</StyledList>;
              })}
            </ul>
          ) : (
            <p>no friends added</p>
          )}
          <h3>Images:</h3>
          {campingTrip.tripImages.length > 0 ? (
            <ul>
              {campingTrip.tripImages.map((image, index) => (
                <StyledList key={index}>
                  <Image
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt={`Trip Image ${index + 1}`}
                  />
                </StyledList>
              ))}
            </ul>
          ) : (
            <p>no images added</p>
          )}
        </Card>
        <Link href="/">Go to List Page</Link>
      </Container>
    </>
  );
}
const StyledList = styled.ul`
  list-style-type: none;
`;
