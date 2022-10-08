import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { css } from "@emotion/react";

const galleryStyle = css({
  height: "calc(100vh - 200px)",
  overflowY: "scroll",
});

const Gallery = ({ images, onClick }) => {
  return (
    <Box sx={galleryStyle}>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {images.map((img) => (
          <Grid item key={img.cid} xs={6}>
            <img
              src={img.url}
              alt={img.name}
              loading="lazy"
              onClick={() => onClick(img)}
              style={{ cursor: "pointer", width: "100%" }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;
