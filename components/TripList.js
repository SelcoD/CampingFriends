import { Container, Card, Header, Footer } from "../styles/styles";
import Link from "next/link";
import styled from "styled-components";
import DeleteTripButton from "./DeleteTripButton";

export default function TripList({ campingTrips, onDeleteTrip }) {
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
                  {trip.friends.length > 0 ? (
                    <p>Friends: {trip.friends.join(", ")}</p>
                  ) : (
                    <p>no friends added</p>
                  )}
                </Card>
              </Link>
              <DeleteTripButton tripId={trip.id} onDeleteTrip={onDeleteTrip} />
              <Link href={`/editformpage/${trip.id}`}>
                <button>Edit</button>
              </Link>
            </StyledList>
          ))}
          <Link href="/formpage">Add a new trip</Link>
        </Container>
      </ul>
    </>
  );
}

const StyledList = styled.ul`
  list-style-type: none;
`;
