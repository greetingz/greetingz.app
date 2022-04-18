import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Filter = ({ activeFilters, filters, onClick }) => {
  return (
    <Stack direction="row" spacing={1}>
      {filters.map((filter) => (
        <Chip
          key={filter}
          label={filter}
          variant={activeFilters.includes(filter) ? "" : "outlined"}
          onClick={() => onClick(filter)}
        />
      ))}
    </Stack>
  );
};

export default Filter;