import { Container, Card, Header, Footer } from "../styles/styles";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function DetailCard({ campingTrips }) {
  return (
    <>
      <Header>
        <h1>Check the details of your trips</h1>
      </Header>
      <Container>
        <Card>
          <h2>{campingTrips && campingTrips.day}</h2>
          <h2>{campingTrips && campingTrips.date}</h2>
          <h2>{campingTrips && campingTrips.location}</h2>
          <ul>
            {campingTrips &&
              campingTrips.images.map((source) => (
                <StyledList key={source}>
                  <Image
                    src={source}
                    width={300}
                    height={300}
                    alt={campingTrips && campingTrips.location}
                  />
                </StyledList>
              ))}
          </ul>
          <h4>{campingTrips && campingTrips.details.join(", ")}</h4>
          <h4>{campingTrips && campingTrips.friends.join(", ")}</h4>
        </Card>
        <Link href="/">
          <button>Go to List Page</button>
        </Link>
      </Container>
      <Footer>
        <p>FOOTER</p>
      </Footer>
    </>
  );
}
const StyledList = styled.ul`
  list-style-type: none;
`;
