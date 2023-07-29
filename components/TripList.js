import {
  Container,
  StyledCardLink,
  Header,
  CenteredLinkWrapper,
  CenteredLink,
  FooterContainer,
  StyledImageLogo,
  StyledUnorderedList,
} from "../styles/styles";
import Link from "next/link";
import styled from "styled-components";
import DeleteTripButton from "./DeleteTripButton";
import EditTripButton from "./EditTripButton";

export default function TripList({ campingTrips, onDeleteTrip }) {
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
      <StyledList>
        <Container>
          {campingTrips.map((trip) => (
            <StyledUnorderedList key={trip.id}>
              <StyledCardLink href={`/detailpage/${trip.id}`}>
                <StyledDetailCard>
                  <h2>{trip.location}</h2>
                  <p> {trip.date}</p>
                  {trip.friends.length > 0 ? (
                    <p>with {trip.friends.join(", ")}</p>
                  ) : (
                    <p>no friends added</p>
                  )}
                </StyledDetailCard>
              </StyledCardLink>
              <CenteredButtonWrapper>
                <DeleteTripButton
                  tripId={trip.id}
                  onDeleteTrip={onDeleteTrip}
                />
                <Link href={`/editformpage/${trip.id}`}>
                  <EditTripButton>Edit</EditTripButton>
                </Link>
              </CenteredButtonWrapper>
            </StyledUnorderedList>
          ))}
          <FooterContainer>
            <CenteredLink href="/formpage">
              <AddTripButton>+ new trip</AddTripButton>
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

const AddTripButton = styled.button`
  background-color: #19cbe7;
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

const CenteredButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0;
`;
