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
import images from "../assets/images";

const FILTERS = ["birthday", "ramadan"];
export default function Home() {
  const [activeFilters, setActiveFilters] = useState(FILTERS);
  const [currentImg, setCurrentImg] = useState(images[0]);
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Make sure you have metamask!");
      return;
    }

    // Check if we're authorized to access the user's wallet
    const accounts = await ethereum.request({ method: "eth_accounts" });

    // User can have multiple authorized accounts, we grab the first one if its there!
    if (accounts.length) {
      setCurrentAccount(accounts[0]);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const getFilteredImages = () =>
    images.filter((img) =>
      activeFilters.some((filter) => img.tags.includes(filter))
    );

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
        <title>About</title>
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
          Behind The Project
        </Typography>


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

      <footer className={styles.footer}></footer>
    </>
  );
}