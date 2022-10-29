import { useState, useEffect, useContext } from "react";

import Head from "next/head";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import Gallery from "../components/Gallery";
import Filter from "../components/Filter";
import Canvas from "../components/Canvas";
import ConnectWallet from "../components/ConnectWallet";
import MintNFT from "../components/MintNFT";
import Footer from "../components/Footer";
import images from "../assets/images";
import UserContext from "../store/UserContext";
import { Grid } from "@mui/material";
import { highlight } from "../styles/partial";

const FILTERS = (() => {
  const output = images.reduce((outputSet, current) => {
    current.tags.forEach((item) => outputSet.add(item));
    return outputSet;
  }, new Set());

  return [...output];
})();

export default function Home() {
  const [activeFilters, setActiveFilters] = useState([]);
  const [currentImg, setCurrentImg] = useState(images[0]);
  const { user } = useContext(UserContext);

  const checkIfWalletIsConnected = async () => {
    // TODO:
  };

  useEffect(() => {
    // checkIfWalletIsConnected();
  }, []);

  const getFilteredImages = () => {
    if (!activeFilters.length) {
      return images;
    }
    return images.filter((img) =>
      activeFilters.some((filter) => img.tags.includes(filter))
    );
  };

  const handleFilterClick = (filter) => {
    if (!activeFilters.includes(filter)) {
      return setActiveFilters([filter]);
    }
    setActiveFilters(activeFilters.filter((x) => x !== filter));
  };

  const handleImgClick = (img) => {
    setCurrentImg(img);
  };

  return (
    <>
      <Head>
        <title>Gif An NFT</title>
        <meta
          name="description"
          content="Gift an awesome NFT to your friends"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.main}>
        <Box sx={styles.wrapper}>
          <Grid container spacing={1} alignItems="stretch">
            <Grid item xs={6} md={3}>
              <Box my={3} sx={styles.filters}>
                <Filter
                  filters={FILTERS}
                  activeFilters={activeFilters}
                  onClick={handleFilterClick}
                />
              </Box>
              <Box>
                <Gallery
                  images={getFilteredImages()}
                  key="gallery"
                  onClick={handleImgClick}
                />
              </Box>
            </Grid>
            <Grid item xs={6} md={9}>
              <Paper elevation={3} sx={styles.canvas}>
                <Typography
                  sx={highlight}
                  variant="h3"
                  component="h1"
                  gutterBottom
                  fontWeight={"bold"}
                >
                  Gift an <span>NFT</span> Card
                </Typography>
                <Box>
                  <Canvas image={currentImg} />
                </Box>
                <MintNFT currentImg={currentImg} />
                <Box my={3}></Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </main>
      <Footer />
    </>
  );
}

const styles = {
  filters: {
    maxWidth: "100%",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    scrollBehavior: "smooth",
    "-webkitOverflowScrolling": "touch",
  },
  wrapper: {
    padding: "20px",
  },
  main: {
    padding: "20px",
    width: "100%",
  },
  description: {
    textAlign: "center",
    margin: 0,
    lineHeight: 1.5,
    fontSize: "1.5rem",
  },
  canvas: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
    paddingTop: "20px",
    borderRadius: "20px",
    height: "calc(100% - 20px)",
  },
};
