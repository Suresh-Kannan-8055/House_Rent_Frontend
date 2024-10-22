import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ placeholder = "Search", fullWidth = true }) => {
  return (
    <TextField
      sx={{
        "& .MuiInputBase-root": {
          backgroundColor: "#5d5d5d",
          color: "white",height:"34px",
        },
      }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{ color: "#a1a1a1" }} />
            </InputAdornment>
          ),
        },
      }}
      fullWidth={fullWidth}
      placeholder="Search"
      size="small"
    />
  );
};

export default SearchBar;
