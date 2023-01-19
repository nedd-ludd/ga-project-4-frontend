import { useEffect, useState } from "react";
import { API } from "../lib/api";
import { Container, Grid, Box } from "@mui/material";
import ItemCard from "./common/ItemCard";
import ItemSearchBar from "./ItemSearch";

import "../styles/index.scss";

export default function OurItems() {
  const [items, setItems] = useState(null);

  // can add second use effect for categories
  // can add third or change this for search capability
  // useEffect(() => {
  //   API.GET(API.ENDPOINTS.allItems)
  //     .then(({ data }) => {
  //       setItems(data);
  //       console.log(data);
  //     })
  //     .catch(({ message, response }) => {
  //       console.error(message, response);
  //     });
  // }, []);

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

  return (
    <div className="index">
      <ItemSearchBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          {items?.map((item) => (
            <Grid item xs={12} key={item.id}>
              <ItemCard
                name={item.name}
                image={item.image}
                description={item.description}
                // type={item.type}
                id={item.id}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
