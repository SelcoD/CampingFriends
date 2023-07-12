import { useRouter } from "next/router";

import { Container, Card, Header, Footer } from "../../styles/styles";
import Image from "next/image";
import Link from "next/link";

export default function DetailPage({ campingTrips }) {
  const router = useRouter();
  const { id } = router.query;

  let trip = campingTrips.find((campingTrip) => campingTrip.id === id);
  console.log(campingTrips);

  return (
    <>
      <Header>
        <h1>Check the details of your trips</h1>
      </Header>
      <Container>
        <Card>
          <h2>{trip && trip.day}</h2>
          <h2>{trip && trip.date}</h2>
          <h2>{trip && trip.location}</h2>
          <ul>
            {trip &&
              trip.images.map((source) => (
                <li key={source}>
                  <Image
                    src={source}
                    width={300}
                    height={300}
                    alt={trip && trip.location}
                  />
                </li>
              ))}
          </ul>
          <h4>{trip && trip.details.join(", ")}</h4>
          <h4>{trip && trip.friends.join(", ")}</h4>
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
