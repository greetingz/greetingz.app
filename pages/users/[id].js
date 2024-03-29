import Head from "next/head";
import NextLink from "next/link";
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
import Container from "@mui/material/Container";
import TimelineDot from "@mui/lab/TimelineDot";
import { highlight } from "../../styles/partial";

export default function About(props) {
  const getUserId = (id) => {
    const charCount = 10;
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

      <main>
        <Container sx={styles.container}>
          <Typography
            sx={highlight}
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
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    width={400}
                  />

                  <div>
                    <span>Owner: </span>
                    <NextLink href={`/users/${item.owner}`} passHref>
                      <a>{getUserId(item.owner)}</a>
                    </NextLink>
                  </div>
                  <div>
                    <span>Creator: </span>
                    <NextLink href={`/users/${item.creator}`} passHref>
                      <a>{getUserId(item.creator)}</a>
                    </NextLink>
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps(props) {
  const { id } = props.params;

  const { data: creatorTokensData } = await client.query({
    query: gql`
      query Tokens($id: ID) {
        tokens(where: { creator: $id }) {
          id
          contentURI
          name
          image
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

  const { data: ownerTokensData } = await client.query({
    query: gql`
      query Tokens($id: ID) {
        tokens(where: { owner: $id }) {
          id
          contentURI
          name
          image
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

  const images = [];
  creatorTokensData.tokens.forEach(({ contentURI, owner, creator, image }) =>
    images.push({
      nft: decodeBase64(contentURI),
      image,
      owner: owner.id,
      creator: creator.id,
    })
  );

  ownerTokensData.tokens.forEach(({ contentURI, owner, creator, image }) =>
    images.push({
      nft: decodeBase64(contentURI),
      image,
      owner: owner.id,
      creator: creator.id,
    })
  );

  return {
    props: {
      id,
      images,
    },
  };
}

const styles = {
  container: {
    padding: "4rem 0",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
