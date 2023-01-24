import { useEffect, useState } from "react";
import { API } from "../lib/api";
import { Container, Grid, Box } from "@mui/material";
import ItemCard from "./common/ItemCard";
import ItemSearchBar from "./ItemSearch";

import "../styles/index.scss";

export default function OurItems() {
  const [category, setCategory] = useState(null);
  const [items, setItems] = useState(null);
  const [searchText, setSearchText] = useState(null);

  useEffect(() => {
    API.GET(API.ENDPOINTS.allItems)
      .then(({ data }) => {
        setItems(data);
        console.log(data);
      })
      .catch(({ message, response }) => {
        console.error(message, response);
      });
  }, []);

  const handleSearch = () => {
    API.GET(API.ENDPOINTS.itemSearch(searchText))
      .then(({ data }) => {
        setItems(data);
        console.log(data.length);
      })
      .catch(({ message, response }) => {
        console.error(message, response);
      });
  };

  const filteredItems = () => {
    return items.filter((item) => item.categories[0] === category);
  };

  return (
    <div className="index">
      <ItemSearchBar
        setCategory={setCategory}
        setSearchText={setSearchText}
        searchText={searchText}
        handleSearch={handleSearch}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          {items?.length ? (
            <h1></h1>
          ) : (
            <h1>Sorry, we couldnt find any items for you.</h1>
          )}
          {!category
            ? items?.map((item) => (
                <Grid item xs={12} key={item.id}>
                  <ItemCard
                    name={item.name}
                    image={item.image}
                    description={item.description}
                    id={item.id}
                    available={item.available}
                  />
                </Grid>
              ))
            : filteredItems(items).map((item) => (
                <Grid item xs={12} key={item.id}>
                  <ItemCard
                    name={item.name}
                    image={item.image}
                    description={item.description}
                    id={item.id}
                    available={item.available}
                  />
                </Grid>
              ))}
        </Grid>
      </Box>
    </div>
  );
}
