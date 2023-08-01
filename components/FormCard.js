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
        <div>
          <ImageUpload setTripImages={setTripImages} tripImages={tripImages} />

          <StyledForm onSubmit={handleSubmit}>
            <StyledLabel htmlFor="location"></StyledLabel>
            <StyledInput
              type="text"
              id="location"
              name="location"
              placeholder="Location"
              required
            />
            <br />
            <StyledCheckboxContainer>
              <input
                type="checkbox"
                id="condition2"
                name="conditions"
                value="Sunny"
                onChange={handleConditionChange}
              />
              <StyledCheckboxLabel htmlFor="condition2">
                Sunny
              </StyledCheckboxLabel>
              <input
                type="checkbox"
                id="condition3"
                name="conditions"
                value="Cloudy"
                onChange={handleConditionChange}
              />
              <StyledCheckboxLabel htmlFor="condition3">
                Cloudy
              </StyledCheckboxLabel>
              <input
                type="checkbox"
                id="condition4"
                name="conditions"
                value="Rainy"
                onChange={handleConditionChange}
              />
              <StyledCheckboxLabel htmlFor="condition4">
                Rainy
              </StyledCheckboxLabel>
              <input
                type="checkbox"
                id="condition5"
                name="conditions"
                value="Windy"
                onChange={handleConditionChange}
              />
              <StyledCheckboxLabel htmlFor="condition5">
                Windy
              </StyledCheckboxLabel>
            </StyledCheckboxContainer>

            <br />
            <StyledLabel htmlFor="date"></StyledLabel>
            <StyledInput
              type="date"
              id="date"
              name="date"
              placeholder="Date"
              required
            />
            <br />
            <StyledLabel htmlFor="friends"></StyledLabel>
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
            <StyledButton type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 -960 960 960"
                width="48"
              >
                <path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z" />
              </svg>
            </StyledButton>
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
                <path d="M259-200v-60h310q70 0 120.5-46.5T740-422q0-69-50.5-115.5T569-584H274l114 114-42 42-186-186 186-186 42 42-114 114h294q95 0 163.5 64T800-422q0 94-68.5 158T568-200H259Z" />
              </svg>
            </StyledListPageButton>
          </CenteredLink>
        </FooterContainer>
      </Container>
    </>
  );
}

const StyledFriendInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledFriendInput = styled.input`
  margin-right: 10px;
`;

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

const StyledButton = styled.button`
  background-color: #19cbe7;
  color: black;
  border: none;
  padding: 10px;
  border-radius: 50%;
  font-size: 16px;
  cursor: pointer;
  gap: none;
  svg {
    fill: black;
    width: 25px;
    height: 25px;
  }
`;

const StyledList = styled.li`
  list-style-type: none;
`;
