import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const styles = {
  gallery: {
    height: "calc(100vh - 200px)",
    overflowY: "scroll",
  },
  image: {
    cursor: "pointer",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

const Gallery = ({ images, onClick }) => {
  return (
    <Box sx={styles.gallery}>
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {images.map((img) => (
          <Grid item key={img.cid} xs={6}>
            <img
              style={styles.image}
              src={img.url}
              alt={img.name}
              loading="lazy"
              onClick={() => onClick(img)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;
