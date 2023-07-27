import {
  Container,
  Card,
  Header,
  CenteredLinkWrapper,
  CenteredLink,
} from "../styles/styles";
import Link from "next/link";
import styled from "styled-components";
import DeleteTripButton from "./DeleteTripButton";

export default function TripList({ campingTrips, onDeleteTrip }) {
  return (
    <>
      <Header>
        <h1>Organize your Trips</h1>
      </Header>
      <StyledList>
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
              <CenteredLinkWrapper>
                <DeleteTripButton
                  tripId={trip.id}
                  onDeleteTrip={onDeleteTrip}
                />
                <Link href={`/editformpage/${trip.id}`}>
                  <button>Edit</button>
                </Link>
              </CenteredLinkWrapper>
            </StyledList>
          ))}
          <CenteredLinkWrapper>
            <CenteredLink href="/formpage">Add a new trip</CenteredLink>
          </CenteredLinkWrapper>
        </Container>
      </StyledList>
    </>
  );
}

const StyledList = styled.li`
  list-style-type: none;
`;
