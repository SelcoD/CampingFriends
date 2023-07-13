import { Container, Card, Header, Footer } from "../styles/styles";
import Link from "next/link";
import ListCard from "./ListCard";
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
                  <ListCard trip={trip} />
                </Card>
              </Link>
            </StyledList>
          ))}
          <Link href="/formpage">
            <button>Add a new trip</button>
          </Link>
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
