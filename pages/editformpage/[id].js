import { useRouter } from "next/router";
import EditCard from "@/components/EditCard";

export default function EditFormPage({ campingTrips }) {
  const router = useRouter();
  const { id } = router.query;
  if (!id) {
    return <div>Loading...</div>;
  }

  const currentTrip = campingTrips.find((campingTrip) => campingTrip.id === id);

  if (!currentTrip) {
    return <div>Trip not found</div>;
  }

  return (
    <>
      <EditCard campingTrips={campingTrips} currentTrip={currentTrip} />
    </>
  );
}
