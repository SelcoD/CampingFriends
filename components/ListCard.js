const ListCard = ({ trip }) => {
  return (
    <div>
      <h2>{trip.location}</h2>
      <p>Date: {trip.date}</p>
      <p>Friends: {trip.friends.join(", ")}</p>
    </div>
  );
};

export default ListCard;