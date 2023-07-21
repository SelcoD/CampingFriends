import { useState } from "react";
import { useRouter } from "next/router";
import { Container, Card, Header, Footer } from "../styles/styles";
import Link from "next/link";

export default function EditCard({ currentTrip, onEditTrip }) {
  const [location, setLocation] = useState(currentTrip.location || "");
  const [date, setDate] = useState(currentTrip.date || "");
  const [conditions, setConditions] = useState(currentTrip.conditions || []);
  const [friends, setFriends] = useState(currentTrip.friends || []);
  const [inputFriend, setInputFriend] = useState("");

  const router = useRouter();

  function handleConditionChange(event) {
    const condition = event.target.value;
    if (event.target.checked) {
      if (!conditions.includes(condition)) {
        setConditions((prevConditions) => [...prevConditions, condition]);
      }
    } else {
      setConditions((prevConditions) =>
        prevConditions.filter((_condition) => _condition !== condition)
      );
    }
  }

  function handleAddFriend() {
    setFriends((prevFriends) => [...prevFriends, inputFriend]);
    setInputFriend("");
  }

  function handleInputChange(event) {
    setInputFriend(event.target.value);
  }

  function handleDeleteFriend(friendToDelete) {
    setFriends(friends.filter((friend) => friend !== friendToDelete));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    data.friends = friends;
    data.conditions = conditions;

    onEditTrip({ ...currentTrip, ...data });

    router.push("/");
  };

  return (
    <>
      <Header>
        <h1>Edit the trip</h1>
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
                onChange={(e) => setLocation(e.target.value)}
              />
              <br />
              <label htmlFor="date">Date:</label>
              <br />
              <input
                type="date"
                id="date"
                name="date"
                placeholder="Date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <br />
              <input
                type="checkbox"
                id="condition1"
                name="conditions"
                value="Good weather"
                onChange={handleConditionChange}
              />
              <label htmlFor="conditin1">Good weather</label>
              <br />
              <input
                type="checkbox"
                id="condition2"
                name="conditions"
                value="Sunny"
                onChange={handleConditionChange}
              />
              <label htmlFor="condition2">Sunny</label>
              <br />
              {/* Restliche Checkboxen und Felder bleiben unverändert */}
              <label htmlFor="friends">Friends:</label>
              <br />
              <div>
                <input
                  type="text"
                  id="friends"
                  name="friends"
                  placeholder="Friends"
                  value={inputFriend}
                  onChange={handleInputChange}
                />
                <button type="button" onClick={handleAddFriend}>
                  Add
                </button>
              </div>
              <ul>
                {friends.map((friend, index) => (
                  <li key={index}>
                    {friend}
                    <button
                      type="button"
                      onClick={() => handleDeleteFriend(friend)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <button type="submit">Save changes</button>
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
