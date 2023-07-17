import { useEffect, useState } from "react";
import TripList from "@/components/TripList";

export default function ListPage() {
  const [campingTrips, setCampingTrips] = useState([]);

  useEffect(() => {
    const storedTrips = JSON.parse(localStorage.getItem("campingTrips")) || [];
    setCampingTrips(storedTrips);
  }, []);

  return (
    <>
      <TripList campingTrips={campingTrips} />
    </>
  );
}
