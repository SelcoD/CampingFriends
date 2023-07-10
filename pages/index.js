import CampingCard from "../components/CampingCard";
import { campingTrips } from "../data/campingTrips";
import { Container, Card, Header, Footer } from "../styles/styles";

export default function ListPage() {
  return (
    <>
      <Header>
        <h1>Organize your Trips</h1>
      </Header>
      <Container>
        {campingTrips.map((trip) => (
          <Card key={trip.id}>
            <CampingCard trip={trip} />
          </Card>
        ))}
      </Container>
      <Footer>
        <p>FOOTER</p>
      </Footer>
    </>
  );
}
