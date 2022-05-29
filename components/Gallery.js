import Grid from "@mui/material/Grid";

const Gallery = ({ images, onClick }) => {
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      {images.map((img) => (
        <Grid item key={img.cid} xs={2}>
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
  );
};

export default Gallery;
