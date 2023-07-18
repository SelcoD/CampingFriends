import { useEffect, useState } from "react";
import GlobalStyle from "../styles/globalStyles";

export default function App({ Component, pageProps }) {
  const [campingTrips, setCampingTrips] = useState([]);
  console.log(campingTrips);
  useEffect(() => {
    const storedTrips = JSON.parse(localStorage.getItem("campingTrips")) || [];
    setCampingTrips(storedTrips);
  }, []);
  console.log(campingTrips);
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} campingTrips={campingTrips} />
    </>
  );
}
