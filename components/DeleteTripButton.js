export default function DeleteTripButton({ tripId, onDeleteTrip }) {
  const handleDelete = () => {
    onDeleteTrip(tripId);
  };

  return <button onClick={handleDelete}>Delete</button>;
}
