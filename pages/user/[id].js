import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import Typography from "@mui/material/Typography";
import { gql } from "@apollo/client";
import client from "../../apollo-client";

import Footer from "../../components/Footer";
import decodeBase64 from "../../utility/decodeBase64";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function About(props) {
  return (
    <>
      <Head>
        <title>user</title>
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
          Timeline
        </Typography>

        <Timeline position="right">
          {props.images.map((item) => (
            <TimelineItem key={item.image}>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={400}
                />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps(props) {
  const { id } = props.params;
  const { data: usersData } = await client.query({
    query: gql`
      query Users($id: ID) {
        users(where: { id: $id }) {
          tokens {
            id
          }
        }
      }
    `,
    variables: { id: id.toLowerCase() },
  });

  const tokenIds = usersData?.users[0]?.tokens?.map(({ id }) => id) ?? [];
  const { data: tokensData } = await client.query({
    query: gql`
      query Tokens($tokenIds: [ID]) {
        tokens(where: { id_in: $tokenIds }) {
          id
          tokenID
          contentURI
          name
        }
      }
    `,
    variables: { tokenIds },
  });

  const images = tokensData.tokens.map(({ contentURI }) =>
    decodeBase64(contentURI)
  );
  return {
    props: {
      id,
      images,
    },
  };
}
