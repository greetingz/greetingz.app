import Button from '@mui/material/Button';

function ConnectWallet({ setCurrentAccount }) {
  const handleWalletConnect = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask! https://metamask.io/");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Button onClick={handleWalletConnect} variant="contained" size="large">
      Connect to Wallet
    </Button>
  );
}

export default ConnectWallet;
