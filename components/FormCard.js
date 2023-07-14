import { useState } from "react";
import { Container, Card, Header, Footer } from "../styles/styles";
import Link from "next/link";

export default function FormCard() {
  const [friend, setFriend] = useState("");
  const [friendList, setFriendList] = useState([]);

  const handleFriendChange = (event) => {
    setFriend(event.target.value);
  };

  const handleAddFriend = () => {
    if (friend.trim() !== "") {
      setFriendList([...friendList, friend]);
      setFriend("");
    }
  };

  const handleDeleteFriend = (friendIndex) => {
    const updatedFriendList = friendList.filter(
      (_, index) => index !== friendIndex
    );
    setFriendList(updatedFriendList);
  };

  const handleEditFriend = (friendIndex, newValue) => {
    const updatedFriendList = friendList.map((friend, index) => {
      if (index === friendIndex) {
        return newValue;
      }
      return friend;
    });
    setFriendList(updatedFriendList);
  };

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
                id="location"
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
              <input type="date" id="date" placeholder="Date" required />
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
                {friendList.map((friend, index) => (
                  <li key={index}>
                    {friend}
                    <button
                      type="button"
                      onClick={() => handleDeleteFriend(index)}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const newValue = prompt("Enter new value");
                        handleEditFriend(index, newValue);
                      }}
                    >
                      Edit
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <button type="submit">+ Add this trip</button>
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
