import React, { useContext, useEffect, useRef, useState } from "react";
import UserContext from "../store/UserContext";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ConnectExtension } from "@magic-ext/connect";
import { ethers } from "ethers";
import NextLink from "next/link";

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

function ConnectWallet({ user }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { setUser } = useContext(UserContext);

  React.useEffect(() => {
    const customNodeOptions = {
      rpcUrl: "https://polygon-rpc.com/",
      chainId: 137,
    };

    magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY, {
      extensions: [new ConnectExtension()],
      network: customNodeOptions,
    });
  }, []);

  const handleProfile = async () => {
    try {
      handleClose();
      await magic.connect.showWallet();
    } catch (e) {
      console.error(e);
    }
  };
  const handleLogout = async () => {
    try {
      handleClose();
      magic.connect.disconnect();
      setUser(null);
    } catch (e) {
      console.error(e);
    }
  };
  const handleLogin = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(magic.rpcProvider);
      const signer = provider.getSigner();
      window.signer = signer;
      const account = await signer.getAddress();
      setUser(account);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {user ? (
        <>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            size="large"
            onClick={handleClick}
          >
            User
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleProfile}>My account</MenuItem>
            <NextLink href={`/users/${user}`} passHref>
              <MenuItem onClick={handleClose}>Timeline</MenuItem>
            </NextLink>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </>
      ) : (
        <Button onClick={handleLogin} variant="contained" size="large">
          Log In
        </Button>
      )}
    </>
  );
}

export default ConnectWallet;
