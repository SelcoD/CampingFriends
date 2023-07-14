import { Container, Card, Header, Footer } from "../styles/styles";
import Link from "next/link";
import styled from "styled-components";

export default function TripList({ campingTrips }) {
  return (
    <>
      <Header>
        <h1>Organize your Trips</h1>
      </Header>
      <ul>
        <Container>
          {campingTrips.map((trip) => (
            <StyledList key={trip.id}>
              <Link href={`/detailpage/${trip.id}`}>
                <Card>
                  <h2>{trip.location}</h2>
                  <p>Date: {trip.date}</p>
                  <p>Friends: {trip.friends.join(", ")}</p>
                </Card>
              </Link>
            </StyledList>
          ))}
          <Link href="/formpage">Add a new trip</Link>
        </Container>
      </ul>
      <Footer>
        <p>FOOTER</p>
      </Footer>
    </>
  );
}
const StyledList = styled.ul`
  list-style-type: none;
`;
