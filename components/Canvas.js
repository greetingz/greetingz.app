import Box from "@mui/material/Box";

const Canvas = ({ image }) => {
  return (
    <Box sx={{ p: 2, border: '1px dashed grey', minWidth: '500px' }}>
      <img src={image.url} alt={image.name} loading="lazy" />
    </Box>
  );
};

export default Canvas;
