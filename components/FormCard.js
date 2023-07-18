import { useState } from "react";
import { useRouter } from "next/router";
import { Container, Card, Header, Footer } from "../styles/styles";
import Link from "next/link";

export default function FormCard() {
  const [location, setLocation] = useState("");
  const [conditions, setConditions] = useState([]);
  const [date, setDate] = useState("");
  const [friends, setFriends] = useState([]);
  const [friend, setFriend] = useState("");

  const router = useRouter();

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleConditionChange = (event) => {
    const condition = event.target.value;
    if (event.target.checked) {
      setConditions([...conditions, condition]);
    } else {
      setConditions(conditions.filter((c) => c !== condition));
    }
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleFriendChange = (event) => {
    setFriend(event.target.value);
  };

  const handleAddFriend = () => {
    if (friend.trim() !== "") {
      setFriends([...friends, friend]);
      setFriend("");
    }
  };

  const handleDeleteFriend = (index) => {
    const updatedFriends = [...friends];
    updatedFriends.splice(index, 1);
    setFriends(updatedFriends);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCampingTrip = {
      id: Math.random().toString(),
      day: "",
      date: date,
      location: location,
      details: conditions,
      friends: friends,
      images: [],
    };
    // Speichern der Daten im Local Storage
    const existingTrips =
      JSON.parse(localStorage.getItem("campingTrips")) || [];
    const updatedTrips = [...existingTrips, newCampingTrip];
    localStorage.setItem("campingTrips", JSON.stringify(updatedTrips));
    // Weiterleitung zur ListPage
    router.push("/");
  };

  return (
    <>
      <Header>
        <h1>Add a new trip to your list</h1>
      </Header>
      <Container>
        <Card>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="location">Location:</label>
              <br />
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Location"
                required
                value={location}
                onChange={handleLocationChange}
              />
              <br />
              <input
                type="checkbox"
                id="condition1"
                value="Good weather"
                onChange={handleConditionChange}
              />
              <label htmlFor="condition1">Good weather</label>
              <br />
              <input
                type="checkbox"
                id="condition2"
                value="Sunny"
                onChange={handleConditionChange}
              />
              <label htmlFor="condition2">Sunny</label>
              <br />
              <input
                type="checkbox"
                id="condition3"
                value="Cloudy"
                onChange={handleConditionChange}
              />
              <label htmlFor="condition3">Cloudy</label>
              <br />
              <input
                type="checkbox"
                id="condition4"
                value="Rainy"
                onChange={handleConditionChange}
              />
              <label htmlFor="condition4">Rainy</label>
              <br />
              <input
                type="checkbox"
                id="condition5"
                value="Snowy"
                onChange={handleConditionChange}
              />
              <label htmlFor="condition5">Snowy</label>
              <br />
              <label htmlFor="date">Date:</label>
              <br />
              <input
                type="date"
                id="date"
                placeholder="Date"
                required
                value={date}
                onChange={handleDateChange}
              />
              <br />
              <label htmlFor="friends">Friends:</label>
              <br />
              <div>
                <input
                  type="text"
                  id="friends"
                  name="friends"
                  placeholder="Friends"
                  value={friend}
                  onChange={handleFriendChange}
                />
                <button type="button" onClick={handleAddFriend}>
                  +
                </button>
              </div>
              <ul>
                {friends.map((friend, index) => (
                  <li key={index}>
                    {friend}
                    <button
                      type="button"
                      onClick={() => handleDeleteFriend(index)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <button type="submit">Add to Trip</button>
            </div>
          </form>
        </Card>
        <Link href="/">Go to List Page</Link>
      </Container>
      <Footer>
        <p>FOOTER</p>
      </Footer>
    </>
  );
}
