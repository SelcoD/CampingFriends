import { useRouter } from "next/router";
import { Container, Card, Header, Footer } from "../styles/styles";
import Link from "next/link";

export default function FormPage() {
  const router = useRouter();

  return (
    <>
      <Header>
        <h1>Add a new trip to your list</h1>
      </Header>
      <Container>
        <Card>
          <form>
            <div>
              <label htmlFor="location">Location:</label>
              <br />
              <input
                type="text"
                name="location"
                placeholder="Location"
                required
              />
              <br />
              <input type="checkbox" id="condition1" />
              <label htmlFor="condition1">Good weather</label>
              <br />
              <input type="checkbox" id="condition2" />
              <label htmlFor="condition2">Sunny</label>
              <br />
              <input type="checkbox" id="condition3" />
              <label htmlFor="condition3">Cloudy</label>
              <br />
              <input type="checkbox" id="condition4" />
              <label htmlFor="condition4">Rainy</label>
              <br />
              <input type="checkbox" id="condition5" />
              <label htmlFor="condition5">Snowy</label>
              <br />
              <label htmlFor="date">Date:</label>
              <br />
              <input type="date" placeholder="Date" required />
              <br />
              <label htmlFor="friends">Friends:</label>
              <br />
              <input type="text" name="friends" placeholder="Friends" />
            </div>
            <div>
              <button type="submit">+ Add this trip</button>
            </div>
          </form>
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
