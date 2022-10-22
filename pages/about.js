import Head from "next/head";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Container from "@mui/material/Container";

import Footer from "../components/Footer";
import { highlight } from "../styles/partial";

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

      <main>
        <Container sx={styles.container}>
          <Typography
            sx={highlight}
            variant="h1"
            component="h1"
            gutterBottom
            fontWeight={"bold"}
          >
            Behind The Project
          </Typography>

          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item container xs={12} sm={6} md={4} justifyContent="center">
              <Card sx={{ maxWidth: 345 }}>
                <Box sx={styles.avatarWrapper}>
                  <CardMedia
                    component="img"
                    height="300"
                    image="/images/avatars/m.behairy.jpg"
                    alt="Mohamed Behairy"
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mohamed Behairy
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
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
                    href="https://www.linkedin.com/in/mohammadshaaban/"
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    href="https://twitter.com/Behairy313"
                    target="_blank"
                  >
                    <TwitterIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>

            <Grid item container xs={12} sm={6} md={4} justifyContent="center">
              <Card sx={{ maxWidth: 345 }}>
                <Box sx={styles.avatarWrapper}>
                  <CardMedia
                    component="img"
                    height="300"
                    image="/images/avatars/a.ismail.png"
                    alt="Abdelrahman Ismail"
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Abdelrahman Ismail
                  </Typography>
                </CardContent>
                <CardActions align="center">
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

            <Grid item container xs={12} sm={6} md={4} justifyContent="center">
              <Card sx={{ maxWidth: 345 }}>
                <Box sx={styles.avatarWrapper}>
                  <CardMedia
                    component="img"
                    height="300"
                    image="/images/avatars/e.herawy.jpg"
                    alt="Abdelrahman Ismail"
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Eman Herawy
                  </Typography>
                </CardContent>
                <CardActions align="center">
                  <IconButton
                    color="primary"
                    href="https://github.com/EmanHerawy"
                    target="_blank"
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    href="https://www.linkedin.com/in/emanherawy/"
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    href="https://twitter.com/Eman_Herawy"
                    target="_blank"
                  >
                    <TwitterIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>

      <Footer />
    </>
  );
}

const styles = {
  container: {
    padding: "4rem 0",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatarWrapper: {
    position: "relative",
    "&:after": {
      content: `" "`,
      display: "block",
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      right: 0,
      left: 0,
      backgroundImage: "linear-gradient(135deg, #6e8efb, #a777e3)",
      opacity: 0.95,
      mixBlendMode: "hard-light",
    },
  },
};
