const images = [
  {
    name: "Happy birthday orbit",
    cid: "bafkreidj2dzduucyspjsce7uxpg2mynxlydobkd2jbjj6q3qgxc2zknwvq",
    tags: ["birthday"],
  },
  {
    name: "Purple Happy Birthday",
    cid: "bafkreidiixu52kgehl4bqkqyxnmverblizxzxhhnszwvmzruux7ce6pzva",
    tags: ["birthday"],
  },
  {
    name: "Orange Happy Birthday Greeting",
    cid: "bafkreidgdvn5dm7a7ehz3ot7tfdkjgxxivh6b5xl3dlozodpeswd7sky44",
    tags: ["birthday"],
  },
  {
    name: "Blue and Gold 3d Modern Happy Birthday Balloon Greeting",
    cid: "bafkreiapmv33srn3urgqladkz6od2cllcgmxz355jutwbdxm5elfk3cj3e",
    tags: ["birthday"],
  },
  {
    name: "Happy Birthday Instagram post",
    cid: "bafkreieucfroun4dtaewodk4pgfnywnafpofc4yevad2zxznnmq4iosgny",
    tags: ["birthday"],
  },
  {
    name: "Pink Happy Birthday Greeting Card",
    cid: "bafkreibenjflewb4dro3oagt73fzsogc7ial2e3y23gfojzsgms2id5qt4",
    tags: ["birthday"],
  },
  {
    name: "Black Colorful Happy Birthday Greetings",
    cid: "bafkreifx2vn3gyv4xdcnsq3hzlqajux4bjr2lqyvkyrlodkp54iainlyoq",
    tags: ["birthday"],
  },
  {
    name: "Brown Cream Simple Minimalist Happy Birthday",
    cid: "bafkreibdgzhkww4wv636ax3gnzu2pzwihvvwprsponm44brxyx3tj4hqbe",
    tags: ["birthday"],
  },
  {
    name: "Soft pink playful happy birthday greetings instagram post",
    cid: "bafybeidy34r47wkwuw6ar5vggpxzjqqcsrjvz5xp4fqr2uc4wfmk5b5lxq",
    tags: ["birthday"],
  },
  {
    name: "Happy birthday sunflower",
    cid: "bafkreicjcyu64debg4ozrw2mspv2qjgcb6fewb5eg44n2byv2quqqjs73u",
    tags: ["birthday"],
  },
  {
    name: "Happy birthday tree trunk",
    cid: "bafkreiatbn46gqt6ul5cqw2dthxe3h55wqhiqkawnjhimbah7l4sbopthy",
    tags: ["birthday"],
  },
  {
    name: "Ramadan kareem",
    cid: "bafkreifkdw4jew44afimw6rie6vqhjwsxwntuvdm3qvzochprw2xnv6hgy",
    tags: ["ramadan"],
  },
  {
    name: "ramadan mubarak",
    cid: "bafkreicwi53rocqomwuwbuzdih7g7agz2ru7vgkn6j5ajn6hgj3dxhy3cm",
    tags: ["ramadan"],
  },
  {
    name: "Babies, the Stars of our skies",
    cid: "bafkreidms4idt5cgpowcehzjr4tkvgfc7wli46hmf72q6ywnspkifiq4jm",
    tags: ["baby"],
  },
  {
    name: "Babies",
    cid: "bafybeiez6ew5fq5n7fn3hhbemjuduvjz3plkqwelttp2xio7e4jy6q2aaq",
    tags: ["baby"],
  },
  {
    name: "Captain Baby",
    cid: "bafybeienk5sk7rc2wsj657qz4fwhdk7kxd7alqpyoypvsqylgootgzixl4",
    tags: ["baby"],
  },
  {
    name: "Happy Birthday",
    cid: "bafkreieuyqtglqmymniszunfmwbnmxtwkfxm6b6y6usqcywmoxajixxv3i",
    tags: ["birthday"],
  },
  {
    name: "Birthday Cake",
    cid: "bafybeife3k3vnfpqck7gsojrr6jq7c23th2sszehownbkgqqfr3i2ctmiy",
    tags: ["birthday"],
  },
  {
    name: "Happy Birthday",
    cid: "bafybeigrnyvdjhh2ylwuyalq3oqsfujhy4zmpc6cst5rrsoyx4gv76i2ma",
    tags: ["birthday"],
  },
  {
    name: "Friends Forever",
    cid: "bafkreiarkeus3ob7hctqwiv6vmxl2so6boncbzz52keetsgtorxh4ak4eu",
    tags: ["friendship"],
  },
  {
    name: "Happy Friendship Day",
    cid: "bafybeighzmqsoh43o5vxqcpsvzhh4om6aftnzl7mcbigq7m7dgijx3ovfi",
    tags: ["friendship"],
  },
  {
    name: "I got you, my friend!",
    cid: "bafkreifozicpzwyy2d3ow65lu6ik5dofgju5uedskgjpvw4qktkga4hwm4",
    tags: ["friendship"],
  },
  {
    name: "Sisters by heart!",
    cid: "bafkreiddqh5zzbyrpryysb27msshubx2cecdsp5lmck4c5t6v5sgcjlzqi",
    tags: ["friendship"],
  },
  {
    name: "Friends dispite haircuts!",
    cid: "bafkreifjvcdgdelqiaz5yqmxxgj7flrmxof4hqq5rlg7mhdt76ker47uty",
    tags: ["friendship"],
  },
  {
    name: "Love monkey!",
    cid: "bafybeiamnq7myyavlcbvjpd3gkfwoadbhmbnp2hny3krfijajbonetihwa",
    tags: ["love"],
  },
  {
    name: "You are my missing piece!",
    cid: "bafybeidfppgmkk562v5rmvkwqjlpanwyq7hdb6pvcy3tyeepz6bbmjxtye",
    tags: ["love"],
  },
  {
    name: "Dinosaur love!",
    cid: "bafkreieqla4e3z6krhgzzbt7z34kbmxtoyljlewxmnod525bjpc6hcgnge",
    tags: ["love"],
  },
  {
    name: "I love you!",
    cid: "bafybeib5dhkabm46zm626foabkohbvkgk2inqatvcspwuwpw62dukdb7qm",
    tags: ["love"],
  },
  {
    name: "Happy Halloween Greeting",
    cid: "bafkreigomq4cz66c7fzsk3kudsc24gi3rvcycwkqil5gh6fn25jqslw6ye",
    tags: ["Halloween"],
  },
  {
    name: "Orange Spooky Skulls and Bones Card",
    cid: "bafkreiaxoyrkdzyf532ufy3dyqnu4wjrvpnqer6e47cxo66rgttgx7ei3e",
    tags: ["Halloween"],
  },
  {
    name: "Happy Thankgsgiving with turkey",
    cid: "bafkreicw7ll2efhmgg4ai7bduq6j5afnrp2p457mdqalqql7a7i2akcfbm",
    tags: ["Thanksgiving"],
  },
  {
    name: "Happy Thankgsgiving! Don't mind the viggies ;)",
    cid: "bafkreihhgkkxlh4ncijryw6ns6v5fco7hahhyeiuubbtoq4cjblgn4tyye",
    tags: ["Thanksgiving"],
  },
  {
    name: "Happy Thankgsgiving! I just wish I didn't have to share the turkey",
    cid: "bafkreiaqn2t2hwxsjker6nl7fganzefyxcxxmzzqxxwkdnwoav4zciwx4q",
    tags: ["Thanksgiving"],
  },
].map((img) => ({
  ...img,
  url: `https://${img.cid}.ipfs.${process.env.NEXT_PUBLIC_IPFS_GATEWAY}`,
}));

export default images;
