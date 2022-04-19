import Grid from "@mui/material/Grid";

const Gallery = ({ images, onClick }) => {
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      {images.map((img) => (
        <Grid item key={img.name} xs={2}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.url}
            alt={img.name}
            loading="lazy"
            onClick={() => onClick(img)}
            style={{ cursor: "pointer" }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Gallery;
