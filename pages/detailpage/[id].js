import { useRouter } from "next/router";
import DetailCard from "@/components/DetailCard";

export default function DetailPage({ campingTrips }) {
  const router = useRouter();
  const { id } = router.query;

  let currentTrip = campingTrips.find((campingTrip) => campingTrip.id === id);
  console.log(campingTrips);

  return (
    <>
      <DetailCard campingTrips={currentTrip} />
    </>
  );
}
