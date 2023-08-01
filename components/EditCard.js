import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Container,
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

  const allConditions = ["Sunny", "Cloudy", "Rainy", "Windy"];

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
        <div>
          <StyledForm onSubmit={handleSubmit}>
            <div>
              <StyledLabel htmlFor="location"></StyledLabel>
              <br />
              <StyledInput
                type="text"
                id="location"
                name="location"
                placeholder="Location"
                defaultValue={currentTrip.location}
                required
              />
              <br />

              {allConditions.map((condition) => (
                <StyledCheckboxContainer key={condition}>
                  <input
                    type="checkbox"
                    id={`condition-${condition}`}
                    name="conditions"
                    value={condition}
                    onChange={handleConditionChange}
                    checked={conditions.includes(condition)}
                  />
                  <StyledCheckboxLabel htmlFor={`condition-${condition}`}>
                    {condition}
                  </StyledCheckboxLabel>
                  <br />
                </StyledCheckboxContainer>
              ))}
              <StyledLabel htmlFor="date"></StyledLabel>
              <br />
              <StyledInput
                type="date"
                id="date"
                name="date"
                placeholder="Date"
                defaultValue={currentTrip.date}
                required
              />
              <br />
              <StyledLabel htmlFor="friends"></StyledLabel>
              <br />
              <div>
                <StyledInput
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
              <br />

              <button type="submit">Save changes</button>
            </div>
          </StyledForm>
        </div>
        <FooterContainer>
          <CenteredLink href="/">
            <StyledListPageButton>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 -960 960 960"
                width="48"
              >
                <path d="m274-450 248 248-42 42-320-320 320-320 42 42-248 248h526v60H274Z" />
              </svg>
            </StyledListPageButton>
          </CenteredLink>
        </FooterContainer>
      </Container>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

const StyledLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

const StyledCheckboxContainer = styled.div`
  flex-flow: row wrap;
  align-items: flex-start;
`;

const StyledCheckboxLabel = styled.label`
  margin-left: 0;
`;

const StyledList = styled.li`
  list-style-type: none;
`;
