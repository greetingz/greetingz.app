import { useState } from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Container from "@mui/material/Container";
import AppNavbar from "../components/AppNavbar";

import createEmotionCache from "../utility/createEmotionCache";
import { web3ModalConnect } from "../utility/web3Modal";
import darkTheme from "../styles/theme/darkTheme";
import UserContext from "../store/UserContext";
import "../styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [user, setUser] = useState("");

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <UserContext.Provider
          value={{ user, setUser, connectWallet: web3ModalConnect }}
        >
          <AppNavbar />
          <Component {...pageProps} />
        </UserContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
