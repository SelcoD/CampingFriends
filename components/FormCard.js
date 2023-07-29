import { useState } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Header,
  CenteredLink,
  FooterContainer,
  StyledImageLogo,
  StyledListPageButton,
} from "../styles/styles";
import ImageUpload from "./ImageUpload";
import styled from "styled-components";

export default function FormCard({ onAddTrip }) {
  const [conditions, setConditions] = useState([]);
  const [friends, setFriends] = useState([]);
  const [inputFriend, setInputFriend] = useState("");
  const [tripImages, setTripImages] = useState([]);

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

  async function handleUploadImage(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const response = await fetch("../api/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const newImage = await response.json();
      setTripImages([...tripImages, newImage]);
    }
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

    const dataWithImages = { ...data, tripImages };

    onAddTrip(dataWithImages);
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
        <StyledFormCard>
          <ImageUpload onSubmit={handleUploadImage} tripImages={tripImages} />

          <form onSubmit={handleSubmit}>
            <label htmlFor="location"></label>
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
            <label htmlFor="condition1">Good weather</label>
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
            <label htmlFor="date"></label>
            <input
              type="date"
              id="date"
              name="date"
              placeholder="Date"
              required
            />
            <br />
            <label htmlFor="friends"></label>
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
            <ul>
              {friends.map((friend, index) => (
                <StyledList key={`${friend}-${index}`}>
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
            </ul>
            <StyledButton type="submit">Add to Trip</StyledButton>
          </form>
        </StyledFormCard>
        <FooterContainer>
          <CenteredLink href="/">
            <StyledListPageButton>Back to List Page</StyledListPageButton>
          </CenteredLink>
        </FooterContainer>
      </Container>
    </>
  );
}

const StyledButton = styled.button`
  background-color: #19cbe7;
  color: black;
  border: none;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  gap: none;
`;

const StyledList = styled.li`
  list-style-type: none;
`;

const StyledFormCard = styled.article`
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 800px;
  border-radius: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
