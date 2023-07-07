import React from "react";
import { Card } from "../styles/styles";

const CampingCard = ({ trip }) => {
  return (
    <Card>
      <h2>{trip.location}</h2>
      <p>Date: {trip.date}</p>
      <p>Friends: {trip.friends.join(", ")}</p>
    </Card>
  );
};

export default CampingCard;
