import { campingTrips } from "../data/campingTrips";
import { Container, Card, Header, Footer } from "../styles/styles";
import Image from "next/image";
import Link from "next/link";

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
          <ul>
            {trip.images.map(({ id, images, location }) => (
              <li key={id}>
                <Image src={images} width={300} height={300} alt={location} />
              </li>
            ))}
          </ul>
          <h4>{trip.details.join(", ")}</h4>
          <h4>{trip.friends.join(", ")}</h4>
        </Card>
        <Link href={`/`}>
          <button>Go to List Page</button>
        </Link>
      </Container>

      <Footer>
        <p>FOOTER</p>
      </Footer>
    </>
  );
}

/**/
