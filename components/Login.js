import { useContext, useEffect, useRef, useState } from "react";
import UserContext from "../store/UserContext";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { Magic } from "magic-sdk";

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

let magic;

function ConnectWallet() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const { setUser, connectWallet } = useContext(UserContext);
  useEffect(() => {
    magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY);
  }, []);

  const handleLogin = async () => {
    try {
      const token = await magic.auth.loginWithMagicLink({
        email,
        showUI: true,
        redirectURI: window.location.href,
      });
      console.log("token", token);
    } catch (e) {
      console.log(e);
    }
  };

  function handleSetEmail(e) {
    const value = e.target.value;
    setEmail(value);
  }
  return (
    <>
      <Button onClick={() => setOpen(true)} variant="contained" size="large">
        Log In
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            value={email}
            onInput={handleSetEmail}
          />
          <Button onClick={handleLogin} variant="contained" size="large">
            Log In
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default ConnectWallet;
