import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Gallery from "../components/Gallery";
import Filter from "../components/Filter";
import Canvas from "../components/Canvas";
import ConnectWallet from "../components/ConnectWallet";
import MintNFT from "../components/MintNFT";
import Footer from "../components/Footer";
import images from "../assets/images";

const FILTERS = ["birthday", "ramadan"];

export default function Home() {
  const [activeFilters, setActiveFilters] = useState([]);
  const [currentImg, setCurrentImg] = useState(images[0]);
  const [currentAccount, setCurrentAccount] = useState("");

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
      return setActiveFilters([...activeFilters, filter]);
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

      <main className={styles.main}>
        <Typography
          className={styles.highlight}
          variant="h1"
          component="h1"
          gutterBottom
          fontWeight={"bold"}
        >
          Gift an <span>NFT</span> Card
        </Typography>

        <p className={styles.description}>celebrate in a futuristic way</p>

        <Box my={3}>
          <Canvas image={currentImg} />
        </Box>

        <Box my={3} width="100%">
          <Gallery
            images={getFilteredImages()}
            key="gallery"
            onClick={handleImgClick}
          />
        </Box>

        <Box my={3}>
          <Filter
            filters={FILTERS}
            activeFilters={activeFilters}
            onClick={handleFilterClick}
          />
        </Box>

        <Box my={3}>
          {currentAccount === "" ? (
            <ConnectWallet setCurrentAccount={setCurrentAccount} />
          ) : (
            <MintNFT currentImg={currentImg} />
          )}
        </Box>
      </main>
      <Footer />
    </>
  );
}
