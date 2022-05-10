import { ethers } from "ethers";
import Button from "@mui/material/Button";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
  binancechainwallet: {
    package: true,
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        1: "https://mainnet.infura.io/v3/", // Ethereum Mainnet
        4: "https://rinkeby.infura.io/v3/", // Rinkeby Test Network
        137: "https://polygon-rpc.com/", // Polygon
      },
      qrcodeModalOptions: {
        mobileLinks: [
          "metamask",
          "rainbow",
          "argent",
          "trust",
          "imtoken",
          "pillar",
        ],
      },
      // bridge: 'https://bridge.walletconnect.org',
    },
  },
};

function ConnectWallet({ setCurrentAccount }) {
  const handleWalletConnect = async () => {
    try {
      const web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions, // required
      });

      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      window.signer = signer;

      const account = await signer.getAddress();
      setCurrentAccount(account);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button onClick={handleWalletConnect} variant="contained" size="large">
      Connect Wallet
    </Button>
  );
}

export default ConnectWallet;
