import TripList from "@/components/TripList";

export default function ListPage({ campingTrips }) {
  return (
    <>
      <TripList campingTrips={campingTrips} />
    </>
  );
}
