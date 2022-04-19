import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Gallery from "../components/Gallery";
import Filter from "../components/Filter";
import Canvas from "../components/Canvas";
import images from "../assets/images";

const FILTERS = ["birthday", "ramadan"];
export default function Home() {
  const [activeFilters, setActiveFilters] = useState(FILTERS);
  const [currentImg, setCurrentImg] = useState(images[0]);

  const getFilteredImages = () =>
    images.filter((img) => activeFilters.some((filter) => img.tags.includes(filter)));

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
    <div className={styles.container}>
      <Head>
        <title>Gif An NFT</title>
        <meta
          name="description"
          content="Gift an awesome NFT to your friends"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typography variant="h1" component="h1" gutterBottom>
          Gift an NFT Card
        </Typography>

        <p className={styles.description}>celebrate in a futuristic way</p>

        <Box mb={10} mt={10}>
          <Canvas image={currentImg} />
        </Box>
        
        <Gallery images={getFilteredImages()} key="gallery" onClick={handleImgClick}/>
        <Box mb={10} mt={10}>
          <Filter
            filters={FILTERS}
            activeFilters={activeFilters}
            onClick={handleFilterClick}
          />
        </Box>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
