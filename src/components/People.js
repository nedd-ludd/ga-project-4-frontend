import { useEffect, useState } from "react";
import { API } from "../lib/api";
import { Grid, Box } from "@mui/material";
import ItemCard from "./common/ItemCard";

// import "../styles/people.scss";

export default function OurItems() {
  const indexType = "people";
  const [people, setPeople] = useState(null);

  useEffect(() => {
    API.GET(API.ENDPOINTS.allPeople)
      .then(({ data }) => {
        setPeople(data);
        console.log(data);
      })
      .catch(({ message, response }) => {
        console.error(message, response);
      });
  }, []);

  return (
    <div className="index">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          {people?.length ? <></> : <h6>loading Users...</h6>}
          {people?.map((user) => (
            <Grid item xs={12} key={user.id}>
              <ItemCard
                name={user.username}
                x
                image={
                  user.profile_image.includes("http")
                    ? user.profile_image
                    : "https://i.imgur.com/CzmAXlp.jpg"
                }
                indexType={indexType}
                id={user.id}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
