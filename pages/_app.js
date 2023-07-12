import { campingTrips } from "@/data/campingTrips";
import GlobalStyle from "../styles/globalStyles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} campingTrips={campingTrips} />
    </>
  );
}
