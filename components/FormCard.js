import { useState } from "react";
import { useRouter } from "next/router";
import { Container, Card, Header, Footer } from "../styles/styles";
import Link from "next/link";

export default function FormCard({ onAddTrip }) {
  const [conditions, setConditions] = useState([]);
  const [friends, setFriends] = useState([]);
  const [inputFriend, setInputFriend] = useState("");

  const router = useRouter();

  function handleConditionChange(event) {
    const condition = event.target.value;
    if (event.target.checked) {
      setConditions((prevConditions) => [...prevConditions, condition]);
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

    onAddTrip(data);
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
              <input
                type="checkbox"
                id="condition3"
                name="conditions"
                value="Cloudy"
                onChange={handleConditionChange}
              />
              <label htmlFor="condition3">Cloudy</label>
              <br />
              <input
                type="checkbox"
                id="condition4"
                name="conditions"
                value="Rainy"
                onChange={handleConditionChange}
              />
              <label htmlFor="condition4">Rainy</label>
              <br />
              <input
                type="checkbox"
                id="condition5"
                name="conditions"
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
                name="date"
                placeholder="Date"
                required
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
