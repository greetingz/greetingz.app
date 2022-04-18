import Grid from "@mui/material/Grid";

const Gallery = (props) => {
  const itemData = props.images;
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      {itemData.map((item) => (
        <Grid item key={item.name} xs={2}>
          <img src={item.url} alt={item.name} loading="lazy" />
        </Grid>
      ))}
    </Grid>
  );
};

export default Gallery;
