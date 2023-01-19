import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const options = [
  { value: "All", label: "All" },
  { value: "Home", label: "Home" },
  { value: "Clothes", label: "Clothes" },
  { value: "Electronics", label: "Electronics" },
  { value: "Sports", label: "Sports" },
  { value: "Hobbies", label: "Hobbies" },
  { value: "Entertainment", label: "Entertainment" },
  { value: "Leisure", label: "Leisure" },
  { value: "Games", label: "Games" },
  { value: "Business", label: "Business" },
  { value: "Office", label: "Office" },
  { value: "Transport", label: "Transport" },
  { value: "Garden", label: "Garden" },
  { value: "Tools", label: "Tools" },
  { value: "Gym", label: "Gym" },
  { value: "Beauty", label: "Beauty" },
  { value: "Music", label: "Music" },
  { value: "Media", label: "Media" },
  { value: "Misc", label: "Misc" },
];

export default function SelectCatagory() {
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
          // label="Select"
          defaultValue="EUR"
          placeholder="Category"
          // helperText="Please select your currency"
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
