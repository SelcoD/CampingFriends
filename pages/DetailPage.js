import { campingTrips } from "../data/campingTrips";
import { Container, Card, Header, Footer } from "../styles/styles";
import Image from "next/image";

export default function DetailPage() {
  const trip = campingTrips[0];

  return (
    <>
      <Header>
        <h1>Check the details fo your trips</h1>
      </Header>
      <Container>
        <Card>
          <h2>{trip.day}</h2>
          <h2>{trip.date}</h2>
          <h2>{trip.location}</h2>
          {trip.images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index}`} />
          ))}
          <h4>{trip.details.join(", ")}</h4>
          <h4>{trip.friends.join(", ")}</h4>
        </Card>
      </Container>
      <Footer>
        <p>FOOTER</p>
      </Footer>
    </>
  );
}
