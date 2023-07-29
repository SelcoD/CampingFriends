import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Card,
  Header,
  CenteredLink,
  StyledImageLogo,
  StyledListPageButton,
  FooterContainer,
} from "../styles/styles";
import styled from "styled-components";

export default function EditCard({ currentTrip, onEditTrip }) {
  const [conditions, setConditions] = useState([]);
  const [friends, setFriends] = useState([]);
  const [inputFriend, setInputFriend] = useState("");

  const router = useRouter();

  const allConditions = ["Good weather", "Sunny", "Cloudy", "Rainy", "Snowy"];

  useEffect(() => {
    setConditions(currentTrip.conditions || []);
    setFriends(currentTrip.friends || []);
  }, [currentTrip]);

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
        <StyledImageLogo
          src="/logo.png"
          alt="My Logo"
          width={200}
          height={100}
        />
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
                  +
                </button>
              </div>
              <li>
                {friends.map((friend, index) => (
                  <StyledList key={index}>
                    {friend}
                    <button
                      type="button"
                      onClick={() => handleDeleteFriend(friend)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="15"
                        viewBox="0 -960 960 960"
                        width="15"
                      >
                        <path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z" />
                      </svg>
                    </button>
                  </StyledList>
                ))}
              </li>

              <button type="submit">Save changes</button>
            </div>
          </form>
        </Card>
        <FooterContainer>
          <CenteredLink href="/">
            <StyledListPageButton>Back to List Page</StyledListPageButton>
          </CenteredLink>
        </FooterContainer>
      </Container>
    </>
  );
}

const StyledList = styled.li`
  list-style-type: none;
`;
