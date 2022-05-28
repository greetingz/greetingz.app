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
  {
    name: "Babies",
    cid: "bafybeiez6ew5fq5n7fn3hhbemjuduvjz3plkqwelttp2xio7e4jy6q2aaq",
    tags: ["Baby"],
  },
  {
    name: "Captain Baby",
    cid: "bafybeienk5sk7rc2wsj657qz4fwhdk7kxd7alqpyoypvsqylgootgzixl4",
    tags: ["Baby"],
  },
  {
    name: "Happy Birthday",
    cid: "bafkreieuyqtglqmymniszunfmwbnmxtwkfxm6b6y6usqcywmoxajixxv3i",
    tags: ["Birthday"],
  },
  {
    name: "Birthday Cake",
    cid: "bafybeife3k3vnfpqck7gsojrr6jq7c23th2sszehownbkgqqfr3i2ctmiy",
    tags: ["Birthday"],
  },
  {
    name: "Happy Birthday",
    cid: "bafybeigrnyvdjhh2ylwuyalq3oqsfujhy4zmpc6cst5rrsoyx4gv76i2ma",
    tags: ["Birthday"],
  },
  {
    name: "Friends Forever",
    cid: "bafkreiarkeus3ob7hctqwiv6vmxl2so6boncbzz52keetsgtorxh4ak4eu",
    tags: ["Friendship"],
  },
  {
    name: "Happy Friendship Day",
    cid: "bafybeighzmqsoh43o5vxqcpsvzhh4om6aftnzl7mcbigq7m7dgijx3ovfi",
    tags: ["Friendship"],
  },
  {
    name: "I got you, my friend!",
    cid: "bafkreifozicpzwyy2d3ow65lu6ik5dofgju5uedskgjpvw4qktkga4hwm4",
    tags: ["Friendship"],
  },
  {
    name: "Sisters by heart!",
    cid: "bafkreiddqh5zzbyrpryysb27msshubx2cecdsp5lmck4c5t6v5sgcjlzqi",
    tags: ["Friendship"],
  },
  {
    name: "Friends dispite haircuts!",
    cid: "bafkreifjvcdgdelqiaz5yqmxxgj7flrmxof4hqq5rlg7mhdt76ker47uty",
    tags: ["Friendship"],
  },
  {
    name: "Love monkey!",
    cid: "bafybeiamnq7myyavlcbvjpd3gkfwoadbhmbnp2hny3krfijajbonetihwa",
    tags: ["Love"],
  },
  {
    name: "You are my missing piece!",
    cid: "bafybeidfppgmkk562v5rmvkwqjlpanwyq7hdb6pvcy3tyeepz6bbmjxtye",
    tags: ["Love"],
  },
  {
    name: "Dinosaur love!",
    cid: "bafkreieqla4e3z6krhgzzbt7z34kbmxtoyljlewxmnod525bjpc6hcgnge",
    tags: ["Love"],
  },
  {
    name: "I love you!",
    cid: "bafybeib5dhkabm46zm626foabkohbvkgk2inqatvcspwuwpw62dukdb7qm",
    tags: ["Love"],
  },
].map((img) => ({
  ...img,
  url: `https://${img.cid}.ipfs.${process.env.NEXT_PUBLIC_IPFS_GATEWAY}`,
}));

export default images;
