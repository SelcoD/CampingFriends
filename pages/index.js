import CampingCard from "../components/CampingCard";
import { campingTrips } from "../data/campingTrips";
import { Container, Card, Header, Footer } from "../styles/styles";
import Link from "next/link";

export default function ListPage() {
  return (
    <>
      <Header>
        <h1>Organize your Trips</h1>
      </Header>
      <Container>
        {campingTrips.map((trip) => (
          <Link href={`/DetailPage/${trip.id}`} key={trip.id}>
            <Card key={trip.id}>
              <CampingCard trip={trip} />
            </Card>
          </Link>
        ))}
      </Container>
      <Footer>
        <p>FOOTER</p>
      </Footer>
    </>
  );
}
