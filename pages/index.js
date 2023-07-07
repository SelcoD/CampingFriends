import React from "react";
import CampingCard from "../components/CampingCard";
import { campingTrips } from "../data/campingTrips";

export default function HomePage() {
  return (
    <div>
      <h1>Organize your Camping Trips</h1>
      {campingTrips.map((trip) => (
        <CampingCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
}
