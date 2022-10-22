import { useEffect, useState } from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import AppNavbar from "../components/AppNavbar";

import createEmotionCache from "../utility/createEmotionCache";
import darkTheme from "../styles/theme/darkTheme";
import UserContext from "../store/UserContext";
import "../styles/globals.css";
import { Magic } from "magic-sdk";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [user, setUser] = useState("");

  const checkUserLoggedIn = () => async () => {
    try {
      const m = new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY);
      const isLoggedIn = await m.user.isLoggedIn();
      if (!isLoggedIn) {
        return;
      }

      const idToken = await m.user.getIdToken();
      setUser(idToken);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(checkUserLoggedIn, []);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <UserContext.Provider value={{ user, setUser }}>
          <AppNavbar />
          <Component {...pageProps} />
        </UserContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
