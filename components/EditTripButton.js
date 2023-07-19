export default function EditTripButton({ tripId, onEditTrip }) {
  const handleEdit = () => {
    onEditTrip(tripId);
  };

  return <button onClick={handleEdit}>Edit</button>;
}
