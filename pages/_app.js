import GlobalStyle from "../styles/globalStyles";
import useLocalStorageState from "use-local-storage-state";
import { v4 as uuidv4 } from "uuid";

export default function App({ Component, pageProps }) {
  const [campingTrips, setCampingTrips] = useLocalStorageState(
    "_CAMPING-TRIPS",
    {
      defaultValue: [],
    }
  );

  function handleAddTrip(newCampingTrip) {
    setCampingTrips((prevTrips) => [
      ...prevTrips,
      { ...newCampingTrip, id: uuidv4() },
    ]);
  }
  function handleDeleteTrip(tripId) {
    const updatedTrips = campingTrips.filter((trip) => trip.id !== tripId);
    setCampingTrips(updatedTrips);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        campingTrips={campingTrips}
        handleAddTrip={handleAddTrip}
        onDeleteTrip={handleDeleteTrip}
      />
    </>
  );
}
