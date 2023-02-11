import React, { useEffect } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "../redux";
import { UserContextProvider } from "../UserContext";

import axios from "axios";

axios.defaults.withCredentials = true;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContextProvider>
    </Provider>
  );
}
