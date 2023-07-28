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
                <StyledDetailCard>
                  <h2>{trip.location}</h2>
                  <p>Date: {trip.date}</p>
                  {trip.friends.length > 0 ? (
                    <p>Friends: {trip.friends.join(", ")}</p>
                  ) : (
                    <p>no friends added</p>
                  )}
                </StyledDetailCard>
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
              <AddTripButton>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  viewBox="0 -960 960 960"
                  width="16"
                >
                  <path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z" />
                </svg>
                new trip
              </AddTripButton>
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

const AddTripButton = styled.button`
  background-color: #e66465;
  color: black;
  border: none;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  gap: none;
  svg {
    fill: black;
    width: 16px;
    height: 16px;
  }
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
