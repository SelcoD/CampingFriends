import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function EditPage({ campingTrips }) {
  const router = useRouter();
  const { id } = router.query;

  const [trip, setTrip] = useState(null);
  const [location, setLocation] = useState("");
  const [conditions, setConditions] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const selectedTrip = campingTrips.find((trip) => trip.id === id);
    setTrip(selectedTrip);
    setLocation(selectedTrip?.location || "");
    setConditions(selectedTrip?.conditions || []);
    setFriends(selectedTrip?.friends || []);
  }, [id, campingTrips]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleConditionChange = (event) => {
    const condition = event.target.value;
    if (event.target.checked) {
      setConditions((prevConditions) => [...prevConditions, condition]);
    } else {
      setConditions((prevConditions) =>
        prevConditions.filter((c) => c !== condition)
      );
    }
  };

  const handleFriendChange = (event) => {
    setFriends(event.target.value);
  };

  const handleSave = () => {
    const editedTrip = {
      ...trip,
      location,
      conditions,
      friends,
    };
    const updatedTrips = campingTrips.map((t) =>
      t.id === id ? editedTrip : t
    );
    localStorage.setItem("_CAMPING-TRIPS", JSON.stringify(updatedTrips));
    router.push("/");
  };

  if (!trip) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Trip: {trip.location}</h1>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div>
        <label htmlFor="conditions">Conditions:</label>
        <br />
        <input
          type="checkbox"
          id="condition1"
          value="Good weather"
          checked={conditions.includes("Good weather")}
          onChange={handleConditionChange}
        />
        <label htmlFor="condition1">Good weather</label>
        <br />
        <input
          type="checkbox"
          id="condition2"
          value="Sunny"
          checked={conditions.includes("Sunny")}
          onChange={handleConditionChange}
        />
        <label htmlFor="condition2">Sunny</label>
        <br />
        <input
          type="checkbox"
          id="condition3"
          value="Cloudy"
          checked={conditions.includes("Cloudy")}
          onChange={handleConditionChange}
        />
        <label htmlFor="condition3">Cloudy</label>
        <br />
        <input
          type="checkbox"
          id="condition4"
          value="Rainy"
          checked={conditions.includes("Rainy")}
          onChange={handleConditionChange}
        />
        <label htmlFor="condition4">Rainy</label>
        <br />
        <input
          type="checkbox"
          id="condition5"
          value="Snowy"
          checked={conditions.includes("Snowy")}
          onChange={handleConditionChange}
        />
        <label htmlFor="condition5">Snowy</label>
      </div>
      <div>
        <label htmlFor="friends">Friends:</label>
        <input
          type="text"
          id="friends"
          value={friends}
          onChange={handleFriendChange}
        />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
