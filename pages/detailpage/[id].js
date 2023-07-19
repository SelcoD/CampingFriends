import { useRouter } from "next/router";
import DetailCard from "@/components/DetailCard";

export default function DetailPage({ campingTrips }) {
  const router = useRouter();
  const { id } = router.query;
  if (!id) {
    return;
  }
  const currentTrip = campingTrips.find((campingTrip) => campingTrip.id === id);

  return (
    <>
      <DetailCard campingTrip={currentTrip} />
    </>
  );
}
