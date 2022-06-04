import Head from "next/head";
import NextLink from "next/link";
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
  const getUserId = (id) => {
    const charCount = 5;
    const start = id.slice(0, charCount);
    const end = id.slice(id.length - charCount);
    return `${start}...${end}`;
  };
  return (
    <>
      <Head>
        <title>Users</title>
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
          {props.images.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <img
                  src={item.nft.image}
                  alt={item.name}
                  loading="lazy"
                  width={400}
                />

                <div>
                  <span>Owner: </span>
                  <NextLink href={`/users/${item.owner}`} passHref>
                    <a className={styles.highlight}>{getUserId(item.owner)}</a>
                  </NextLink>
                </div>
                <div>
                  <span>Creator: </span>
                  <NextLink href={`/users/${item.creator}`} passHref>
                    <a className={styles.highlight}>
                      {getUserId(item.creator)}
                    </a>
                  </NextLink>
                </div>
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

  const { data: tokensData } = await client.query({
    query: gql`
      query Tokens($id: ID) {
        tokens(where: { creator: $id }) {
          id
          tokenID
          contentURI
          name
          owner {
            id
          }
          creator {
            id
          }
        }
      }
    `,
    variables: { id: id.toLowerCase() },
  });

  const images = tokensData.tokens.map(({ contentURI, owner, creator }) => ({
    nft: decodeBase64(contentURI),
    owner: owner.id,
    creator: creator.id,
  }));

  return {
    props: {
      id,
      images,
    },
  };
}