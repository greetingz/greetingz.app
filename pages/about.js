import Head from "next/head";
import styles from "../styles/Home.module.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import Footer from "../components/Footer";

export default function About() {
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

        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="300"
                image="/images/avatars/m.behairy.jpg"
                alt="Mohamed Behairy"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mohamed Behairy
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  sit cum, quas consequuntur deleniti.
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  color="primary"
                  href="https://github.com/MoShaaban"
                  target="_blank"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  href="https://github.com/MoShaaban"
                  target="_blank"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  href="https://github.com/MoShaaban"
                  target="_blank"
                >
                  <TwitterIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="300"
                image="/images/avatars/a.ismail.png"
                alt="Abdelrahman Ismail"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Abdelrahman Ismail
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  sit cum, quas consequuntur deleniti.
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  color="primary"
                  href="https://github.com/ismail9k"
                  target="_blank"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  href="https://www.linkedin.com/in/ismail9k/"
                  target="_blank"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  href="https://twitter.com/ismail_9k"
                  target="_blank"
                >
                  <TwitterIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </main>

      <Footer />
    </>
  );
}
