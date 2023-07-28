// export default function DeleteTripButton({ tripId, onDeleteTrip }) {
//   const handleDelete = () => {
//     onDeleteTrip(tripId);
//   };

//   return <button onClick={handleDelete}>Delete</button>;
// }

import styled from "styled-components";

const DeleteButton = styled.button`
  /* Your delete button styles here */
  background-color: transparent;
  border: none;
  cursor: pointer;
  svg {
    fill: black;
    width: 50px;
    height: 50px;
  }
`;

export default function DeleteTripButton({ tripId, onDeleteTrip }) {
  const handleDelete = () => {
    onDeleteTrip(tripId);
  };

  return (
    <DeleteButton onClick={handleDelete}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        viewBox="0 -960 960 960"
        width="16"
      >
        <path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z" />
      </svg>
    </DeleteButton>
  );
}
