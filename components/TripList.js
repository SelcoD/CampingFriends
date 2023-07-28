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
import EditTripButton from "./EditTripButton";

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
                  <EditTripButton>Edit</EditTripButton>
                </Link>
              </CenteredLinkWrapper>
            </StyledList>
          ))}
          <FooterContainer>
            <CenteredLink href="/formpage">
              <button>Add a new trip</button>
            </CenteredLink>
          </FooterContainer>
        </Container>
      </StyledList>
    </>
  );
}

const StyledList = styled.li`
  list-style-type: none;
`;

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to right, #e66465, #9198e5);
  padding: 10px;
  text-align: center;
`;
