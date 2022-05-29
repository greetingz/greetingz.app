import Box from "@mui/material/Box";

const Canvas = ({ image }) => {
  return (
    <Box
      sx={{
        p: 2,
        border: "1px dashed grey",
        minWidth: "500px",
        maxWidth: "500px",
        minHeight: "500px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={image.url}
        alt={image.name}
        loading="lazy"
        style={{ width: "100%" }}
      />
    </Box>
  );
};

export default Canvas;
