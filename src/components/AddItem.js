import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  TextField,
  Container,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { API } from "../lib/api";
import { NOTIFY } from "../lib/notifications";

export default function ListItems() {
  const { id } = useParams();

  const formBaseData = {
    name: "",
    description: "",
    image: "",
    categories: [],
    available: true,
  };
  const [formData, setFormData] = useState(formBaseData);
  const [error, setError] = useState(false);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();
  const [buttons, setButtons] = useState({
    button1: "CLEAR FORM",
    button2: "ADD MY ITEM",
  });

  useEffect(() => {
    API.GET(API.ENDPOINTS.allCategories)
      .then(({ data }) => {
        setAvailableCategories(data);
      })
      .catch((e) => console.log(e));
  }, []);

  //is if edit mode
  useEffect(() => {
    if (id) {
      setButtons({ button1: "CANCEL EDIT", button2: "SAVE CHANGES" });
      setEditMode(true);
      API.GET(API.ENDPOINTS.singleItem(id))
        .then(({ data }) => {
          const editData = {
            id: parseInt(id),
            name: data.name,
            description: data.description,
            image: data.image,
            categories: [data.categories[0].id],
            available: data.available,
          };
          setFormData(editData);
        })
        .catch(({ message, response }) => {
          console.error(message, response);
        });
    }
  }, []);

  const resetForm = () => {
    setFormData(formBaseData);
  };

  const handleChange = (e) => {
    if (e.target.name === "categories") {
      const cats = [];
      cats.push(e.target.value);
      setFormData({ ...formData, [e.target.name]: cats });
    } else if ((e.target.name = "available")) {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editMode) {
      API.POST(API.ENDPOINTS.allItems, formData, API.getHeaders())
        .then(({ data }) => {
          NOTIFY.SUCCESS(`Added ${data.name}`);
          navigate(`/items`);
        })
        .catch((e) => {
          if (e.status === 301) {
            setError(true);
          }
          console.log(e);
        });
    } else {
      console.log(formData);
      API.PUT(API.ENDPOINTS.singleItem(id), formData, API.getHeaders())
        .then(({ data }) => {
          NOTIFY.SUCCESS(`Saved ${data.name}`);
          navigate(`/items/${data.id}`);
        })
        .catch((e) => {
          if (e.status === 301) {
            setError(true);
          }
          console.log(e);
        });
    }
  };
  return (
    <Container sx={{ display: "flex", justifyContent: "center", pt: 5 }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 2, width: 300 }}>
          <FormControl fullWidth>
            <TextField
              size="small"
              type="text"
              value={formData.name}
              onChange={handleChange}
              error={error}
              label="Name"
              name="name"
            />
          </FormControl>
        </Box>
        <Box sx={{ mb: 2 }}>
          <FormControl fullWidth>
            <TextField
              size="large"
              type="text"
              value={formData.description}
              onChange={handleChange}
              error={error}
              multiline
              label="Description"
              name="description"
            />
          </FormControl>
        </Box>
        <Box sx={{ mb: 2 }}>
          <FormControl fullWidth>
            <TextField
              size="small"
              type="text"
              value={formData.image}
              onChange={handleChange}
              error={error}
              label="Image"
              name="image"
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl fullWidth>
            <InputLabel id="categories">Category</InputLabel>
            <Select
              size="small"
              labelId="categories"
              value={formData.categories}
              label="Category"
              name="categories"
              onChange={handleChange}
            >
              <MenuItem value=""></MenuItem>
              {availableCategories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box>
          <FormControlLabel
            disabled={!editMode}
            control={<Checkbox defaultChecked />}
            label="Available"
            value={formData.available}
            name="available"
            onChange={handleChange}
          />
        </Box>

        <Button onClick={resetForm} style={{ color: "red" }}>
          {buttons.button1}
        </Button>
        <Button type="submit">{buttons.button2}</Button>
      </form>
    </Container>
  );
}
