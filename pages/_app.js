import GlobalStyle from "../styles/globalStyles";
import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
