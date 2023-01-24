import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SelectCatagory from "./common/SelectField.js";
import "../styles/itemSearch.scss";

export default function ItemSearchBar({
  setCategory,
  handleSearch,
  searchText,
  setSearchText,
}) {
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="search-bar">
      <SelectCatagory setCategory={setCategory}></SelectCatagory>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          size="large"
          type="text"
          value={searchText}
          onChange={handleChange}
          label="Search items"
        />
      </Box>
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
}
