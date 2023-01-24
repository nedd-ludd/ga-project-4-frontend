import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import { API } from "../../lib/api";

export default function SelectCatagory({ setCategory }) {
  const [availableCategories, setAvailableCategories] = useState([]);

  useEffect(() => {
    API.GET(API.ENDPOINTS.allCategories)
      .then(({ data }) => {
        setAvailableCategories(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="select-category"
          select
          label="Category"
          defaultValue=""
          placeholder="Category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <MenuItem value={null}>All</MenuItem>
          {availableCategories.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
