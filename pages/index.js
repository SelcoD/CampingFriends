import TripList from "@/components/TripList";

export default function ListPage({ campingTrips }) {
  console.log(campingTrips);

  return (
    <>
      <TripList campingTrips={campingTrips} />
    </>
  );
}
