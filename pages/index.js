import TripList from "@/components/TripList";

export default function ListPage({ campingTrips, onDeleteTrip, onEditTrip }) {
  return (
    <TripList
      campingTrips={campingTrips}
      onDeleteTrip={onDeleteTrip}
      onEditTrip={onEditTrip}
    />
  );
}
