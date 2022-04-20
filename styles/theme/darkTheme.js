import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#a777e3",
        },
        contained: {
          background: "linear-gradient(45deg, #a777e3 30%, #6e8efb 90%)",
          color: "white",
        },
      },
    },
  },
});

export default darkTheme;
