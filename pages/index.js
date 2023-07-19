import TripList from "@/components/TripList";

export default function ListPage({ campingTrips, onDeleteTrip }) {
  return (
    <>
      <TripList campingTrips={campingTrips} onDeleteTrip={onDeleteTrip} />
    </>
  );
}
