import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Card, Header, Footer } from "../styles/styles";
import Link from "next/link";

export default function EditCard({ currentTrip, onEditTrip }) {
  const [conditions, setConditions] = useState([]);
  const [friends, setFriends] = useState([]);
  const [inputFriend, setInputFriend] = useState("");

  const router = useRouter();

  // Liste von möglichen Conditions (alle verfügbaren Conditions)
  const allConditions = [
    "Good weather",
    "Sunny",
    "Cloudy",
    "Rainy",
    "Snowy",
    // Fügen Sie hier weitere Conditions hinzu, wenn benötigt
  ];

  useEffect(() => {
    // Setzen der aktuellen Conditions des Trips in den State
    setConditions(currentTrip.conditions || []);
    // Setzen der aktuellen Freunde des Trips in den State
    setFriends(currentTrip.friends || []);
  }, [currentTrip]);

  function handleConditionChange(event) {
    const condition = event.target.value;
    if (event.target.checked) {
      // Wenn die Checkbox aktiviert wird, fügen Sie die Condition hinzu, wenn sie noch nicht vorhanden ist
      if (!conditions.includes(condition)) {
        setConditions((prevConditions) => [...prevConditions, condition]);
      }
    } else {
      // Wenn die Checkbox deaktiviert wird, entfernen Sie die Condition, falls sie vorhanden ist
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
                defaultValue={currentTrip.location}
                required
              />
              <br />
              {/* Anzeigen aller Conditions mit Checkboxen */}
              {allConditions.map((condition) => (
                <div key={condition}>
                  <input
                    type="checkbox"
                    id={`condition-${condition}`}
                    name="conditions"
                    value={condition}
                    onChange={handleConditionChange}
                    checked={conditions.includes(condition)}
                  />
                  <label htmlFor={`condition-${condition}`}>{condition}</label>
                  <br />
                </div>
              ))}
              <label htmlFor="date">Date:</label>
              <br />
              <input
                type="date"
                id="date"
                name="date"
                placeholder="Date"
                defaultValue={currentTrip.date}
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
