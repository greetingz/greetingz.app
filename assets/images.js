const images = [
  {
    name: "happy birthday orbit",
    cid: "bafkreidj2dzduucyspjsce7uxpg2mynxlydobkd2jbjj6q3qgxc2zknwvq",
    tags: [Birthday"],
  },
  {
    name: "happy birthday sunflower",
    cid: "bafkreicjcyu64debg4ozrw2mspv2qjgcb6fewb5eg44n2byv2quqqjs73u",
    tags: ["Birthday"],
  },
  {
    name: "happy birthday tree trunk",
    cid: "bafkreiatbn46gqt6ul5cqw2dthxe3h55wqhiqkawnjhimbah7l4sbopthy",
    tags: ["Birthday"],
  },
  {
    name: "ramadan kareem",
    cid: "bafkreifkdw4jew44afimw6rie6vqhjwsxwntuvdm3qvzochprw2xnv6hgy",
    tags: ["Ramadan"],
  },
  {
    name: "ramadan mubarak",
    cid: "bafkreicwi53rocqomwuwbuzdih7g7agz2ru7vgkn6j5ajn6hgj3dxhy3cm",
    tags: ["Ramadan"],
  },
  {
    name: "Babies, the Stars of our skies",
    cid: "bafkreidms4idt5cgpowcehzjr4tkvgfc7wli46hmf72q6ywnspkifiq4jm",
    tags: ["Baby"],
  },
].map((img) => ({
  ...img,
  url: `https://${img.cid}.ipfs.${process.env.NEXT_PUBLIC_IPFS_GATEWAY}`,
}));

export default images;
