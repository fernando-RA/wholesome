import React from "react";
import ReactDOM from "react-dom";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

import "../styles/globals.css";

const connectors = {
  injected: {},
};
const supportedChainIds = [4];

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
