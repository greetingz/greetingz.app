import { ethers } from "ethers";
import { useState } from "react";

import giftNFT from "../assets/contracts/GiftNFT.json";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

const mode = "dev";
const contracts = {
  production: "0x0f4aCe25b692d452dd5D089BeF4FD6f579370648",
  dev: "0x43669CDC544a73482639e6aA950b11BcF621d049",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CONTRACT_ADDRESS = contracts[mode];
const WEBSITE = "nft.9k.ninja";

function MintNFT({ currentImg }) {
  const [address, setAddress] = useState("");
  const [loadingModalStatus, setLoadingModalStatus] = useState(false);
  const [infoModalStatus, setInfoModalStatus] = useState(false);
  const [network, setNetwork] = useState("");

  const [tokenId, setTokenId] = useState(0);

  async function mintNFT(address, url, title) {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          giftNFT.abi,
          signer
        );

        console.log("Going to pop wallet now to pay gas...");
        let nftTxn = await connectedContract.makeGiftNFT(address, url, title);

        console.log("Mining...please wait.");
        setLoadingModalStatus(true);
        await nftTxn.wait();

        console.log("Finish");
        setLoadingModalStatus(false);

        connectedContract.on("NewGiftNFTMinted", (from, tokenId) => {
          setLoadingModalStatus(false);
          setTokenId(tokenId.toNumber());
          setInfoModalStatus(true);
        });

        console.log(
          `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
        );
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      setLoadingModalStatus(false);
      console.log(error);
    }
  }

  function handleSetInputAddress(e) {
    const value = e.target.value;
    setAddress(value);
  }

  const handleNetworkChange = (event) => {
    setNetwork(event.target.value);
  };

  function handleButtonClick() {
    mintNFT(address, currentImg.url, currentImg.name);
  }

  function getNftURL() {
    const isDev = mode === "dev";
    return `https://${isDev ? "testnets." : ""}opensea.io/assets/${
      !isDev ? "matic/" : ""
    }${CONTRACT_ADDRESS}/${tokenId}`;
  }

  return (
    <>
      <Box sx={{ minWidth: 500 }}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 500,
          }}
        >
          <FormControl
            sx={{ flex: 1 }}
          >
            <InputLabel id="network-select-label">Network</InputLabel>
            <Select
              labelId="network-select-label"
              id="network-select"
              value={network}
              label="Network"
              onChange={handleNetworkChange}
            >
              <MenuItem value="">Network</MenuItem>
              <MenuItem value="polygon">Polygon</MenuItem>
              <MenuItem value="cardano" disabled>
                Cardano (coming soon)
              </MenuItem>
              <MenuItem value="ethereum" disabled>
                Ethereum (coming soon)
              </MenuItem>
            </Select>
          </FormControl>

          <InputBase
            sx={{ ml: 1, flex: 2 }}
            value={address}
            onInput={handleSetInputAddress}
            placeholder="Receiver Address"
          />
          <Button onClick={handleButtonClick}>
            <ion-icon name="planet"></ion-icon>
            Gift Card Now
          </Button>
        </Paper>
      </Box>

      <Modal
        id="loadingModal"
        open={loadingModalStatus}
        onClose={() => setLoadingModalStatus(false)}
      >
        <Box sx={style}>Minting...please wait.</Box>
      </Modal>
      <Modal
        id="infoModal"
        open={infoModalStatus}
        onClose={() => setInfoModalStatus(false)}
      >
        <Box sx={style}>
          <p>
            Hey there! We've minted your NFT. It may be blank right now. It can
            take a max of 10 min to show up on OpenSea.
          </p>
          <div className="modal-row">
            <a
              className="button"
              style={{ margin: "auto" }}
              href={getNftURL()}
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="image"></ion-icon>
              Check your NFT
            </a>

            <a
              className="button"
              target="_blank"
              href={`
            http://twitter.com/share?text=I've created this awesome NFT gift using: ${WEBSITE} &url=${getNftURL()}&hashtags=nfts,polygon,gifts
            `}
              rel="noreferrer"
            >
              <ion-icon name="logo-twitter"></ion-icon> Share on Twitter
            </a>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default MintNFT;
