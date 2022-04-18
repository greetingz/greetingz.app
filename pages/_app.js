import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Container from '@mui/material/Container';

import createEmotionCache from '../utility/createEmotionCache';
import darkTheme from '../styles/theme/darkTheme';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp
