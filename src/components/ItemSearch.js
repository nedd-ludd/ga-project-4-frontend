import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SelectCatagory from "./common/SelectField.js";
import "../styles/itemSearch.scss";

export default function ItemSearchBar() {
  return (
    <div className="search-bar">
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField fullWidth label="Search items" id="fullWidth" />
      </Box>
      <SelectCatagory></SelectCatagory>
      <Button>Search</Button>
    </div>
  );
}
